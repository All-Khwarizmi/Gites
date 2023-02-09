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
// 1. Import `extendTheme`
import { extendTheme } from "@chakra-ui/react";
import CarouselLG from "./CarouselLG";
import Link from "next/link";
// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
  components: {
    Modal: {
      sizes: { "2.5xl": { dialog: { maxW: "712px" } } },
    },
  },
});
const AnanasModalLG = ({ slides }: any) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const diapos = slides.slidesAnanas;
  return (
    <div className="flex w-screen place-items-center content-center justify-center ">
      <h3
        onClick={onOpen}
        className=" w-40 rounded bg-white bg-blue-500 px-4 py-2 text-center text-2xl  transition delay-150 duration-300  ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500"
      >
        Gîte Ananas
      </h3>
      <div>
        <Modal isCentered size="6xl" isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent className="pb-5">
            <ModalHeader className="text-center">
              <h3> Gîte Ananas</h3>
              <ModalCloseButton />
            </ModalHeader>
            <ModalBody>
              <div className="grid w-full grid-cols-2 gap-10">
                <CarouselLG slides={diapos} />
                <div>
                  <div className="grid   pl-5 ">

                  </div>
               
                </div>
              </div>
              <div className="grid w-full grid-cols-2 items-end gap-5">
                <div></div>
                <div className="grid w-full grid-cols-2 items-end gap-5">
                  <div className="content-enter flex place-items-center justify-center  ">
                    <Link href={"#section-5"}>
                      <h3
                        onClick={onClose}
                        className=" w-40 rounded bg-white bg-blue-500 px-4 py-2 text-center text-2xl  transition delay-150 duration-300  ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500"
                      >
                        Contact
                      </h3>
                    </Link>
                  </div>
                  <div className="flex place-items-center content-center justify-center  ">
                    <Link href={"#section-4"}>
                      <h3
                        onClick={onClose}
                        className=" w-40 rounded bg-white bg-blue-500 px-4 py-2 text-center text-2xl  transition delay-150 duration-300  ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500"
                      >
                        Prix
                      </h3>
                    </Link>
                  </div>
                </div>
              </div>
            </ModalBody>
          </ModalContent>
        </Modal>
      </div>
    </div>
  );
};

export default AnanasModalLG;
