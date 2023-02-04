import { AppType } from "next/app";
import { Card, CardBody, Heading, Text } from "@chakra-ui/react";
import Carousel from "../components/Carousel";
import {  useRef, useState } from "react";
import Localisation from "../components/Localisation";
import Navbar from "../components/Navbar";
import PriceTable from "../components/PriceTable";

const Test = () => {
  const divPosition: any = useRef(null);

  const slidesPalmier = [
    {
      img: "/Gite Palmier/1.jpg",
    },
    {
      img: "/Gite Palmier/2.jpg",
    },
    {
      img: "/Gite Palmier/3.jpg",
    },
    {
      img: "/Gite Palmier/4.jpg",
    },
    {
      img: "/Gite Palmier/5.jpg",
    },
    {
      img: "/Gite Palmier/6.jpg",
    },
    {
      img: "/Gite Palmier/7.jpg",
    },
    {
      img: "/Gite Palmier/9087556.jpg",
    },
  ];
  const slidesAnanas = [
    {
      img: "/Gite Ananas/1.jpg",
    },
    {
      img: "/Gite Ananas/2.jpg",
    },
    {
      img: "/Gite Ananas/3.jpg",
    },
    {
      img: "/Gite Ananas/4.jpg",
    },
    {
      img: "/Gite Ananas/5.jpg",
    },
    {
      img: "/Gite Ananas/6.jpg",
    },
    {
      img: "/Gite Ananas/20191231_100325.jpg",
    },
    {
      img: "/Gite Ananas/20200325_100606.jpg",
    },
  ];
  const slidesKawan = [
    {
      img: "/Gite Kawan/1.jpg",
    },
    {
      img: "/Gite Kawan/2.jpg",
    },
    {
      img: "/Gite Kawan/3.jpg",
    },
    {
      img: "/Gite Kawan/4.jpg",
    },

    {
      img: "/Gite Kawan/6.jpg",
    },
    {
      img: "/Gite Kawan/7.jpg",
    },
    {
      img: "/Gite Kawan/8.jpg",
    },
    {
      img: "/Gite Kawan/9.jpg",
    },
    {
      img: "/Gite Kawan/10.jpg",
    },
    {
      img: "/Gite Kawan/11.jpg",
    },
    {
      img: "/Gite Kawan/12.jpg",
    },
    {
      img: "/Gite Kawan/13.jpg",
    },
    {
      img: "/Gite Kawan/14.jpg",
    },
    {
      img: "/Gite Kawan/15.jpg",
    },
  ];

  return (
    <>
      <main>
        <Navbar position={divPosition} />
        <div className="grid-rows-4">
          <section className="video">
            <video
              autoPlay
              playsInline
              muted
              loop
              id="myVideo"
              poster="/Gite Kawan/1.jpg"
            >
              <source src={"/Mon film.mp4"} type="video/mp4" />
            </video>
          </section>

          <section ref={divPosition} className="section h-full">
            <div className="card-1 flex-column flex justify-center">
              <Card className="w-[100%] lg:w-[60%]">
                <Heading className="flex-column flex justify-center p-2 text-center">
                  <p> Bienvenue en Guadeloupe !</p>
                </Heading>
                <CardBody>
                  <Text className="text-2xl">
                    Pour des vacances au soleil, sur des plages de sable blanc
                    ou de belles balades dans une verdure luxuriante : les Gîtes
                    Mon Trésor vous assurent un dépaysement total. Loin des
                    grandes structures touristiques, dans un jardin calme et
                    ventilé avec piscine sécurisée, Catherine et Laurent,
                    originaires de Normandie, vous accueillent toute l’année
                    dans leurs gîtes situés sur la commune d'ANSE-BERTRAND, à 3
                    km des plages et de tous commerces. Nous avons l'énorme
                    chance de n'avoir jamais de sargasses sur nos plages les
                    plus proches. Bonne visite !
                  </Text>
                </CardBody>
              </Card>
            </div>
          </section>
        </div>
        <section className="section-2 ">
          <Localisation />
        </section>
        <section className="section-3">
          <PriceTable />
        </section>
      </main>
    </>
  );
};

export default Test;
