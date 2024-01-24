import React, { useState, useEffect, useRef } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Chip,
  Button,
  IconButton,
  Collapse,
  Divider,
} from "@mui/material";
import { BiSitemap } from "react-icons/bi";
import { BsStack } from "react-icons/bs";
import { MdExpandMore } from "react-icons/md";
import TimeLine from "../UI/TimeLine";
import { Reference } from "../../model/Reference";
import { useParallax } from "react-scroll-parallax";
interface Props extends Reference {}

const ReferenceCard: React.FC<Props> = ({
  title,
  subHeader,
  jobs,
  stacks,
  img,
  img2,
  github,
  liveDemo,
}) => {
  const collapseRef = useRef<HTMLElement | null>(null);
  const { ref: imageRef } = useParallax<HTMLImageElement>({ speed: -5 });
  const { ref: image2Ref } = useParallax<HTMLImageElement>({ speed: -6 });
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    if (!expanded) return;

    const cleanup = setTimeout(() => {
      collapseRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    }, 300);

    return () => clearTimeout(cleanup);
  }, [expanded]);

  const handleExpand = () => {
    setExpanded((prev) => !prev);
  };
  return (
    <div className="w-full mobile:w-[calc(50%-1rem/2)] flex flex-col rounded-3xl overflow-hidden">
      <Card
        sx={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <CardHeader title={title} subheader={subHeader} />
        <CardContent sx={{ height: "100%" }}>
          <div className="w-full flex flex-col laptop:flex-row gap-4">
            <div className="w-full flex gap-4">
              <img
                ref={imageRef}
                src={img.src}
                alt={img.alt}
                className="h-full max-h-[300px]"
              />
              <img
                ref={image2Ref}
                src={img2.src}
                alt={img2.alt}
                className="h-full max-h-[300px]"
              />
            </div>
            <div className="w-full flex flex-col gap-4">
              <ul className="text-p text-desc space-y-1">
                <h5 className="text-h5 text-title font-semibold flex items-center gap-2">
                  Feladatok <BiSitemap />
                </h5>
                {jobs.map((j, index) => (
                  <li key={index}>
                    <span>{j}</span>
                    {index !== jobs.length - 1 && (
                      <Divider sx={{ paddingTop: ".25rem" }} />
                    )}
                  </li>
                ))}
              </ul>
              <div className="w-full flex flex-col gap-1">
                <h5 className="text-h5 font-semibold flex items-center gap-2">
                  Tech Stack <BsStack />
                </h5>
                <div className="w-full flex flex-wrap gap-2">
                  {stacks.map((s, index) => (
                    <Chip
                      key={index}
                      label={s.label}
                      icon={s.icon && <s.icon size={20} />}
                      variant="outlined"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </CardContent>
        <CardActions sx={{ marginLeft: ".5rem" }}>
          <div className="w-full flex justify-between ">
            <div className="w-full flex gap-2">
              {liveDemo && (
                <Button
                  href={liveDemo}
                  target="_blank"
                  variant="contained"
                  sx={{ background: "#4A4A4A" }}
                >
                  Live demo
                </Button>
              )}
              {github && (
                <Button href={github} target="_blank" variant="outlined">
                  Source code
                </Button>
              )}
            </div>
          </div>
        </CardActions>
      </Card>
    </div>
  );
};

export default ReferenceCard;
