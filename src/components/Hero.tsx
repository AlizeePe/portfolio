"use client";
import { motion } from "framer-motion";
import type { Transition } from "framer-motion";
import Image from "next/image";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: 0.5,
    delay,
    ease: "easeOut",
  } satisfies Transition,
});

export default function Hero() {
  return (
    <section id="about" className="pt-10 pb-16 md:pt-16 max-w-4xl">
      <div className="flex items-center justify-between gap-12">
        <div className="flex-1">
          <motion.p
            {...fadeUp(0.05)}
            className="font-mono text-xs text-neutral-500 mb-5"
          >
            {">"} building interfaces with care
          </motion.p>

          <motion.div {...fadeUp(0.1)}>
            <span className="inline-flex items-center gap-2 text-[11px] tracking-widest uppercase text-blue-deep bg-blue-light px-3 py-1 rounded-sm mb-7">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
              Available from September · South Korea
            </span>
          </motion.div>
          <div className="flex items-center justify-between gap-3 md:gap-0">
            <motion.h1
              {...fadeUp(0.2)}
              className="text-4xl md:text-5xl font-medium leading-tight"
            >
              Frontend
              <br />
              Developer<span className="text-blue">.</span>
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={
                { duration: 0.6, delay: 0.2, ease: "easeOut" } as Transition
              }
              className="shrink-0 md:hidden"
            >
              <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-blue-mid">
                <Image
                  src="/profile.png"
                  alt="Alizée Perrichon"
                  width={80}
                  height={80}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>
          <motion.p
            {...fadeUp(0.3)}
            className="text-base text-neutral-500 leading-relaxed mt-4 max-w-xl"
          >
            안녕하세요, I&apos;m Alizée — I build responsive and user-focused
            interfaces with attention to UI quality, performance and
            maintainability.
            <br />
            TypeScript, Lit, Redux.
            <br />
            Based in France, seeking opportunities in{" "}
            <span className="text-blue font-medium">South Korea 🇰🇷</span> from
            September.
          </motion.p>
          <motion.p
            {...fadeUp(0.35)}
            className="text-xs md:text-sm text-neutral-500 mt-3"
          >
            🇫🇷 French (Native) · 🇬🇧 English (B2) · 🇰🇷 Korean (Beginner)
          </motion.p>

          <motion.div {...fadeUp(0.4)} className="flex flex-wrap gap-3 mt-8">
            <a
              href="#projects"
              className="bg-blue text-white text-sm px-6 py-3 rounded-sm tracking-wide hover:bg-blue-deep transition-colors duration-200"
            >
              View projects
            </a>
            <a
              href="/alizee-perrichon-cv.pdf"
              download="Alizee-Perrichon-CV.pdf"
              className="text-blue-deep text-sm px-6 py-3 rounded-sm tracking-wide border border-blue-mid hover:bg-blue-light transition-colors duration-200"
            >
              Download CV
            </a>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={
            { duration: 0.6, delay: 0.2, ease: "easeOut" } as Transition
          }
          className="hidden md:block shrink-0"
        >
          <div className="w-48 h-48 rounded-full overflow-hidden border-2 border-blue-mid">
            <Image
              src="/profile.png"
              alt="Alizée Perrichon"
              width={192}
              height={192}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
