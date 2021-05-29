import { useState, useEffect } from "react";
import { projectFirestore } from "../firebase/initFirebase";

const useFirestore = (collection) => {
  // Images retrieved for DB collection
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const unsub = projectFirestore
      .collection(collection)
      // Orders collection in descending order by the createdAt property
      .orderBy("createdAt", "desc")
      // Fires callback on inital and whenenever a change occures within collection
      .onSnapshot((snap) => {
        let documents = [];
        snap.forEach((doc) => {
          // doc.data() gets data from doc
          // doc.id is the id of the doc
          documents.push({ ...doc.data(), id: doc.id });
        });
        setDocs(documents);
      });

    // used to unsubscribe to the collection if ImageGrid component unmoounts
    return () => unsub();
  }, [collection]);

  return { docs };
};

export default useFirestore;
