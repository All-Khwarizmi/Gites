import React from "react";
import Image from "next/image";
import Popup from "./Popup";
import AnanasModalLG from "./AnanasModalLG";
import AnanasModal from "./AnanasModal";
import KawanModal from "./KawanModal";
import PalmierModal from "./PalmierModal";
import KawanModalLG from "./KawanModalLG";
import PalmierModalLG from "./PalmierModalLG";
import clsx from "clsx";
import { cabin } from "../pages/_app";


const Gites = ({slides} : any ) => {
  return (
    <>
      <div className="grid w-full place-items-center ">
        <div className="eight w-2/3 py-10 pt-32 ">
          <h1 className={clsx(cabin.className, "text-bold")}>Gîtes</h1>
        </div>
      </div>
      <div className="grid-rows grid place-items-center gap-3 lg:grid lg:grid-cols-3 lg:pt-5">
        <div className="rotate-x-6 lg:h-500 group relative flex skew-y-3 cursor-pointer flex-col justify-center overflow-hidden rounded-md py-5 px-1 text-center md:px-5 lg:w-[80%] ">
          <img
            className="h-100 w-50 rotate-x-6 -skew-y-3 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] duration-500 ease-in-out hover:rotate-2 hover:scale-125"
            src="./Gite Ananas/1.jpg"
            alt="Gite Ananas"
          />
        </div>

        <AnanasModal slides={slides} />
        <div className="lg:h-500 group relative flex cursor-pointer justify-center overflow-hidden rounded-md px-1 text-center md:px-5  lg:w-[80%] ">
          <img
            className="h-100 w-50 rounded  shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]
          duration-500 ease-in-out hover:rotate-2 hover:scale-125"
            src="./Gite Kawan/1.jpg"
            alt="Gite Kawan"
          />
        </div>

        <KawanModal slides={slides} />
        <div className="lg:h-800 group relative flex -skew-y-3 cursor-pointer justify-center overflow-hidden rounded-md px-1 text-center md:px-5  lg:w-[80%] ">
          <img
            className="h-100 w-50 skew-y-3  shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]
          duration-500 ease-in-out hover:rotate-2 hover:scale-125"
            src="./Gite Palmier/1.jpg"
            alt="Gite Kawan"
          />
        </div>

        <PalmierModal slides={slides} />
      </div>
      <div className="grid-rows grid hidden place-items-center gap-3 pt-2 lg:block lg:grid lg:grid-cols-3">
        <AnanasModalLG slides={slides} />
        <KawanModalLG slides={slides} />
        <PalmierModalLG slides={slides} />
      </div>
    </>
  );
};

export default Gites;
