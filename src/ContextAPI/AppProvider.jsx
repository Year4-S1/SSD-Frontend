import Context from "./Context";
import axios from "axios";
import { useState } from "react";
import config from "../config";



const AppProvider = (props) => {

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
            url: "login",
              data: credentials,
        }).then((response) =>{
            console.log(response)

            


        })

    }


    return (
        <Context.Provider
            value={{
                meme,
                Login
            }}
        >
            {props.children}
        </Context.Provider>
    )
}

export default AppProvider;
