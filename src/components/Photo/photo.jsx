import "./photo.css";
import { Images } from "../Data/images";
export const Photo = ({ photo, setPhoto }) => {
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
//   const handleRandomPhoto = (value, setPhoto, min, max) => {
//     let randomNumber = getRandomInt(min, max);
//     setPhoto(value[randomNumber].photo);
//   };

const handleRandomPhoto=(value, setPhoto, min, max)=>{
    let randomNumber = getRandomInt(min, max);
    return Images.map((el)=>{
        if(randomNumber===el.id){
            setPhoto(value[randomNumber].image)
        }
    })
}

  return (
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
  );
};
