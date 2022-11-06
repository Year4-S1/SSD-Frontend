import React from "react";
import "../UploadFile/UploadFile.scss";
import uploadImage from "../../Assets/upload.png";

const UploadFile = () => {
  return (
    <div className="base-container center">
      <div className="form-container ">
        <div className="center title">Upload File</div>

        <div style={{ marginTop: "30px", width: "100%" }}>
          <input
            type="text"
            class="input-container-save-message"
            id="floatingInput"
            placeholder="Title"
          />
        </div>
        <div
          style={{ marginTop: "30px", width: "100%" }}
          class="box-container center colC"
        >
          <img
            src={uploadImage}
            style={{ height: "150px", width: "150px" }}
            alt="upload"
          />
          <div className="center small-title">Upload File</div>
        </div>

        <div className="center" style={{ marginTop: "30px" }}>
          <div className="btn">Upload File</div>
        </div>
      </div>
    </div>
  );
};

export default UploadFile;
