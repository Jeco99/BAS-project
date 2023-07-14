import { useState } from "react";
import ImageUpload from "./imageUpload";
import PersonalDetails from "./personalDetails";
import Stepper from "./stepper"
import { Button, Label, TextInput, Card } from "flowbite-react";

function AccountDetails() {
  const [next, setNext] = useState(false);

  if (next) {
    return <PersonalDetails />;
  }
  return (
    <>
        <Stepper />
        <h1 className="text-center text-2xl font-semibold">Account Details</h1>
        <Card className="block m-8 p-6 sm:m-32 bg-white border border-gray-200 rounded-lg shadow">
      <form className="flex flex-col gap-4 w-full">
        <ImageUpload />
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email" value="Your email" />
          </div>
          <TextInput
            id="email"
            required
            type="email"
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password" value="Your password" />
          </div>
          <TextInput id="password" required type="password" />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="confirmpassword" value="Confirm password" />
          </div>
          <TextInput id="confirmpassword" required type="password" />
        </div>
        <Button
          className="bg-morningGlory text-black"
          type="button"
          onClick={() => {
            setNext(true);
          }}
        >
          Next
        </Button>
      </form>
    </Card>
    </>
    
  );
}

export default AccountDetails;
