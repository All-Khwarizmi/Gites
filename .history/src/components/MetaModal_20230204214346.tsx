import { useDisclosure } from "@chakra-ui/react";
import React from "react";
import MetaSvg from "../components/MetaSvg";
import MetaNext from "./MetaNext";

const MetaModal = () => {
      const { isOpen, onOpen, onClose } = useDisclosure();
      const finalRef = React.useRef(null);
  return (
    <div>
      <a
        href="http://m.me/100063605350179"
        target="_blank"
        rel="noopener noreferrer"
      >
       <MetaSvg />
      </a>
    </div>
  );
};

export default MetaModal;
