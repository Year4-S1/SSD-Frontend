import Context from "./Context";
import axios from "axios";
import { useState } from "react";


const AppProvider = (props) => {




    // rulebased_spellchecker("කොලඹ යමු ද​")

    return (
        <Context.Provider
            value={{
                
            }}
        >
            {props.children}
        </Context.Provider>
    )
}

export default AppProvider;
