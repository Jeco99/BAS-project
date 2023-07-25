
import { useState } from "react";

const ImageUpload = ({getData, setGetData}) => {

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="flex flex-col sm:flex-row justify-center items-center space-x-8" >
         <div>
     <img
           alt="user photo"
           src={selectedImage == null ? "https://static.thenounproject.com/png/4035887-200.png": URL.createObjectURL(selectedImage)}
           className="shadow-md border rounded-lg"
           width={"250px"}
         />
        {selectedImage && (
        <div className="text-center my-4">
          <button onClick={() => setSelectedImage(null)}>Remove</button>
        </div>
      )}
   </div>
     
      <input
        type="file"
        name="imagefile"
        className="text-[12px] truncate"
        onChange={(event) => {
          // console.log(event.target.files[0]);
          setSelectedImage(event.target.files[0]);
          setGetData({
            ...getData,
            [event.target.name]: event.target.files[0],
          });  
        }}
      />
    </div>
  );
};

export default ImageUpload;
