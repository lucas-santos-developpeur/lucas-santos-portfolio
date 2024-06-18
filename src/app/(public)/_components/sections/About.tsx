"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
export default function AboutSection() {
  return (
    <section id="about" className="pt-24 pb-24 bg-gray-200 dark:bg-gray-950">
      <div className="section">
        <div className="mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-50">
              sobre mim
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-200">
              Conheça um pouco mais sobre minha trajetória e habilidades.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <Image
                src={"/about-image.jpg"}
                alt="lucas santos desenvolvedor web"
                height={400}
                width={400}
                className="rounded-lg"
              />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-50">
                Lucas Santos
              </h3>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                Tenho 24 anos e sou natural de Belém do Pará, Brasil. Com mais
                de dois anos de estudos na área, atualmente estou no 5° semestre
                do curso de bacharelado em Engenharia de Software.
              </p>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                Apesar de ainda não ter experiência profissional na área, já
                realizei diversos serviços de criação de websites como
                freelancer. Além disso, possuo conhecimentos em marketing
                digital, incluindo copywriting de conteúdo e análise e criação
                de persona.
              </p>
              <h4 className="mt-6 text-xl font-semibold text-gray-800 dark:text-gray-50">
                Habilidades em Programação
              </h4>
              <ul className="mt-4 list-disc list-inside text-gray-600 dark:text-gray-200">
                <li>JavaScript e TypeScript</li>
                <li>Banco de dados relacionais e não relacionais (MongoDB)</li>
                <li>Desenvolvimento de APIs REST e RESTful com Node.js</li>
                <li>
                  Desenvolvimento de websites completos com Next.js/ReactJS
                </li>
                <li>Next-Auth</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
