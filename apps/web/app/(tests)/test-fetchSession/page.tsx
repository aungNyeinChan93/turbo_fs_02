"use client";

import React, { useEffect } from "react";

export async function fetchSession() {
  const response = await fetch("/api/session", { credentials: "include" });
  const result = await response.json();
  if (!response.ok) throw new Error(JSON.stringify(result));
  console.log({ result });
  alert(JSON.stringify(result));
  //   return result;
}

const TestFetchSession = () => {
  useEffect(() => {
    fetchSession();
  });
  return (
    <React.Fragment>
      <main className="w-full min-h-screen p-4">
        <h3>Fetch Session</h3>
      </main>
    </React.Fragment>
  );
};

export default TestFetchSession;
