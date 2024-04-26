"use client"

import { ChakraProvider } from "@chakra-ui/react";
// Client Componentとして扱うためにラップする
export default function Provider({ children }: { children: React.ReactNode }) {
  return <ChakraProvider>{children}</ChakraProvider>;
}