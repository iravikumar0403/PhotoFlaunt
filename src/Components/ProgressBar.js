import React, { useEffect } from "react";
import useStorage from "../hooks/useStorage";
import { motion } from "framer-motion";

function ProgressBar({ file, setFile }) {
  const { progress, url } = useStorage(file);

  console.log(progress);
  useEffect(() => {
    if (url) {
      setFile("");
    }
  }, [url, setFile]);
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <motion.div
        initial={{ width: 0 + "vw" }}
        animate={{ width: progress + "vw" }}
        className="progress-div"
      >
        {progress.toFixed(0) + "%"}
      </motion.div>
    </div>
  );
}

export default ProgressBar;
