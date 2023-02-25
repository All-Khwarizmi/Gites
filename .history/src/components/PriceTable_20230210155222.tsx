import React from "react";
import clsx from "clsx";
import { cabin } from "../pages/_app";
import ModaliteModal from "./ModaliteModal";

const PriceTable = () => {
  return (
    <>
      <div className="grid w-full place-items-center ">
        <div className="eight w-2/3 py-10 pt-32 ">
          <h1 className={clsx(cabin.className, "font-bold")}>Tarifs</h1>
        </div>
      </div>

    </>
  );
};

export default PriceTable;
