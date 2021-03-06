import { useState } from "react";
import Progressbar from "./ProgressBar";

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  // Allowed File Types
  const types = ["image/png", "image/jpeg"];

  // Handles Picture Uploads
  const changeHandler = (e) => {
    let selected = e.target.files[0];
    // console.log(selected);

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError(null);
    } else {
      setFile(null);
      setError("Please select an Image file (png or jpeg)");
    }
  };

  return (
    <form>
      <label>
        <input type="file" onChange={changeHandler}></input>
        <span>+</span>
      </label>
      <div className="output">
        {error ? <div className="error">{error}</div> : null}
        {file ? <div className="file">{file.name}</div> : null}
        {file ? <Progressbar file={file} setFile={setFile} /> : null}
      </div>
    </form>
  );
};

export default UploadForm;
