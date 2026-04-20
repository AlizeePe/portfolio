"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skills = {
  main: ["TypeScript", "JavaScript", "Lit", "Redux", "C#"],
  other: [
    "React",
    "Next.js",
    "Java",
    "SCSS",
    "Tailwind CSS",
    "Git",
    "Cypress",
    "Storybook",
    "Figma",
    "Framer Motion",
  ],
};

const allSkills = [
  ...skills.main.map((skill) => ({ label: skill, primary: true })),
  ...skills.other.map((skill) => ({ label: skill, primary: false })),
];

export default function Skills() {
  const ref = useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} id="skills" className="py-14">
      <motion.h2
        initial={{ opacity: 0, y: 8 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="text-base tracking-widest uppercase text-neutral-500 mb-7"
      >
        Skills
      </motion.h2>
      <motion.div
        className="flex flex-wrap gap-2"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={{
          visible: { transition: { staggerChildren: 0.04 } },
          hidden: {},
        }}
      >
        {allSkills.map(({ label, primary }) => (
          <motion.span
            key={label}
            variants={{
              hidden: { opacity: 0, y: 6 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
            }}
            className={`cursor-default rounded-sm border px-4 py-1.5 text-sm transition-colors duration-200 ${
              primary
                ? "border-blue-mid bg-blue-light text-blue-deep"
                : "border-neutral-300 bg-neutral-50 text-neutral-600"
            }`}
          >
            {label}
          </motion.span>
        ))}
      </motion.div>
    </section>
  );
}
