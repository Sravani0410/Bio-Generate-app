import React from "react"
import './Result.css';

const Result=(props)=>{
    const {
        photo,
        // setPhoto,
        name,
        gender,
        location,
        isLocation,
        school,
        isSchool,
        major,
        occupation,
        isOccupation,
        religious,
        isReligious,
        reason,
        isReason
    }=props;
    return (
        <div className="Result_cont">
           <h2 className="result">Result</h2>
           <div>
            <img src={photo} alt="" className="image_tag"/>
           </div>
           <div style={{fontSize:'22px'}} className="res">
            {isLocation&&<span>{`${name}`} is from {`${location}`}.</span>}
            {isSchool&&<span>{gender==="Female" ? 'She' : 'He' } is  {`${major}`} from {`${school}`}.</span>}
            {isOccupation&&<span>{gender==="Female"?'She':'He'} currently doing as a {`${occupation}`}.</span>}
            {isReligious&&<span>{gender==="Female" ? 'She' : 'He'} raised {`${religious}`}.</span>}
            {isReason&&<span>{gender==="Female" ? "She" : "he"} {`${reason}`}.</span>}
           </div>
        </div>
       

    )
}
export default Result