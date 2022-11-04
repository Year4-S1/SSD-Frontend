import React, { useState, useEffect, useRef, useContext } from "react";
import '../Login/Login.scss'
import Context from "../../ContextAPI/Context";
import EyeOpen from '../../Assets/eye-regular.svg'
import EyeClose from '../../Assets/eye-slash-regular.svg'

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState(false);
    const [pwdError, setPwdError] = useState(false);
    const [showPwd, setShowPwd] = useState(false);

    const handleEmail = (e) => {
        let userNameValue = e.target.value.trim();
        setEmail(userNameValue);

    };

    const handlePassword = (e) => {
        let passwordValue = e.target.value;
      
        setPassword(passwordValue);

    };

    const checkEmail = (email) => {
		let emailPattern = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		)
		return emailPattern.test(email);
	}

    return (
        <Context.Consumer>
            {(context) => (
                <div className='login-container center'>
                    <div className='form-container '>
                        <div className='center login-ttl'>
                            Login
                        </div>

                        <div className='center' style={{ marginTop: '30px' }}>
                            <div className='input-container '>
                                <div>
                                    <div class="form-floating mb-3" >
                                        <input type="email"
                                            class="form-control "
                                            id="floatingInput"
                                            placeholder="name@example.com"
                                            onChange={(e) => {
                                                handleEmail(e)
                                            }}
                                            required />
                                        <label for="floatingInput">Email</label>
                                    </div>
                                </div>

                            </div>
                        </div>



                        <div className='center'>
                            <div className='input-container '>
                                <div>
                                    <div class="form-floating mb-3 " style={{ display: 'flex' }} >

                                        <input type={showPwd?'text':'password'}
                                            class="form-control"
                                            id="floatingInput"
                                            placeholder="name@example.com" required
                                            onChange={(e) => {
                                                handlePassword(e)
                                            }} />

                                        <label for="floatingInput">Password</label>
                                        {showPwd ?
                                            <img src={EyeClose} className='icon' onClick={() => {
                                                setShowPwd(false)
                                            }} />
                                            :
                                            <img src={EyeOpen} className='icon' onClick={() => {
                                                setShowPwd(true)
                                            }} />
                                        }
                                    </div>

                                </div>

                            </div>
                        </div>

                        {pwdError ? <div className='validation-txt '>! Please fill all fields</div> : ''}




                        <div className='center' style={{ marginTop: '30px' }}>
                            <div className='login-btn center '
                                onClick={() => {
                                    if (email === "" || password === "") {
                                        setPwdError(true);
                                    }
                                    else if(email !== "" && password !== ""){
                                        context?.Login(email,password);
                                    }
                                }}>
                                Login
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </Context.Consumer>
    )
}

export default Login