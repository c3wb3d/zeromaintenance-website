import { NAV_LINKS, SITE } from "@/lib/constants";
import { Button } from "@/components/Button";
import { Container, Logo } from "@/components/ui";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-ink/80 backdrop-blur-xl">
      <Container className="flex h-[72px] items-center justify-between">
        <Logo />
        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[15px] font-medium text-muted transition hover:text-text"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <Button href="/quote">Get a quote</Button>
      </Container>
    </header>
  );
}

export function Footer() {
  return (
    <footer id="contact" className="mt-10 border-t border-line py-12 md:py-14">
      <Container>
        <div className="flex flex-wrap justify-between gap-8">
          <div className="max-w-[280px]">
            <Logo className="mb-3.5" />
            <p className="text-muted">
              Property maintenance & junk removal across {SITE.serviceArea}.
            </p>
          </div>

          <div>
            <h4 className="mb-3.5 text-sm font-semibold uppercase tracking-[0.04em] text-muted">
              Contact
            </h4>
            <a
              href={`tel:${SITE.phone}`}
              className="mb-2.5 flex items-center gap-2 text-[15px] text-text"
            >
              <PhoneIcon />
              {SITE.phoneDisplay}
            </a>
            <a
              href={`mailto:${SITE.email}`}
              className="mb-2.5 flex items-center gap-2 text-[15px] text-text"
            >
              <MailIcon />
              {SITE.email}
            </a>
            <p className="flex items-center gap-2 text-[15px] text-text">
              <PinIcon />
              {SITE.serviceArea}
            </p>
          </div>

          <div>
            <h4 className="mb-3.5 text-sm font-semibold uppercase tracking-[0.04em] text-muted">
              Fastest response
            </h4>
            <p className="max-w-[240px] text-muted">
              Text us a photo of the job — it&apos;s the quickest way to a quote.
            </p>
          </div>
        </div>

        <p className="mt-8 border-t border-line pt-5 text-[13px] text-muted">
          © 2026 {SITE.name} · {SITE.domain}
        </p>
      </Container>
    </footer>
  );
}

function PhoneIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-green"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-green"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-green"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
