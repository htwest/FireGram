import { useEffect } from "react";
import useStorage from "../hooks/useStorage";

const ProgressBar = ({ file, setFile }) => {
  // Begins File upload process
  const { url, progress } = useStorage(file);
  // console.log(progress, url);

  // Once upload is complete (URL is received), set File back to null to remove progress bar from screen
  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url]);

  // Component uses percenage amount from progress to adjust the length of the bar on screen
  return <div className="progress-bar" style={{ width: progress + "%" }}></div>;
};

export default ProgressBar;
