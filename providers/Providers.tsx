"use client";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useState } from "react";

export default function Providers({ children }: React.PropsWithChildren) {
  const [client] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            refetchOnMount: false,
            refetchOnReconnect: false,
          },
        },
      })
  );

  return (
    <>
      <ClerkProvider>
        <QueryClientProvider client={client}>
          <Toaster closeButton position="bottom-right" />

          {children}
          <ReactQueryDevtools />
        </QueryClientProvider>
      </ClerkProvider>
    </>
  );
}
