import {
  type LucideIcon,
  MessagesSquare,
  Network,
  Pill,
  Smartphone,
  Sparkles,
  Tablet,
  Users,
  Video,
} from "lucide-react"

export type FeatureSection = {
  title: string
  body: string
  bullets?: string[]
}

export type Feature = {
  slug: string
  icon: LucideIcon
  // Short copy for the navbar mega-dropdown.
  navTitle: string
  navDesc: string
  // Optional override for the dropdown link. When set, the item points here
  // (e.g. the App entry → its own /app page) instead of /features/<slug>, and
  // the entry is skipped by the generated /features/<slug> subpages.
  href?: string
  // Long-form copy for the /features/<slug> page.
  badge: string
  title: string
  subtitle: string
  sections: FeatureSection[]
}

// Single source of truth for the Features mega-dropdown and the feature subpages.
export const features: Feature[] = [
  {
    slug: "ai-chat",
    icon: Sparkles,
    navTitle: "AI Chat",
    navDesc: "Ask for any chart in plain language",
    badge: "AI Chat",
    title: "Ask for a chart, get the record back",
    subtitle:
      "temetro's home screen is a chat. Ask in plain language, or type a quick command, and get clean record cards back instead of a wall of text.",
    sections: [
      {
        title: "Plain-language lookups",
        body: "Pull up a patient with a slash command (/patient 1042) or just ask “show me her last three blood pressures.” temetro finds the right records and replies with cards and lab charts you can open for the full detail.",
      },
      {
        title: "Bring your own model",
        body: "Connect an OpenAI, Anthropic, or Gemini key, or run a local model with Ollama, all from Settings. You're never locked into one vendor.",
      },
      {
        title: "Safe by design",
        body: "Veil de-identifies patient data before anything reaches a cloud provider, and any change the assistant proposes waits for your one-click approval before it's written.",
        bullets: [
          "Records de-identified before they leave your clinic",
          "Nothing is added, edited, or deleted without your approval",
          "Every action respects your role's permissions",
        ],
      },
    ],
  },
  {
    slug: "records",
    icon: Users,
    navTitle: "Patient records",
    navDesc: "Clean cards for history, meds, and labs",
    badge: "Patient records",
    title: "Every patient's story, organized",
    subtitle:
      "Demographics, allergies, medications, problems, labs, and encounters, laid out as tidy record cards you can read at a glance and open for the detail.",
    sections: [
      {
        title: "Cards, not clutter",
        body: "Each patient becomes a row of cards summarizing what matters. Cards with more behind them invite a click; empty sections stay quiet so the chart never feels noisy.",
      },
      {
        title: "Create, edit, and transfer",
        body: "Register a patient in seconds, keep their record up to date, and move it between clinics when care changes hands, all from the same workspace.",
      },
      {
        title: "Import from anywhere",
        body: "Bring records in from another system with a CSV or JSON export, or export your whole clinic as a single archive whenever you need it.",
      },
    ],
  },
  {
    slug: "portal",
    icon: Tablet,
    navTitle: "Patient Portal",
    navDesc: "A waiting-room kiosk for self-service",
    badge: "Patient Portal",
    title: "Let patients book themselves in",
    subtitle:
      "A calm, full-screen self-service page for a waiting-room tablet, with no login and no menus. Patients book a visit or check on results on their own.",
    sections: [
      {
        title: "Booking without the front desk",
        body: "Returning patients enter their name and file number; new patients register on the spot and get a file number. Past dates and already-taken slots are turned away automatically.",
      },
      {
        title: "Results, the safe way",
        body: "Patients can see their upcoming visits and whether results are ready, never the clinical values themselves, and are asked to review them with a staff member.",
      },
      {
        title: "Private by default",
        body: "Both flows require a matching name and file number, and new sign-ups save only basic details. The kiosk is built to show the minimum necessary.",
      },
    ],
  },
  {
    slug: "messaging",
    icon: MessagesSquare,
    navTitle: "Messaging",
    navDesc: "Real-time team chat with files & cards",
    badge: "Messaging",
    title: "Talk to your team, in context",
    subtitle:
      "Private, real-time chat for your clinic's staff, with direct messages and groups, and files and appointment cards shared inline.",
    sections: [
      {
        title: "Instant and clinic-only",
        body: "Messages arrive the moment they're sent, with unread badges and day grouping that keep long threads easy to scan. Conversations never leave the clinic, and only participants can read them.",
      },
      {
        title: "Share more than text",
        body: "Attach files or send an appointment as a tidy card, a snapshot that still reads correctly even if the appointment changes later.",
      },
      {
        title: "System notices that stand out",
        body: "Automated alerts, like a teammate's password-reset request, arrive as clearly marked, read-only System messages so you always know what's from a person and what's from temetro.",
      },
    ],
  },
  {
    slug: "meetings",
    icon: Video,
    navTitle: "Meetings",
    navDesc: "Built-in voice & video rooms",
    badge: "Meetings",
    title: "Jump on a call, right where you work",
    subtitle:
      "Discord-style voice and video rooms for your team, plus a calendar to plan ahead. No extra app, no accounts to manage.",
    sections: [
      {
        title: "Rooms your team can hop into",
        body: "Create a room, share it across the clinic, and join with one click. Ring a teammate in, share your screen, and see who's speaking. Calls connect peer-to-peer, so media never passes through our servers.",
      },
      {
        title: "Plan ahead",
        body: "Switch to the calendar to schedule meetings, invite staff, and see everyone's upcoming agenda at a glance.",
      },
    ],
  },
  {
    slug: "pharmacy",
    icon: Pill,
    navTitle: "Pharmacy",
    navDesc: "Dispensing queue and stock control",
    badge: "Pharmacy",
    title: "From prescription to dispensed",
    subtitle:
      "Work the dispensing queue and keep an eye on stock, with prescriptions and inventory right alongside the patient record.",
    sections: [
      {
        title: "A queue that keeps up",
        body: "See what needs dispensing, mark it done, and keep a clean ledger of every dispense, tied to the patient and the prescriber.",
      },
      {
        title: "Know what's running low",
        body: "Track medication stock and spot shortages before they become a problem. Ask the chat “what's running low?” and get the answer as a card.",
      },
      {
        title: "Scoped to the right people",
        body: "Pharmacy staff get exactly the access they need, to read and fill prescriptions, without the rest of the clinical record.",
      },
    ],
  },
  {
    slug: "network",
    icon: Network,
    navTitle: "Temetro Network",
    navDesc: "The fast, reliable link to patient wallets",
    badge: "Temetro Network",
    title: "A dedicated network between the clinic and the patient's phone",
    subtitle:
      "Temetro Network is a small, high-performance relay that connects the clinic to a patient's wallet app. It replaces the flaky tunnel that used to make sharing work sometimes and not others, so importing a record just works.",
    sections: [
      {
        title: "Built for reliability",
        body: "Written in Rust and always on at a stable address, the network is a single job done well: route messages between the clinic and the right phone. No ephemeral tunnels, no cold starts, no “couldn't reach the clinic” when a patient scans the QR.",
      },
      {
        title: "A relay that can't read your records",
        body: "The network is a dumb pipe by design. It forwards sealed, end-to-end-encrypted bundles that only the clinic can open, and it stores nothing. The only thing it checks is that a phone really controls its wallet before routing to it.",
        bullets: [
          "Records are sealed on the phone and opened only by the clinic",
          "The relay forwards ciphertext and keeps no database",
          "Every device proves control of its wallet with a signature",
        ],
      },
      {
        title: "Yours to host",
        body: "The network is open source and deploys in minutes on Railway or any container host. Point your clinic and the wallet app at it, and the whole share-and-approve flow runs on infrastructure you control.",
      },
    ],
  },
  {
    slug: "app",
    icon: Smartphone,
    navTitle: "Patient app",
    navDesc: "The wallet in your patient's pocket, coming soon",
    href: "/app",
    badge: "Patient app",
    title: "Your record, in your pocket",
    subtitle:
      "The temetro wallet is a patient companion app for iPhone and Android, coming soon. It keeps a patient's record on their own device, sealed with a key only they hold.",
    sections: [
      {
        title: "Patient-owned data",
        body: "The record lives on the patient's own phone. Their wallet number is a key only they hold, so there is no account, no password, and no middleman.",
      },
      {
        title: "Approve before it applies",
        body: "Every change a clinic makes is sealed to the patient and waits for their approval on the phone before it counts. Nothing is written behind their back.",
      },
    ],
  },
]

// The /features/<slug> subpages are generated from these; entries with a custom
// href (like the App entry, which links to /app) are handled by their own page.
export const featureSlugs = features
  .filter((f) => !f.href)
  .map((f) => f.slug)

export function getFeature(slug: string): Feature | undefined {
  return features.find((f) => f.slug === slug && !f.href)
}
