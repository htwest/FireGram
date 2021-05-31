import { useEffect } from "react";
import useStorage from "../hooks/useStorage";
import { motion } from "framer-motion";

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

  // This Component uses framer-motion to animate the loading bar, using percenage amount
  // from progress to adjust the length of the bar on screen
  return (
    <motion.div
      className="progress-bar"
      initial={{ width: 0 }}
      animate={{ width: progress + "%" }}
    ></motion.div>
  );
};

export default ProgressBar;
