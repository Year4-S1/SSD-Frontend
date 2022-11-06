import React, { useEffect } from "react";
import "./AdminHome.scss";
import { useNavigate } from 'react-router-dom'


const AdminHome = () => {
  const navigate = useNavigate();


  useEffect(()=>{
    if(localStorage.getItem('userType') !== 'ADMIN'){
      navigate('/')
    }
  })

  return (
    <div className="base-container center">
      <div className="colC">
        <div className="rowC">
          <div className="center" style={{ margin: "30px" }}>
            <div className="card-btn center "
            onClick={() =>{
              navigate('/createUser')
            }}
            >Save Message</div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
