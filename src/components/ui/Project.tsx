"use client";
import SectionTitle from "../About/SectionTitle";
import Works from "../Projects/Works";

const Projects = () => {
  return (
    <div className="w-full flex justify-center" id="projects">
      <div className="w-full xl:w-[70%] flex flex-col pb-16">
        <div className="w-full ">
          <SectionTitle title="PROJECTS" subtitle="What I have done so far" />
        </div>
        <Works />
      </div>
    </div>
  );
};

export default Projects;
