import React from "react"
import Options from "./Options/Options"
import Result from "./Result/Result"

import './Details.css';

function Details(){
    return (
        
        <div className="details_cont">
            <div className="details">
                <Options/>
                <Result/>
            </div>
        </div>
       
    )
}
export default Details