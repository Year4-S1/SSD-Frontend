import React from "react";
import "./Home.scss";

const Home = () => {
  return (
    <div className="base-container center">
      <div className="colC">
        <div className="rowC">
          <div className="center" style={{ margin: "30px" }}>
            <div className="card-btn center ">Save Message</div>
          </div>
          <div className="center" style={{ margin: "30px" }}>
            <div className="card-btn center ">View Messages</div>
          </div>
        </div>
        <div className="rowC">
          <div className="center" style={{ margin: "30px" }}>
            <div className="card-btn center ">Upload Files</div>
          </div>
          <div className="center" style={{ margin: "30px" }}>
            <div className="card-btn center ">View Files</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
