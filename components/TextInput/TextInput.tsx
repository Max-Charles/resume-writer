"use client";
import React, { useState } from "react";
import { Container, Box, TextField, Button } from "@mui/material";

export default function TextInput() {
  const [message, setMessage] = React.useState("");

  const handleClick = () => {
    // make api call to save message
  };

  return (
    <div>
      <Container
        sx={{
          height: "80vh",
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            height: "80%",
            width: "80%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TextField
            multiline
            rows={10}
            sx={{ width: "80%" }}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <Button onClick={handleClick}>Submit</Button>
        </Box>
      </Container>
    </div>
  );
}
