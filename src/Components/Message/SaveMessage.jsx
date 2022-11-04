import React from "react";
import "./SaveMessage.scss";

const Home = () => {
  return (
    <div className="base-container center">
      <div className="form-container ">
        <div className="center title">Save Message</div>

        <div style={{ marginTop: "30px", width: "100%" }}>
          <input
            type="text"
            class="input-container"
            id="floatingInput"
            placeholder="Title"
          />
        </div>

        <div style={{ marginTop: "30px", width: "100%" }}>
          <textarea
            type="text"
            class="textarea-container"
            placeholder="Message"
            id="floatingInput"
            rows="5"
          />
        </div>

        <div className="center" style={{ marginTop: "30px" }}>
          <div className="login-btn center ">Login</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
