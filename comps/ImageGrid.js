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
              // changes to layout will be animated
              layout
              whileHover={{ opacity: 1 }}
              onClick={() => {
                setSelectedImg(doc.url);
              }}
            >
              <motion.img
                src={doc.url}
                alt="Image"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              />
            </motion.div>
          ))
        : null}
    </div>
  );
};

export default ImageGrid;
