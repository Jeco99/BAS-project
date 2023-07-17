import { Button, Label, TextInput } from "flowbite-react";
import logoImage from "/src/assets/images/BAS-Logo-1.2.png";

const LogIn = () => {
 return (
   <div className="">
     <div className="Login flex justify-between items-center px-10">
       <img className="Img m-5" src={logoImage} alt="" />
       <form className="m-8 py-5 px-10 border-2 border-black rounded-3xl w-80 h-96">
         <div className="text-center font-extrabold">
           <p>Log in</p>
         </div>
         <div className="py-5">
           <Label htmlFor="email1" value=" Email Address:" />
           <TextInput id="email1" placeholder="" required type="email" />
           <Label htmlFor="password" value="Password" />
           <TextInput id="password" required type="password" />
         </div>
         <Button
           type="button"
           className="rounded-full bg-teal-300 w-44 h-11 text-black"
         >
           Log In
         </Button>
         <br />
         <Button
           type="button"
           className="rounded-full bg-teal-300 w-44 h-11 text-black"
         >
           Create Account
         </Button>
       </form>
     </div>
   </div>
 );
};
export default LogIn;
