import React from 'react'
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
import Carousel from './Carousel';

const AnanasModal = ({slides}: any) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
const height ="300px"

  return (
    <div className="flex place-items-center content-center justify-center lg:hidden ">
      <h3
        onClick={onOpen}
        className=" w-40 rounded bg-white bg-blue-500 px-4 py-2 text-center text-2xl  transition delay-150 duration-300  ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500"
      >
        Gîte Ananas
      </h3>
      <div className="">
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalBody className="m-0 grid w-full grid-rows-2 gap-2 px-0">
                <div className='h-300'>
                     <Carousel size={size} slides={slides} />
                </div>
             
              <div className='grid grid-rows-2'>
                <div>Some description</div>
                <Button colorScheme="blue" mr={3} onClick={onClose}>
                  Close
                </Button>
              </div>
            </ModalBody>
          </ModalContent>
        </Modal>
      </div>
    </div>
  );
}

export default AnanasModal