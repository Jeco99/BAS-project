import { Button, Label, TextInput } from "flowbite-react";
import { Navbar } from "flowbite-react";
import logoImage from "/src/assets/images/BAS-Logo-1.2.png";
import "/src/components/barangay/barangayNavBar/BarangayNavBar.css";

const BarangaySignUp = () => {
  return (
    <div>
      <Navbar
        fluid
        rounded
        style={{ backgroundColor: "#407C87", caretColor: "transparent" }}
      >
        <Navbar.Brand href="">
          <div className="flex items-center">
            <img
              alt="BAS Logo"
              className="navbar-logo mr-3 h-12"
              src={logoImage}
            />
            <span>Barangay Appointment System</span>
          </div>
        </Navbar.Brand>
      </Navbar>
      <div className="flex justify-between py-10">
        <div className="SignUp">
          <img
            alt="user photo"
            src="https://static.thenounproject.com/png/4035887-200.png"
            class="w-96 h-96 items-center flex  ml-6 shadow-md"
          />
          <br /> <br />
          <button className="rounded-full bg-teal-300  text-black w-80 h-20">
            Upload Photos
          </button>
        </div>
        <form className="flex flex-col gap-4">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="barangay" value="Barangay" />
            </div>
            <TextInput id="barangay" placeholder="" required type="barangay" />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="municipality" value="Municipality" />
            </div>
            <TextInput
              id="municipality"
              placeholder=""
              required
              type="municipality"
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="province" value="Province" />
            </div>
            <TextInput id="province" placeholder="" required type="province" />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="zip code" value="Zip Code" />
            </div>
            <TextInput id="zip code" placeholder="" required type="zip code" />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1" value="Email Address" />
            </div>
            <TextInput id="email1" placeholder="" required type="email" />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password" value="Password" />
            </div>
            <TextInput id="password" required type="password" />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="confirmpassword" value="Confirm password" />
            </div>
            <TextInput id="confirmpassword" required type="password" />
          </div>
          <Button>Submit</Button>
        </form>
      </div>
    </div>
  );
};
export default BarangaySignUp;
