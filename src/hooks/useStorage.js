import { useEffect, useState } from "react";
import { appStorage, firestore, timeStamp } from "../Firebase/config";

function useStorage(file) {
  const [progress, setProgress] = useState(0);
  const [url, setUrl] = useState("");
  const [error, setError] = useState("");

  const handleStateChange = (snapshot) =>
    setProgress((snapshot.bytesTransferred / snapshot.totalBytes) * 100);

  const handleError = (err) => {
    console.log(err);
    setError(err.code);
  };

  const handleUploadSuccess = async (uploadTask) => {
    const url = await uploadTask.snapshot.ref.getDownloadURL();
    setUrl(url);
    firestore.collection("images").add({
      image: url,
      createdAt: timeStamp,
    });
  };

  useEffect(() => {
    const storageRef = appStorage.ref();
    const fileRef = storageRef.child(file.name);
    const uploadTask = fileRef.put(file);
    uploadTask.on("state_changed", handleStateChange, handleError, () =>
      handleUploadSuccess(uploadTask)
    );
  }, [file]);

  return { progress, error, url };
}

export default useStorage;
