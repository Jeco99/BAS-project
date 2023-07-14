import { Button, Label, TextInput } from "flowbite-react";

const LogIn = () => {
  const img = "../images/BAS-Logo-1.png";
  return (
    <div className="Login flex">
      <img className="Img" src={img} alt="" />
      <form className="m-8 py-5 px-10 border-2 border-black rounded-3xl">
        <div className="text-center font-extrabold">
          <p>Log in</p>
        </div>
        <div className="py-5">
            <Label htmlFor="email1" value="Email Address:" />
          <TextInput id="email1" placeholder="" required type="email" />    
            <Label htmlFor="password" value="Password" />
          <TextInput id="password" required type="password" />
          </div>
        <button className="btn">
          <Button type="button">Log In</Button>
          <br />
          <Button type="button">Create account</Button>
        </button>
      </form>
    </div>
  );
};
export default LogIn;
