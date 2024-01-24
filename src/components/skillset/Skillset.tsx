import React from "react";
import Title from "../UI/Title";
import { Avatar } from "@mui/material";
import * as BiIcons from "react-icons/bi";
import * as SiIcons from "react-icons/si";
import { useParallax } from "react-scroll-parallax";
import { IconType } from "react-icons";
import { TbSql } from "react-icons/tb";
import { MdAutoAwesome } from "react-icons/md";

const Skillset = () => {
  const top = useParallax<HTMLDivElement>({ translateX: [-10, 0] });
  const center = useParallax<HTMLDivElement>({ translateX: [0, -10] });
  const bottom = useParallax<HTMLDivElement>({ translateX: [-10, 0] });
  const topSkills: IconType[] = [
    BiIcons.BiLogoMongodb,
    SiIcons.SiExpress,
    BiIcons.BiLogoReact,
    BiIcons.BiLogoNodejs,
    BiIcons.BiLogoGithub,
    SiIcons.SiPrisma,
    SiIcons.SiSocketdotio,
  ];
  const centerSkills: IconType[] = [
    BiIcons.BiLogoJavascript,
    BiIcons.BiLogoTypescript,
    BiIcons.BiLogoHtml5,
    BiIcons.BiLogoCss3,
    BiIcons.BiLogoTailwindCss,
    SiIcons.SiMui,
  ];
  const bottomSkills: IconType[] = [
    SiIcons.SiDotnet,
    SiIcons.SiCsharp,
    SiIcons.SiPython,
    SiIcons.SiNextdotjs,
    TbSql,
    SiIcons.SiMicrosoftazure,
    SiIcons.SiOpenai,
  ];
  return (
    <section className="w-full h-full relative">
      <Title title="Készségek" bgTitle="Skills" bgTitleColor="#333333" />
      <div className="w-full flex justify-center py-8">
        <div className="w-11/12 max-w-[1536px] flex flex-col gap-2 items-center">
          <div className="w-full flex flex-col gap-2 overflow-hidden">
            <h4 className="text-h4 text-white">Erősségek</h4>
            <div ref={top.ref} className="flex gap-2">
              {topSkills.map((Icon: IconType, index) => (
                <Avatar
                  key={index}
                  variant="rounded"
                  sx={{
                    width: "2.5rem",
                    height: "2.5rem",
                    backgroundColor: "#33333380",
                    "@media (min-width: 768px)": {
                      width: "3rem",
                      height: "3rem",
                    },
                    "@media (min-width: 990px)": {
                      width: "4rem",
                      height: "4rem",
                    },
                    "@media (min-width: 1366px)": {
                      width: "5rem",
                      height: "5rem",
                    },
                  }}
                >
                  <Icon size={64} className="opacity-50 text-white p-1" />
                </Avatar>
              ))}
              {topSkills.map((Icon: IconType, index) => (
                <Avatar
                  key={index}
                  variant="rounded"
                  sx={{
                    width: "2.5rem",
                    height: "2.5rem",
                    backgroundColor: "#33333380",
                    "@media (min-width: 768px)": {
                      width: "3rem",
                      height: "3rem",
                    },
                    "@media (min-width: 990px)": {
                      width: "4rem",
                      height: "4rem",
                    },
                    "@media (min-width: 1366px)": {
                      width: "5rem",
                      height: "5rem",
                    },
                  }}
                >
                  <Icon size={64} className="opacity-50 text-white p-1" />
                </Avatar>
              ))}
              {topSkills.map((Icon: IconType, index) => (
                <Avatar
                  key={index}
                  variant="rounded"
                  sx={{
                    width: "2.5rem",
                    height: "2.5rem",
                    backgroundColor: "#33333380",
                    "@media (min-width: 768px)": {
                      width: "3rem",
                      height: "3rem",
                    },
                    "@media (min-width: 990px)": {
                      width: "4rem",
                      height: "4rem",
                    },
                    "@media (min-width: 1366px)": {
                      width: "5rem",
                      height: "5rem",
                    },
                  }}
                >
                  <Icon size={64} className="opacity-50 text-white p-1" />
                </Avatar>
              ))}
            </div>
          </div>
          <div className="w-full flex flex-col gap-4 overflow-hidden">
            <div ref={center.ref} className="flex gap-2">
              {centerSkills.map((Icon: IconType, index) => (
                <Avatar
                  key={index}
                  variant="rounded"
                  sx={{
                    width: "2.5rem",
                    height: "2.5rem",
                    backgroundColor: "#33333380",
                    "@media (min-width: 768px)": {
                      width: "3rem",
                      height: "3rem",
                    },
                    "@media (min-width: 990px)": {
                      width: "4rem",
                      height: "4rem",
                    },
                    "@media (min-width: 1366px)": {
                      width: "5rem",
                      height: "5rem",
                    },
                  }}
                >
                  <Icon size={64} className="opacity-50 text-white p-1" />
                </Avatar>
              ))}
              {centerSkills.map((Icon: IconType, index) => (
                <Avatar
                  key={index}
                  variant="rounded"
                  sx={{
                    width: "2.5rem",
                    height: "2.5rem",
                    backgroundColor: "#33333380",
                    "@media (min-width: 768px)": {
                      width: "3rem",
                      height: "3rem",
                    },
                    "@media (min-width: 990px)": {
                      width: "4rem",
                      height: "4rem",
                    },
                    "@media (min-width: 1366px)": {
                      width: "5rem",
                      height: "5rem",
                    },
                  }}
                >
                  <Icon size={64} className="opacity-50 text-white p-1" />
                </Avatar>
              ))}
              {centerSkills.map((Icon: IconType, index) => (
                <Avatar
                  key={index}
                  variant="rounded"
                  sx={{
                    width: "2.5rem",
                    height: "2.5rem",
                    backgroundColor: "#33333380",
                    "@media (min-width: 768px)": {
                      width: "3rem",
                      height: "3rem",
                    },
                    "@media (min-width: 990px)": {
                      width: "4rem",
                      height: "4rem",
                    },
                    "@media (min-width: 1366px)": {
                      width: "5rem",
                      height: "5rem",
                    },
                  }}
                >
                  <Icon size={64} className="opacity-50 text-white p-1" />
                </Avatar>
              ))}
            </div>
          </div>
          <div className="w-full flex flex-col gap-4 overflow-hidden">
            <h4 className="text-h4 text-white">Fejlesztés alatt</h4>
            <div ref={bottom.ref} className="flex gap-2">
              {bottomSkills.map((Icon: IconType, index) => (
                <Avatar
                  key={index}
                  variant="rounded"
                  sx={{
                    width: "2.5rem",
                    height: "2.5rem",
                    backgroundColor: "#33333380",
                    "@media (min-width: 768px)": {
                      width: "3rem",
                      height: "3rem",
                    },
                    "@media (min-width: 990px)": {
                      width: "4rem",
                      height: "4rem",
                    },
                    "@media (min-width: 1366px)": {
                      width: "5rem",
                      height: "5rem",
                    },
                  }}
                >
                  <Icon size={64} className="opacity-50 text-white p-1" />
                </Avatar>
              ))}
              {bottomSkills.map((Icon: IconType, index) => (
                <Avatar
                  key={index}
                  variant="rounded"
                  sx={{
                    width: "2.5rem",
                    height: "2.5rem",
                    backgroundColor: "#33333380",
                    "@media (min-width: 768px)": {
                      width: "3rem",
                      height: "3rem",
                    },
                    "@media (min-width: 990px)": {
                      width: "4rem",
                      height: "4rem",
                    },
                    "@media (min-width: 1366px)": {
                      width: "5rem",
                      height: "5rem",
                    },
                  }}
                >
                  <Icon size={64} className="opacity-50 text-white p-1" />
                </Avatar>
              ))}
              {bottomSkills.map((Icon: IconType, index) => (
                <Avatar
                  key={index}
                  variant="rounded"
                  sx={{
                    width: "2.5rem",
                    height: "2.5rem",
                    backgroundColor: "#33333380",
                    "@media (min-width: 768px)": {
                      width: "3rem",
                      height: "3rem",
                    },
                    "@media (min-width: 990px)": {
                      width: "4rem",
                      height: "4rem",
                    },
                    "@media (min-width: 1366px)": {
                      width: "5rem",
                      height: "5rem",
                    },
                  }}
                >
                  <Icon size={64} className="opacity-50 text-white p-1" />
                </Avatar>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skillset;
