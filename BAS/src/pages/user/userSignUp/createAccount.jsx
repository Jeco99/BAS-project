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
    firstname: "",
    middlename: "",
    lastname: "",
    suffix: "",
    dateofbirth: "",
    contactnumber: "",
    sex: "",
    civilstatus: "",
    region:"",
    province: "",
    municipal: "",
    barangay: "",
    zone: "",
    street: ""
  });

  const [errors, setErrors] = useState({
    imagefile: "",
    username: null,
    email: null,
    password: null,
    confirmpassword: null,
  });

  const display = () => {
    switch (activeStep) {
      case 0: {
        return (
          <AccountDetails
            getData={getData}
            setGetData={setGetData}
            handleNext={handleNext}
            handlePrev={handlePrev}
            activeStep={activeStep}
            isFirstStep={isFirstStep}
            errors={errors}
          />
        );
      }
      case 1: {
        return (
          <PersonalDetails
            getData={getData}
            setGetData={setGetData}
            handleNext={handleNext}
            handlePrev={handlePrev}
            activeStep={activeStep}
            isFirstStep={isFirstStep}
          />
        );
      }
    }
  };

  const handleNext = () => {
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

    if (errors.username !== "") {
      return isLastStep && setActiveStep((cur) => cur + 1);
    }

    if (errors.email !== "") {
      return isLastStep && setActiveStep((cur) => cur + 1);
    }

    if (errors.password !== "") {
      return isLastStep && setActiveStep((cur) => cur + 1);
    }

    if (errors.confirmpassword !== "") {
      return isLastStep && setActiveStep((cur) => cur + 1);
    }

    if (
      errors.username === "" &&
      errors.email === "" &&
      errors.password === "" &&
      errors.confirmpassword === ""
    ) {
      return !isLastStep && setActiveStep((cur) => cur + 1);
    }
  };

  const handlePrev = () => {
    if (activeStep == 0) {
      location.href = "/";
    }

    return !isFirstStep && setActiveStep((cur) => cur - 1);
  };

 
  return (
    <>
      <div className="py-7 px-8 ">
        <div>
          <Stepper
            activeStep={activeStep}
            isLastStep={(value) => setIsLastStep(value)}
            isFirstStep={(value) => setIsFirstStep(value)}
            activeLineClassName="bg-beetleGreen"
            className="w-auto md:w-[400px] xl:w-[350px] mx-auto mb-5"
          >
            <Step
              activeClassName="ring-0 !bg-beetleGreen text-white"
              completedClassName="bg-beetleGreen text-black"
              onClick={() => setActiveStep(0)}
            >
              1
            </Step>
            <Step
             activeClassName="ring-0 !bg-beetleGreen text-white"
             completedClassName="bg-beetleGreen text-black"
              onClick={() => setActiveStep(1)}
            >
              2
            </Step>
          </Stepper>
        </div>
        <div>{display()}</div>
      </div>
    </>
  );
}
