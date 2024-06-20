"use client";
import Image from "next/image";
import React from "react";
import {
  aboutImageSrc,
  aboutDescription,
  skills,
} from "@/utils/constants/global-constants";

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="pt-24 pb-24 bg-gray-200 dark:bg-gray-950">
      <div className="section">
        <div className="mx-auto">
          {/* Título principal da seção */}
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-50">
              sobre mim
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-200">
              Conheça um pouco mais sobre minha trajetória e habilidades.
            </p>
          </div>

          {/* Conteúdo principal: imagem e texto */}
          <div className="flex flex-col md:flex-row items-center">
            {/* Imagem pessoal */}
            <div className="md:w-1/2 mb-10 md:mb-0">
              <Image
                src={aboutImageSrc}
                alt="lucas santos desenvolvedor web"
                height={400}
                width={400}
                className="rounded-lg"
              />
            </div>

            {/* Descrição pessoal e habilidades */}
            <div className="md:w-1/2">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-50">
                Lucas Santos
              </h3>
              {aboutDescription.map((text, index) => (
                <p
                  key={index}
                  className="mt-4 text-gray-600 dark:text-gray-300"
                >
                  {text}
                </p>
              ))}
              <h4 className="mt-6 text-xl font-semibold text-gray-800 dark:text-gray-50">
                Habilidades em Programação
              </h4>
              <ul className="mt-4 list-disc list-inside text-gray-600 dark:text-gray-200">
                {skills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
