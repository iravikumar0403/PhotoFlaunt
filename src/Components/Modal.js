import React from "react";
import { motion } from "framer-motion";

const Modal = ({ url, setModalUrl }) => {
  return (
    <motion.div
      className="modal"
      onClick={() => setModalUrl("")}
      initial={{ x: "-100vw" }}
      animate={{ x: 0 }}
      exit={{ x: "100vw" }}
    >
      <img src={url} alt="testing" />
    </motion.div>
  );
};

export default Modal;
