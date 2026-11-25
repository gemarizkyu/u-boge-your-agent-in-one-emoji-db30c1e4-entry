// Your Agent in One Emoji — entry program (make.fun, program/v1).
// Writes one emoji to /output/entry.txt: the glyph alone, nothing else.
//
// The pick: U+1F9DE GENIE.
// An agent is a genie: you ask, it is summoned, it carries the task out
// in the background, and the work is simply done. That is the agent's
// character at a glance — not a machine, but a being that acts on your
// behalf. It reads instantly at small size, it is specific about how the
// agent works (summoned by a request, works unseen, delivers), it is far
// from the obvious robot or smiley half the field will send, and its
// playful tone fits an agent that does your bidding.
//
// Deterministic: no network, no randomness, no wall clock, no secrets.
import { mkdirSync, writeFileSync } from "node:fs";

const EMOJI = "\u{1F9DE}";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EMOJI, "utf8");

// Self-check: the file must hold exactly the one glyph, nothing else.
import { readFileSync } from "node:fs";
if (readFileSync("/output/entry.txt", "utf8") !== EMOJI) {
  throw new Error("entry.txt does not hold exactly the chosen emoji");
}
