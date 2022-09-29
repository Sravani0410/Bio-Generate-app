import React from "react"
import './Options.css';

function Options(){
    return (
        <div className="Options_Cont">
           <h1>Options</h1>
           <div className="form_data">
                <label htmlFor="">Name</label>
                <input type="text"  placeholder="Enter Name"/>
                <label htmlFor="">Gender</label>
                <select name="gender" id="">
                    <option value="">male</option>
                    <option value="">female</option>
                </select>
                <button>Random Name</button>
           </div>
           <div className="form_data">
               <label htmlFor="">Location</label>
               <input type="text" />
               <button>Random Location</button>
           </div>
           <div className="form_data">
                <label htmlFor="">School</label>
                <input type="text" />
                <button>Random School</button>
                <br />
                <label htmlFor="">Major</label>
                <input type="text" />
                <button>Random Major</button>
           </div>
           <div className="form_data">
                <label htmlFor="">Occupation</label>
                <input type="text" />
                <button>Random Occupation</button>
           </div>
           <div className="form_data">
               <label htmlFor=""><input type="checkbox" /></label>
               <textarea name="" id="" ></textarea>
               <button>Random text</button>
           </div>
           <div className="form_data">
               <label htmlFor=""><input type="checkbox" /></label>
               <textarea name="" id="" ></textarea>
               <button>Restoration</button>
               <button>Plan of Salvation</button>
               <button>Gospel of Christ</button>
               <button>Law of Chastity</button>
               <button>Word of Wisdom</button>
               <button>Any Lesson</button>
           </div>
          
        </div>
        
    )
}
export default Options