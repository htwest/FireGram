const Modal = ({ selectedImg, setSelectedImg }) => {
  // Handles Closing of Modal
  const handleClick = (e) => {
    // Checks if click is on backdrop or on image
    if (e.target.classList.contains("backdrop")) {
      setSelectedImg(null);
    }
  };

  return (
    <div className="backdrop" onClick={handleClick}>
      <img src={selectedImg} alt="Enlarged Pic" />
    </div>
  );
};

export default Modal;
