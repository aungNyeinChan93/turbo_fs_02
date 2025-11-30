"use client";

import React from "react";
import { authClient } from "../../../lib/auth-client";
import RegisterForm from "../../../components/auth/RegisterFrom";

const TestSessionPage = () => {
  const { data: session, error, isPending } = authClient.useSession();

  if (isPending) return <>Loading . . .</>;

  if (error) return <>{error?.message}</>;

  if (!session)
    return (
      <div className="w-full min-h-screen flex justify-center items-center">
        <RegisterForm />
      </div>
    );

  return (
    <React.Fragment>
      <main>
        {JSON.stringify(session?.user, null, 2)}

        <button className="px-4 py-2 rounded-2xl bg-red-500 text-white">
          Logout
        </button>
      </main>
    </React.Fragment>
  );
};

export default TestSessionPage;
