import React, { useEffect, useState } from "react";
import Link from "next/link";
import Maps from "./Maps";
import useWindowDimensions from "../helpers/useWindowDimension";

const Localisation = () => {
  const [dimensions, setDimensions] = useState({});
  const { width, height } = useWindowDimensions();
  useEffect(() => {
    if (width) {
      if (width > 1000) {
        setDimensions(coordsLG);
      } else if (width > 800) {
        setDimensions(coordsLG);
      }
    } else {
      setDimensions(coordsSM);
    }
  }, [width]);

  const coordsLG = {
    width: "600px",
    height: "400px",
  };
  const coordsSM = {
    width: "370px",
    height: "270px",
  };
  const coordinates: string =
    "Les+Gîtes+Mon+Trésor/@16.4645544,-61.4825254,17z";
  const baseUrl: string =
    "https://www.google.com/maps/search/?api=1&query=Les+Gîtes+Mon+Trésor+Anse+Bertrand/";

};

export default Localisation;
