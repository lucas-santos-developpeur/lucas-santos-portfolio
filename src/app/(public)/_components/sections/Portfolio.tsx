import React from "react";
import ProjectCard from "../cards/ProjectCard";
import AnimateSection from "../animations/AnimateSection";

export const projects = [
  {
    name: "Killer Tattoo",
    description: "Crie aqui um texto de exemplo",
    link: "https://projeto-tatoo.vercel.app/",
    imageUrl: "/portfolio-images/killer-tattoo.png",
  },
  {
    name: "Este pode ser o seu projeto",
    description: "Entre em contato para criar um projeto incrível!",
    link: "https://wa.me/5591991149177",
    imageUrl: "/portfolio-images/wireframe.jpeg",
  },
  {
    name: "Este pode ser o seu projeto",
    description: "Entre em contato para criar um projeto incrível!",
    link: "https://wa.me/5591991149177",

    imageUrl: "/portfolio-images/wireframe.jpeg",
  },
  {
    name: "Este pode ser o seu projeto",
    description: "Entre em contato para criar um projeto incrível!",
    link: "https://wa.me/5591991149177",

    imageUrl: "/portfolio-images/wireframe.jpeg",
  },
];
export default function PortfolioSection() {
  return (
    <section
      id="portfolio"
      className="py-24 flex justify-center items-center bg-white dark:bg-slate-900"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-50">
            Portfólio
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-200">
            Alguns dos serviços que já realizei como freelancer.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
