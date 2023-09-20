import { useEffect, useState } from "react";

const imageloader = async () => {
  const response = await fetch("http://localhost:3001/sampletest/images");
  const appointmentData = await response.json();
  return appointmentData;
};

export default function SampleTestForm() {
  const [getData, setGetData] = useState({
    images: "",
  });
  const [image, setImage] = useState([]);

  useEffect(() => {
    async function init() {
      const data = await imageloader();
      setImage(data);
    }
    init();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:3001/sampletest/uploadImage", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(getData),
    });
  };

  const handleChange = (e) => {
    e.preventDefaults;
    const { name, value } = e.target;
    setGetData({
      ...getData,
      [name]: value,
    });
  };

  console.log(getData);

  return (
    <>
      {image.map((item) => (
        <img src={item.image} alt="" key={item.image_id} />
      ))}

      <form
        action=""
        className="border border-black m-9 p-5 text-center"
        onSubmit={handleSubmit}
        encType="multipart/form-data"
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
        {/* <div className="py-2">
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
            </div> */}
        <button type="submit" className="bg-gray-500">
          Submit
        </button>
      </form>
    </>
  );
}
