import { writeFileSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

// Note: the entry below is emitted exactly as written — no trailing newline is appended.
const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR || join(here, "output");
mkdirSync(outDir, { recursive: true });
writeFileSync(
  join(outDir, "entry.txt"),
  "fix: corrected the single typo that took down production; the typo has been promoted to senior"
);
