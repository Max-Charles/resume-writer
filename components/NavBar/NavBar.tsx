"use client";

import { Box, AppBar } from "@mui/material";
import { useSession } from "next-auth/react";
import React from "react";
import LogIn from "../Login";
import UserProfileIcon from "../UserProfileIcon/UserProfileIcon";

function NavBar() {
  const { data } = useSession();

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          {data ? <UserProfileIcon /> : <LogIn />}
        </AppBar>
      </Box>
    </>
  );
}

export default NavBar;
