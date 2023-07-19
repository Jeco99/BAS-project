import logoImage from "/src/assets/images/BAS-Logo-1.png";

const LogIn2 = () => {
  return (
    <div className="bg-beetleGreen flex justify-center items-center h-screen">
      <div className="flex flex-col items-center sm:flex-row max-w-screen-lg">
        <img className="w-5/12 h-auto py-6" src={logoImage} alt="" />
        <form className="bg-beetleGreen block m-4 p-8 border border-black rounded-lg">
          <h1 className="text-center text-3xl sm:text-5xl font-extrabold mb-6">
            Log in
          </h1>
          <div className="mb-4">
            <div>
              <label htmlFor="email1" className="text-xl">
                Email Address:
              </label>
            </div>
            <input
              className="w-full px-4 py-2 text-black bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
              id="email1"
              placeholder=""
              required
              type="email"
            />
          </div>

          <div className="mb-4">
            <div>
              <label htmlFor="password" className="text-xl">
                Password:
              </label>
            </div>
            <input
              className="w-full px-4 py-2 text-black bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
              id="password"
              required
              type="password"
            />
          </div>

          <div className="flex flex-col  justify-center">
            <button
              type="button"
              className="rounded-full text-xl h-11 text-white bg-morningGlory w-full sm:w-auto mb-4 sm:mb-2 hover:bg-morningGlory-dark active:bg-morningGlory-darker focus:outline-none"
            >
              Log In
            </button>
            <button
              type="button"
              className="rounded-full text-xl h-11 text-white bg-morningGlory w-full sm:w-auto hover:bg-morningGlory-dark active:bg-morningGlory-darker focus:outline-none"
            >
              Create Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LogIn2;
