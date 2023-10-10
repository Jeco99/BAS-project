import { useState } from "react";
import { useParams } from "react-router-dom";
import { post_Validation } from "../../../utils/post_validation";

function BarangayAddPost({ setAddPost }) {
  const { id } = useParams();

  const [postDetails, setPostDetails] = useState({
    title: "",
    description: "",
    user_id: id,
  });

  const [errors, setErrors] = useState({
    title: null,
    description: null,
  });

  console.log(errors);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPostDetails({
      ...postDetails,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    post_Validation(postDetails, errors, setErrors);
    const response = await fetch(`http://localhost:3001/post/add/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(postDetails),
    });

    if (response.status === 201) {
      alert("Data inserted successfully");
      return (location.href = `/root/${id}/dashboard`);
    }
  };
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
          {errors.title && <small>{errors.title}</small>}

          <textarea
            className="bg-gray-100 sec p-3 h-60 border border-gray-300 outline-none mt-4 text-1xl btnRadius"
            spellCheck="false"
            placeholder="Describe everything about this post here"
            onChange={handleChange}
            name="description"
            id="description"
          ></textarea>
          {errors.title && <small>{errors.description}</small>}

          <div className="flex justify-between gap-1 mt-4">
            <button
              className="cancelBtn btnRadius"
              type="button"
              onClick={() => setAddPost(false)}
            >
              Cancel
            </button>
            <button className="btnRadius btn" type="submit">
              Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default BarangayAddPost;
