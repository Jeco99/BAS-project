import { useState } from "react";

const ImageUpload = ({ getData, setGetData, errors }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="flex flex-col sm:flex-row justify-center items-center space-x-8">
      <div className="my-4">
        <img
          alt="user photo"
          src={
            selectedImage == null
              ? "https://static.thenounproject.com/png/4035887-200.png"
              : URL.createObjectURL(selectedImage)
          }
          className="shadow-md border rounded-lg object-fill"
        />
        {selectedImage && (
          <div className="text-center my-4">
            <button onClick={() => setSelectedImage(null)}>Remove</button>
          </div>
        )}
      </div>
      <div className="flex flex-col space-y-2">
        <input
          type="file"
          name="imagefile"
          id="imagefile"
          className="text-[12px] truncate"
          onChange={(event) => {
            setSelectedImage(event.target.files[0]);
            setGetData({
              ...getData,
              [event.target.name]: event.target.files[0],
            });
          }}
        />

        {/* {errors.imagefile && (
          <small className="text-center">Image is required!</small>
        )} */}
      </div>
    </div>
  );
};

export default ImageUpload;
