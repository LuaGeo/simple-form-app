import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Form = ({
  handleSUbmit,
  username,
  email,
  errorMessage,
  setUsername,
  setEmail,
  setPassword,
  setConfirmPassword,
  errorSign,
  password,
  confirmPassword,
}) => {
  return (
    <div className="app">
      <form onSubmit={handleSUbmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Name"
            onChange={(event) => {
              // console.log(event.target.value);
              setUsername(event.target.value);
            }}
            value={username}
          />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="toto@email.com"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            value={email}
          />
        </div>
        <div className="inputWithEyeIcon">
          <label htmlFor="password">Password</label>
          <input
            className={errorSign}
            type="password"
            id="password"
            placeholder="password"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            value={password}
          />
          <FontAwesomeIcon id="icon" icon="eye" />
        </div>
        <div className="inputWithEyeIcon">
          <label htmlFor="confirmPassword">Confirm your password</label>
          <input
            className={errorSign}
            type="password"
            id="confirmPassword"
            placeholder="password"
            onChange={(event) => {
              setConfirmPassword(event.target.value);
            }}
            value={confirmPassword}
          />
          <FontAwesomeIcon id="icon" icon="eye" onClick={() => {}} />{" "}
          {/* à finir !!! */}
        </div>
        <p>{errorMessage}</p>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Form;
