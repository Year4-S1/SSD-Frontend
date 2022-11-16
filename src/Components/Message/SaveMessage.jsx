import React from "react";
import { useState } from "react";
import Context from "../../ContextAPI/Context";
import "./SaveMessage.scss";

const SaveMessage = () => {

  const [title, setTitle] = useState("");
  const [msg, setMsg] = useState("");
  

  const handleTitle = (e) => {
      let title = e.target.value.trim();
      setTitle(title);
  };

  const handleMessage = (e) => {
      let messgae = e.target.value;
    
      setMsg(messgae);

  };

  return (
    <Context.Consumer>
    {(context) => (
    <div className="base-container center">
      <div className="form-container-wh ">
        <div className="center title">Save Message</div>

        <div style={{ marginTop: "30px", width: "100%" }}>
          <input
            type="text"
            class="input-container-sm"
            id="floatingInput"
            placeholder="Title"
            onChange={(e) =>{
              handleTitle(e)
            }}
          
          />
        </div>

        <div style={{ marginTop: "30px", width: "100%" }}>
          <textarea
            type="text"
            class="textarea-container"
            placeholder="Message"
            id="floatingInput"
            rows="5"
            onChange={(e) =>{
              handleMessage(e)
            }}
           
          />
        </div>

        <div className="center" style={{ marginTop: "30px" }}>
          <div className="login-btn center "
          onClick={()=>{
            if(title!=='' || msg!==''){
              context.SaveMessage(title, msg)
            }
          }}
          >Save Message</div>
        </div>
      </div>
    </div>
    )}
    </Context.Consumer>
  );
};

export default SaveMessage;
