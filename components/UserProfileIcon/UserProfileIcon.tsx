"use client";
import React from "react";
import { useSession, signOut } from "next-auth/react";

function UserProfileIcon() {
  const { data } = useSession();
  return (
    <div>
      <img
        onClick={() => signOut()}
        src={data?.user?.image!}
        alt={data?.user?.name!}
      />
      <p>{`Welcome, ${data?.user?.name}`}</p>
    </div>
  );
}

export default UserProfileIcon;
