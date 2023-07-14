const BarangaySignUp = () => {
  return (
    <div className="flex">
      <div className="SignUp">
        <img src="" alt="" />
        <input type="button" value="Upload Pictures" />
      </div>
      <div className="">
        <label htmlFor="">Barangay</label> <br />
        <input type="text" /> <br />
        <label htmlFor="">Municipality</label> <br />
        <input type="text" /> <br />
        <label htmlFor="">Province</label> <br />
        <input type="text" /> <br />
        <label htmlFor="">Zip Code</label> <br />
        <input type="text" /> <br />
        <label htmlFor="">Email Address</label> <br />
        <input type="text" /> <br />
        <label htmlFor="pass">Password</label> <br />
        <input type="text" /> <br />
        <label htmlFor="confirm">Confirm Password</label> <br />
        <input type="text" />
        <br />
        <button>submit</button>
      </div>
    </div>
  );
};
export default BarangaySignUp;
