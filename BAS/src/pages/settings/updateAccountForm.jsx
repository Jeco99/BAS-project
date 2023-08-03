import { useState } from "react";

import ImageUpload from "../../components/imageUpload/imageUpload";
import UpdateButton from "../../components/button/updateButton";

import accountInputFormData from "../../components/input/accountInputFormData";
import FormInput from "../../components/input/formInput";

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
    username: null,
    email: null,
    password: null,
    confirmpassword: null,
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

    if (getData.password.trim() !== getData.confirmpassword.trim()) {
      newErrors.password = "Set Password";
      newErrors.confirmpassword = "Set Confirm Password";
      alert("Password not matched!");
    } else {
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

    setErrors(newErrors);

    if (
      errors.username === "" &&
      errors.email === "" &&
      errors.password === "" &&
      errors.confirmpassword === ""
    ) {
      alert("Account Updated!");
    }
  };
  //TODO: errors not updated recheck on the account details
  console.log(errors);
  console.log(getData);

  return (
    <div>
      <h1 className="text-center text-2xl sm:text-4xl py-4 font-semibold">
        Account Details
      </h1>
      <div className="block mt-8 mx-96 p-6  bg-white border border-gray-200 rounded-lg shadow ">
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4 ">
            <ImageUpload getData={getData} setGetData={setGetData} />
            {accountInputFormData.map((formElements) => (
              <FormInput
                key={formElements.id}
                id={formElements.id}
                type={formElements.type}
                handleChange={handleChange}
                value={getData[formElements.id]}
                labelName={formElements.labelName}
                errors={errors}
                errorsmessage={formElements.errormessage}
              />
            ))}
          </div>
          <div className="flex justify-end mt-8 pr-8">
            <button
              type="button"
              className="mr-4 bg-beetleGreen hover:bg-morningGlory hover:text-black text-black font-bold py-2 px-4 rounded"
            >
              Cancel
            </button>
            <button
              className="bg-beetleGreen hover:bg-morningGlory hover:text-black text-black font-bold py-2 px-4 rounded"
              type="submit"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdateAccountDetails;
