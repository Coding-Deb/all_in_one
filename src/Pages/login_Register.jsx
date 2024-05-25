import React, { useState, useEffect } from "react";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

export const Login_Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState(true);
  const [alertmsg, setAlertmsg] = useState("");

  useEffect(() => {
    if (alertmsg) {
      const timer = setTimeout(() => {
        setAlertmsg("");
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [alertmsg]);

  const handleRegister = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setAlertmsg("Registered successfully");
      setEmail("");
      setPassword("");
    } catch (error) {
      setAlertmsg(error.message);
      setEmail("");
      setPassword("");
    }
  };

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setAlertmsg("Logged in successfully");
      setEmail("");
      setPassword("");
    } catch (error) {
      setAlertmsg(error.message);
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div className="flex flex-col p-4 bg-gradient-to-r from-slate-800 to-slate-900 min-h-screen justify-center items-center">
      <div className="shadow-lg shadow-black m-6 bg-slate-700 p-7">
        <h2 className="text-2xl font-bold mb-6 text-center text-white">
          {isRegistering ? "Register" : "Login"}
        </h2>
        {alertmsg && (
          <div className="bg-green-500 p-3 mb-4 text-white font-bold font-sans text-center">
            {alertmsg}
          </div>
        )}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mb-4 p-3 w-full border rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mb-4 p-3 w-full border rounded"
        />
        <button
          onClick={isRegistering ? handleRegister : handleLogin}
          className="bg-blue-500 text-white py-3 w-full rounded hover:bg-blue-700"
        >
          {isRegistering ? "Register" : "Login"}
        </button>
        <button
          onClick={() => {
            setIsRegistering(!isRegistering);
            setAlertmsg("");
          }}
          className="mt-4 text-blue-500 w-full text-center"
        >
          {isRegistering
            ? "Already have an account? Login"
            : "Don't have an account? Register"}
        </button>
      </div>
    </div>
  );
};
