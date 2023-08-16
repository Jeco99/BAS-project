import { useState } from "react";

import { Button } from "@material-tailwind/react";

import ImageUpload from "../../../components/imageUpload/imageUpload";
import FormInput from "../../../components/input/formInput";

import accountInputFormData from "../../../components/input/accountInputFormData";
function AccountDetails({
  getData,
  setGetData,
  handleNext,
  handlePrev,
  activeStep,
  errors,
}) {
  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setGetData({
      ...getData,
      [name]: value,
    });
  };

  return (
    <div className="mx-auto md:mx-[100px] lg:mx-[290px] xl:mx-[500px] 2xl:[700px]">
      <h1 className="text-center text-2xl sm:text-4xl font-semibold">
        Account Details
      </h1>
      <div className="block mt-8 p-6 bg-white border border-gray-200 rounded-lg shadow">
        <div className="w-full">
          <div className="flex flex-col gap-4 ">
            <ImageUpload getData={getData} setGetData={setGetData} />
            {
              accountInputFormData.map((formElements) => (
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
              ))
            }
          </div> 
          <div className="mt-5 flex justify-between">
            <Button onClick={handlePrev}
            className="btn"
            >
              {activeStep == 0 ? "Back" : "Prev"}
            </Button>
            <Button
              onClick={handleNext}
              className="btn"
              type={activeStep == 0 ? "button" : "submit"}
            >
              {activeStep == 0 ? "Next" : "Submit"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountDetails;
