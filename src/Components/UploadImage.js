import React from "react";

const UploadImage = ({ filename, handleChange }) => {
  return (
    <div className="input-wrapper">
      <form>
        <label>
          <p>{filename ? "Uploading " + filename : "Upload"}</p>
          <input type="file" id="upload" onChange={handleChange}></input>
        </label>
      </form>
    </div>
  );
};

export default UploadImage;
