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
import { cabin } from "../pages/_app";

const PartenariatsModalLG = ({open, style}: any) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
 
      <div
        className={clsx(
          cabin.className,
          `my-4 flex-initial text-2xl font-bold uppercase  hover:underline  ${style.color}   `
        )}
        onClick={() => {
          onOpen();
        }}
      >
        Partenariats
        <
    
      <div>
        <Modal size={"4xl"} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader className="text-center">
              <h3> Modalités de réservation</h3>
              <ModalCloseButton />
            </ModalHeader>
            <ModalBody className="m-0  w-full  gap-5 px-0">
              <div className="h-300 pb-5"></div>

              <div className="">
                <div className="pb-5">
                  <div className="py-1"></div>
                  <div className="px-2">
                    Possibilité d’une 5e personne (enfant), uniquement dans les
                    gîtes Palmier et Kawan. Nous contacter pour le supplément.
                  </div>
                  <div className="px-2">
                    Premier dîner et petit-déjeuner offert à partir d’une
                    semaine de location et pour les clients en provenance
                    directe de la métropole.{" "}
                  </div>
                  <div className="py-2"></div>
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

export default PartenariatsModalLG;
