import Context from "./Context";
import axios from "axios";
import { useState } from "react";
import config from "../config";
import { useCookies } from "react-cookie";
import { useNavigate } from 'react-router-dom'




const AppProvider = (props) => {
    const navigate = useNavigate();

    const [cookies, setCookie, removeCookie] = useCookies("user");
    const [loginErr, setLoginErr] = useState(false);
    const [userType, setUserType] = useState('');

    const meme = 'kkkk'


    const Login = (email, password) => {

        let credentials = {
            "email": email,
            "password": password
        }

        axios({
            headers: {
                "Access-Control-Allow-Origin": "*",
            },
            method: "post",
            baseURL: `${config.apiEndpoints.protocol}${config.apiEndpoints.baseURL}`,
            url: "user/login",
            data: credentials,
        }).then((response) => {


            if (response.data.data === "Password is not matched" || response.data.data === "User not found") {
                setLoginErr(true)
            }
            else {

                setUserType(response.data.data.responseData.userType);

                setLoginErr(false)

                localStorage.setItem("AccessToken", response.data.data.responseData.token)
                localStorage.setItem("UserType", response.data.data.responseData.userType)
                localStorage.setItem("UserId", response.data.data.responseData.user_id)

                if (userType === 'ADMIN') {
                    navigate('/adminHome')
                }
                else {
                    navigate('/home')
                }


            }


            setTimeout(() => {
                localStorage.clear()
                navigate('/')
            }, 18000000)


        })


    }


    const logout = () => {
        localStorage.clear()
        navigate('/')
    }


    const CreateUser = (fname, lname, email, phnNum, userType, password) => {

        let credentials = {
            "firstName": fname,
            "lastName": lname,
            "userType": userType,
            "email": email,
            "phoneNumber": phnNum,
            "password": password,

        }


        axios({
            headers: {
                "Authorization": localStorage?.getItem("AccessToken"),
                "Access-Control-Allow-Origin": "*",
            },
            method: "post",
            baseURL: `${config.apiEndpoints.protocol}${config.apiEndpoints.baseURL}`,
            url: "user/create",
            data: credentials,
        }).then((response) => {

            console.log(response)
            // setCookie('Access-Token',response.data.data.responseData.token  )
            // setCookie('User-Type',response.data.data.responseData.userType  )


        })
            .catch((error) => {
                console.log(error)
            });
    };


    const UploadFile = (file, user) => {

        console.log(file, user)

        let credentials = {
            "file": file,
            "createdBy": user,

        }


        axios({
            headers: {
                "Authorization": localStorage?.getItem("AccessToken"),
                "Access-Control-Allow-Origin": "*",
            },
            method: "post",
            baseURL: `${config.apiEndpoints.protocol}${config.apiEndpoints.baseURL}`,
            url: "file/upload",
            data: credentials,
        }).then((response) => {

            console.log(response)
            alert("File uploaded")


        })
            .catch((error) => {
                console.log(error)
            });
    };


    const SaveMessage = (title, message) => {



        let data = {
            "title": title,
            "message": message,
            "createdBy": localStorage.getItem("UserId")
        }
        console.log(data)
        axios({
            headers: {
                "Authorization": localStorage?.getItem("AccessToken"),
                "Access-Control-Allow-Origin": "*",
            },
            method: "post",
            baseURL: `${config.apiEndpoints.protocol}${config.apiEndpoints.baseURL}`,
            url: "message/create",
            data: data,
        }).then((response) => {
            console.log(response)


        })


    }





    return (
        <Context.Provider
            value={{
                meme,
                Login,
                CreateUser,
                loginErr,
                setLoginErr,
                userType,
                setUserType,
                UploadFile,
                SaveMessage,
                logout
            }}
        >
            {props.children}
        </Context.Provider>
    )
}

export default AppProvider;
