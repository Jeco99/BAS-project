import { useEffect, useState } from "react";

const imageloader = async () => {
  const response = await fetch("http://localhost:3001/sampletest/images");
  const imagesData = await response.json();
  return imagesData;
};

export default function SampleTestForm() {
  const [getData, setGetData] = useState({
    image: '',
    email:'',
    password: '',
    fullname: ''
  });
  const [imageData, setImage] = useState([]);

  useEffect(() => {
    async function init() {
      const data = await imageloader();
      setImage(data);
    }
    init();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("image", getData.image)
    formData.append("email", getData.email)
    formData.append("password", getData.password)
    formData.append("fullname", getData.fullname)    

    await fetch("http://localhost:3001/sampletest/uploadImage", {
      method: "POST",
      body: formData,
    });
  };

  const handleChange = (e) => {
    e.preventDefaults;
    setGetData(e.target.files[0]);
  };

  console.log(imageData);

  return (
    <>
      {imageData.map((item) => (
        <img src={"http://localhost:3001/static/" + item.images} alt="" key={item.image_id} />
      ))}

      <form
        className="border border-black m-9 p-5 text-center"
        onSubmit={handleSubmit}
        encType="multipart/form-data"
        method="post"
      >
        <div className="py-2">
          <label htmlFor="images">Upload Image</label>
          <input
            type="file"
            name="images"
            id="images"
            accept=".png, .jpg, .jpeg, .md"
            onChange={handleChange}
          />
        </div>
        <div className="py-2">
                <label htmlFor="email">Email: </label>
                <input type="email" name="email" id="email" onChange={handleChange}/>
            </div>
            <div className="py-2">
                <label htmlFor="password">Password: </label>
                <input type="password" name="password" id="password" onChange={handleChange}/>
            </div>
            <div className="py-2">
                <label htmlFor="fullname">Full Name: </label>
                <input type="text" name="fullname" id="fullname" onChange={handleChange}/>
            </div>
        <button type="submit" className="bg-gray-500">
          Submit
        </button>
      </form>
    </>
  );
}
