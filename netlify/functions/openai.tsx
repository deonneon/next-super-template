import { Config } from "@netlify/functions"
import OpenAI from 'openai';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: Request) => {
    const text = await req.text();
    const resp = await openai.chat.completions.create({
      model: "gpt-3.5-turbo-1106",
      messages: [
        { "role": "system", "content": "Give a concise answer to the following question:" },
        { "role": "user", "content": text },
      ],
    });
  
    return Response.json({ resp });
    //response_format: { type: "json_object" }, 
    //max_tokens: 150, // Adjust as needed
    //seed: 1, // for reproducibility
  }

export const config: Config = { path: "/ai", method: "POST"}
