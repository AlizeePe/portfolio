"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    date: "Sep 2023 — Present",
    title: "Frontend Developer",
    company: "HelloWork · Rennes, France",
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

  return (
    <section ref={ref} id="experience" className="py-14">
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="text-base tracking-widest uppercase text-neutral-500 mb-7"
      >
        Experience & Education
      </motion.p>
      <div className="flex flex-col">
        {experiences.map((experience, index) => (
          <motion.div
            key={index}
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
                      key={bullet}
                      className="flex items-start gap-2 text-sm text-neutral-600 leading-relaxed"
                    >
                      <span className="mt-2 w-1 h-1 rounded-full bg-blue shrink-0" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              )}
              <div className="flex flex-wrap gap-1.5 mt-3">
                {experience.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`text-xs px-2.5 py-1 rounded-sm border bg-neutral-100 border-neutral-300 text-neutral-700`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
