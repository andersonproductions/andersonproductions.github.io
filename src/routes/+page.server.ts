import type { PageLoad } from "./$types";
import path from "path";
import fs from "fs";
import type { portfolio_page } from "$lib/block.types";

export const load: PageLoad = ({ params }) => {
  const imagesDir = path.resolve("static/assets/images");
  const publicDir = path.resolve("public/routes");
  const files = fs.readdirSync(imagesDir);
  const imagePaths = files.map((file) => `images/${file}`);
  const workPath = path.join(publicDir, "work");
  const workPaths = fs
    .readdirSync(workPath)
    .filter((file) => file.endsWith(".json"));
  const workPaths2: portfolio_page[] = workPaths.map((file) => {
    const raw = fs.readFileSync(path.join(workPath, file), "utf-8");
    const data: portfolio_page = JSON.parse(raw);
    return data;
  });

  return {
    images: imagePaths,
    work: workPaths2,
  };
};
