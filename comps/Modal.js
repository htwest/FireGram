const Modal = ({ selectedImg }) => {
  return (
    <div className="backdrop">
      <img src={selectedImg} alt="Enlarged Pic" />
    </div>
  );
};

export default Modal;
