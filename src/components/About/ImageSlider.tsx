"use client";
import { useEffect, useState, useRef } from "react";
import { m, LazyMotion, domAnimation } from "framer-motion";
import Image from "next/image";
import avatar from "@/assets/avatar/avatar.jpg";

const ImageSlider = () => {
  const [isInViewport, setIsInViewport] = useState(false); // Keep the state if you need to use it
  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInViewport(entry.isIntersecting),
      { threshold: 0 }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Example of using the `isInViewport` state (if needed):
  useEffect(() => {
    if (isInViewport) {
      // Perform some action here when the image is visible
    }
  }, [isInViewport]);

  return (
    <LazyMotion features={domAnimation} strict>
      <m.div
        ref={imageRef}
        initial={{ x: 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          duration: 0.5,
          type: "spring",
          stiffness: 100,
          damping: 20,
        }}
        className="w-full h-full flex justify-center items-center blob drop-shadow-div"
      >
        <Image
          src={avatar}
          alt="Avatar"
          width={3000}
          layout="responsive"
          height={3000}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px"
          style={{ objectFit: "cover", borderRadius: "50%" }}
          priority
        />
      </m.div>
    </LazyMotion>
  );
};

export default ImageSlider;
