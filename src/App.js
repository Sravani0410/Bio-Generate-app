
// import { useState } from 'react';
import './App.css';
import Details from './components/Details';
import {Translate} from "./components/Translate"
// import img from "./components/Data/image/img1.jpeg";
// import { Photo } from "./components/Photo/photo";

function App() {
  // const [photo,setPhoto]=useState(img)
  return (
    <>
      <h1 className="container">Bio Generator</h1>
      
      <p><Translate/></p>
      {/* <Photo photo={photo}
          setPhoto={setPhoto}/> */}
      <Details/>
    </>
  );
}

export default App;
