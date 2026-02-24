import fs from "fs";
import crypto from "crypto";

/**
 * Generate SHA-256 hex string with 0x prefix
 */
function sha256hex(input) {
  return "0x" + crypto.createHash("sha256").update(input).digest("hex");
}

// ---- INPUT ARG ----
const manifestPath = process.argv[2];

if (!manifestPath) {
  console.error("Usage: node scripts/mmr_append_leaf.js spec/metabyte.manifest.json");
  process.exit(1);
}

// ---- READ MANIFEST ----
let manifest;
try {
  const raw = fs.readFileSync(manifestPath, "utf8");
  manifest = JSON.parse(raw);
} catch (err) {
  console.error("Error reading manifest:", err.message);
  process.exit(1);
}

// ---- EXTRACT FIELDS ----
const packageId = manifest.package_id || "";
const docSha = manifest.document?.sha256 || "";
const cid = manifest.content_address?.ipfs_cid || "";
const timestamp = manifest.created_utc || new Date().toISOString();

// ---- BUILD LEAF STRING ----
const leafInput = `METABYTE|${packageId}|${docSha}|${cid}`;

// ---- HASH LEAF ----
const leaf = sha256hex(leafInput);

// ---- ENSURE DIR EXISTS ----
fs.mkdirSync("proof/mmr", { recursive: true });

// ---- APPEND TO LOG ----
const record = {
  t: timestamp,
  package_id: packageId,
  leaf: leaf
};

fs.appendFileSync(
  "proof/mmr/leaves.jsonl",
  JSON.stringify(record) + "\n"
);

// ---- OUTPUT ----
console.log("Leaf appended successfully");
console.log("Package ID:", packageId);
console.log("Leaf hash:", leaf);
