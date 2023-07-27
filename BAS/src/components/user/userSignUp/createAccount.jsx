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
    sex: "",
    dateofbirth: "",
    civilstatus: "",
    barangay: "",
    municipal: "",
    province: "",
    zone: "",
    street: "",
    zipcode: "",
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

  console.log(errors);

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
