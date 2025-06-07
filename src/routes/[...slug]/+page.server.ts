import fs from "fs";
import path from "path";
import type { PageLoad, EntryGenerator } from "./$types";
import type { CorePage, markdown_page as MarkdownPage } from "$lib/block.types";
const dataDir = path.resolve("public/routes");
export const prerender = true;

export const load: PageLoad = ({ params }) => {
  const files = readDirectoryRecursive(dataDir);
  const matchedFile = files.find(
    (file) =>
      file.endsWith(".json") && file.replace(".json", "") === params.slug,
  );
  if (!matchedFile) {
    throw new Error(`No page found for slug: ${params.slug}`);
  }
  const filePath = path.join(dataDir, matchedFile);
  const raw = fs.readFileSync(filePath, "utf-8");
  const pageData: CorePage | MarkdownPage = JSON.parse(raw);
  var md: string | null = null;
  if (
    pageData.__typename === "markdown_page" &&
    typeof pageData.fileName === "string"
  ) {
    const filePath = path.join(pageData.fileName);
    const raw = fs.readFileSync(filePath, "utf-8");
    md = raw;
    console.log(filePath);
  }
  return {
    pageData,
    markdownData: md,
  };
};

export const entries: EntryGenerator = () => {
  const files = readDirectoryRecursive(dataDir);
  const jsonFiles = files.filter((file) => file.endsWith(".json"));
  const urls = jsonFiles.map((file) => {
    const raw = fs.readFileSync(file, "utf-8");
    const data = JSON.parse(raw);
    const cleanSlug = data.url.replace(/^\/+|\/+$/g, "");
    return { slug: cleanSlug };
  });
  console.log(urls);
  return urls;
};

function readDirectoryRecursive(dir: string): string[] {
  let results: string[] = [];

  const list = fs.readdirSync(dir);

  for (const file of list) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat && stat.isDirectory()) {
      // Recurse into subdirectory
      results = results.concat(readDirectoryRecursive(fullPath));
    } else {
      // Add file
      results.push(fullPath);
    }
  }

  return results;
}
