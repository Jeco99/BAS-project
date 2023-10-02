import { useState, useEffect } from "react";
import ImageUpload from "../../../components/imageUpload/imageUpload";

import commonInputFormData from "../../../components/input/commonInputFormData";
import FormInput from "../../../components/input/formInput";

import { useParams } from "react-router-dom";
import { dataValidation } from "../../../utils/createAccount_dataValidation";
import { useNavigate } from "react-router-dom";

const userDetails_Selected_Loader = async (id) => {
  const response = await fetch("http://localhost:3001/root/fetch/" + id);
  const userDetails_data = await response.json();
  return userDetails_data;
};

export default function UpdateUserAccount() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [getData, setGetData] = useState({
    user_image: "",
    user_name: "",
    email: "",
    password: "",
    confirmpassword: "",
    contactnumber: ""
  });

  useEffect(() => {
    async function init() {
      const data = await userDetails_Selected_Loader(id);
      setGetData(data);
    }
    init();
  }, []);
  // console.log(getData);

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

  const handleSubmit = async(e) => {
    e.preventDefault();

    dataValidation(getData, setErrors, errors);
    const formdata = new FormData();

    formdata.append("user_image",getData.user_image);
    formdata.append("user_name",getData.user_name);
    formdata.append("email",getData.email);
    formdata.append("password",getData.password);
    formdata.append("contactnumber",getData.contactnumber);

    const response = await fetch(`http://localhost:3001/root/update/useraccount/${id}`, {
        method: 'PUT',
        body: formdata
      });
    if(response.status == 200){
      navigate(`/root/${id}`)
    }
    else{
      alert('Can\'t be found');
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
