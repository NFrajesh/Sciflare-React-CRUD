import React from "react";
import { useNavigate } from "react-router";

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    let expiresAt = new Date().getTime() + 60 * 60 * 1000;
    localStorage.setItem(
      "loginInfo",
      JSON.stringify({ isLogin: true, expiresAt })
    ); //need to replace jwt token here
    navigate("/products");
  };

  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleLogin}
      >
        Login
      </button>
    </div>
  );
}

export default Login;
