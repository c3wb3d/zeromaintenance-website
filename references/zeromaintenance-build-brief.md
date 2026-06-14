# ZeroMaintenance — Build Brief

> Drop this file in the repo root so Cursor keeps the whole vision in context.
> It is the single source of truth for *what* we're building and *why*.
>
> **For Cursor:** Read this file first, then make changes against it.

---

## One line

ZeroMaintenance is a property maintenance & junk removal brand for Wise, Denton, and Tarrant County (TX) that earns trust through visible, real work — and grows into a marketplace where video-verified pros take jobs posted by locals.

Domain: `zeromaintenance.co` (owned on GoDaddy; expires Jan 3, 2027)

---

## Architecture — website vs app (keep separate)

| | **Website** (`zeromaintenance-website`) | **App** (`zeromaintenance-app`, Phase 2) |
|---|----------------------------------------|------------------------------------------|
| Purpose | Brand, trust, lead capture | Marketplace — post jobs, claim jobs |
| Output | Static HTML/CSS/JS (`out/` folder) | Full web app with backend |
| Deploy | Cloudflare Pages or any static host | TBD (Supabase + hosted frontend) |
| Relationship | Front door — eventually links "get the app" | The marketplace product |

Do not merge them. The marketing site stays simple; the marketplace stays in its own repo/folder.

**Phase 2 note (ignore for now):** "The app" may be native iOS/Android or mobile web — that only affects whether the site links to app-store buttons or a URL.

---

## Contact details (confirmed)

| Field | Value | Status |
|-------|-------|--------|
| Phone | `+1 503 964 3822` | Active — primary lead channel; text-a-photo is fastest |
| Email (target) | `hello@zeromaintenance.co` | **Not set up yet** — show on site for brand; wire forms to phone/SMS until inbox exists |
| Email (legacy) | `contact.zeromaintenance@gmail.com` | Retire everywhere once branded email works |
| Service area | Wise · Denton · Tarrant County, TX | |

**Email setup note:** Domain is owned but no MX/email has been configured. Before go-live, set up `hello@zeromaintenance.co` via GoDaddy Email, Google Workspace, or Cloudflare Email Routing (cheapest). Until then, quote forms should not silently fail — use phone/SMS CTA or a working fallback address in form backend only.

---

## The core belief

**Trust is the product.** People are letting a stranger onto their property and near their home. Nobody picks the cheapest random — they pick who they won't regret. Every design and product decision serves trust before anything else.

---

## Two phases (don't confuse them)

### Phase 1 — Bootstrap (now)

We are the crew. The founders take the jobs themselves, keep the cash, and use every job to build the brand.

- Site sells "we do the work": post pictures → get an upfront quote → we haul it.
- Every completed job is filmed (before/after, the work itself). That footage is both the social-media engine and the future verification library.
- Goal of this phase: prove people actually post jobs in Wise County, and build a recognizable local brand. This answers the one open question before any heavy build.

**Distribution vs. conversion:** A site doesn't create users — it converts them. Zero traffic is a distribution problem (social/content), not a pixel problem. Polish the site, but don't pour a month into perfection expecting it to summon traffic. Content drives people there; the site closes them.

### Phase 2 — Marketplace (later, only after Phase 1 has traction)

ZeroMaintenance becomes a platform: locals post jobs, vetted pros claim them.

- Trust mechanism = **video verification**. Filming a pro doing a real job earns them a "Verified Pro" gold check AND produces marketing content. Same action, two assets.
- Worker levels: New → builds profile/jobs → Verified Pro (gold check). Modeled on Fiverr seller levels + Airbnb host profiles.
- Each job is still **local** — a worker and a customer in the same city. "Scaling" = lighting up one city at a time, not adding global users. Seed ONE market (TX) fully before opening a second.

**Do not build the Phase 2 marketplace until Phase 1 shows real demand.** Building the full two-sided app first is the failure mode to avoid.

---

## Services — Phase 1 vs Phase 2 (don't mix the rules)

Two different constraints govern the same service list. Keep them separate.

### Phase 1 — what the site shows and the founders actually do

| Service | Role on site | Notes |
|---------|--------------|-------|
| **Lawn & landscaping** | Featured / primary card | Flagship — strong earner and easy for others to do well later |
| **Junk removal** | Strong secondary card | Money-maker; you own the trailer — keep it on the site |
| **Window washing** | Listed service | Property maintenance, not a category stretch |
| **Pressure washing** | Listed service | Same |

**Drop from site:** auto detailing (cars ≠ property — wrong category for this brand), roof & exterior placeholders, any "expanding soon" pills for things you don't offer yet.

**Phase 1 rule:** the site lists what *you* do today. Junk removal stays because you are the crew, not because random marketplace workers can do it.

### Phase 2 — which services open to marketplace workers

| Open to random verified pros first | Founder- or vetted-only |
|-----------------------------------|-------------------------|
| Window washing | Junk removal |
| Lawn & landscaping | (trailer + dump runs = barrier randoms can't clear) |
| Pressure washing | |

**Marketplace rule:** "random people should do a good job" governs which categories you *open on the app* — not what you delete from the Phase 1 site. Junk removal stays on the site and stays founder-fulfilled in Phase 2. You never choose between "biggest earner" and "marketplace model."

---

## Website (Phase 1) — refinements to make now

The existing site is a solid foundation. Fixes, ordered by impact on trust:

1. **No emoji icons, anywhere.** Replace every emoji (trash can, sprout, truck, phone) with clean line icons (Lucide / Tabler / Heroicons) or real photos. Biggest single credibility fix.
2. **Remove "coming soon" clutter.** Don't advertise emptiness. Trim or hide Lawn Care / Roof Work and the placeholder Equipment page until there's real content. Rule: never show a customer a thing we don't have.
3. **Show proof.** Add real before/after photos, the founders' faces, and reviews. The site is the home for the content the camera produces. Five real before/afters beat the whole current homepage.
4. **Honest trust claims only.** Only keep "fully insured & licensed" if it is actually true right now. If not, remove it and lean on real reviews + verification videos instead. False claims are a real liability.
5. **Branded email on site:** Display `hello@zeromaintenance.co`, not the gmail address. Form delivery can use a working backend until the inbox is live.
6. **Keep the quote/lead flow as the primary CTA** for Phase 1. Add a "find a verified pro" path + app link only in Phase 2.

**Visual target:** See `references/homepage-reference.html` — emoji-free, trust-forward, green-on-black DNA with draggable before/after slider as the signature element.

---

## MVP app scope (Phase 2 — build lean, only the core loop)

1. Post a job (no login): title, category (yard waste / junk & furniture removal / appliance disposal / general), description, area, photos, budget, name + phone.
2. Public job board: open jobs, filter by area, newest first.
3. Worker accounts (auth): sign up + profile (name, photo, bio, service area).
4. Workers browse open jobs and "claim" one.
5. Verification badge: worker status is "New" or "Verified Pro" (gold check). Verified = an admin attached a verification video URL to the profile. The gold check is the visual hero.
6. Tiny admin view (founder only): mark a worker Verified + attach video URL.

**Do NOT build yet:** payments, ratings/reviews, leveling/ranking, messaging, multi-country. Leave `// TODO` comments where they'll hook in.

---

## Tech stack

- Next.js 14 (App Router) + TypeScript + Tailwind CSS — **static export** (`output: 'export'`) for the marketing site
- Deploy: Cloudflare Pages (or any static host — `out/` is portable plain files)
- **App (Phase 2):** separate project (`zeromaintenance-app`) — Supabase auth, Postgres, file storage
- Website points to app when marketplace is ready; keep them as two folders/repos

---

## Brand & design rules

- **Tone:** confident, plain-spoken, local, no corporate filler. Sentence case everywhere. Active voice ("Get a free quote", not "Submit").
- **Look:** refined dark theme — deep green-black, not pure black — with a grounded emerald green as the brand color (less neon than the current site so it reads "trusted local pro," not "hackathon"). One warm accent (amber) used sparingly for human warmth and star ratings.
- **Type:** a characterful display face for headlines, a clean readable sans for body. (Reference uses Bricolage Grotesque + Hanken Grotesk.)
- **Signature element:** the before/after reveal — the transformation *is* the proof. Make it the thing the site is remembered by.
- **Always:** generous whitespace, one clear CTA per screen, real photography over icons, social proof high on the page, real people and real work visible within ~2 seconds.
- **Never:** emoji, "coming soon" placeholders shown to customers, claims we can't back up, more than one primary CTA competing per screen.

### Design tokens (from reference)

```
--ink:        #0B0F0D
--ink-2:      #121714
--surface:    #161C18
--text:       #F2F5F1
--muted:      #9DA89F
--green:      #34C77B
--green-deep: #2BA866
--amber:      #E8B04B
```

---

## Brands to study (and what to steal)

- **1-800-GOT-JUNK** — our exact niche. Upfront pricing, photo-quote flow, how a junk business builds a trusted brand.
- **College Hunks Hauling Junk** — personality-driven brand in a boring industry.
- **Airbnb** — the verified-pro profile model: profiles, reviews, photos, verification badges.
- **Fiverr** — seller levels = our New → Verified Pro progression, already proven.
- **Thumbtack / TaskRabbit** — how to explain a two-sided "post a job, get matched" model simply.

---

## First task prompt (paste to kick off)

```
Read zeromaintenance-build-brief.md first, then open references/homepage-reference.html in a browser.

Phase 1 only — do not build the marketplace app yet.

Match the homepage reference direction in the Next.js site:
- Replace all emoji with Lucide icons
- Remove coming-soon clutter and empty Equipment placeholders
- Add the before/after slider component (signature element)
- Update contact to hello@zeromaintenance.co + +1 503 964 3822
- Keep quote form as primary CTA; wire to working lead capture (phone/SMS ok until email inbox exists)
- Remove "fully insured & licensed" unless we confirm it's true
- Leave TODO slots for real job photos and real reviews
```
