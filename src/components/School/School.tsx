import React from "react";
import TimeLine, { TimeLineItem } from "../UI/TimeLine";
import Lottie from "lottie-react";
import BackToShool from "../../assets/backToSchool.json";
import { MdSchool } from "react-icons/md";
import { useParallax } from "react-scroll-parallax";
const School = () => {
  const timeLineItems: TimeLineItem[] = [
    {
      title: "React tanfolyam (udemy.com)",
      subHeader: "2022 - 2023",
      list: {
        header: "React, TypeScript",
        list: [
          "React(SPA, állapot kezelés, async műveletek)",
          "Komponens alapú webfejlesztés",
          "React Router",
          "Context API",
          "Redux",
          "Typescript",
        ],
      },
      icon: MdSchool,
    },
    {
      title: "Veszprémi SZC Öveges József Technikum és Kollégium",
      subHeader: "2021 - 2022",
      list: {
        header: "informatikai rendszer- és alkalmazás üzemeltető technikus",
        list: [
          "C#, Python programozás",
          "Cisco Hálózati eszközök konfigolása",
          "Hálózat tervezés, építés",
          "Windows, Linux Szerver üzemeltetés",
        ],
      },
      icon: MdSchool,
    },
    {
      title: "Veszprémi SZC Öveges József Technikum és Kollégium",
      subHeader: "2017 - 2021",
      list: {
        header: "Informatikai ágazat és Érettségis",
        list: ["C# programozás", "Weboldal alapok (HTML, Css, JavaScript)"],
      },
      icon: MdSchool,
    },
  ];

  const lottieParallax = useParallax<HTMLDivElement>({ translateY: [-20, 0] });

  return (
    <section className="w-full h-full relative flex justify-center">
      <div className="w-11/12 max-w-[1536px] flex flex-col tablet:flex-row justify-center py-8">
        <div ref={lottieParallax.ref} className="w-full">
          <Lottie
            animationData={BackToShool}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div className="w-full">
          <TimeLine items={timeLineItems} />
        </div>
      </div>
    </section>
  );
};

export default School;
