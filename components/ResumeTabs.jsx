"use client";

import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaPhp,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaVuejs,
  FaLaravel,
  FaGulp,
  FaSass,
  FaGithub,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiNuxtdotjs,
  SiJquery,
  SiVuetify,
  SiWebpack,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";

const ICON_MAP = {
  FaHtml5,
  FaCss3,
  FaJs,
  FaPhp,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaVuejs,
  FaLaravel,
  FaGulp,
  FaSass,
  FaGithub,
  SiTailwindcss,
  SiNextdotjs,
  SiNuxtdotjs,
  SiJquery,
  SiVuetify,
  SiWebpack,
  SiAdobexd,
  SiAdobephotoshop,
};

const ResumeTabs = ({ experiences, educations, skills, about }) => {
  return (
    <Tabs
      defaultValue="experience"
      className="flex flex-col xl:flex-row gap-[60px]"
    >
      <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
        <TabsTrigger value="experience">Experience</TabsTrigger>
        <TabsTrigger value="education">Education</TabsTrigger>
        <TabsTrigger value="skills">Skills</TabsTrigger>
        <TabsTrigger value="about">About me</TabsTrigger>
      </TabsList>

      <div className="min-h-[70vh] w-full">
        <TabsContent value="experience" className="w-full">
          {experiences && (
          <div className="flex flex-col gap-[10px]">
            <h2 className="text-center xl:text-left">{experiences.title}</h2>
            <ol className="relative">
              {experiences.items.map((item, i) => (
                <li
                  key={i}
                  className="relative pl-8 xl:pl-32 py-6 last:before:hidden before:absolute before:left-2 xl:before:left-0 before:h-[calc(100%-12px)] before:px-[2px] before:bg-primary-gradient xl:before:ml-[6.5rem] before:top-[50px]
                     after:absolute after:left-[2px] xl:after:left-[-6px] after:w-2 after:h-2 after:border-4 after:box-content after:border-primary after:rounded-full xl:after:ml-[6.5rem] after:top-[35px]"
                >
                  <div className="flex flex-col xl:flex-row items-start">
                    <time className="xl:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-30 h-7 mb-3 xl:mb-0 p-2 bg-primary-gradient text-white rounded-full">
                      {item.year}
                    </time>
                    <h3 className="mb-2">{item.position}</h3>
                  </div>
                  <p className="font-bold mb-4">{item.company}</p>
                  <ul className="space-y-1.5 list-disc list-inside flex flex-col items-start">
                    {item.detailList.map((detail, j) => (
                      <li key={j}>{detail}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </div>
          )}
        </TabsContent>

        <TabsContent value="education" className="w-full">
          {educations && (
          <div className="flex flex-col gap-[10px]">
            <h2 className="text-center xl:text-left">{educations.title}</h2>
            <ol className="relative">
              {educations.items.map((item, i) => (
                <li
                  key={i}
                  className="relative pl-8 xl:pl-32 py-6 last:before:hidden before:absolute before:left-2 xl:before:left-0 before:h-[calc(100%-12px)] before:px-[2px] before:bg-primary-gradient xl:before:ml-[6.5rem] before:top-[50px]
                     after:absolute after:left-[2px] xl:after:left-[-6px] after:w-2 after:h-2 after:border-4 after:box-content after:border-primary after:rounded-full xl:after:ml-[6.5rem] after:top-[35px]"
                >
                  <div className="flex flex-col xl:flex-row items-start">
                    <time className="xl:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-30 h-7 mb-3 xl:mb-0 p-2 bg-primary-gradient text-white rounded-full">
                      {item.period}
                    </time>
                    <h3 className="mb-2">{item.school}</h3>
                  </div>
                  <p className="mb-4">{item.faculty}</p>
                  <p className="mb-4">{item.jpFaculty}</p>
                </li>
              ))}
            </ol>
          </div>
          )}
        </TabsContent>

        <TabsContent value="skills" className="w-full h-full">
          {skills && (
          <div className="flex flex-col gap-[30px]">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
              <h2>{skills.title}</h2>
            </div>
            <ul className="grid grid-cols-2 xl:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
              {skills.skillList.map((skill, index) => {
                const Icon = ICON_MAP[skill.icon];
                return (
                  <li key={index}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-full h-[130px] rounded-xl flex justify-center items-center group bg-[#303153]">
                          <div className="text-6xl text-white group-hover:text-primary transition-all duration-300">
                            {Icon ? <Icon /> : null}
                          </div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="capitalize">{skill.name}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </li>
                );
              })}
            </ul>
          </div>
          )}
        </TabsContent>

        <TabsContent value="about" className="w-full text-center xl:text-left">
          {about && (
            <div className="flex flex-col gap-[30px]">
              <h2>{about.title}</h2>
              <p className="max-w-[600px] mx-auto xl:mx-0">
                {about.description}
              </p>
              <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                {about.info.map((item, index) => (
                  <li key={index} className="flex items-center gap-4">
                    <span className="font-bold block min-w-[90px]">
                      {item.fieldName}
                    </span>
                    <span className="text-xl">{item.fieldValue}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </TabsContent>
      </div>
    </Tabs>
  );
};

export default ResumeTabs;
