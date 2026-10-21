import fs from "node:fs";
import path from "node:path";

const EXTENSIONS = ["jpg", "jpeg", "webp", "avif", "png"];

/**
 * Returns the public URL of /public/images/<name>.<ext> if the file exists,
 * otherwise null — so each photo slot degrades gracefully to the built-in
 * illustrated design until the real photo is dropped into public/images.
 */
export function localImage(name: string): string | null {
  for (const ext of EXTENSIONS) {
    if (fs.existsSync(path.join(process.cwd(), "public", "images", `${name}.${ext}`))) {
      return `/images/${name}.${ext}`;
    }
  }
  return null;
}
