import React, { useState } from "react";

import useFirestore from "./hooks/useFirestore";

import ImageGrid from "./Components/ImageGrid";
import ProgressBar from "./Components/ProgressBar";
import Modal from "./Components/Modal";
import UploadImage from "./Components/UploadImage";
import Header from "./Components/Header";

import { AnimatePresence } from "framer-motion";

import "./index.css";

const App = () => {
  const [file, setFile] = useState();
  const [error, setError] = useState("");
  const [modalUrl, setModalUrl] = useState(null);
  const { data } = useFirestore("images");

  const handleChange = (e) => {
    let selectedFile = e.target.files[0];
    const allowedTypes = ["image/png", "image/jpeg"];
    if (selectedFile && allowedTypes.includes(selectedFile.type)) {
      setFile(selectedFile);
      setError("");
    } else {
      setFile(null);
      setError("Please select an jpeg or png file");
    }
  };

  return (
    <div className="App">
      <Header />
      <UploadImage handleChange={handleChange} filename={file?.name} />
      {error && <p className="errorMsg">{error}</p>}
      {file && <ProgressBar file={file} setFile={setFile} />}
      <ImageGrid data={data} setModalUrl={setModalUrl} />
      <AnimatePresence>
        {modalUrl && <Modal url={modalUrl} setModalUrl={setModalUrl} />}
      </AnimatePresence>
    </div>
  );
};

export default App;
