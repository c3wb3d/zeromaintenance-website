"use client";

import { FormEvent, ReactNode, useState } from "react";
import { ArrowRight, Phone } from "lucide-react";
import { SITE } from "@/lib/constants";
import { Button } from "@/components/Button";

type FormState = "idle" | "sent";

export function QuoteForm() {
  const [state, setState] = useState<FormState>("idle");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [area, setArea] = useState("");
  const [description, setDescription] = useState("");

  function buildMessage() {
    return [
      "Hi ZeroMaintenance — I have a job I'd like help with.",
      name ? `Name: ${name}` : null,
      phone ? `Phone: ${phone}` : null,
      area ? `Area: ${area}` : null,
      description ? `Job: ${description}` : null,
    ]
      .filter(Boolean)
      .join("\n");
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const message = buildMessage();
    const smsUrl = `sms:${SITE.phone}?body=${encodeURIComponent(message)}`;

    setState("sent");

    if (typeof window !== "undefined") {
      window.location.href = smsUrl;
    }
  }

  if (state === "sent") {
    return (
      <div className="rounded-panel border border-line-2 bg-ink-2 p-8 text-center">
        <p className="mb-2 font-display text-2xl font-bold">You&apos;re almost there</p>
        <p className="mb-6 text-muted">
          Your text app should open with your quote request. Add a photo of the
          job before sending — that&apos;s how we give upfront pricing.
        </p>
        <a
          href={`tel:${SITE.phone}`}
          className="inline-flex items-center gap-2 text-green hover:underline"
        >
          <Phone className="h-4 w-4" strokeWidth={1.8} />
          Or call {SITE.phoneDisplay}
        </a>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-panel border border-line bg-ink-2 p-8"
    >
      <p className="mb-6 text-muted">
        Fastest path: text us a photo at{" "}
        <a href={`tel:${SITE.phone}`} className="text-green hover:underline">
          {SITE.phoneDisplay}
        </a>
        . Or fill this out and we&apos;ll open a text draft for you.
      </p>

      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Your name">
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={inputClass}
            placeholder="Jane Smith"
          />
        </Field>
        <Field label="Phone number">
          <input
            required
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className={inputClass}
            placeholder="(555) 555-5555"
          />
        </Field>
      </div>

      <div className="mt-5">
        <Field label="Service area">
          <select
            required
            value={area}
            onChange={(e) => setArea(e.target.value)}
            className={inputClass}
          >
            <option value="">Select your area</option>
            <option value="Wise County">Wise County</option>
            <option value="Denton County">Denton County</option>
            <option value="Tarrant County">Tarrant County</option>
            <option value="Other">Other / not sure</option>
          </select>
        </Field>
      </div>

      <div className="mt-5">
        <Field label="What needs to go?">
          <textarea
            required
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className={inputClass}
            placeholder="Garage cleanout — old furniture, boxes, yard debris..."
          />
        </Field>
      </div>

      <p className="mt-4 text-sm text-muted">
        {/* TODO: wire server-side email to hello@ once inbox is live */}
        Photo upload coming next — for now, attach one in your text message.
      </p>

      <Button type="submit" className="mt-6 px-7 py-3.5 text-base">
        <ArrowRight className="h-5 w-5" strokeWidth={1.8} />
        Send job details
      </Button>
    </form>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-text">{label}</span>
      {children}
    </label>
  );
}

const inputClass =
  "w-full rounded-xl border border-line-2 bg-ink px-4 py-3 text-[15px] text-text outline-none transition placeholder:text-muted/70 focus:border-green/50";
