"use client";

import { useRef } from "react";

import { motion, useInView } from "framer-motion";
import Image from "next/image";

import { useLightbox } from "@/hooks/useLightbox";

type Work = {
  badge: string;
  title: string;
  desc: string;
  stat?: string;
  image: string;
};

type Experience = {
  date: string;
  title: string;
  type?: string;
  company: string;
  bullets: string[];
  tags: string[];
  work?: Work[];
};

const experiences: Experience[] = [
  {
    date: "Sep 2023 — Present",
    title: "Frontend Developer",
    company: "HelloWork · Buddi team · Rennes, France",
    bullets: [
      "Build reusable components and interfaces with Lit, TypeScript & SCSS",
      "Contribute to a scalable design system (Figma, Storybook)",
      "Manage application state with Redux, including optimistic updates",
      "Implement feature flags for progressive rollout",
      "Write end-to-end tests with Cypress to ensure reliability",
      "Develop backend features with C# and .NET",
      "Contribute to code reviews, Gitflow workflow and production releases",
    ],
    tags: [
      "TypeScript",
      "Lit",
      "Redux",
      "SCSS",
      "Storybook",
      "Cypress",
      "C#",
      "Git",
    ],
    work: [
      {
        badge: "Legacy migration",
        title: "Companies management page",
        desc: "Migrated a legacy interface to a modern SPA — rebuilt from scratch including frontend, backend and E2E tests.",
        image: "/work/company.png",
      },
      {
        badge: "Feature",
        title: "1-click candidate pre-selection",
        desc: "Reduced candidate pre-selection from 3 steps to 1 click.",
        stat: "Reduced processing time by 45%",
        image: "/work/preselection.png",
      },
    ],
  },
  {
    date: "2023 — 2025",
    type: "4-year degree",
    title: "Application Development Degree",
    company: "ENI · France",
    bullets: [
      "Built web and mobile applications with Java Spring Boot, Angular, and Kotlin",
      "Developed an Android e-commerce app and a carbon footprint estimator",
    ],
    tags: ["Java", "Spring Boot", "Kotlin", "Angular"],
  },
  {
    date: "2020 — 2021",
    type: "Bachelor's Degree",
    title: "Web & Digital (Web Marketing)",
    company: "My Digital School · France",
    bullets: [
      "Built and deployed a full website using WordPress",
      "Improved SEO performance through technical optimizations and content strategy",
    ],
    tags: ["WordPress", "SEO", "HTML", "CSS", "Photoshop", "Illustrator"],
  },
];

export default function Experiences() {
  const ref = useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const { lightbox, open, close } = useLightbox<string>();

  return (
    <section ref={ref} id="experience" className="py-14">
      <motion.h2
        initial={{ opacity: 0, y: 8 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="text-base tracking-widest uppercase text-neutral-500 mb-7"
      >
        Experience & Education
      </motion.h2>
      <div className="flex flex-col">
        {experiences.map((experience, index) => (
          <motion.div
            key={experience.title}
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.45,
              delay: index * 0.12,
              ease: "easeOut",
            }}
            className="grid gap-6 py-6 border-b border-neutral-100 last:border-none md:grid-cols-[160px_1fr] md:gap-15"
          >
            <div>
              <p className="text-sm text-neutral-600">{experience.date}</p>
              {experience.type && (
                <p className="text-xs text-blue mt-1 tracking-wide">
                  {experience.type}
                </p>
              )}
            </div>
            <div>
              <p className="text-sm font-medium">{experience.title}</p>
              <p className="text-sm text-neutral-600 mt-1">
                {experience.company}
              </p>
              {experience.bullets.length > 0 && (
                <ul className="mt-4 flex flex-col gap-2">
                  {experience.bullets.map((bullet) => (
                    <li
                      key={`${experience.title}-${bullet}`}
                      className="flex items-start gap-2 text-sm text-neutral-600 leading-relaxed"
                    >
                      <span className="mt-2 w-1 h-1 rounded-full bg-blue shrink-0" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              )}
              {experience.work && (
                <div className="mt-6">
                  <p className="text-[10px] tracking-widest uppercase text-neutral-400 mb-3">
                    Featured work
                    <span className="normal-case tracking-normal ml-2 text-neutral-400">
                      — screenshots anonymized
                    </span>
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {experience.work.map((item) => (
                      <div
                        key={item.title}
                        className="border border-neutral-100 rounded-xl overflow-hidden"
                      >
                        <button
                          className="h-36 w-full overflow-hidden bg-neutral-50 cursor-zoom-in block"
                          onClick={() => open(item.image)}
                          aria-label={`View ${item.title} preview`}
                        >
                          <Image
                            src={item.image}
                            alt={item.title}
                            width={400}
                            height={144}
                            className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700 ease-out"
                          />
                        </button>
                        <div className="p-4">
                          <span className="text-[10px] bg-blue-light border border-blue-mid text-blue-dark px-2 py-0.5 rounded-sm">
                            {item.badge}
                          </span>
                          <p className="text-sm font-medium mt-2">
                            {item.title}
                          </p>
                          <p className="text-xs text-neutral-500 leading-relaxed mt-1">
                            {item.desc}
                          </p>
                          {item.stat && (
                            <p className="text-xs text-blue font-medium mt-2">
                              {item.stat}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              <div className="flex flex-wrap gap-1.5 mt-3">
                {experience.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-sm border bg-neutral-100 border-neutral-300 text-neutral-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {lightbox && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Work preview"
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-6"
          onClick={() => close()}
        >
          <button
            onClick={() => close()}
            aria-label="Close preview"
            className="absolute top-4 right-4 text-white text-sm bg-white/20 px-3 py-1.5 rounded-sm hover:bg-white/30"
          >
            ✕
          </button>
          <Image
            src={lightbox}
            alt="Work preview"
            width={1200}
            height={800}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[90vh] w-auto object-contain rounded-lg"
          />
        </div>
      )}
    </section>
  );
}
