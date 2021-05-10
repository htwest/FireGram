import Title from "../comps/Title";
import firebase from "../firebase/initFirebase";
import UploadForm from "../comps/UploadForm";

firebase();

export default function Home() {
  return (
    <div className="App">
      <Title />
      <UploadForm />
    </div>
  );
}
