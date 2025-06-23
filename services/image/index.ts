import "dotenv/config";
import { drizzle } from "drizzle-orm/libsql";
import Bun, { hash, serve } from "bun";
import * as schema from "./db/schema";
import { v4 as uuidv4 } from "uuid";
import * as exifr from "exifr";
import { readdir, stat } from "node:fs/promises";
import { createClient } from "@libsql/client";
import path from "node:path";
const client = createClient({
  url: "file:../../db.lite",
});
export const db = drizzle(client, { schema });
async function main() {
  let k = await readDirectoryRecursive("../../public/assets/src");
  let v = k.filter((e) => {
    return !e.includes(".DS_Store");
  });
  getAllImages(v);
}
main();
async function getAllImages(fileNames: string[]) {
  fileNames.forEach(async (e) => {
    if (!(await checkIfImageExists(e))) {
      let file = Bun.file(e);
      const blob = await file.bytes();
      const buffer = Buffer.from(blob);
      let imageid = genUUID();
      await db.insert(schema.images).values({
        id: imageid,
        fileData: buffer,
        hash: hashFile(buffer),
      });

      const tags: { [key: string]: any } = await exifr.parse(buffer);
      let metadataId = genUUID();
      await db.insert(schema.metadata).values({
        id: metadataId,
        linkedImage: imageid,
        alt: "null",
        copyrightHolderId: "null",
        dateTimeOriginal: new Date(tags.DateTimeOriginal).getTime(),
        dateTimeDigitized: new Date(tags.DateTimeOriginal).getTime(),
        other: JSON.stringify(tags),
      });
    }
  });
}

async function checkIfImageExists(fileName: string) {
  const file = Bun.file(fileName);
  let blob = await file.bytes();
  const buffer = Buffer.from(blob);
  let fileHash = hashFile(buffer);
  const exists = await db.query.images.findFirst({
    columns: { id: true }, // fetch only the minimal column
    where: (images, { eq }) => eq(images.hash, fileHash),
  });
  console.log(exists);
  if (exists) {
    return true;
  } else {
    return false;
  }
}

function hashFile(blob: Buffer<ArrayBuffer>) {
  const hasher = new Bun.CryptoHasher("sha256");
  hasher.update(blob);
  return hasher.digest().toString();
}

function checkMatch(hash: string, blob: any) {
  let newHash = hashFile(blob);
  return newHash == hash;
}

function genUUID() {
  return uuidv4();
}

async function readDirectoryRecursive(dir: string): Promise<string[]> {
  let results: string[] = [];

  const list = await readdir(dir);

  for (const file of list) {
    const fullPath = path.join(dir, file);
    const st = await stat(fullPath);

    if (st && st.isDirectory()) {
      // Recurse into subdirectory
      results = results.concat(await readDirectoryRecursive(fullPath));
    } else {
      // Add file
      results.push(fullPath);
    }
  }

  return results;
}

let TAGS_TO_REMOVE = [
  "Make",
  "Model",
  "Software",
  "LensInfo",
  "LensModel",
  "FocalLengthIn35mmFormat",
  "WhiteBalance",
  "ExposureMode",
  "ShutterSpeedValue",
  "ApertureValue",
  "ExposureProgram",
];

let TAGS_TO_ADD = [];
