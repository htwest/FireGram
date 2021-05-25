import { useState, useEffect } from "react";
import {
  projectStorage,
  projectFirestore,
  timestamp,
} from "../firebase/initFirebase";

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    // Creates a refrence of the selected file
    const storageRef = projectStorage.ref(file.name);
    // Selects or Creates collection in firestore DB
    const collectionRef = projectFirestore.collection("images");

    storageRef.put(file).on(
      "state_changed",
      // Snapshot of transfering file
      (snap) => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentage);
      },
      // Runs if there is an error in upload
      (err) => {
        setError(err);
      },
      // Runs when file transfer is complete
      async () => {
        const url = await storageRef.getDownloadURL();
        const createdAt = timestamp();
        collectionRef.add({ url, createdAt });
        setUrl(url);
      }
    );
  }, [file]);

  return { progress, url, error };
};

export default useStorage;
