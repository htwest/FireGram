import useFirestore from "../hooks/useFirestore";

const ImageGrid = () => {
  // Retrieves documents from "images" collection in firestoreDB
  const { docs } = useFirestore("images");
  // console.log(docs);

  return (
    <div className="img-grid">
      {docs
        ? docs.map((doc) => (
            <div className="img-wrap" key={doc.id}>
              <img src={doc.url} alt="Image" />
            </div>
          ))
        : null}
    </div>
  );
};

export default ImageGrid;
