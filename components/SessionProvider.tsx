"use client";

import { Session } from "next-auth";
import { SessionProvider as Provider } from "next-auth/react";
import React from "react";

type Props = {
  children: React.ReactNode;
  clientSession: Session | null;
};

export default function SessionProvider({ children, clientSession }: Props) {
  return <Provider session={clientSession}>{children}</Provider>;
}
