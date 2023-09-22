import { useState } from "react";
import ImageUpload from "../../../components/imageUpload/imageUpload";

import commonInputFormData from "../../../components/input/commonInputFormData";
import FormInput from "../../../components/input/formInput";

export default function UpdateUserAccount() {
  const [getData, setGetData] = useState({
    user_image: "",
    user_name: "",
    email: "",
    password: "",
    confirmpassword: "",
    contactnumber: "",
  });

  const [errors, setErrors] = useState({
    user_image: null,
    user_name: null,
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

    if (getData.user_image == "") {
      newErrors.user_image = "Set user_image";
    } else {
      newErrors.user_image = "";
    }

    if (getData.user_name.trim() == "") {
      newErrors.user_name = "Set user_name";
    } else {
      newErrors.user_name = "";
    }

    if (getData.email.trim() == "") {
      newErrors.email = "Set Email";
    } else {
      newErrors.email = "";
    }

    if (getData.password != getData.confirmpassword) {
      alert("password not match!");
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
      errors.user_image === "" &&
      errors.email === "" &&
      errors.password === "" &&
      errors.confirmpassword === ""
    ) {
      alert("Form Submitted");
    }
  };
  return (
    <div className="block mt-8 p-6 bg-white border border-gray-200 rounded-lg shadow">
      <div className="w-full">
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <ImageUpload
            getData={getData}
            setGetData={setGetData}
            errors={errors}
          />
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {commonInputFormData.map((formElements) => (
              <FormInput
                key={formElements.id}
                id={formElements.id}
                type={formElements.type}
                handleChange={handleChange}
                value={getData[formElements.id]}
                labelName={formElements.labelName}
                errors={errors}
                errorsmessage={formElements.errormessage}
                showRequired={formElements.showRequired}
              />
            ))}
          </div>
          <div className="flex justify-between gap-4 flex-col sm:flex-row">
              <button
                 className="cancelBtn btnRadius"
                onClick={() => (location.href = "/")}
              >
                Back
              </button>
              <button className="btn btnRadius"> Submit</button>
            </div>
        </form>
      </div>
    </div>
  );
}
