export const NAV = [
  { label: "Shop", href: "#shop" },
  { label: "Displays", href: "#displays" },
  { label: "Charging", href: "#charging" },
  { label: "Story", href: "#story" },
  { label: "Career", href: "#career" },
] as const;

export type Category = {
  id: string;
  index: string;
  name: string;
  blurb: string;
  count: number;
  hue: string;
};

export const CATEGORIES: Category[] = [
  {
    id: "displays",
    index: "01",
    name: "Interactive Displays",
    blurb:
      "Portable 4K touchscreens with on-board Android, battery and stereo sound — work and play, untethered.",
    count: 14,
    hue: "#0d0d0d",
  },
  {
    id: "charging",
    index: "02",
    name: "GaN Charging",
    blurb:
      "Gallium-nitride chargers and power banks. Smaller, cooler, faster — without the brick.",
    count: 22,
    hue: "#e8552c",
  },
  {
    id: "mounts",
    index: "03",
    name: "Mounts & Stands",
    blurb:
      "Architectural mounting for displays, monitors and tablets. Engineered to disappear.",
    count: 18,
    hue: "#3a3a36",
  },
  {
    id: "gaming",
    index: "04",
    name: "Gaming Gear",
    blurb:
      "Power supplies, peripherals and accessories for builders who care what's inside the chassis.",
    count: 26,
    hue: "#1a1a1a",
  },
];

export type Product = {
  id: string;
  name: string;
  category: string;
  tag: string;
  price: string;
  highlights: string[];
};

export const FEATURED: Product = {
  id: "vista-32",
  name: "Vista 32 Smart Display",
  category: "Interactive Displays",
  tag: "New · Flagship",
  price: "from $899",
  highlights: [
    "32\" 4K capacitive touchscreen",
    "On-board Android · 8-core",
    "All-day battery, USB-C in/out",
    "Stereo speakers · DTS tuned",
    "Tilt · rise · rotate stand",
  ],
};

export const PRODUCTS: Product[] = [
  {
    id: "vista-32",
    name: "Vista 32",
    category: "Smart Display",
    tag: "Flagship",
    price: "$899",
    highlights: ["4K touch", "Android 14", "Battery"],
  },
  {
    id: "pulse-140",
    name: "Pulse 140",
    category: "GaN Charger",
    tag: "Bestseller",
    price: "$129",
    highlights: ["140W", "3-port USB-C", "Foldable pins"],
  },
  {
    id: "atlas-arm",
    name: "Atlas Arm",
    category: "Monitor Mount",
    tag: "New",
    price: "$249",
    highlights: ["Up to 34\"", "Cable channel", "Aluminium"],
  },
  {
    id: "core-1000",
    name: "Core 1000",
    category: "Gaming PSU",
    tag: "Tournament",
    price: "$219",
    highlights: ["1000W 80+ Gold", "Modular", "Silent fan"],
  },
];

export const VALUES = [
  "Designed for tomorrow",
  "Built for today",
  "Made to last",
  "Quietly powerful",
  "Engineered, not assembled",
];

export const FOOTER_LINKS = {
  Shop: ["Displays", "Charging", "Mounts", "Gaming", "Accessories"],
  Company: ["About", "Career", "Press", "Sustainability", "Contact"],
  Support: ["Warranty", "Returns", "Shipping", "Manuals", "FAQ"],
  Legal: ["Privacy", "Terms", "Cookies", "Compliance"],
} as const;
