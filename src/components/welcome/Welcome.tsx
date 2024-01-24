import React, { useRef } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Button,
  CardActions,
} from "@mui/material";
import { FaGithub, FaFacebook, FaFileInvoice } from "react-icons/fa";
import { useParallax } from "react-scroll-parallax";
import CV from "../../assets/Kiss-Bence-cv-2024.pdf";

const Welcome = () => {
  const parallax = useParallax<HTMLDivElement>({ speed: -10 });

  return (
    <section className="w-full h-full relative flex justify-center">
      <div
        ref={parallax.ref}
        className="w-11/12 max-w-[1536px] flex flex-wrap gap-4 py-16"
      >
        <div className="w-full mobile:w-[calc(50%-1rem/2)] tablet:w-[calc(33%-1rem/2)]">
          <Card
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <CardHeader title="25-év alatti" subheader="fiatal fejlesztő" />
            <CardContent>
              <p className="text-P">
                Szia! Kiss Bence vagyok 21-éves. Szeretnék programozó/fejlesztő
                lenni és megtalálni a helyem a szakmában.
              </p>
            </CardContent>
            <CardActions>
              <Button
                href={"https://www.facebook.com/bence.kiss.5245"}
                target="_blank"
                startIcon={<FaFacebook />}
              >
                Kiss Bence
              </Button>
            </CardActions>
          </Card>
        </div>
        <div className="w-full mobile:w-[calc(50%-1rem/2)] tablet:w-[calc(33%-1rem/2)]">
          <Card
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <CardHeader title="Kitartó" subheader="szereti a kihívásokat" />
            <CardContent>
              <p className="text-P">
                Imádom amikor olyan feladatot kapok amire nem tudom egyből a
                megoldást, de kitartóan megtalálom és megoldom.
              </p>
            </CardContent>
            <CardActions>
              <Button
                href={"https://github.com/bNc326"}
                target="_blank"
                startIcon={<FaGithub />}
              >
                bNc326
              </Button>
            </CardActions>
          </Card>
        </div>
        <div className="w-full tablet:w-[calc(33%-1rem/2)]">
          <Card
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <CardHeader title="Tanulékony" subheader="mindenre képes" />
            <CardContent>
              <p className="text-P">
                Könnyen sajátítok el újabb és újabb technológiákat és mindenre
                képes vagyok, hogy ha a fejlődésről és előrelépésről van szó.
              </p>
            </CardContent>
            <CardActions>
              <Button href={CV} target="_blank" startIcon={<FaFileInvoice />}>
                CV
              </Button>
            </CardActions>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
