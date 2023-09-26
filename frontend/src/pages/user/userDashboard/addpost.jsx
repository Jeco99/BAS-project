import { useState } from "react";

//TODO: hide scrollbar

function BarangayAddPost({ setAddPost }) {

  const [postDetails, setPostDetails] = useState({
    title: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPostDetails({
      ...postDetails,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/post/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postDetails)
      });

      if (response.status === 200) {
        alert('Data inserted successfully');
        return location.href = "/root/:id/dashboard"
      } else {
        alert('Error inserting data');
      }
    } catch (error) {
      console.error('Error:', error);
    }


  };


  console.log(postDetails);
  return (
    <div className="fixed block inset-0 flex items-center justify-center bg-gray-50 bg-opacity-90 overflow-hidden z-50">
      <div className="w-full mx-[700px]">
        <h1 className="text-center m-4 text-3xl">New Post</h1>
        <form
          className=" mx-auto w-11/12 flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl btnRadius bg-white"
          onSubmit={handleSubmit}
          method="post"
        >
          <input
            className="bg-gray-100 border border-gray-300 p-3 outline-none text-1xl btnRadius"
            spellCheck="false"
            placeholder="Title"
            type="text"
            onChange={handleChange}
            name="title"
            id="title"
          />
    
          <textarea
            className="bg-gray-100 sec p-3 h-60 border border-gray-300 outline-none mt-4 text-1xl btnRadius"
            spellCheck="false"
            placeholder="Describe everything about this post here"
            onChange={handleChange}
            name="message"
            id="message"
          ></textarea>
        

          <div className="flex justify-between gap-1 mt-4">
            <button
             className="cancelBtn btnRadius"
              type="button"
              onClick={() => setAddPost(false)}
            >
              Cancel
            </button>
            <button
              className="btnRadius btn"
              type="submit"
            >
              Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default BarangayAddPost;