import React from "react";
import ContactLinks from "../navigations/ContactLinks";
import { FaWhatsapp, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import AnimateSection from "../animations/AnimateSection";

export const contacts = [
  {
    name: "WhatsApp",
    url: "https://wa.me/5591991149177",
    icon: <FaWhatsapp />,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/your_username",
    icon: <FaInstagram />,
  },
  {
    name: "GitHub",
    url: "https://github.com/your_username",
    icon: <FaGithub />,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/your_username",
    icon: <FaLinkedin />,
  },
  // Adicione mais contatos conforme necessário
];

const ContactSection: React.FC = () => {
  return (
    <AnimateSection sectionId="contact">
      <div className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-50">
              Contato
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-200">
              Entre em contato comigo através das seguintes plataformas.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {contacts.map((contact) => (
              <ContactLinks key={contact.name} contact={contact} />
            ))}
          </div>
        </div>
      </div>
    </AnimateSection>
  );
};

export default ContactSection;
