import Gites from "../components/Gites";
import Welcome from "../components/Welcome";
import { useRef } from "react";
import Localisation from "../components/Localisation";
import Navbar from "../components/Navbar";
import PriceTable from "../components/PriceTable";
import MetaModal from "../components/MetaModal";
import Contact from "../components/Contact";

import SimpleFooter from "../components/Footer";
import Video from "../components/Video";

const MainPage = () => {
  const divPosition: any = useRef(null);

  const slidesPalmier = [
    {
      img: "./palmier/1.jpg",
    },
    {
      img: "./palmier/2.jpg",
    },
    {
      img: "./palmier/3.jpg",
    },
    {
      img: "./palmier/4.jpg",
    },
    {
      img: "./palmier/5.jpg",
    },
    {
      img: "./palmier/6.jpg",
    },
    {
      img: "./palmier/6.jpg",
    },
  ];
  const slidesAnanas = [
    {
      img: "./ananas/1.jpg",
    },
    {
      img: "./ananas/2.jpg",
    },
    {
      img: "./ananas/3.jpg",
    },
    {
      img: "./ananas/4.jpg",
    },
    {
      img: "./ananas/1.jpg",
    },
    {
      img: "./ananas/1.jpg",
    },
  ];
  const slidesKawan = [
    {
      img: "https://ik.imagekit.io/montresor/Kawan/1.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1676123040794",
    },
    {
      img: "https://ik.imagekit.io/montresor/Kawan/2.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1676123042811",
    },
    {
      img: "https://ik.imagekit.io/montresor/Kawan/3.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1676641317584",
    },
    {
      img: "https://ik.imagekit.io/montresor/Kawan/4.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1676123042080",
    },

    {
      img: "https://ik.imagekit.io/montresor/Kawan/5.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1676123041229",
    },
    {
      img: "https://ik.imagekit.io/montresor/Kawan/6.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1676123041250",
    },
    {
      img: "https://ik.imagekit.io/montresor/Kawan/7.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1676123041241",
    },
    {
      img: "https://ik.imagekit.io/montresor/Kawan/8.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1676641257970",
    },
    {
      img: "https://ik.imagekit.io/montresor/Kawan/9.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1676123042096",
    },
    {
      img: "https://ik.imagekit.io/montresor/Kawan/10.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1676123041357",
    },
    {
      img: "https://ik.imagekit.io/montresor/Kawan/11.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1676641163617",
    },
  ];

  const slides = {
    slidesAnanas,
    slidesKawan,
    slidesPalmier,
  };

  return (
    <>
      <main>
        <Navbar position={divPosition} />
        <div className="grid-rows-4">
          <Video />
          <section
            id="welcome"
            ref={divPosition}
            className="section h-full w-screen overflow-hidden"
          >
            <Welcome />
            <Gites slides={slides} />
          </section>
        </div>
        <MetaModal />

        <section id="section-3" className="section-2 ">
          <Localisation />
        </section>
        <section id="section-4" className="section-3 relative">
          <PriceTable />
        </section>
        <section id="section-5" className="section-4 relative pb-5">
          <Contact />
        </section>
        
        <SimpleFooter />
      </main>
    </>
  );
};

export default MainPage;
