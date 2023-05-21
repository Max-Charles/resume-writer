export default function formatPrompt(message: string, personalInfo: string) {
  console.log("formatPrompt called");

  const data = [
    { role: "system", content: "You are a cover letter writer" },
    {
      role: "user",
      content: `Write a cover letter based off the following job description: ${message}.
       Personalise it based off of the following applicant information: ${personalInfo}`,
    },
  ];
  return data;
}
