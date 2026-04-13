import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experiences from "@/components/Experiences";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto px-6 md:px-12 flex flex-col">
      <Hero />
      <hr className="border-neutral-300" />
      <Skills />
      <hr className="border-neutral-300" />
      <Experiences />
      <hr className="border-neutral-300" />
      <Projects />
    </main>
  );
}
