# DocumentCurrency Protocol Specifications

This folder contains the canonical protocol specifications for the DocumentCurrency (DOC.USD) and TransitCloud system.

## Specifications

### MetaByte (Cryptographic Packaging Layer)
File: `metabyte.manifest.json`

Defines the deterministic cryptographic package structure for DOC.USD instruments including:
- SHA-256 digest
- IPFS CID pointer
- Ed25519 signature
- verification headers
- on-chain anchor reference

### MetaFiche (Grid Indexed Sheet Format)
File: `metafiche.sheet.json`

Defines the grid-indexed sheet structure for organizing MetaByte packages into verifiable, indexed layouts.

Includes:
- grid coordinates
- cell references
- package mapping
- root hash verification

## Protocol Stack

DOC.USD  
→ MetaByte  
→ MetaFiche  
→ IPFS  
→ Registry  
→ Verification  
→ On-chain Anchor (Base)

## Version

Current protocol version: v1.0.0
