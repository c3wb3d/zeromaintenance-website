import {
  Camera,
  Check,
  Droplets,
  MapPin,
  MessageSquare,
  Sparkles,
  Sprout,
  Trash2,
  Truck,
  Zap,
  ArrowRight,
} from "lucide-react";
import {
  ADDITIONAL_SERVICES,
  FEATURED_SERVICE,
  JUNK_SERVICE,
  SITE,
  STEPS,
  TRUST_ITEMS,
  type ServiceIcon,
} from "@/lib/constants";
import { Button } from "@/components/Button";
import { Container, SectionHead } from "@/components/ui";

const trustIcons = {
  camera: Camera,
  zap: Zap,
  truck: Truck,
} as const;

const serviceIcons: Record<ServiceIcon, typeof Sprout> = {
  sprout: Sprout,
  "trash-2": Trash2,
  sparkles: Sparkles,
  droplets: Droplets,
};

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-16 pt-24 text-center md:pt-[96px]">
      <div
        className="pointer-events-none absolute inset-x-0 bottom-[-40%] h-[60%]"
        style={{
          background:
            "radial-gradient(60% 100% at 50% 0, rgba(47,167,104,0.08), transparent 70%)",
        }}
      />
      <Container>
        <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-line-2 px-3.5 py-1.5 text-[13px] font-semibold uppercase tracking-[0.04em] text-green">
          <MapPin className="h-[15px] w-[15px]" strokeWidth={1.8} />
          {SITE.serviceArea}
        </span>
        <h1 className="mx-auto mb-5 max-w-[14ch] font-display text-[clamp(40px,7vw,76px)] font-extrabold leading-[1.05] tracking-[-0.02em]">
          Property maintenance you can trust
        </h1>
        <p className="mx-auto mb-8 max-w-[54ch] text-[19px] text-muted">
          Junk gone, yards cleared, properties handled — fast. Send a photo,
          get an upfront quote, and we take care of the rest.
        </p>
        <div className="flex flex-wrap justify-center gap-3.5">
          <Button href="/quote">
            <MessageSquare className="h-5 w-5" strokeWidth={1.8} />
            Tell us about the job
          </Button>
          <Button href="/#services" variant="ghost">
            <Sprout className="h-5 w-5" strokeWidth={1.8} />
            See our services
          </Button>
        </div>

        <div className="mx-auto mt-14 grid max-w-[840px] gap-4 md:grid-cols-3">
          {TRUST_ITEMS.map((item) => {
            const Icon = trustIcons[item.icon];
            return (
              <div
                key={item.label}
                className="flex items-center justify-center gap-3 rounded-card border border-line bg-ink-2 p-[18px]"
              >
                <span className="grid h-[38px] w-[38px] flex-none place-items-center rounded-[10px] bg-green/10 text-green">
                  <Icon className="h-5 w-5" strokeWidth={1.8} />
                </span>
                <span className="text-[15px] font-medium">{item.label}</span>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export function HowItWorksSection() {
  return (
    <section
      id="how"
      className="border-y border-line bg-ink-2 py-[88px]"
    >
      <Container>
        <SectionHead label="How it works" title="Three steps, no hassle" />
        <div className="grid gap-5 md:grid-cols-3">
          {STEPS.map((step) => (
            <div
              key={step.number}
              className="rounded-card border border-line bg-ink-2 p-7"
            >
              <div className="mb-[18px] grid h-[34px] w-[34px] place-items-center rounded-full border border-line-2 font-display text-[15px] font-extrabold text-green">
                {step.number}
              </div>
              <h3 className="mb-2 font-display text-xl font-bold">{step.title}</h3>
              <p className="text-[15px] text-muted">{step.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function ServiceFeatureCard({
  icon,
  title,
  description,
  features,
  compact = false,
}: {
  icon: ServiceIcon;
  title: string;
  description: string;
  features: readonly string[];
  compact?: boolean;
}) {
  const Icon = serviceIcons[icon];

  return (
    <div className="rounded-panel border border-line bg-ink-2 p-[30px]">
      <div className="mb-[18px] grid h-12 w-12 place-items-center rounded-xl bg-green/10 text-green">
        <Icon className="h-[26px] w-[26px]" strokeWidth={1.8} />
      </div>
      <h3 className="mb-2.5 font-display text-2xl font-bold">{title}</h3>
      <p className="mb-[18px] text-[15px] text-muted">{description}</p>
      <ul
        className={`grid gap-2.5 ${compact ? "grid-cols-1" : "sm:grid-cols-2"}`}
      >
        {features.map((feature) => (
          <li
            key={feature}
            className="flex items-center gap-2 text-[15px] text-text"
          >
            <Check className="h-[17px] w-[17px] text-green" strokeWidth={1.8} />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ServicesSection() {
  return (
    <section id="services" className="py-[88px]">
      <Container>
        <SectionHead label="Services" title="What we take care of" />
        <div className="grid gap-5 md:grid-cols-[1.4fr_1fr]">
          <ServiceFeatureCard
            icon={FEATURED_SERVICE.icon}
            title={FEATURED_SERVICE.title}
            description={FEATURED_SERVICE.description}
            features={FEATURED_SERVICE.features}
          />

          <div className="flex flex-col gap-3.5">
            <ServiceFeatureCard
              icon={JUNK_SERVICE.icon}
              title={JUNK_SERVICE.title}
              description={JUNK_SERVICE.description}
              features={JUNK_SERVICE.features}
              compact
            />

            {ADDITIONAL_SERVICES.map((service) => {
              const Icon = serviceIcons[service.icon];
              return (
                <div
                  key={service.title}
                  className="rounded-[14px] border border-line bg-ink-2 px-[22px] py-5"
                >
                  <div className="flex items-start gap-3.5">
                    <Icon
                      className="mt-0.5 h-5 w-5 shrink-0 text-green"
                      strokeWidth={1.8}
                    />
                    <div>
                      <h3 className="text-[17px] font-semibold">
                        {service.title}
                      </h3>
                      <p className="mt-1 text-[15px] text-muted">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}

export function QuoteCTA() {
  return (
    <section id="quote" className="py-[88px]">
      <Container>
        <div className="rounded-cta border border-line-2 bg-gradient-to-br from-surface to-ink-2 px-8 py-14 text-center">
          <h2 className="mb-3.5 font-display text-[clamp(28px,4vw,42px)] font-bold leading-[1.05] tracking-[-0.02em]">
            Got something that needs to go?
          </h2>
          <p className="mb-7 text-lg text-cta-muted">
            Send a photo and get an honest quote, usually within the hour.
          </p>
          <Button href="/quote" className="px-7 py-3.5 text-base">
            <ArrowRight className="h-5 w-5" strokeWidth={1.8} />
            Tell us about your job
          </Button>
        </div>
      </Container>
    </section>
  );
}
