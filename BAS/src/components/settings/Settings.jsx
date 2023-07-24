import { useState } from "react";
import AccountDetails from "../user/userSignUp/accountDetails";
import PersonalDetails from "../user/userSignUp/personalDetails";

const Settings = () => {
  const [activeButton, setActiveButton] = useState("AccountDetails");

  return (
    <>
      <div>
        {activeButton === "AccountDetails" ? (
          <AccountDetails />
        ) : (
          <PersonalDetails />
        )}
        <button
          onClick={() =>
            setActiveButton(
              activeButton === "AccountDetails"
                ? "PersonalDetails"
                : "AccountDetails"
            )
          }
        >
          Switch Page
        </button>
      </div>
    </>
  );
};

export default Settings;
