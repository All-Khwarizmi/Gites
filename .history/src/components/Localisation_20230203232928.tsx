import React from "react";
import Link from "next/link";

const Localisation = () => {
  const coordinates: string =
    "Les+Gîtes+Mon+Trésor/@16.4645544,-61.4825254,17z";
  const baseUrl: string =
    "https://www.google.com/maps/search/?api=1&query=Les+Gîtes+Mon+Trésor+Anse+Bertrand/";
  return (
    <>
      <div className="location flex items-stretch p-3  md:items-center">

      </div>
      <div className="section-location align-center flex justify-center">
        <p className="text-extra-bold w-30 rounded bg-white p-2">
          Où nous trouver
        </p>
      </div>


    </>
  );
};

export default Localisation;
