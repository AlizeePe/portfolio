"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";

const projects: {
  num: string;
  name: string;
  desc: string;
  lang: string;
  dotColor: string;
  href: string;
  live?: string;
  image?: string;
}[] = [
  {
    num: "01",
    name: "Blossom Tasks",
    desc: "Personal project to learn React — Todo list app focused on building reusable UI components and scalable state management with React, TypeScript, Vite, and SCSS. I wanted a to-do list that feels simple, practical, and enjoyable to use every day.",
    lang: "TypeScript · React",
    dotColor: "bg-blue",
    href: "https://github.com/AlizeePe/blossom-tasks",
    live: "https://alizeepe.github.io/blossom-tasks/",
    image: "/projects/blossom-tasks.png",
  },
  {
    num: "02",
    name: "ENI Shop",
    desc: "School project — native Android shopping app built with Kotlin, featuring product browsing and a shopping flow.",
    lang: "Kotlin · Android",
    dotColor: "bg-[#A97BFF]",
    href: "https://github.com/AlizeePe/AndroidStudioEniShopProject",
  },
  {
    num: "03",
    name: "Carbon Footprint",
    desc: "School project — Angular app designed to collect user input and estimate carbon footprint through a simple UI.",
    lang: "TypeScript · Angular",
    dotColor: "bg-[#3178C6]",
    href: "https://github.com/AlizeePe/carbon-footprint",
  },
];
const featured = projects[0];
const others = projects.slice(1);

export default function Projects() {
  const ref = useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [lightbox, setLightbox] = useState(false);

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
        {/* Featured project */}
        <motion.article
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
          }}
          className="group border border-neutral-100 rounded-xl overflow-hidden bg-white hover:bg-neutral-50 transition-colors duration-200"
        >
          {featured.image && (
            <div
              className="h-64 overflow-hidden bg-neutral-50 cursor-zoom-in"
              onClick={() => setLightbox(true)}
            >
              <Image
                src={featured.image}
                alt={featured.name}
                width={900}
                height={256}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
          )}
          <div className="p-6">
            <span className="text-xs text-blue tracking-widest font-medium">
              {featured.num}
            </span>
            <p className="text-sm font-medium mt-1">{featured.name}</p>
            <p className="text-[13px] text-neutral-600 leading-relaxed mt-1">
              {featured.desc}
            </p>
            <div className="flex justify-between items-center mt-3">
              <span className="flex items-center gap-1.5 text-xs text-neutral-500">
                <span className={`w-2 h-2 rounded-full ${featured.dotColor}`} />
                {featured.lang}
              </span>
              <div className="flex items-center gap-4">
                {featured.live && (
                  <a
                    href={featured.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${featured.name} live`}
                    className="text-xs text-white bg-blue px-3 py-1.5 rounded-sm tracking-wide hover:bg-blue-deep transition-colors duration-200"
                  >
                    Live ↗
                  </a>
                )}
                <a
                  href={featured.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${featured.name} on GitHub`}
                  className="text-xs text-blue tracking-wide hover:underline"
                >
                  GitHub ↗
                </a>
              </div>
            </div>
          </div>
        </motion.article>

        {/* Secondary projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {others.map((project) => (
            <motion.article
              key={project.num}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
              }}
              className="group flex flex-col gap-2 border border-neutral-100 rounded-xl bg-white p-6 hover:bg-neutral-50 transition-colors duration-200"
            >
              <span className="text-xs text-blue tracking-widest font-medium">
                {project.num}
              </span>
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
                  className="text-xs text-blue tracking-wide hover:underline"
                >
                  GitHub ↗
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-6"
          onClick={() => setLightbox(false)}
        >
          <Image
            src="/projects/blossom-tasks.png"
            alt="Blossom Tasks preview"
            width={800}
            height={600}
            className="max-h-[90vh] w-auto object-contain rounded-lg"
          />
        </div>
      )}
    </section>
  );
}
