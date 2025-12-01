"use client";

import React, { useEffect } from "react";
import { authClient } from "../../../lib/auth-client";
import { useRouter } from "next/navigation";

const TestDashboardPage = () => {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();

  useEffect(() => {
    if (!isPending && !session) {
      return router.push("/");
    }
  }, [isPending, session, router]);

  if (isPending) return <>Loading ...</>;

  return (
    <React.Fragment>
      <main>
        Dashboard Page
        <pre>{JSON.stringify(session?.user, null, 2)}</pre>
      </main>
    </React.Fragment>
  );
};

export default TestDashboardPage;
