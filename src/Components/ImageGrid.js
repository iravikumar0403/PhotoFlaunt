import React from "react";
import { motion } from "framer-motion";

const ImageGrid = ({ data, setModalUrl }) => {
  return (
    <div className="imageGrid">
      {data.map((item) => (
        <motion.img
          layout
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          key={item.createdAt}
          style={{ width: "30%" }}
          src={item.image}
          alt="alt"
          onClick={() => setModalUrl(item.image)}
        />
      ))}
    </div>
  );
};

export default ImageGrid;
