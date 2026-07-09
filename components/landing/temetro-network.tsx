"use client";

import dynamic from "next/dynamic";

import { Badge } from "@/components/ui/badge";

// The globe is a heavy WebGL (three.js) component — load it only on the client,
// after hydration, so it never enters the server bundle.
const World = dynamic(
  () => import("@/components/ui/globe").then((m) => m.World),
  {
    ssr: false,
    loading: () => (
      <div className="size-full animate-pulse rounded-full bg-foreground/[0.03]" />
    ),
  },
);

// COSS-neutral recolor: a near-black globe with white land dots and a soft blue
// (--info / blue-500) atmosphere + arcs — the theme's one accent color.
const BLUE = "#3b82f6"; // blue-500 (matches --info)
const BLUE_LIGHT = "#60a5fa";
const BLUE_LIGHTER = "#93c5fd";

const globeConfig = {
  pointSize: 4,
  globeColor: "#0a0a0a",
  showAtmosphere: true,
  atmosphereColor: BLUE,
  atmosphereAltitude: 0.12,
  emissive: "#0a0a0a",
  emissiveIntensity: 0.1,
  shininess: 0.9,
  polygonColor: "rgba(255,255,255,0.6)",
  ambientLight: BLUE_LIGHTER,
  directionalLeftLight: "#ffffff",
  directionalTopLight: "#ffffff",
  pointLight: "#ffffff",
  arcTime: 1400,
  arcLength: 0.9,
  rings: 1,
  maxRings: 3,
  initialPosition: { lat: 20, lng: 20 },
  autoRotate: true,
  autoRotateSpeed: 0.5,
};

// Great-circle arcs between clinics and wallets around the world — all in the
// COSS blue accent, a few lighter for depth. Purely illustrative of "the relay
// connects clinics to phones anywhere".
const arcs = [
  { order: 1, startLat: 51.5072, startLng: -0.1276, endLat: 40.7128, endLng: -74.006, arcAlt: 0.3, color: BLUE },
  { order: 1, startLat: 1.3521, startLng: 103.8198, endLat: 35.6762, endLng: 139.6503, arcAlt: 0.2, color: BLUE_LIGHT },
  { order: 2, startLat: -1.2921, startLng: 36.8219, endLat: 51.5072, endLng: -0.1276, arcAlt: 0.35, color: BLUE },
  { order: 2, startLat: 40.7128, startLng: -74.006, endLat: -23.5505, endLng: -46.6333, arcAlt: 0.3, color: BLUE_LIGHTER },
  { order: 3, startLat: 28.6139, startLng: 77.209, endLat: 25.2048, endLng: 55.2708, arcAlt: 0.2, color: BLUE },
  { order: 3, startLat: 25.2048, startLng: 55.2708, endLat: -1.2921, endLng: 36.8219, arcAlt: 0.25, color: BLUE_LIGHT },
  { order: 4, startLat: 37.7749, startLng: -122.4194, endLat: 35.6762, endLng: 139.6503, arcAlt: 0.4, color: BLUE },
  { order: 4, startLat: 48.8566, startLng: 2.3522, endLat: 30.0444, endLng: 31.2357, arcAlt: 0.2, color: BLUE_LIGHTER },
  { order: 5, startLat: -33.8688, startLng: 151.2093, endLat: 1.3521, endLng: 103.8198, arcAlt: 0.3, color: BLUE },
  { order: 5, startLat: 52.52, startLng: 13.405, endLat: 41.9028, endLng: 12.4964, arcAlt: 0.15, color: BLUE_LIGHT },
  { order: 6, startLat: 19.4326, startLng: -99.1332, endLat: 40.7128, endLng: -74.006, arcAlt: 0.2, color: BLUE },
  { order: 6, startLat: 6.5244, startLng: 3.3792, endLat: 51.5072, endLng: -0.1276, arcAlt: 0.35, color: BLUE_LIGHTER },
  { order: 7, startLat: 35.6762, startLng: 139.6503, endLat: 37.5665, endLng: 126.978, arcAlt: 0.15, color: BLUE },
  { order: 7, startLat: -23.5505, startLng: -46.6333, endLat: -34.6037, endLng: -58.3816, arcAlt: 0.15, color: BLUE_LIGHT },
];

const chips = ["Stateless pipe", "Ciphertext only", "Always on"];

export function TemetroNetwork() {
  return (
    <section
      id="network"
      className="mx-auto max-w-6xl scroll-mt-20 px-6 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-2xl text-center">
        <Badge variant="info">The relay</Badge>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
          The Temetro Network
        </h2>
        <p className="mt-4 text-pretty text-muted-foreground">
          A patient&apos;s phone reaches your clinic through an always-on relay —
          so you never expose your server to the internet. It&apos;s a dumb,
          stateless pipe: it forwards only sealed ciphertext and never opens a
          bundle or touches a database.
        </p>
      </div>

      <div className="relative mt-12">
        {/* Soft accent glow behind the globe. */}
        <div
          aria-hidden
          className="-z-10 absolute inset-x-0 top-1/2 mx-auto h-64 max-w-2xl -translate-y-1/2 rounded-full bg-info/10 blur-3xl"
        />
        <div className="mx-auto h-[360px] w-full max-w-2xl sm:h-[460px]">
          <World globeConfig={globeConfig} data={arcs} />
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          {chips.map((chip) => (
            <span
              key={chip}
              className="rounded-full border border-border bg-card/30 px-3 py-1 text-sm text-muted-foreground"
            >
              {chip}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
