import fs from "fs";
import path from "path";
import type { PageLoad, EntryGenerator } from "./$types";
import type {
  CorePage,
  markdown_page as MarkdownPage,
  portfolio_page as PortPage,
} from "$lib/block.types";
import { error } from "@sveltejs/kit";
const dataDir = path.resolve("public/routes");
export const prerender = true;

export const load: PageLoad = ({ params }) => {
  const files = readDirectoryRecursive(dataDir);

  // This reads every JSON file on every request - inefficient
  const matchedFile = files.find((file) => {
    if (file.endsWith(".json")) {
      const raw = fs.readFileSync(file, "utf-8");
      const pageData: { url: string } = JSON.parse(raw);
      if (pageData.url.charAt(0) === "/") {
        return pageData.url === params.slug.substring(1);
      } else {
        return pageData.url === params.slug;
      }
    }
    return false;
  });

  if (!matchedFile) {
    console.log(params, matchedFile);
    throw error(404, "Page not found");
  }

  // Redundant file read - you already read it above
  console.log(matchedFile);
  const raw = fs.readFileSync(matchedFile, "utf-8");
  const pageData: CorePage | MarkdownPage | PortPage = JSON.parse(raw);

  let md: string | null = null;
  if (pageData.__typename === "markdown_page" && pageData.fileName) {
    try {
      md = fs.readFileSync(pageData.fileName, "utf-8");
    } catch (error) {
      console.error(`Error reading markdown file:`, error);
    }
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
