import React, { useState } from 'react'
import Context from "../../ContextAPI/Context";
import '../CreateUser/CreateUser.scss'
import EyeOpen from '../../Assets/eye-regular.svg'
import EyeClose from '../../Assets/eye-slash-regular.svg'
import { getStaticContextFromError } from '@remix-run/router';



function CreateUser() {

    const [fname, setfname] = useState("")
    const [lname, setLname] = useState("")
    const [email, setEmail] = useState("")
    const [emailErr, setEmailErr] = useState(false)
    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [userType, setUserType] = useState("")
    const [showPwd, setShowPwd] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [pwdError, setPwdError] = useState(false);
    const [formError, setFromError] = useState(false);
    


    const handleFirstName = (e) => {
        let name = e.target.value.trim();
        setfname(name);

    };

    const handleLastName = (e) => {
        let name = e.target.value.trim();
        setLname(name);

    };


    const handleEmail = (e) => {
        let userNameValue = e.target.value.trim();
        setEmail(userNameValue);




    };

    const handlePhnNum = (e) => {

        let phnNum = e.target.value.trim();
        setPhone(phnNum);



    };

    const handleUserType = (type) => {


        setUserType(type);

        console.log(userType)



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


    const handleConfirmPassword = (e) => {
        let passwordValue = e.target.value;

        setConfirmPassword(passwordValue);

    };

    return (
        <Context.Consumer>
            {(context) => (
                <div className=' center'>
                    <div className='form-container-cu '>
                        <div className='center createUser-ttl'>
                            Create User
                        </div>

                        <div className='center' style={{ marginTop: '30px' }}>
                            <div className='flex-form'>
                                <div>
                                    <div class="form-floating mb-3" style={{ width: '400px' }} >
                                        <input type="text"
                                            class="form-control "
                                            id="floatingInput"
                                            placeholder="John"
                                            onChange={(e) => {
                                                handleFirstName(e)
                                            }}
                                            required />
                                        <label for="floatingInput">First Name</label>
                                    </div>
                                </div>

                                <div>
                                    <div class="form-floating mb-3" style={{ width: '400px' }} >
                                        <input type="text"
                                            class="form-control "
                                            id="floatingInput"
                                            placeholder="Doe"
                                            onChange={(e) => {
                                                handleLastName(e)
                                            }}
                                            required />
                                        <label for="floatingInput">Last Name</label>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className='center' style={{ marginTop: '30px' }}>
                            <div className='flex-form'>
                                <div>
                                    <div class="form-floating mb-3" style={{ width: '400px' }} >
                                        <input type="text"
                                            class="form-control "
                                            id="floatingInput"
                                            placeholder="John"
                                            onChange={(e) => {
                                                handleEmail(e)
                                            }}
                                            required />
                                        <label for="floatingInput">Email</label>
                                    </div>
                                </div>

                                <div>
                                    <div class="form-floating mb-3" style={{ width: '400px' }} >
                                        <input type="number"
                                            class="form-control "
                                            id="floatingInput"
                                            placeholder="Doe"
                                            maxLength={10}
                                            onChange={(e) => {
                                                handlePhnNum(e)
                                            }}
                                            required />
                                        <label for="floatingInput">Phone number</label>
                                    </div>
                                </div>

                            </div>
                        </div>

                        {emailErr ? <div className='validation-txt ' style={{ marginLeft: '130px' }}>Please Use Valid Email</div> : ''}


                        <div className='center' style={{ width: '30%', marginTop: '30px' }}>
                            User Type
                        </div>

                        <div className='center' style={{ marginTop: '10px' }}>
                            <div className='flex-form' style={{ width: '50%' }}>
                                <div>
                                    <input type="radio" id="contactChoice1" name="contact" value="MANAGER" onChange={() => {
                                        setUserType('MANAGER')
                                    }} />

                                    <label for="floatingInput" style={{ marginLeft: '5px' }}>Manager</label>

                                </div>

                                <div>
                                    <input type="radio" id="contactChoice1" name="contact" value="WORKER" onChange={() => {
                                        setUserType('WORKER')
                                    }} />

                                    <label for="floatingInput" style={{ marginLeft: '5px' }}>Worker</label>
                                </div>

                            </div>
                        </div>



                        <div className='center' style={{ marginTop: '30px' }} >
                            <div className='flex-form'>
                                <div>
                                    <div class="form-floating mb-3 " style={{ width: '400px' }} >

                                        <input type={showPwd ? 'text' : 'password'}
                                            class="form-control"
                                            id="floatingInput"
                                            placeholder="name@example.com" required
                                            onChange={(e) => {
                                                handlePassword(e)
                                            }} />

                                        <label for="floatingInput">Password</label>

                                    </div>

                                </div>

                                <div>
                                    <div class="form-floating mb-3 " style={{ width: '400px', display: 'flex' }} >

                                        <input type={showPwd ? 'text' : 'password'}
                                            class="form-control"
                                            id="floatingInput"
                                            placeholder="name@example.com" required
                                            onChange={(e) => {
                                                handleConfirmPassword(e)
                                            }} />

                                        <label for="floatingInput">Confirm Password</label>
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

                        {formError ? <div className='validation-txt ' style={{ marginLeft: '130px' }}>Please Fill All Fields</div> : ''}
                         {pwdError ? <div className='validation-txt ' style={{ marginLeft: '130px' }}>Passwords do not match</div> : ''}



                        <div className='center' style={{ marginTop: '30px' }}>
                            <div className='create-btn center '
                                onClick={() => {
                                    setFromError(false);
                                    setFromError(false);


                                    if(fname ===''|| lname ===""|| email ==="" || phone ==="" || userType ===""|| password === " " || confirmPassword ===""){
                                        setFromError(true);
                                    }

                                    else if (checkEmail(email) === false) {
                                        setFromError(false);
                                        setEmailErr(true)
                                    }
                                  
                                    else if(password != confirmPassword){
                                        setPwdError(true)
                                        setEmailErr(false)

                                    }
                                    else {

                                        setPwdError(false)
                                        context.CreateUser(fname, lname, email, phone, userType, password)
                                    }
                                    
                                }}>
                                Create User
                            </div>
                        </div>
                    </div>

                </div>
            )
            }
        </Context.Consumer >
    )
}

export default CreateUser