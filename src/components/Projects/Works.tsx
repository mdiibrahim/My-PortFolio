"use client";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { projects } from "./Constant"; // Assuming this has the correct typing for projects data
import githubIcon from "@/assets/tech/Github-Dark.png";
import Image from "next/image";

// Animation utility types
export const staggerContainer = (
  staggerChildren: number,
  delayChildren: number
) => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delayChildren || 0,
      },
    },
  };
};

export const textVariant = (delay: number) => {
  return {
    hidden: {
      y: -50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.25,
        delay: delay,
      },
    },
  };
};

export const fadeIn = (
  direction: "left" | "right" | "up" | "down",
  type: "spring" | "tween",
  delay: number,
  duration: number
) => {
  return {
    hidden: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const zoomIn = (delay: number, duration: number) => {
  return {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "tween",
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const slideIn = (
  direction: "left" | "right" | "up" | "down",
  type: "spring" | "tween",
  delay: number,
  duration: number
) => {
  return {
    hidden: {
      x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
      y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

// Utility function for parsing bold features
const parseFeature = (feature: string) => {
  // Split the feature text into segments between ** and normal text
  const segments = feature.split(/\*\*(.*?)\*\*/g); // Regex to split on **
  return (
    <>
      {segments.map((segment, i) =>
        i % 2 === 1 ? (
          <strong key={i}>{segment}</strong> // Render bold text for segments between **
        ) : (
          <span key={i}>{segment}</span> // Render normal text
        )
      )}
    </>
  );
};

// ProjectCardProps Interface for typing the props in ProjectCard
interface ProjectCardProps {
  index: number;
  name: string;
  technologies: string[];
  features: string[];
  image: string;
  source_code_link: string;
  server_code_link?: string | null;
  demo_link: string;
}

// ProjectCard component with proper types
const ProjectCard: React.FC<ProjectCardProps> = ({
  index,
  name,
  technologies,
  features,
  image,
  source_code_link,
  demo_link,
  server_code_link,
}) => {
  return (
    <Tilt
      options={{
        max: 40,
        scale: 1,
        speed: 450,
      }}
      className="  rounded-lg sm:w-[300px] w-[100%] cursor-pointer "
    >
      <div
        onClick={() => window.open(demo_link, "_blank")}
        rel="noopener noreferrer"
      >
        <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
          <div className="relative w-full h-[300px]">
            <Image
              src={image}
              alt={name}
              unoptimized
              fill
              style={{ objectFit: "contain" }}
              className="rounded-lg"
            />
          </div>

          <div className="mt-3">
            <h3 className="text-white font-bold text-2xl">{name}</h3>

            <h4 className="text-white font-bold">Features:</h4>
            <ul className="mt-2">
              {features.map((feature, i) => (
                <li key={i} className="text-secondary text-[14px] leading-snug">
                  {parseFeature(feature)}
                </li>
              ))}
            </ul>
            <h4 className="text-white font-bold">Technologies:</h4>
            <ul className="flex flex-wrap gap-2">
              {technologies.map((tech, i) => (
                <li key={i} className="text-secondary text-sm">
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          {/* Links Section */}
          <div className="mt-3 flex justify-between items-center">
            {/* GitHub (Client-Side Code) */}
            <div className="relative w-8 h-8 flex justify-center items-center cursor-pointer group">
              <Image
                src={githubIcon}
                alt="github"
                className="w-full h-full object-contain"
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(source_code_link, "_blank");
                }}
              />
              <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs rounded-md py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Client Code
              </div>
            </div>

            {/* Demo Link */}
            <a
              className="shadow-md shadow-primary btn p-2 bg-tertiary rounded-lg flex justify-center"
              href={demo_link}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Live Preview
            </a>

            {/* GitHub (Server-Side Code, if exists) */}
            {server_code_link && (
              <div className="relative w-8 h-8 flex justify-center items-center cursor-pointer group">
                <Image
                  src={githubIcon}
                  alt="github"
                  className="w-full h-full object-contain"
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(server_code_link, "_blank");
                  }}
                />
                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs rounded-md py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Server Code
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </Tilt>
  );
};

// Works Component
const Works: React.FC = () => {
  return (
    <div className="mt-5 flex flex-wrap justify-center gap-4  w-full">
      {projects.map((project, index) => (
        <ProjectCard key={`project-${index}`} index={index} {...project} />
      ))}
    </div>
  );
};

export default Works;
