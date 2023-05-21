"use client";

import React, { useState } from "react"; // import react
import { signIn } from "next-auth/react"; // import next-auth react

export default function LogIn() {
  return (
    <div>
      <button onClick={() => signIn("google")}>Sign In</button>
    </div>
  );
}
