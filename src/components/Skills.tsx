"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  "TypeScript",
  "JavaScript",
  "React",
  "Lit",
  "Redux",
  "SCSS",
  "Tailwind CSS",
  "Next.js",
  "C#",
  "Java",
  "Git",
  "Vitest",
  "Cypress",
  "Storybook",
  "Figma",
  "Framer Motion",
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
        {skills.map((skill) => (
          <motion.span
            key={skill}
            variants={{
              hidden: { opacity: 0, y: 6 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
            }}
            className="cursor-default rounded-sm border border-blue-mid bg-blue-light text-blue-deep px-4 py-1.5 text-sm"
          >
            {skill}
          </motion.span>
        ))}
      </motion.div>
    </section>
  );
}
