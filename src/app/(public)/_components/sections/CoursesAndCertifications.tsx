import React from "react";
import CertificationCard from "../cards/CertificationCards";
import { certifications } from "@/utils/constants/global-constants";

type Props = {};

export default function CoursesAndCertifications({}: Props) {
  return (
    <section id="courses" className="py-24">
      <div className="section">
        <div className="">
          <h3 className="text-center mb-8 text-4xl font-bold text-gray-800 dark:text-gray-100">
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
  );
}
