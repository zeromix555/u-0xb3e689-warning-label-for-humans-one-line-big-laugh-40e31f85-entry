// Warning Label for Humans: One Line, Big Laugh — make.fun entry.
// Writes one single-line safety warning label to /output/entry.txt:
// real label phrasing applied to a universal human flaw, with the laugh
// landing in the last few words.
import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "WARNING: This human will read the instructions, ignore the instructions, " +
  "and blame the instructions — in that order.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
