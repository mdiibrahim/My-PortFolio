"use client";
import { m, LazyMotion, domAnimation } from "framer-motion";
interface ISectionTitle {
  title: string;
  subtitle: string;
}
const SectionTitle = (props: ISectionTitle) => {
  const { title, subtitle } = props;

  return (
    <LazyMotion features={domAnimation} strict>
      <m.div
        initial={{ x: -350 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 0.6, type: "spring" }}
        className="text-primary-400 p-6 noselect"
      >
        <span
          className="opacity-50"
          style={{
            textTransform: "uppercase",

            fontWeight: "600",
          }}
        >
          {subtitle}
        </span>
        <h2 className="tracking-wider text-7xl sm:text-8xl md:text-9xl">
          {title.split("").map((char, index) => {
            if (char === " ") {
              return " ";
            }
            return (
              <span key={index} className="bounce">
                {char}
              </span>
            );
          })}
        </h2>
      </m.div>
    </LazyMotion>
  );
};

export default SectionTitle;
