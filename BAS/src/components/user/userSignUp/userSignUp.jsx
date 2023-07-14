import Stepper from "./stepper";
// import AccountDetails from "./accountDetails";
import PersonalDetails from "./personalDetails";


function UserSignUp(){
    return (
        <>
           <Stepper />
           {/* <AccountDetails /> */}
           <PersonalDetails />
        </>
    )
}

export default UserSignUp;