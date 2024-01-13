import { Config } from "@netlify/functions";
import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: Request) => {
  const resp = await openai.chat.completions.create({
    model: "gpt-3.5-turbo-1106",
    messages: [
      {
        role: "system",
        content: "Give a concise answer to the following question:",
      },
      { role: "user", content: "What is 4 times 4" },
    ],
  });

  return Response.json({ resp });
};

export const config: Config = { path: "/ai_bare", method: "POST" };

// This version has no dynamic user input. This is a hardcoded API call to check the connection and the syntax.
