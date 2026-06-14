export const SITE = {
  name: "ZeroMaintenance",
  domain: "zeromaintenance.co",
  phone: "+15039643822",
  phoneDisplay: "+1 503 964 3822",
  email: "hello@zeromaintenance.co",
  // TODO: switch form delivery to hello@ once inbox is live
  formEmailFallback: "contact.zeromaintenance@gmail.com",
  serviceArea: "Wise · Denton · Tarrant County",
} as const;

export const NAV_LINKS = [
  { href: "#work", label: "Our work" },
  { href: "#how", label: "How it works" },
  { href: "#services", label: "Services" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact" },
] as const;

export const TRUST_ITEMS = [
  { icon: "camera" as const, label: "Upfront photo quotes" },
  { icon: "zap" as const, label: "Same-day service" },
  { icon: "truck" as const, label: "2 trucks, 2 trailers" },
] as const;

export const STEPS = [
  {
    number: "1",
    title: "Send a photo",
    description:
      "Text or upload a picture of whatever needs to go. No site visit needed to start.",
  },
  {
    number: "2",
    title: "Get an upfront quote",
    description:
      "We reply fast with a clear, honest price. No surprises, no hidden fees.",
  },
  {
    number: "3",
    title: "We handle it",
    description:
      "We show up, do the work, haul it off, and leave the space clean.",
  },
] as const;

export type ServiceIcon = "sprout" | "trash-2" | "sparkles" | "droplets";

export const FEATURED_SERVICE = {
  icon: "sprout" as const,
  title: "Lawn & landscaping",
  description:
    "Our flagship service — mowing, cleanup, and yard resets that make the property look handled. Strong recurring work and the easiest path to grow the brand locally.",
  features: [
    "Mowing & edging",
    "Weed control & cleanup",
    "Mulch & bed maintenance",
    "Seasonal yard resets",
    "Brush & overgrowth clearing",
    "Regular maintenance plans",
  ],
} as const;

export const JUNK_SERVICE = {
  icon: "trash-2" as const,
  title: "Junk removal",
  description:
    "Residential and commercial. We handle furniture, appliances, electronics, yard waste, and more — load it, haul it, dispose of it right.",
  features: [
    "Furniture removal",
    "Appliance disposal",
    "Yard waste cleanup",
    "Construction debris",
    "E-waste recycling",
    "Garage & estate clear-outs",
  ],
} as const;

export const ADDITIONAL_SERVICES = [
  {
    icon: "sparkles" as const,
    title: "Window washing",
    description: "Residential and commercial — streak-free glass inside and out.",
  },
  {
    icon: "droplets" as const,
    title: "Pressure washing",
    description: "Driveways, siding, patios, and fences — grime gone, property refreshed.",
  },
] as const;

// TODO: replace with real reviews (names + quotes only)
export const REVIEWS = [
  {
    initials: "JD",
    quote:
      "Quoted me from a photo, showed up the same day, and the garage was empty in an hour. Easiest thing I've done all month.",
    name: "[ real name ]",
    location: "Decatur, TX",
  },
  {
    initials: "MR",
    quote:
      "Fair price, no surprises, and they cleaned up after. You can tell they actually care how it looks when they leave.",
    name: "[ real name ]",
    location: "Denton, TX",
  },
  {
    initials: "TS",
    quote:
      "Texted a picture of a pile of old fence boards at 9am, gone by lunch. These guys move.",
    name: "[ real name ]",
    location: "Fort Worth, TX",
  },
] as const;
