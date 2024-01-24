import React from "react";
import { useParallax } from "react-scroll-parallax";
interface Props {
  title: string;
  bgTitle: string;
  bgTitleColor?: string;
}

const Title: React.FC<Props> = ({ title, bgTitle, bgTitleColor }) => {
  const parallax = useParallax<HTMLDivElement>({
    translateX: [50, 0, "easeInOut"],
  });
  return (
    <div className="w-full relative flex justify-center items-center overflow-hidden">
      <h2
        ref={parallax.ref}
        className="text-bgTitle"
        style={{ color: `${bgTitleColor ? bgTitleColor : "#1d1d1d"}` }}
      >
        {bgTitle}
      </h2>
      <h3 className="text-white text-h1  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        {title}
      </h3>
    </div>
  );
};

export default Title;
