/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { Suspense, use } from "react";

const TestSession = ({ promiseSession }: { promiseSession: Promise<any> }) => {
  const session = use(promiseSession);
  return (
    <React.Fragment>
      <main>
        <Suspense fallback={<div>Loading session...</div>}>
          <div>Session: {JSON.stringify(session)}</div>
        </Suspense>
      </main>
    </React.Fragment>
  );
};

export default TestSession;
