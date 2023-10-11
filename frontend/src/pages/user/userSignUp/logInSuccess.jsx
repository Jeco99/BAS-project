export default function LogInSuccess() {
  return (
    <div className="text-center m-72">
      <h1 className="text-4xl mb-7">You are successfully created an account!</h1>
      <div className="mx-96">
      <button
        type="button"
        onClick={() => {
          location.href = "/";
        }}
        className="btn btnRadius"
      >
        Back to Log In
      </button>
      </div>
     
    </div>
  );
}
