import logoImage from "/src/assets/images/BAS-Logo-1.2.png";

const LogIn = () => {
  return (
    <div className="bg-beetleGreen flex justify-between items-center flex-col sm:flex-row px-10 py-16">
      <img className="w-5/12 h-auto py-6" src={logoImage} alt="" />
      <form className="bg-beetleGreen block m-8 p-8 sm:m-32 border border-black rounded-lg shadow">
        <h1 className="text-center text-5xl font-extrabold m-2">Log in</h1>
        <div className="mb-2 block">
          <div>
            <label htmlFor="email1" value=" Email Address:" className="text-xl">
              Email Address:
            </label>
          </div>
          <input
            className="w-full px-20 text-black-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
            id="email1"
            placeholder=""
            required
            type="email"
          />
        </div>

        <div className="mb-2 block">
          <div>
            <label htmlFor="password" value="Password" className="text-xl">
              Password:
            </label>
          </div>
          <input
            className="w-full px-20 text-black-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
            id="password"
            required
            type="password"
          />
        </div>

        <div className="flex flex-col justify-center">
          <button
            type="button"
            className="rounded-full text-xl h-11 text-black bg-morningGlory"
          >
            Log In
          </button>
          <br />
          <button
            type="button"
            className="rounded-full text-xl h-11 text-black bg-morningGlory"
          >
            Create Account
          </button>
        </div>
      </form>
    </div>
  );
};
export default LogIn;
