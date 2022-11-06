import React, { useContext, useState } from "react";
import "./UploadFile.scss";
import uploadImage from "../../Assets/upload.png";
import storage from "./Firebase"
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import Context from "../../ContextAPI/Context";

const UploadFile = () => {

  const [upfile, setFile] = useState('');
  const [fileUrl, setFileUrl] = useState('');
  const [err, setErr] = useState(false);
  const conText = useContext(Context)



  const handleFile = (e) => {

    console.log(e.target.files[0]);

    setFile(e.target.files[0])
    setErr(false)

  }

  const handleSave = () => {
    const fileRef = ref(storage, `documents/${upfile.name}`)
    uploadBytes(fileRef, upfile).then((res) => {
      getDownloadURL(fileRef).then((promise) => {
        setFileUrl(promise)
        console.log(promise)

        conText.UploadFile(promise, localStorage.getItem('UserId'));
        setFile('')
      })



    })

  };

  const hiddenFileInput = React.useRef(null);

  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };

  return (
    <div className="base-container center">
      <div className="form-container-upload ">
        <div className="center title">Upload File</div>

        <div
          style={{ marginTop: "30px", width: "100%" }}
          class="box-container center colC"
        >
          <img
            src={uploadImage}
            style={{ height: "150px", width: "150px" }}
            alt="upload"
            onClick={(e) => {
              handleClick(e)
            }}
          />

          {upfile === '' ?
            <div className="center small-title">Upload File</div> :
            <div className="center filename">{upfile.name}</div>}
        </div>

        {err ?
          <div className="validation-txt-upload">Please Upload a File</div> : ''}

        <div className="center" style={{ marginTop: "30px" }}>
          <div className="btn-upload center"
            onClick={() => {
              if (upfile === '') {
                setErr(true)
              }
              else {
                handleSave()
              }
            }
            }
          >Upload File</div>
        </div>


        <input type='file'
          ref={hiddenFileInput}
          onChange={(e) => {
            handleFile(e)
          }}

          style={{ display: "none" }}
        />

      </div>
    </div>
  );
};

export default UploadFile;
