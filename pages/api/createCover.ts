import type { NextApiRequest, NextApiResponse } from "next";
import query from "@/helpers/queryApi";

type Data = {
  coverLetter?: string;
  error?: string;
};

async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method !== "POST") {
    res.status(400).json({ error: "Only POST requests allowed" });
    return;
  }

  const { message, personalInfo } = req.body;
  // console.log("This is the prompt parsed in the body:", prompt);

  if (!message || !personalInfo) {
    res.status(400).json({ error: "Missing body parameters" });
    return;
  }

  const response = await query(message, personalInfo);

  res.status(200).json({ coverLetter: response?.toString() });
}

export default handler;
