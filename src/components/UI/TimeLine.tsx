import React from "react";
import { Avatar } from "@mui/material";
import { IconType } from "react-icons";
export type TimeLineItem = {
  title: React.ReactNode | string;
  subHeader?: React.ReactNode | string;
  desc?: React.ReactNode | string;
  list?: {
    header: React.ReactNode | string;
    list: string[];
  };
  icon?: IconType;
};

interface Props {
  items: TimeLineItem[];
}

const TimeLine: React.FC<Props> = ({ items }) => {
  return (
    <div className="w-full flex flex-col gap-2">
      {items.map((item, index) => (
        <div key={index} className="w-full flex gap-2">
          <div className="flex flex-col items-center gap-2">
            <Avatar sx={{ backgroundColor: "white" }}>
              {item.icon && <item.icon size={24} />}
            </Avatar>
            <div className="w-[3px] h-full rounded-full bg-subTitle"></div>
          </div>
          <div className="w-full flex flex-col gap-2">
            <h4 className="text-h4 text-title">{item.title}</h4>
            <h5 className="text-h5 text-subTitle">{item.subHeader}</h5>
            {item.list && (
              <ul className="space-y-1 text-desc2">
                <h6 className="text-h6 text-desc">{item.list.header}</h6>
                {item.list.list.map((l, index) => (
                  <li key={index}>{l}</li>
                ))}
              </ul>
            )}
            {item.desc && <p className="text-p text-desc">{item.desc}</p>}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TimeLine;
