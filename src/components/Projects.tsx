"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";

type BadgeType = "wip" | "completed";

type PersonalProject = {
  num: string;
  name: string;
  desc: string;
  lang: string;
  dotColor: string;
  href: string;
  live: string;
  image: string;
  badge: { label: string; type: BadgeType };
  progress?: { label: string; value: number };
};

type SchoolProject = {
  num: string;
  name: string;
  desc: string;
  lang: string;
  dotColor: string;
  href: string;
};

const personalProjects: PersonalProject[] = [
  {
    num: "01",
    name: "Blossom Tasks",
    desc: "Personal project to learn React — todo list app focused on building reusable UI components and scalable state management. I wanted a to-do list that feels simple, practical, and enjoyable to use every day.",
    lang: "TypeScript · React",
    dotColor: "bg-blue",
    href: "https://github.com/AlizeePe/blossom-tasks",
    live: "https://alizeepe.github.io/blossom-tasks/",
    image: "/projects/blossom-tasks.png",
    badge: { label: "Completed", type: "completed" },
  },
  {
    num: "02",
    name: "Nabi 나비",
    desc: "Korean vocabulary learning app built with React and TypeScript — interactive flashcards with flip animation, session scoring, and TOPIK 1 vocabulary dataset. Built with a scalable feature-based architecture. Quiz mode and Zustand state management in progress.",
    lang: "TypeScript · React",
    dotColor: "bg-blue",
    href: "https://github.com/AlizeePe/nabi",
    live: "https://alizeepe.github.io/nabi/",
    image: "/projects/nabi-preview.png",
    badge: { label: "Work in progress", type: "wip" },
    progress: {
      label: "Flashcards · Session scoring · Quiz coming next",
      value: 20,
    },
  },
];

const schoolProjects: SchoolProject[] = [
  {
    num: "03",
    name: "ENI Shop",
    desc: "School project — native Android shopping app built with Kotlin, featuring product browsing and a shopping flow.",
    lang: "Kotlin · Android",
    dotColor: "bg-[#A97BFF]",
    href: "https://github.com/AlizeePe/AndroidStudioEniShopProject",
  },
  {
    num: "04",
    name: "Carbon Footprint",
    desc: "School project — Angular app designed to collect user input and estimate carbon footprint through a simple UI.",
    lang: "TypeScript · Angular",
    dotColor: "bg-[#3178C6]",
    href: "https://github.com/AlizeePe/carbon-footprint",
  },
];

export default function Projects() {
  const ref = useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [lightbox, setLightbox] = useState<number | null>(null);

  const badgeStyle = {
    wip: "bg-amber-50 border-amber-200 text-amber-800",
    completed: "bg-green-50 border-green-200 text-green-800",
  };

  return (
    <section ref={ref} id="projects" className="py-14">
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="text-base tracking-widest uppercase text-neutral-500 mb-7"
      >
        Projects
      </motion.p>

      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={{
          visible: { transition: { staggerChildren: 0.1 } },
          hidden: {},
        }}
        className="flex flex-col gap-4"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {personalProjects.map((project, i) => (
            <motion.article
              key={project.num}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
              }}
              className="group border border-neutral-100 rounded-xl overflow-hidden bg-white hover:bg-neutral-50 transition-colors duration-200 flex flex-col"
            >
              <div
                className="h-64 overflow-hidden bg-neutral-50 cursor-zoom-in"
                onClick={() => setLightbox(i)}
              >
                <Image
                  src={project.image}
                  alt={project.name}
                  width={600}
                  height={256}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-blue tracking-widest font-medium">
                    {project.num}
                  </span>
                  <span
                    className={`text-[10px] px-2 py-0.5 rounded-sm border ${badgeStyle[project.badge.type]}`}
                  >
                    {project.badge.label}
                  </span>
                </div>

                <p className="text-sm font-medium">{project.name}</p>

                {project.progress && (
                  <div className="mt-2 mb-1">
                    <div className="h-0.5 bg-neutral-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-blue rounded-full"
                        style={{ width: `${project.progress.value}%` }}
                      />
                    </div>
                    <p className="text-[10px] text-neutral-400 mt-1">
                      {project.progress.label}
                    </p>
                  </div>
                )}

                <p className="text-[13px] text-neutral-600 leading-relaxed mt-1 flex-1">
                  {project.desc}
                </p>

                <div className="flex justify-between items-center mt-3">
                  <p className="flex items-center gap-1.5 text-xs text-neutral-500">
                    <span
                      className={`w-2 h-2 rounded-full ${project.dotColor}`}
                    />
                    {project.lang}
                  </p>
                  <div className="flex items-center gap-3">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.name} live`}
                      className="text-xs text-white bg-blue px-3 py-1.5 rounded-sm hover:bg-blue-deep transition-colors duration-200"
                    >
                      Live ↗
                    </a>
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.name} on GitHub`}
                      className="text-xs text-blue hover:underline"
                    >
                      GitHub ↗
                    </a>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {schoolProjects.map((project) => (
            <motion.article
              key={project.num}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
              }}
              className="group flex flex-col gap-2 border border-neutral-100 rounded-xl bg-white p-5 hover:bg-neutral-50 transition-colors duration-200"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs text-blue tracking-widest font-medium">
                  {project.num}
                </span>
                <span className="text-[10px] bg-neutral-50 border border-neutral-300 text-neutral-600 px-2 py-0.5 rounded-sm">
                  School project
                </span>
              </div>
              <p className="text-sm font-medium leading-snug">{project.name}</p>
              <p className="text-[13px] text-neutral-600 leading-relaxed flex-1">
                {project.desc}
              </p>
              <div className="flex justify-between items-center mt-1">
                <span className="flex items-center gap-1.5 text-xs text-neutral-500">
                  <span
                    className={`w-2 h-2 rounded-full ${project.dotColor}`}
                  />
                  {project.lang}
                </span>
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.name} on GitHub`}
                  className="text-xs text-blue hover:underline"
                >
                  GitHub ↗
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>

      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-6"
          onClick={() => setLightbox(null)}
        >
          <Image
            src={personalProjects[lightbox].image}
            alt={`${personalProjects[lightbox].name} preview`}
            width={800}
            height={600}
            className="max-h-[90vh] w-auto object-contain rounded-lg"
          />
        </div>
      )}
    </section>
  );
}
