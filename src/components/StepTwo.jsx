const StepTwo = ({ username, email, password, setShowStepTwo }) => {
  return (
    <div className="stepTwo">
      <div>
        <p>Name : {username}</p>
        <p>Email : {email}</p>
        <p>Password : {password}</p>
        <button
          onClick={() => {
            setShowStepTwo(false);
          }}
        >
          Edit your informations
        </button>
      </div>
    </div>
  );
};

export default StepTwo;
