import { mkdirSync, writeFileSync } from "node:fs";

// One joke, one line, no trailing newline — the gate counts 1–280 chars.
const OUT = "/output/entry.txt";
const JOKE =
  "I asked my AI assistant to organise my life — it filed me under 'pending', outsourced my weekends to a cheaper version of me, and now charges me a monthly subscription to be myself.";

mkdirSync("/output", { recursive: true });
writeFileSync(OUT, JOKE, "utf8");
