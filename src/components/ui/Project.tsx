"use client";
import SectionTitle from "../About/SectionTitle";
import Works from "../Projects/Works";
import bg from "@/assets/bg.png";

const Projects = () => {
  return (
    <div className="w-full flex justify-center" id="projects">
      <div className="w-full xl:w-[70%] flex flex-col pb-16">
        <div
          className="justify-center w-full h-full shadow-2xl p-5"
          style={{
            backgroundImage: `url(${bg.src})`,

            boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.2)",
          }}
        >
          <div className="w-full ">
            <SectionTitle
              title="Projects"
              subtitle="A showcase of my recent..."
            />
          </div>
          <div
            className="justify-center w-full h-full p-5"
            style={{
              backgroundImage: `url(${bg.src})`,
            }}
          >
            <Works />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
