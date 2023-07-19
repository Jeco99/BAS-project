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
      <div className="flex justify-around m-10">
        <div className="SignUp">
          <img
            alt="user photo"
            src="https://static.thenounproject.com/png/4035887-200.png"
            className="w-96 h-96 items-center flex  ml-6 shadow-md"
          />
          <br /> <br />
          <button className="rounded-full bg-teal-300  text-black w-80 h-20">
            Upload Photos
          </button>
        </div>
        <form className="flex flex-col gap-4">
          <div>
            <div className="mb-2 block">
              <label htmlFor="barangay" value="Barangay">
                Barangay
              </label>
            </div>
            <input
              className="w-full p-2.5 text-black-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
              id="barangay"
              placeholder=""
              required
              type="barangay"
            />
          </div>
          <div>
            <div className="mb-2 block">
              <label htmlFor="municipality" value="Municipality">
                Municipality
              </label>
            </div>
            <input
              className="w-full p-2.5 text-black-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
              id="municipality"
              placeholder=""
              required
              type="municipality"
            />
          </div>
          <div>
            <div className="mb-2 block">
              <label htmlFor="province" value="Province">
                Province
              </label>
            </div>
            <input
              className="w-full p-2.5 text-black-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
              id="province"
              placeholder=""
              required
              type="province"
            />
          </div>
          <div>
            <div className="mb-2 block">
              <label htmlFor="zip code" value="Zip Code">
                Zip Code
              </label>
            </div>
            <input
              className="w-full p-2.5 text-black-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
              id="zip code"
              placeholder=""
              required
              type="zip code"
            />
          </div>
          <div>
            <div className="mb-2 block">
              <label htmlFor="email1" value="Email Address">
                Email Address:{" "}
              </label>
            </div>
            <input
               className="w-full p-2.5 text-black-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
              id="email1"
              placeholder=""
              required
              type="email"
            />
          </div>
          <div>
            <div className="mb-2 block">
              <label htmlFor="password" value="Password">
                Password:
              </label>
            </div>
            <input
              className="w-full p-2.5 text-black-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
              id="password"
              required
              type="password"
            />
          </div>
          <div>
            <div className="mb-2 block">
              <label htmlFor="confirmpassword" value="Confirm password">
                Confirm Password:
              </label>
            </div>
            <input
              className="w-full p-2.5 text-black-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
              id="confirmpassword"
              required
              type="password"
            />
          </div>
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};
export default BarangaySignUp;
