import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { LucasSantosLinks } from "@/utils/constants/global-constants";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 dark:bg-slate-900 py-8">
      <div className="container max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-50 mb-4">
          Entre em Contato
        </h2>
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href={LucasSantosLinks.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 dark:text-gray-50 hover:text-green-500 transition-colors duration-300"
          >
            <FaWhatsapp size={32} />
          </a>
          <a
            href={LucasSantosLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 dark:text-gray-50 hover:text-gray-600 transition-colors duration-300"
          >
            <FaGithub size={32} />
          </a>
          <a
            href={LucasSantosLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 dark:text-gray-50 hover:text-blue-600 transition-colors duration-300"
          >
            <FaLinkedin size={32} />
          </a>
          <a
            href={LucasSantosLinks.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 dark:text-gray-50 hover:text-pink-500 transition-colors duration-300"
          >
            <FaInstagram size={32} />
          </a>
        </div>
        <p className="text-gray-600 dark:text-gray-200">
          &copy; 2023 Lucas Santos. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
