import React from "react";
import AnimateSection from "../animations/AnimateSection";
import CertificationCard, { certifications } from "../cards/CertificationCards";

type Props = {};

export default function CoursesAndCertifications({}: Props) {
  return (
    <AnimateSection sectionId="courses">
      <div className="section py-20">
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
    </AnimateSection>
  );
}
