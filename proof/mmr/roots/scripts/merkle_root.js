import fs from "fs";
import crypto from "crypto";

function h(a, b) {
  const buf = Buffer.concat([
    Buffer.from(a.slice(2), "hex"),
    Buffer.from(b.slice(2), "hex"),
  ]);
  return "0x" + crypto.createHash("sha256").update(buf).digest("hex");
}

function merkleRoot(leaves) {
  if (leaves.length === 0) return "0x" + "00".repeat(32);
  let layer = leaves.slice();
  while (layer.length > 1) {
    const next = [];
    for (let i = 0; i < layer.length; i += 2) {
      const left = layer[i];
      const right = layer[i + 1] ?? layer[i];
      next.push(h(left, right));
    }
    layer = next;
  }
  return layer[0];
}

const raw = fs.readFileSync("proof/mmr/leaves.jsonl", "utf8").trim();
const lines = raw ? raw.split("\n").filter(Boolean) : [];
const leaves = lines.map((l) => JSON.parse(l).leaf);

const root = merkleRoot(leaves);

const out = {
  date_utc: new Date().toISOString().slice(0, 10),
  spec: "SPEC-TRANSITCLOUD-MMR-V1",
  leaf_count: leaves.length,
  root,
  updated_utc: new Date().toISOString(),
};

fs.mkdirSync("proof/mmr/roots", { recursive: true });
const fp = `proof/mmr/roots/${out.date_utc}.root.json`;
fs.writeFileSync(fp, JSON.stringify(out, null, 2));

console.log("Root:", root);
console.log("Wrote:", fp);
