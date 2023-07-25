import { useState } from "react";
import ImageUpload from "./imageUpload";

import { Button } from "@material-tailwind/react";


function AccountDetails({getData, setGetData, handleNext, handlePrev, activeStep, isFirstStep}) {
 
  const handleChange = (e) => {
      e.preventDefault()    
        const { name, value } = e.target;
        setGetData({
          ...getData,
          [name]: value,
        });   
  }

  return (
    <div>
      <h1 className="text-center text-2xl sm:text-4xl py-4 font-semibold">Account Details</h1>
      <div className="block mt-8 p-6  bg-white border border-gray-200 rounded-lg shadow">
        
        <form className="w-full" >
        <div className="flex flex-col gap-4 ">
          <ImageUpload getData={getData} setGetData={setGetData} />
          <div>
            <div className="mb-2 block">
              <label htmlFor="userName">
                Username
              </label>
            </div>
            <input
              className="w-full p-2.5 text-black-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
              id="username"
              name="username"
              required
              type="text"
              onChange={handleChange}
            />
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
              required
              type="email"
              onChange={handleChange}
            />
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
              required
              type="password"
              onChange={handleChange}
            />
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
              required
              type="password"
              onChange={handleChange}
            />
          </div>
          </div>
                 
          <div className="mt-16 flex justify-between">
        <Button
          onClick={handlePrev}
          disabled={isFirstStep}          
        >
          Prev
        </Button>
        <Button
          onClick={handleNext}
          type= {activeStep == 0 ? "button" : "submit"}
        >
          {activeStep == 0 ? "Next" : "Submit"}
        </Button>
      </div>
          </form>
  
  
      </div>
    </div>
  );
}

export default AccountDetails;
