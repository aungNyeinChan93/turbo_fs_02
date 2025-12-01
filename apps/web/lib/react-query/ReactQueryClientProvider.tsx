"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { ReactNode } from "react";

const ReactQueryClientProvider = ({ children }: { children: ReactNode }) => {
  const queryClinet = new QueryClient();

  return (
    <React.Fragment>
      <QueryClientProvider client={queryClinet}>{children}</QueryClientProvider>
    </React.Fragment>
  );
};

export default ReactQueryClientProvider;
