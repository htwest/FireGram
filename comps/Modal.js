const Modal = ({ selectedImg, setSelectedImg }) => {
  // Handles Closing of Modal
  const handleClick = (e) => {
    setSelectedImg(null);
  };

  return (
    <div className="backdrop" onClick={handleClick}>
      <img src={selectedImg} alt="Enlarged Pic" />
    </div>
  );
};

export default Modal;
