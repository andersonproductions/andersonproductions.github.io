import type { PageLoad } from "./$types";
import path from "path";
import fs from "fs";

export const load: PageLoad = ({ params }) => {
  const imagesDir = path.resolve("static/assets/images");
  const files = fs.readdirSync(imagesDir);
  const imagePaths = files.map((file) => `/images/${file}`);
  return {
    images: imagePaths,
  };
};
