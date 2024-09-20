"use client";

import SectionWrapper from "../Skills/SectionWrapper";
import BallCanvas from "../Skills/Ball";
import { technologies } from "../Skills/motion";
import bg from "@/assets/bg.png";
import SectionTitle from "../About/SectionTitle";
const Tech = () => {
  return (
    <div className="w-full flex justify-center" id="skills">
      <div className="w-full xl:w-[70%] flex flex-col pb-16">
        <div
          className="justify-center w-full h-full shadow-2xl p-5 "
          style={{
            backgroundImage: `url(${bg.src})`,

            boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.2)",
          }}
        >
          <div className="w-full ">
            <div
              className="justify-center w-full shadow-xl h-full"
              style={{
                backgroundImage: `url(${bg.src})`,
              }}
            >
              <SectionTitle
                title="Skills"
                subtitle="The expertise I've developed along the way..."
              />
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-10 mt-14">
            {technologies.map((technology) => (
              <div className="w-28 h-28" key={technology.name}>
                <BallCanvas icon={technology.icon} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");
