"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import Link from "next/link";
import WorkSliderBtns from "@/components/WorkSliderBtns";
import { Button } from "@/components/ui/button";

const WorkSliderClient = ({ projects }) => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <div className="flex flex-col xl:flex-row xl:gap-[30px]">
      <div className="w-full xl:w-[50%] flex flex-col xl:justify-between order-2 xl:order-none">
        <div className="flex flex-col" aria-live="polite">
          <h3 className="mb-1">{project.title}</h3>
          <p className="font-semibold text-sm mb-6">🛠 {project.role}</p>
          <p className="mb-6">{project.description}</p>

          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech.name}
                className="flex items-center bg-gray-100 text-xs px-2 py-1 rounded-full"
              >
                <span className="mr-1">{tech.icon}</span> {tech.name}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-4 mt-8">
            <Link href={project.live}>
              <Button asChild variant="outline">
                <span>Go to Project</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="w-full xl:w-[50%] relative">
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          className="mb-12"
          onSlideChange={handleSlideChange}
        >
          {projects.map((p, index) => (
            <SwiperSlide key={p.id} className="w-full">
              <div className="h-[460px] relative group flex justify-center items-center">
                <div className="relative w-full h-full">
                  <Image
                    src={p.image}
                    fill
                    className="object-cover"
                    alt={p.title}
                    priority={index === 0}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}

          <WorkSliderBtns
            containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
            btnStyles="bg-primary hover:bg-primary-hover text-white text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
            iconsStyles="inline"
          />
        </Swiper>
      </div>
    </div>
  );
};

export default WorkSliderClient;
