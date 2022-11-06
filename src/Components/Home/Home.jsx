import React, { useEffect } from "react";
import "./Home.scss";
import Context from "../../ContextAPI/Context";
import { useNavigate } from 'react-router-dom'



const Home = () => {
  const navigate = useNavigate();

  useEffect(()=>{
    if(localStorage.getItem('userType') === 'ADMIN'){
      navigate('/')
    }
  })
  return (
    <Context.Consumer>
      {(context) => (
        <div className="base-container center">
          <div className="colC">
            <div className="rowC">
              <div className="center" style={{ margin: "30px" }}>
                <div className="card-btn center "
                onClick={()=>{
                  navigate('/saveMessage')
                }}>Save Message</div>
              </div>
              <div className="center" style={{ margin: "30px" }}>
                <div className="card-btn center ">View Messages</div>
              </div>
            </div>
            {context.userType !== 'WORKER'? 
            <div className="rowC">
              <div className="center" style={{ margin: "30px" }}>
                <div className="card-btn center "
                onClick={()=>{
                  navigate('/uploadFile')
                }}>Upload Files</div>
              </div>
              <div className="center" style={{ margin: "30px" }}>
                <div className="card-btn center ">View Files</div>
              </div>
            </div>
            :''}
          </div>
        </div>
      )}
    </Context.Consumer>
  );
};

export default Home;
