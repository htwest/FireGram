import useFirestore from "../hooks/useFirestore";
import { motion } from "framer-motion";

const ImageGrid = ({ setSelectedImg }) => {
  // Retrieves documents from "images" collection in firestoreDB
  const { docs } = useFirestore("images");
  // console.log(docs);

  return (
    <div className="img-grid">
      {docs
        ? docs.map((doc) => (
            // Declared Div as a motion.div to use Framer-Motion animations
            <motion.div
              className="img-wrap"
              key={doc.id}
              whileHover={{ opacity: 1 }}
              onClick={() => {
                setSelectedImg(doc.url);
              }}
            >
              <img src={doc.url} alt="Image" />
            </motion.div>
          ))
        : null}
    </div>
  );
};

export default ImageGrid;
