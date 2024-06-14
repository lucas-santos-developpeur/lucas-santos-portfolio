"use client";
import React from "react";
import { BiLogoPostgresql } from "react-icons/bi";
import { DiMongodb } from "react-icons/di";
import { FaCss3, FaHtml5, FaNodeJs } from "react-icons/fa";
import { FcProcess } from "react-icons/fc";
import { RiNextjsFill, RiReactjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiJavascript, SiTypescript } from "react-icons/si";
import { TbBrandMysql } from "react-icons/tb";
import CertificationCard, { certifications } from "../cards/CertificationCards";
import AnimateSection from "../animations/AnimateSection";

const skills = [
  { name: "HTML", icon: <FaHtml5 />, level: 97 },
  { name: "CSS", icon: <FaCss3 />, level: 97 },
  { name: "JavaScript", icon: <SiJavascript />, level: 90 },
  { name: "Tailwind css", icon: <RiTailwindCssFill />, level: 65 },
  { name: "TypeScript", icon: <SiTypescript />, level: 90 },
  { name: "Metodologias Ágeis", icon: <FcProcess />, level: 80 },
  { name: "ReactJS", icon: <RiReactjsFill />, level: 85 },
  { name: "NextJS", icon: <RiNextjsFill />, level: 90 },
  { name: "NodeJS", icon: <FaNodeJs />, level: 80 },
  { name: "PostgreSQL", icon: <BiLogoPostgresql />, level: 80 },
  { name: "MySQL", icon: <TbBrandMysql />, level: 75 },
  { name: "MongoDB", icon: <DiMongodb />, level: 75 },
];

const Skills: React.FC = () => {
  return (
    <AnimateSection>
      <section id="skills" className="section py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-gray-800">Habilidades</h2>
            <p className="mt-4 text-lg text-gray-600">
              Minhas habilidades técnicas e áreas de especialização.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {skills.map((skill) => (
              <div key={skill.name} className="mb-2">
                <h4 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                  {skill.icon} {skill.name}
                </h4>
                <div className="w-80 bg-gray-200 rounded-full h-4 mt-2">
                  <div
                    className="bg-blue-500 h-4 rounded-full"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-50">
              Certificações e Cursos
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-4">
              {certifications.map((cert) => (
                <CertificationCard key={cert.name} certification={cert} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </AnimateSection>
  );
};

export default Skills;
