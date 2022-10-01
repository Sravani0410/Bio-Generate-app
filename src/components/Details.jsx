import React, { useState } from "react"
import Options from "./Options/Options"
import Result from "./Result/Result"

import './Details.css';

function Details(){
    
    const [name,setName]=useState("Sravani Sandhya Devi Pyla");

    const [gender,setGender]=useState("Female");

    const [location,setLocation]=useState("Visakhapatnam,Andhra Pradesh");
    const [isLocation,setIsLocation]=useState(true);

    const [school,setSchool]=useState("Sri Padmavathi university")
    const [isSchool,setIsSchool]=useState(true);

    const[major,setMajor]=useState("Graduation in Electrical & Electrions Engineering")

    const [occupation,setOccupation]=useState("Full Stack Web Developer")
    const[isOccupation,setISOccupation]=useState(true)

    const [religious,setReligious]=useState("in a family that always encouraged a belief in God, but never attended one church consistently")
    const[isReligious,setIsReligious]=useState(true)

    const[reason,setReason]=useState("wants to grow closer to God and find purpose in life")
    const[isReason,setIsReason]=useState(true);

    return (
        
        <div className="details_cont">
            <div className="details">
                <Options
                name={name}
                setName={setName}

                gender={gender}
                setGender={setGender}

                location={location}
                setLocation={setLocation}

                isLocation={isLocation}
                setIsLocation={setIsLocation}

                school={school}
                setSchool={setSchool}
                 isSchool={isSchool}   
                 setIsSchool={setIsSchool}  

                 major={major}
                 setMajor={setMajor}

                 occupation={occupation}
                 setOccupation={setOccupation}
                 isOccupation={isOccupation}
                 setISOccupation={setISOccupation}

                 religious={religious}
                 setReligious={setReligious}
                 isReligious={isReligious}
                 setIsReligious={setIsReligious}

                 reason={reason}
                 setReason={setReason}
                 isReason={isReason}
                 setIsReason={setIsReason}


                />
                <Result
                 name={name}
                 setName={setName}
 
                 gender={gender}
                 setGender={setGender}
 
                 location={location}
                 setLocation={setLocation}
 
                 isLocation={isLocation}
                 setIsLocation={setIsLocation}
 
                 school={school}
                 setSchool={setSchool}
                  isSchool={isSchool}   
                  setIsSchool={setIsSchool}  
 
                  major={major}
                  setMajor={setMajor}
 
                  occupation={occupation}
                  setOccupation={setOccupation}
                  isOccupation={isOccupation}
                  setISOccupation={setISOccupation}
 
                  religious={religious}
                  setReligious={setReligious}
                  isReligious={isReligious}
                  setIsReligious={setIsReligious}
 
                  reason={reason}
                  setReason={setReason}
                  isReason={isReason}
                  setIsReason={setIsReason}
 
                />
            </div>
        </div>
       
    )
}
export default Details