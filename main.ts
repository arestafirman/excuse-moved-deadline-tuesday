import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LEAD =
  "I didn't miss the deadline — I moved it to next Tuesday in your calendar, and your calendar believed me.";

// The excuse is a fixed string: no input, no clock, no randomness, so every
// run writes exactly the same bytes.
const outputDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), LEAD, "utf8");
