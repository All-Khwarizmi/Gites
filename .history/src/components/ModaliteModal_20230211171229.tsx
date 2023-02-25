import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import Carousel from "./Carousel";
import Link from "next/link";
import clsx from "clsx";
import { cabin, pat } from "../pages/_app";

const ModaliteModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div className="flex place-items-center content-center justify-center rounded bg-black  transition delay-150 duration-300  ease-in-out hover:-translate-y-1 hover:scale-110 lg:hidden ">
      <h3
        onClick={onOpen}
        className={clsx(
          cabin.className,
          "btn-blk w-50 rounded px-4 py-2 text-center  text-2xl font-bold   transition"
        )}
      >
        Modalités de réservation
      </h3>

      <div>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader className="text-center">
              <h3
                className={clsx(
                  cabin.className,
                  "btn-blk w-50 rounded px-4 pt-2 text-center  text-3xl font-bold   transition"
                )}
              >
                {" "}
                Modalités de reservation
              </h3>
              <ModalCloseButton />
            </ModalHeader>
            <ModalBody
              className={clsx(pat.className, "m-0  w-full  gap-5 px-0 ")}
            >
              <div className="">
                <div className="pb-5">
                  <p className="px-2">
                    Possibilité d’une 5e personne (enfant), uniquement dans les
                    gîtes Palmier et Kawan. Nous contacter pour le supplément.
                  </p>
                  <br />
                   <p className="px-2">
                    Premier dîner et petit-déjeuner offerts à partir d’une
                    semaine de location et pour les clients en provenance
                    directe de la métropole.{" "}
                  </p>
                  <br />
                  <ul className="list-disc px-10">
                    <li>Arrivée à partir de 16h - Départ jusqu’à 12h </li>
                    <li>Taxe de séjour : 0,80€ / personne (plus de 18 ans)</li>
                    <li> 30% d’acompte</li>
                    <li>Caution de 300€</li>
                    <li>
                      Forfait ménage : 70/80/100€ ou les gîtes sont à rendre
                      propre
                    </li>
                    <li>Machine à laver : 4€ (lessive non fournie)</li>
                  </ul>
                </div>
              </div>
            </ModalBody>
          </ModalContent>
        </Modal>
      </div>
    </div>
  );
};

export default ModaliteModal;
