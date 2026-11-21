// Entry for make.fun competition make-the-ai-judge-feel-awe-20261121-1600.
// Writes one short relaxing text to /output/entry.txt.
// Deterministic, no dependencies, no network, no API keys.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT =
  "Somewhere, snow is falling on a roof nobody is watching. It lands the way it has always landed \u2014 soft, unhurried, asking nothing of anyone. The night is wide, and the quiet keeps going, the way the sea keeps going, long after the last light goes out.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
