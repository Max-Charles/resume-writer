"use client";
import React, { useState } from "react";
import { Container, Box, TextField, Button } from "@mui/material";
import formatPrompt from "@/helpers/formatPrompt";
// import { EventType } from "next-auth";

export default function TextInput() {
  const [message, setMessage] = React.useState("");
  const [apiResponse, setApiResponse] = useState("");
  const [personalInfo, setPersonalInfo] = useState("");

  const handleClick = async () => {
    try {
      const response = await fetch("api/createCover", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message, personalInfo }),
      });

      const data = await response.json();
      console.log(data);
      setApiResponse(data.coverLetter);

      console.log("from text input", data.coverLetter);
    } catch (error) {
      console.log(error);
    }
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
            width: "80%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TextField
            multiline
            label="Enter Job Description"
            rows={8}
            sx={{ width: "80%" }}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <TextField
            multiline
            label="Enter Job Personal Information"
            rows={8}
            sx={{ width: "80%" }}
            value={personalInfo}
            onChange={(e) => setPersonalInfo(e.target.value)}
          />
          <Button onClick={handleClick}>Submit</Button>
          <TextField
            multiline
            rows={8}
            sx={{ width: "80%" }}
            value={apiResponse}
            onChange={(e) => setApiResponse(e.target.value)}
          />
        </Box>
      </Container>
    </div>
  );
}
