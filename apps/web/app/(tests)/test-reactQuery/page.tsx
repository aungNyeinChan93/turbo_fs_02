"use client";

import { useQuery } from "@tanstack/react-query";
import React from "react";
import { fetchSession } from "../test-fetchSession/page";

const TestReactQuery = () => {
  const {
    data: userSession,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["sessions"],
    queryFn: fetchSession,
  });
  if (isLoading) return <>Loading</>;
  if (error) return <>{error?.message}</>;
  return (
    <React.Fragment>
      <main>
        <p>TestReactQuery</p>
        <pre>{JSON.stringify(userSession, null, 2)}</pre>
      </main>
    </React.Fragment>
  );
};

export default TestReactQuery;
