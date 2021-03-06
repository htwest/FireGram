import { useState } from "react";
import Title from "../comps/Title";
import firebase from "../firebase/initFirebase";
import UploadForm from "../comps/UploadForm";
import ImageGrid from "../comps/ImageGrid";
import Modal from "../comps/Modal";

export default function Home() {
  // Selected Image State for Enlarged Modal
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="App">
      <Title />
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg} />
      {selectedImg ? (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      ) : null}
    </div>
  );
}
