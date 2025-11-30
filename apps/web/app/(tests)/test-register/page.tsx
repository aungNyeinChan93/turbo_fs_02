"use client";

import React from "react";
import { signUp } from "../../../lib/auth-client";

const TestRegister = () => {
  const register = async () => {
    await signUp.email({
      email: "test@gmail.com",
      name: "test-user",
      password: "123123123",
      callbackURL: "/",
      fetchOptions: {
        onSuccess: () => {
          alert("register success");
        },
      },
    });
  };
  return (
    <React.Fragment>
      <main className="w-full min-h-screen flex justify-center items-center">
        <button
          className="text-red-600 text-3xl p-4 rounded px-4 py-2 bg-amber-400"
          onClick={register}
        >
          {" "}
          Test Register
        </button>
      </main>
    </React.Fragment>
  );
};

export default TestRegister;
