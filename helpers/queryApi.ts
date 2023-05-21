import formatPrompt from "./formatPrompt";
import openapi from "./opeAi";

const query = async (message: string, personalInfo: string) => {
  console.log("query called");

  const messages = formatPrompt(message, personalInfo) as object[];
  const res = await openapi
    .createChatCompletion({
      model: "gpt-3.5-turbo",
      messages,
      max_tokens: 400,
      //   temperature: 0.9,
      //   top_p: 1,
      //   presence_penalty: 0,
      //   frequency_penalty: 0,
    })
    .then((res) => res.data.choices[0].message?.content)
    .catch((err) => `Openai request Error: ${err}`);

  console.log("This is the res from the query", res);
  return res;
};

export default query;
