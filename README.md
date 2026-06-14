# ZeroMaintenance

Fresh Phase 1 site for [zeromaintenance.co](https://zeromaintenance.co) — property maintenance and junk removal across Wise, Denton, and Tarrant County, TX.

**Before making changes:** read `references/zeromaintenance-build-brief.md` (single source of truth).

**Visual target:** `references/homepage-reference.html`

## What's built

- Homepage matching the reference (emoji-free, trust-forward, dark green theme)
- Draggable before/after slider (signature element — swap in real job photos)
- Quote page at `/quote` — opens SMS draft to your phone (Phase 1 lead capture)
- Lucide icons, Bricolage Grotesque + Hanken Grotesk fonts
- Placeholder reviews marked for real swaps

## Prerequisites

Install [Node.js 20+](https://nodejs.org/) if you don't have it (`node -v` should work in a terminal).

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Deploy (when ready)

Static export — no server required. `npm run build` writes plain HTML/CSS/JS to `out/`. Move those files anywhere.

### Cloudflare Pages (recommended)

1. Push this repo to GitHub (folder name: `zeromaintenance-website`)
2. [Cloudflare Pages](https://pages.cloudflare.com) → Create project → Connect Git
3. Build settings:
   - **Build command:** `npm run build`
   - **Build output directory:** `out`
4. Preview URL works immediately; old site at zeromaintenance.co stays live until you change DNS
5. Point GoDaddy DNS to Cloudflare (nameservers or CNAME) — pairs with free email forwarding on the same account

Because the output is static files, you're not locked in. Same `out/` folder works on any host (VPS + Caddy, Netlify, S3, etc.).

### Manual deploy (sanity check)

```bash
npm run build
# upload contents of out/ to any static host
```

## Contact config

Edit `src/lib/constants.ts`:

| Field | Current value |
|-------|---------------|
| Phone | +1 503 964 3822 |
| Email (display) | hello@zeromaintenance.co |
| Email inbox | **Not set up yet** — SMS quote flow is the working lead path |

## TODO before launch

- [ ] Drop real before/after photos into `BeforeAfterSlider`
- [ ] Replace placeholder reviews in `constants.ts`
- [ ] Set up `hello@zeromaintenance.co` email (GoDaddy, Google Workspace, or Cloudflare)
- [ ] Confirm whether "insured & licensed" claims apply — do not show if false
- [ ] Shoot real truck/equipment photos when ready

## Phase 2 (do not build yet)

Marketplace app — see build brief. Supabase + job board + verified pro profiles comes only after Phase 1 shows real demand.
