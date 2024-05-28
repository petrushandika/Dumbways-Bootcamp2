import React from "react";
import { TransactionProvider } from "./context/TransactionContext";

export function Providers({ children }: { children: React.ReactNode }) {
  return <TransactionProvider>{children}</TransactionProvider>;
}
