"use client";
import { m, LazyMotion, domAnimation } from "framer-motion";
import { introduction } from "../About/Constant";
import ImageSlider from "../About/ImageSlider";
import SectionTitle from "../About/SectionTitle";
import bg from "@/assets/bg.png";

const About = () => {
  return (
    <div id="about" className="w-full flex justify-center overflow-hidden-web">
      <div className="w-full xl:w-[70%] flex flex-col pb-16">
        <div
          className="justify-center w-full h-full shadow-2xl p-5"
          style={{
            backgroundImage: `url(${bg.src})`,

            boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.2)",
          }}
        >
          <div className="w-full">
            <SectionTitle
              title="Myself"
              subtitle="Let me first give you an introduction about"
            />
          </div>
        </div>
        <div
          className="justify-center w-full h-full shadow-2xl p-5"
          style={{
            backgroundImage: `url(${bg.src})`,

            boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.2)",
          }}
        >
          <div className="w-full flex flex-col-reverse sm:flex-row">
            <div className="w-full text-lg font-thin md:w-[50%] md:h-full flex items-center mt-100">
              <LazyMotion features={domAnimation} strict>
                <m.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{
                    duration: 0.5,
                    type: "spring",
                    stiffness: 100,
                    damping: 20,
                  }}
                  className="text-grayscale-50 p-6 text-center flex flex-col gap-5"
                >
                  <span className=" text-xl font-extrabold">
                    {introduction.text[0]}
                  </span>
                  <span className="  font-bold">{introduction.text[1]}</span>
                  <span className="  ">{introduction.text[2]}</span>
                  <span className="   ">{introduction.text[3]}</span>
                  <span className="  ">{introduction.text[4]}</span>
                  <span className="  ">{introduction.text[5]}</span>
                  <span className="  ">{introduction.text[6]}</span>
                  <a href="https://drive.google.com/drive/folders/1VpQaKKRkPEl6QdcacTekAIBJIZajuGRT?usp=sharing">
                    <span className="text-blue-500  font-bold underline">
                      You can see my resume here.
                    </span>
                  </a>
                </m.p>
              </LazyMotion>
            </div>
            <div className="w-full md:w-[50%] flex h-full items-center justify-center">
              <ImageSlider />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
