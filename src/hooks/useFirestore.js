import { useState, useEffect } from "react";
import { firestore } from "../Firebase/config";

const useFirestore = (collectionName) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const unsub = firestore
      .collection(collectionName)
      .orderBy("createdAt", "desc")
      .onSnapshot((snapshot) => {
        let documents = [];
        snapshot.forEach((doc) => documents.push(doc.data()));
        setData(documents);
      });

    return unsub;
  }, [collectionName]);

  return { data };
};

export default useFirestore;
