import { ReactNode } from "react";
import { BiLogoPostgresql } from "react-icons/bi";
import { DiMongodb } from "react-icons/di";
import { FaCss3, FaHtml5, FaNodeJs } from "react-icons/fa";
import { FcProcess } from "react-icons/fc";
import { RiNextjsFill, RiReactjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiJavascript, SiTypescript } from "react-icons/si";
import { TbBrandMysql } from "react-icons/tb";

export type LucasSantosLinksType = {
  whatsapp: string;
  github: string;
  linkedin: string;
  instagram: string;
};

export const LucasSantosLinks: LucasSantosLinksType = {
  whatsapp: "https://wa.me/5591991149177",
  github: "https://github.com/lucas-santos-developpeur",
  linkedin: "https://www.linkedin.com/in/lucas-santos-developer",
  instagram: "https://www.instagram.com/lucassantos.sh",
};

// About section constants
export const aboutImageSrc = "/about-image.jpg";
export const aboutDescription: string[] = [
  "Tenho 24 anos e sou natural de Belém do Pará, Brasil. Com mais de dois anos de estudos na área, atualmente estou no 5° semestre do curso de bacharelado em Engenharia de Software.",
  "Apesar de ainda não ter experiência profissional na área, já realizei diversos serviços de criação de websites como freelancer. Além disso, possuo conhecimentos em marketing digital, incluindo copywriting de conteúdo e análise e criação de persona.",
];
export const skills: string[] = [
  "JavaScript e TypeScript",
  "Banco de dados relacionais e não relacionais (MongoDB)",
  "Desenvolvimento de APIs REST e RESTful com Node.js",
  "Desenvolvimento de websites completos com Next.js/ReactJS",
  "Next-Auth",
];

export type SkillstType = {
  name: string;
  icon: ReactNode;
  level: number;
};

export const SkillsLevel: SkillstType[] = [
  { name: "HTML", level: 97, icon: <FaHtml5 /> },
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

export type CertificationType = {
  name: string;
  date: string;
  description: string;
  imageUrl: string;
};

export const certifications: CertificationType[] = [
  {
    name: "Desenvolvimento web completo 2021",
    date: "2021",
    description:
      "Curso completo abordando HTML, CSS e JavaScript, com vários projetos práticos.",
    imageUrl: "/images/certificados/dev-web.jpg",
  },
  {
    name: "Curso de TypeScript com projetos",
    date: "2023",
    description:
      "Aprendizado de TypeScript com foco em projetos práticos e avançados.",
    imageUrl: "/images/certificados/typescript.jpg",
  },
  {
    name: "Análise e levantamento de requisitos",
    date: "2023",
    description:
      "Curso focado na análise e levantamento de requisitos para desenvolvimento de software.",
    imageUrl: "/images/certificados/requisitos.jpg",
  },
  {
    name: "Curso de marketing digital",
    date: "2023",
    description:
      "Curso abrangente de marketing digital, incluindo SEO, SEM e mídias sociais.",
    imageUrl: "/images/certificados/marketing-digital.jpg",
  },
  {
    name: "Figma design de interfaces",
    date: "2023",
    description:
      "Curso de design de interfaces utilizando Figma, do básico ao avançado.",
    imageUrl: "/images/certificados/figma.jpg",
  },
];
