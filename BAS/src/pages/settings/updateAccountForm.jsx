import { useState } from "react";

import ImageUpload from "../../components/imageUpload/imageUpload"
import UpdateButton from "../../components/button/updateButton";

// import updateAccountInput from "./updateAccountInput";

function UpdateAccountDetails() {
  const [getData, setGetData] = useState({
    imagefile: "",
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const [errors, setErrors] = useState({
    imagefile: "",
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setGetData({
      ...getData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = { ...errors };

    if (getData.username.trim() == "") {
      newErrors.username = "Set Username";
    } else {
      newErrors.username = "";
    }

    if (getData.email.trim() == "") {
      newErrors.email = "Set Email";
    } else {
      newErrors.email = "";
    }

    if(getData.password.trim() !== getData.confirmpassword.trim()){
        newErrors.password = 'Set Password';
        newErrors.confirmpassword = "Set Confirm Password";
        alert('Password not matched!')
    } else{
        newErrors.password = "";
        newErrors.confirmpassword = "";
    }

    if (getData.password.trim() == "") {
      newErrors.password = "Set Password";
    } else {
      newErrors.password = "";
    }

    if (getData.confirmpassword.trim() == "") {
      newErrors.confirmpassword = "Set Confirm Password";
    } else {
      newErrors.confirmpassword = "";
    }

    setErrors(newErrors)
  };


  return (
    <div>
      <h1 className="text-center text-2xl sm:text-4xl py-4 font-semibold">
        Account Details
      </h1>
      <div className="block mt-8 p-6  bg-white border border-gray-200 rounded-lg shadow">
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4 ">
            <ImageUpload getData={getData} setGetData={setGetData} />

            {/* {
                updateAccountInput.map((elements) => (
                    <div key={elements.name}>
                        <div>
                            <label htmlFor={elements.name}>{elements.label}</label>
                        </div>
                        <input 
                            type={elements.type}
                            id={elements.name}
                            name={elements.name}
                            className={elements.style}
                            onChange={handleChange}
                            //error need to dynamic
                         />
                    </div>
                ))
            }
           */}
            <div>
              <div className="mb-2 block">
                <label htmlFor="userName">Username</label>
              </div>
              <input
                className="w-full p-2.5 text-black-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
                id="username"
                name="username"
                type="text"
                onChange={handleChange}
              />
              {errors.username && <small>User Name is required!</small>}
            </div>
            <div>
              <div className="mb-2 block">
                <label htmlFor="email" value="Your email">
                  Email
                </label>
              </div>
              <input
                className="w-full p-2.5 text-black-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
                id="email"
                name="email"
                type="email"
                onChange={handleChange}
              />
              {errors.email && <small>Email is required!</small>}
            </div>
            <div>
              <div className="mb-2 block">
                <label htmlFor="password" value="Your password">
                  Password
                </label>
              </div>
              <input
                className="w-full p-2.5 text-black-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
                id="password"
                name="password"
                type="password"
                onChange={handleChange}
              />
              {errors.password && <small>Password is required!</small>}
            </div>
            <div>
              <div className="mb-2 block">
                <label htmlFor="confirmpassword" value="Confirm password">
                  Confirm Password
                </label>
              </div>
              <input
                className="w-full p-2.5 text-black-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
                id="confirmpassword"
                name="confirmpassword"
                type="password"
                onChange={handleChange}
              />
              {errors.confirmpassword && <small>Password is required!</small>}
            </div>
          </div>

          <UpdateButton />
        </form>
      </div>
    </div>
  );
}

export default UpdateAccountDetails;
