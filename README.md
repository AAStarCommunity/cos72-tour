# Cos72 Role Tour

An online, interactive comic walkthrough of **Cos72 / YetAnotherAA** — a WebAuthn (Face ID) + BLS + ERC-4337 account-abstraction wallet & community OS.

Pick a role and Mycelium's cartoon IPs (Xiao J / Xiao M / Baobao) walk you through the key flows: what you do, the tech behind it, and why it matters — with real on-chain evidence (Sepolia).

- Live: https://tour.mushroom.cv
- Stack: Astro static site → Cloudflare Pages
- Panels generated with the Mycelium illustration skills (FLUX/Codex image_gen)

## Dev
```bash
pnpm install
pnpm dev      # http://localhost:4321
pnpm build    # -> dist/
```

Role data: `src/data/roles/*.ts` · Panels: `public/panels/` · Launch page: `src/pages/launch.astro`
