"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import vaultlms from "@/assets/trustedby/vaultlms.svg";
import client1 from "@/assets/trustedby/client1.jpeg";
import client2 from "@/assets/trustedby/client2.svg";
import client3 from "@/assets/trustedby/client3.png";



const clientLogos = [
  { src: vaultlms, alt: "VaultLMS" },
  // { src: client2, alt: "Client" },
  { src: client1, alt: "JHills" },
  { src: client3, alt: "Eonsfleet" },
];

const LOGO_HEIGHT = 60;
const LOGO_WIDTH = 160;

export function ClientLogos() {
  return (
    <section className="border-y border-neutral-200 bg-neutral-50 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-10 text-center text-sm font-medium text-neutral-600">
          Trusted by businesses across Nigeria and beyond
        </p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-x-16 gap-y-10"
        >
          {clientLogos.map((client, i) => (
            <div
              key={i}
              className="relative flex h-16 w-40 items-center justify-center rounded-lg border border-neutral-200 px-4 py-2 grayscale transition-all duration-300 hover:grayscale-0"
            >
              <Image
                src={client.src}
                alt={client.alt}
                width={LOGO_WIDTH}
                height={LOGO_HEIGHT}
                className="object-contain"
                style={{ width: "auto", maxWidth: "100%", height: `${LOGO_HEIGHT}px` }}
                unoptimized
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
