import { useState } from "react";
import { Stepper, Step } from "@material-tailwind/react";

import AccountDetails from "./accountDetails";
import PersonalDetails from "./personalDetails";

export default function CreateaAccount() {
  const [activeStep, setActiveStep] = useState(0);
  const [isLastStep, setIsLastStep] = useState(false);
  const [isFirstStep, setIsFirstStep] = useState(false);
  
  const [getData, setGetData] = useState({
    imagefile: "",
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
    firstname:"",
    middlename:"",
    lastname:"",
    suffix:"",
    sex:"",
    dateofbirth:"",
    civilstatus:"",
    barangay:"",
    municipal:"",
    province:"",
    zone:"",
    street:"",
    zipcode:""     
  });


  const display = () => {
    switch (activeStep) {
      case 0: {
        return <AccountDetails 
          getData={getData} 
          setGetData={setGetData} 
          handleNext={handleNext} 
          handlePrev={handlePrev}
          activeStep={activeStep}
          isFirstStep={isFirstStep}
          />;
      }
      case 1: {
        return <PersonalDetails 
          getData={getData} 
          setGetData={setGetData} 
          handleNext={handleNext} 
          handlePrev={handlePrev}
          activeStep={activeStep}
          isFirstStep={isFirstStep}
          />;
      }
    }
  };

  //data validation

  // TODO: Where the handle next will validate the data before going next form
  const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
  const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);

  return (
    <div className="py-4 px-8">
      <Stepper
        activeStep={activeStep}
        isLastStep={(value) => setIsLastStep(value)}
        isFirstStep={(value) => setIsFirstStep(value)}
        className="w-full sm:w-7/12 mx-auto"
      >
        <Step onClick={() => setActiveStep(0)}>1</Step>
        <Step onClick={() => setActiveStep(1)}>2</Step>
      </Stepper>

       {display()}   
   
    </div>
  );
}
