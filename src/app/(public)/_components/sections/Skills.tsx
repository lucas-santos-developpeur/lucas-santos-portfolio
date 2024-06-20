"use client";
import React from "react";
import { SkillsLevel } from "@/utils/constants/global-constants";

const Skills: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-950" id="skills">
      <div className="section">
        <div className="container mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-100">
              Habilidades
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-100">
              Minhas habilidades técnicas e áreas de especialização.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {SkillsLevel.map((skill) => (
              <div
                key={skill.name}
                className="mb-2 max-w-sm justify-self-center"
              >
                <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-100 flex items-center gap-2">
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
        </div>
      </div>
    </section>
  );
};

export default Skills;
