import { motion } from "framer-motion";

const Modal = ({ selectedImg, setSelectedImg }) => {
  // Handles Closing of Modal
  const handleClick = (e) => {
    // Checks if click is on backdrop or on image
    if (e.target.classList.contains("backdrop")) {
      setSelectedImg(null);
    }
  };

  return (
    // Declare motion.div to use framer-motion animations
    <motion.div
      className="backdrop"
      onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.img
        src={selectedImg}
        alt="Enlarged Pic"
        // Creates drop down effect with animated positioning
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
      />
    </motion.div>
  );
};

export default Modal;
