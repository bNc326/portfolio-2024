import { IconType } from "react-icons";
export interface Reference {
  title: React.ReactNode | string;
  subHeader: React.ReactNode | string;
  jobs: string[];
  stacks: Stack[];
  img: {
    src: string;
    alt: string;
    title?: string;
  };
  img2: {
    src: string;
    alt: string;
    title?: string;
  };
  liveDemo?: string;
  github?: string;
}

export type Stack = {
  icon?: IconType;
  label: string;
};
