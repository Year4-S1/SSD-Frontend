import React from 'react'
import '../Login/Login.scss'

const Login = () => {
    return (
        <div className='login-container center'>
            <div className='form-container '>
                <div className='center login-ttl'>
                    Login
                </div>

                <div className='center' style={{marginTop:'30px'}}>
                    <div className='input-container '>
                        <div>
                            <div class="form-floating mb-3" >
                                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                                <label for="floatingInput">Email</label>
                            </div>
                        </div>

                    </div>
                </div>

                <div className='center'>
                    <div className='input-container '>
                        <div>
                            <div class="form-floating mb-3" >
                                <input type="password" class="form-control" id="floatingInput" placeholder="name@example.com" />
                                <label for="floatingInput">Password</label>
                            </div>
                        </div>

                    </div>
                </div>


                <div className='center' style={{marginTop:'30px'}}>
                    <div className='login-btn center '>
                      Login
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login