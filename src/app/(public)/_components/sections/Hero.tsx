import React from "react";
import { FaWhatsapp, FaGithub, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import { LucasSantosLinks } from "@/utils/constants/global-constants";

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="pt-24 lg:pt-0 bg-gradient-to-br from-slate-200 dark:from-slate-700 via-slate-300 dark:via-slate-800 to-slate-400 dark:to-slate-900"
    >
      <div className="container flex flex-col md:flex-row justify-between items-center min-h-screen">
        <div className="md:max-w-xl">
          <h1 className="text-5xl font-bold text-gray-950 dark:text-gray-50 mb-4">
            Olá! sou o Lucas Santos
          </h1>
          <h2 className="font-semibold mb-8">Desenvolvedor web</h2>
          <p className="text-gray-800 dark:text-gray-200 mb-2">
            Combinando criatividade e tecnologia, desenvolvo soluções digitais
            que não só funcionam, mas também encantam os usuários e clientes.
          </p>
          <p className="text-gray-900 dark:text-gray-200 mb-6">
            Entre em contato e vamos conversar!
          </p>
          <div className="gap-4">
            <a
              href={LucasSantosLinks.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit mx-auto md:mx-0 flex items-center gap-2 px-4 py-2 bg-green-700 text-white rounded-lg hover:bg-green-900 transition-colors duration-300"
            >
              <FaWhatsapp className="text-xl" />
              <span>Whatsapp</span>
            </a>
            <div className="flex gap-4 justify-center md:justify-start mt-8">
              <a
                href={LucasSantosLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="h-fit rounded-full"
              >
                <FaGithub size={32} />
              </a>
              <a
                href={LucasSantosLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="h-fit transition-colors duration-300"
              >
                <FaLinkedin size={32} />
              </a>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-br from-sky-500 via-blue-700 to-transparent backdrop-blur-sm p-1 rounded-lg">
          <Image
            src="/about-image.jpg"
            alt="Lucas Santos"
            height={500}
            width={500}
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
