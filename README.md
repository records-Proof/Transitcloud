# DocumentCurrency (DOC.USD)

## Verifiable Document Currency Infrastructure  
**Powered by TransitCloud**

**Author of Record:** Kam Swygert  
**Protocol Version:** v1.0.0  
**Network Anchor:** Base (On-chain ready)

---

## Contents

- Overview  
- Core Architecture  
- System Stack  
- Protocol Specifications  
- Developer Edition  
- API Endpoints  
- Use Cases  
- Security Model  
- Enterprise Licensing  
- Privacy Model  
- Author  
- License  

---

## Overview

DocumentCurrency (DOC.USD) is a cryptographically verifiable document infrastructure that converts financial records into tamper-evident, independently verifiable instruments.

It transforms invoices, receipts, and financial reports into:

- content-addressed records  
- cryptographically signed artifacts  
- independently auditable financial documents  

All records can be verified without reliance on centralized databases.

### Capabilities

- Deterministic SHA-256 hashing  
- IPFS content addressing (CID)  
- Ed25519 digital signatures  
- Public registry verification  
- Optional on-chain anchoring (Base network)  

---

## Core Architecture

### DOC.USD  
Financial document instrument layer

### MetaByte  
Cryptographic packaging layer  
Produces deterministic, verifiable package manifests

### MetaFiche  
Grid-indexed sheet format  
Organizes MetaByte packages into indexed, auditable layouts

### TransitCloud  
Transport, custody, and registry infrastructure

### Public Registry  
Maps:

- Document name  
- IPFS CID pointer  
- Pointer SHA-256 hash  
- Verification status  

---

## System Stack
It transforms invoices, receipts, and financial reports into **content-addressed, signed, and auditable records** that can be verified without relying on centralized databases.

This system enables:

- Deterministic SHA-256 hashing  
- IPFS content addressing (CID)  
- Ed25519 digital signatures  
- Public registry verification  
- On-chain anchoring (Base network)  

---

## Core Architecture

### DOC.USD
Financial document instrument layer

### MetaByte
Cryptographic packaging layer  
Produces deterministic, verifiable package manifests

### MetaFiche
Grid-indexed sheet format  
Organizes MetaByte packages into indexed, auditable layouts

### TransitCloud
Transport + custody + registry infrastructure

### Public Registry
Maps:
- document name
- CID pointer
- pointer hash
- verification status
## Quick Start (Developer)

1. Open the website (index.html or GitHub Pages link)
2. Go to the Developers page
3. Paste any text or JSON into the sandbox
4. Click “Compute SHA-256”
5. Use that hash to verify or create a MetaByte package

Everything runs locally in the browser.
No server required.
---

## System Stack
---

## Protocol Specifications

Canonical protocol definitions are located in:
These define the deterministic packaging and indexing formats used across the system.

---

## Developer Edition (This Repository)

This repository contains a **fully deployable Developer Edition** including:

- Public homepage
- Developer hub
- Verification interface
- Public registry viewer
- Enterprise licensing portal
- Protocol specification files

---

These headers allow independent systems to validate document authenticity.

---

## API Endpoints (Developer Edition)
These endpoints expose registry and verification data.

---

## Use Cases

- Government audit systems
- Enterprise invoice verification
- Anti-fraud infrastructure
- Financial record integrity
- Web3 compliance and reporting
- Supply chain audit trails

---

## Security Model

The system provides:

- Deterministic reproducibility
- Tamper evidence via hashing
- Cryptographic signature validation
- Content-addressed storage
- Independent verification (no central authority required)

---

## Status

✔ Operational prototype  
✔ Deterministic build verified  
✔ Public registry live  
✔ Developer hub deployed  
✔ Protocol specification published  
✔ Enterprise licensing layer active  

---

## Enterprise Licensing

Commercial and enterprise usage requires a license.

See:
for licensing terms and integration access.

---

## Privacy Model

- Local cryptographic operations occur client-side
- Registry stores hashes and references only
- No raw document data is stored in public systems

See:
---

## Author

Kam Swygert  
TransitCloud / DocumentCurrency Infrastructure

---

## Contact

For enterprise licensing, regulatory coordination, or partnership inquiries:

Use official contact channels or GitHub repository communication.

---

## License

This repository represents a **Developer Edition** of the DocumentCurrency protocol.

All enterprise or commercial usage requires authorization under the Enterprise Licensing framework.

---

DOC.USD → MetaByte → MetaFiche → IPFS → Registry → Verification → On-chain Anchor

---

## Protocol Specifications

Canonical protocol definitions are located in the `/spec` directory.

These define:

- MetaByte packaging manifest format  
- MetaFiche grid sheet structure  
- deterministic hashing and verification procedures  

---

## Quick Start (Developer)

1. Open the site (`index.html` or GitHub Pages link)
2. Navigate to the **Developers** page
3. Paste JSON or text into the sandbox
4. Click **Compute SHA-256**
5. Use the output to generate or verify a MetaByte package

All operations run **locally in the browser**.  
No server required.

---

## Developer Edition (This Repository)

This repository includes a full deployable Developer Edition:

- Public homepage  
- Developer hub (local crypto sandbox)  
- Verification interface  
- Public registry viewer  
- Enterprise licensing portal  
- Protocol specification files  

---

## API Endpoints (Developer Edition)

The Developer Edition exposes read-only protocol endpoints:

- `/api/evidence` → protocol anchor + system constants  
- `/api/registry` → public registry entries  

These endpoints allow external systems to validate DOC.USD records.

---

## Use Cases

- Government audit systems  
- Enterprise invoice verification  
- Anti-fraud infrastructure  
- Financial record integrity  
- Web3 compliance and reporting  
- Supply chain audit trails  

---

## Security Model

The system provides:

- Deterministic reproducibility  
- Tamper-evidence via SHA-256 hashing  
- Ed25519 signature validation  
- Content-addressed storage via IPFS  
- Independent verification without central authority  

---

## Status

- Operational prototype  
- Deterministic build verified  
- Public registry live  
- Developer hub deployed  
- Protocol specification published  
- Enterprise licensing layer active  

---

## Enterprise Licensing

Commercial or enterprise usage requires a license under the DocumentCurrency Enterprise Licensing Framework.

See `enterprise.html` for:

- licensing terms  
- commercial integration access  
- enterprise deployment options  

---

## Privacy Model

- Cryptographic operations occur locally (client-side)
- Public registry stores **hashes and references only**
- No raw document data is stored in public systems

---

## Author

**Kam Swygert**  
TransitCloud / DocumentCurrency Infrastructure  

---

## Contact

For enterprise licensing, regulatory coordination, or partnerships:

Use official repository contact channels or submit inquiries through the DocumentCurrency site.

---

## License

This repository represents a **Developer Edition** of the DocumentCurrency protocol.

All commercial or enterprise usage requires authorization under the Enterprise Licensing framework.
