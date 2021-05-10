import Title from "../comps/Title";
import firebase from "../firebase/initFirebase";

firebase();

export default function Home() {
  return (
    <div className="App">
      <Title />
    </div>
  );
}
