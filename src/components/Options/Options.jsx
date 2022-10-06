import React, { useState } from "react"
import './Options.css';
// import { Images } from "../Data/images";
import {Name}from "../Data/name"
import {Location}from "../Data/location"
import { School } from "../Data/school";
import { Major } from "../Data/major";
import { Occupation } from "../Data/occupation";
import { Religious } from "../Data/religious";
import { Reason } from "../Data/reason";
import { Images } from "../Data/images";
import img from "../Data/image/img1.jpeg"
const Options=(data)=>{
    const[photo,setPhoto]=useState(img)
    console.log(photo)
    const {
        
        name,
        setName,
        gender,
        setGender,
        location,
        setLocation,
        isLocation,
        setIsLocation,
        school,
        setSchool,
        isSchool,
        setIsSchool,
        major,
        setMajor,
        occupation,
        setOccupation,
        isOccupation,
        setISOccupation,
        religious,
        setReligious,
        isReligious,
        setIsReligious,
        reason,
        setReason,
        isReason,
        setIsReason,
    } = data;

    const getRandomInt = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.round(Math.random() * (max - min) + min);
      };
      let randomPhoto = [
        {
          photo:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTip7Jkt7Y8vUdUJ1oxUd-FzIf6rVG-wV4q7FOBHutv&s",
        },
        {
          photo:
            "https://img.freepik.com/free-photo/pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-looking-with-satisfaction_176420-15187.jpg?w=2000",
        },
        {
          photo:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQATurGoISfff9EA0KzQhk3rIKZ2UgUG1283iLM-LAq9obYJSGpxn2U1eu07lBtj7nA1yA&usqp=CAU",
        },
      ];
    
    
    
      const handlePhoto = (e) => {
        const { name, files } = e.target;
        if (name === "photo") {
          setPhoto(URL.createObjectURL(files[0]));
    
          
        }
      };
    const handleName = (e) => {
        e.preventDefault();
        setName(e.target.value);
    };

    const handleGender=(e)=>{
        e.preventDefault();
        setGender(e.target.value)
    }

    const handleLocation=(e)=>{
        e.preventDefault();
        setLocation(e.target.value);
    }

    const handleSchool=(e)=>{
        e.preventDefault();
        setSchool(e.target.value);
    }

    const handleMajor=(e)=>{
        e.preventDefault();
        setMajor(e.target.value)
    }

    const handleOccupation=(e)=>{
        e.preventDefault();
        setOccupation(e.target.value)
    }

    const handleReligious=(e)=>{
        e.preventDefault();
        setReligious(e.target.value)
    }

    const handleReason=(e)=>{
        e.preventDefault();
        setReason(e.target.value)
    }


    function randomInterval(min,max){
        return Math.floor(Math.random()*(max-min+1)+min);
    }

    const random=randomInterval(1,1000)

    
const handleRandomName=()=>{
    return Name.forEach((el)=>{
        if(random===el.id){
            setName(el.first_name+" "+el.last_name);
            setGender(el.gender);
        }
    })
}
const handleRandomLocation=()=>{
    return Location.forEach((el)=>{
        if(random===el.id){
            setLocation(el.location)
        }
    })
}
const handleRandomSchool=()=>{
    return School.forEach((el)=>{
        if(random===el.id){
            setSchool(el.school)
        }
    })
}

const handleRandomMajor=()=>{
    return Major.forEach((el)=>{
        if(random===el.id){
            setMajor(el.major)
        }
    })
}
const handleRandomOccupation=()=>{
    return Occupation.forEach((el)=>{
        if(random===el.id){
            setOccupation(el.profession)
        }
    })
}
// console.log("handleRandomOccupation:",handleRandomOccupation)
const handleRandomReligious=()=>{
    let id=randomInterval(1,8);
    return Religious?.forEach((el)=>{
        if(id===el.id){
            setReligious(el.religionView)
        }
    })
}

const handleRandomReason=()=>{
    let id=randomInterval(1,14)
    return Reason?.forEach((el)=>{
        if(id===el.id){
            setReason(el.religionView)
        }
    })
}
const handleRandomPhoto=(value, setPhoto, min, max)=>{
    let randomNumber = getRandomInt(min, max);
    return Images?.forEach((el)=>{
        if(randomNumber===el.id){
            setPhoto(value[randomNumber].image)
        }
    })
}

    return (
        <div className="Options_Cont">
           <h2>Options</h2>
           <div className="name">
      <label className="label1">Photo :</label>
      <input
        type="file"
        name="photo"
        onChange={handlePhoto}
        className="image_tag"
        alt=""
      />
      <button
        onClick={() => handleRandomPhoto(randomPhoto, setPhoto, 0, 2)}
        className="photobutton"
      >
        Random Photo
      </button>
    </div>
           <div className="form_data">
                <label for="person-name-textbox">Name</label>
                <input
                    type="text"
                    name="person-name-textbox"
                    onChange={handleName}
                    value={name}
                    />
                <label for="gender">Gender</label>
                <select name="gender" onChange={handleGender} value={gender}>
                    <option>Female</option>
                    <option>Male</option>
                </select>
                <button onClick={ handleRandomName}>Random Name</button>
           </div>
           <div className="form_data">
               <input type="checkbox" 
               name="location"
               onChange={()=>setIsLocation(!isLocation)}
               checked={isLocation}
               />
               <label for="location">Location</label>
               <input type="text"
               onChange={handleLocation}
               value={location}
               />
               <button onClick={handleRandomLocation}>Random Location</button>
           </div>
           <div className="form_data">
                <input type="checkbox" 
                name="school"
                onChange={()=>setIsSchool(!isSchool)}
                checked={isSchool}
                />
                <label for="scchool">School</label>
                <input type="text" 
                onChange={handleSchool}
                value={school}
                />
                <button onClick={handleRandomSchool}>Random School</button>
                <br />
                <label for="major">Major</label>
                <input type="text" 
                onChange={handleMajor}
                value={major}
                />
                <button onClick={handleRandomMajor}>Random Major</button>
           </div>
           <div className="form_data">
                <input type="checkbox" 
                onChange={()=>setISOccupation(!isOccupation)}
                checked={isOccupation}
                />
                <label for="occupation">Occupation</label>
                <input type="text" 
                onChange={handleOccupation}
                value={occupation}
                />
                <button onClick={handleRandomOccupation}>Random Occupation</button>
           </div>
           <div className="form_data">
               <label for="religious"><input type="checkbox" 
               onChange={()=>setIsReligious(!isReligious)}
               checked={isReligious}
               />Religious</label>
               <textarea name="religious" 
               onChange={handleReligious}
               value={religious}
               ></textarea>
               <button onClick={handleRandomReligious}>Random text</button>
           </div>
           <div className="form_data">
               <label for="desire"><input type="checkbox"
               name="reason"
               onChange={()=>setIsReason(!isReason)}
               checked={isReason}
               />Reason for meeting with missionaries</label>
               <textarea 
               type="text"
               name="desire" 
               onChange={handleReason}
               value={reason}
               ></textarea>
               <button onClick={handleRandomReason}
               style={{ backgroundColor: "#db9b" }}>Restoration</button>
               <button onClick={handleRandomReason}
                style={{ backgroundColor: "#adab" }}>Plan of Salvation</button>
               <button onClick={handleRandomReason}
                style={{ backgroundColor: "#aadb" }}>Gospel of Christ</button>
               <button onClick={handleRandomReason}
                style={{ backgroundColor: "#eabb" }}>Law of Chastity</button>
               <button onClick={handleRandomReason}
               style={{ backgroundColor: "#c9cb" }}>Word of Wisdom</button>
               <button onClick={handleRandomReason}>Any Lesson</button>
           </div>
          
        </div>
        
    )
}
export default Options