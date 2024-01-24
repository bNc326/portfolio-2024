import React from "react";
import Title from "../UI/Title";
import ReferenceCard from "./ReferenceCard";
import { Reference as ReferenceModel } from "../../model/Reference";
import * as BiIcons from "react-icons/bi";
import * as MdIcons from "react-icons/md";
import {
  SiExpress,
  SiSocketdotio,
  SiMui,
  SiMicrosoftazure,
} from "react-icons/si";

import Amelto from "../../assets/references/amelto_mockup.png";
import Amelto2 from "../../assets/references/amelto2_mockup.png";
import Guest from "../../assets/references/guest-app_mockup.png";
import Guest2 from "../../assets/references/guest-app2_mockup.png";
import GuestAdmin from "../../assets/references/admin_mockup.png";
import GuestAdmin2 from "../../assets/references/admin2_mockup.png";
import Webshop from "../../assets/references/webshop_mockup.png";
import Webshop2 from "../../assets/references/webshop2_mockup.png";

const Reference = () => {
  const references: ReferenceModel[] = [
    {
      title: "Kiss és Társa sírkő",
      subHeader: "Full-Stack",
      jobs: [
        "Weboldal tervezés, fejlesztés",
        "szerveroldali fejlesztés",
        "Ajánlatkérés logika készítés",
        "párkány szerkesztő készítés",
        "Rendszeres karbantartás/frissítés",
      ],
      stacks: [
        { label: "React", icon: BiIcons.BiLogoReact },
        { label: "ExpressJS", icon: SiExpress },
        { label: "NodeJS", icon: BiIcons.BiLogoNodejs },
        { label: "Typescript", icon: BiIcons.BiLogoTypescript },
        { label: "MongoDB", icon: BiIcons.BiLogoMongodb },
        { label: "Socket.io", icon: SiSocketdotio },
        { label: "Azure", icon: SiMicrosoftazure },
        { label: "HTML", icon: BiIcons.BiLogoHtml5 },
        { label: "CSS", icon: BiIcons.BiLogoCss3 },
        { label: "TailwindCSS", icon: BiIcons.BiLogoTailwindCss },
        { label: "MUI", icon: SiMui },
      ],
      img: {
        src: Amelto,
        alt: "Kiss és Társa sírkő mockup",
      },
      img2: {
        src: Amelto2,
        alt: "Kiss és Társa sírkő mockup",
      },
      liveDemo: "https://www.ameltoemlekezes.hu",
      // time: [
      //   {
      //     content: {
      //       title: "Szerver rekatorálás",
      //       desc: "A teljes szervert áttírtam typescriptre és a korábbi EmailJS emailező szoftvert lecseréltem saját email service-re",
      //     },
      //     oppositeContent: { title: "2024 Jan" },
      //     icon: MdIcons.MdRefresh,
      //   },
      //   {
      //     content: {
      //       title: "Szerver költöztetés",
      //       desc: "A korábbi cpanel-es szervert átköltöztettem egy megbízhatóbb Azure VPS-re",
      //     },
      //     oppositeContent: { title: "2023 Nov" },
      //     icon: MdIcons.MdStorage,
      //   },
      // ],
    },
    {
      title: "Vendégház projekt",
      subHeader: "Full-Stack",
      jobs: ["Weboldal tervezés, fejlesztés", "szerveroldali fejlesztés"],
      stacks: [
        { label: "MongoDB", icon: BiIcons.BiLogoMongodb },
        { label: "ExpressJS", icon: SiExpress },
        { label: "React", icon: BiIcons.BiLogoReact },
        { label: "NodeJS", icon: BiIcons.BiLogoNodejs },
        { label: "Typescript", icon: BiIcons.BiLogoTypescript },
        { label: "TailwindCSS", icon: BiIcons.BiLogoTailwindCss },
        { label: "HTML", icon: BiIcons.BiLogoHtml5 },
        { label: "CSS", icon: BiIcons.BiLogoCss3 },
      ],
      img: {
        src: Guest,
        alt: "Vendégház projekt mockup",
      },
      img2: {
        src: Guest2,
        alt: "Vendégház projekt mockup",
      },
      liveDemo: "https://guest-house-app.onrender.com",
      github: "https://github.com/bNc326/guest-house-app",
    },
    {
      title: "Vendégház admin",
      subHeader: "Full-Stack",
      jobs: [
        "Admin interfész tervezés, fejlesztés",
        "frontend összekötés a szerverrel",
      ],
      stacks: [
        { label: "MongoDB", icon: BiIcons.BiLogoMongodb },
        { label: "ExpressJS", icon: SiExpress },
        { label: "React", icon: BiIcons.BiLogoReact },
        { label: "NodeJS", icon: BiIcons.BiLogoNodejs },
        { label: "Typescript", icon: BiIcons.BiLogoTypescript },
        { label: "TailwindCSS", icon: BiIcons.BiLogoTailwindCss },
        { label: "HTML", icon: BiIcons.BiLogoHtml5 },
        { label: "CSS", icon: BiIcons.BiLogoCss3 },
        { label: "Socket.io", icon: SiSocketdotio },
      ],
      img: {
        src: GuestAdmin,
        alt: "Vendégház admin mockup",
      },
      img2: {
        src: GuestAdmin2,
        alt: "Vendégház admin mockup",
      },
      liveDemo: "https://guest-house-admin.onrender.com",
      github: "https://github.com/bNc326/guest-house-app",
    },
    {
      title: "Webshop projekt",
      subHeader: "Frontend",
      jobs: ["Weboldal tervezés, fejlesztés"],
      stacks: [
        { label: "React", icon: BiIcons.BiLogoReact },
        { label: "Typescript", icon: BiIcons.BiLogoTypescript },
        { label: "TailwindCSS", icon: BiIcons.BiLogoTailwindCss },
        { label: "HTML", icon: BiIcons.BiLogoHtml5 },
        { label: "CSS", icon: BiIcons.BiLogoCss3 },
        { label: "MUI", icon: SiMui },
      ],
      img: {
        src: Webshop2,
        alt: "Webshop projekt mockup",
      },
      img2: {
        src: Webshop,
        alt: "Webshop projekt mockup",
      },
      liveDemo: "https://webshop-project.onrender.com/",
      github: "https://github.com/bNc326/webshop-project",
    },
  ];

  return (
    <section className="w-full h-full relative reference-bg flex flex-col items-center">
        
      <Title title="referenciák" bgTitle="Projects" />
      <div className="w-11/12 max-w-[1536px] flex flex-wrap gap-4 py-8">
        {references.map((reference, index) => (
          <ReferenceCard key={index} {...reference} />
        ))}
      </div>
    </section>
  );
};

export default Reference;
