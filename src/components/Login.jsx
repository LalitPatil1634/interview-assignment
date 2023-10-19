import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TEInput, TERipple } from "tw-elements-react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authenticated, setauthenticated] = useState(
    localStorage.getItem(localStorage.getItem("authenticated") || false)
  );

  const navigate = useNavigate()

  const users = [{ email: "user@user.com", password: "123456" }];
  const handleSubmit = (e) => {
    e.preventDefault();
    const account = users.find((user) => user.email === email);
    if (account && account.password === password) {
      setauthenticated(true);
      localStorage.setItem("authenticated", true);
      navigate('/dashboard')
    }
  };

  return (
    <div className="form-container">
      <form>
        <h4 className="mb-7 text-4xl font-large text-white">Login</h4>
        {/* <!-- Email input --> */}
        <TEInput
          type="email"
          label="Email address"
          size="lg"
          className="mb-6"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></TEInput>
        {/* <!--Password input--> */}
        <TEInput
          type="password"
          label="Password"
          className="mb-6"
          size="lg"
          onChange={(e) => setPassword(e.target.value)}
        ></TEInput>
        {/* <!-- Submit button --> */}
        <TERipple rippleColor="light" className="w-full">
          <button
            type="button"
            className="inline-block w-full rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
            onClick={handleSubmit}
          >
            Sign in
          </button>
        </TERipple>
      </form>
    </div>
  );
};

export default Login;
