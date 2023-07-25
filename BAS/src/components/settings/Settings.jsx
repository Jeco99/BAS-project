import { useState } from "react";

import UpdateAccountDetails from "./updateAccountForm";
import UpdatePersonalDetails from "./updatePersonalForm";

const Settings = () => {
  const [activeButton, setActiveButton] = useState("AccountDetails");

  const displayForm = () => {
    return activeButton == 'AccountDetails' 
      ?  <UpdateAccountDetails />
      :  <UpdatePersonalDetails />
    }
  

  return (
    <div>
      <div className="container mx-auto">
        <div className="mt-8 pr-8">
          <p className=" text-black font-bold text-xl">Update Profile</p>
        </div>
        <div className="flex mt-8 mb-8 justify-center flex-col sm:flex-row gap-4">
          <div className="mx-8 h-81 w-362">
            <button 
            className="block w-full bg-gray-200 hover:bg-gray-300 font-bold py-4 px-8 rounded-t"
            onClick={() => {setActiveButton('AccountDetails')}}
            >
              Account
            </button>
          </div>
          <div className="mx-8 h-81 w-362">
            <button className="block w-full bg-gray-200 hover:bg-gray-300 font-bold py-4 px-8 rounded-t"
               onClick={() => {setActiveButton('PersonalDetails')}}
            >
              Personal
            </button>
          </div>
        </div>
        <hr className="border-b-2 border-black w-5/6 m-auto" />
      </div>
      <div className="m-3 sm:m-10">
      {displayForm()}
      </div>
     
      </div>
  );
};

export default Settings;
