import React from 'react'
import Context from '../../ContextAPI/Context'
import '../Navbar/Navbar.scss'

const Navbar = () => {

 
  return (
    <Context.Consumer>
      {(context) => (
    <div className='nav-back'>

      <div className='nav-ttl'>
        ABC Company
      </div>
      {
         localStorage.getItem("loggedIn") === 'true'?  <div className='logout-btn'
         onClick={() =>{ context.logout()}}
         >
         Logout
       </div> :''
      }
     
    </div>
      )}
      </Context.Consumer>
  )
}

export default Navbar