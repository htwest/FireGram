import Title from "../comps/Title";
import firebase from "../firebase/initFirebase";
import UploadForm from "../comps/UploadForm";
import ImageGrid from "../comps/ImageGrid";

export default function Home() {
  return (
    <div className="App">
      <Title />
      <UploadForm />
      <ImageGrid />
    </div>
  );
}
