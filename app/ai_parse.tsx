import React, { useState, ChangeEvent, MouseEvent } from "react";

const AiComponent: React.FC = () => {
  const [userInput, setUserInput] = useState<string>("");
  const [response, setResponse] = useState<string>("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  const handleSubmit_bare = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      const resp = await fetch("/ai_bare", {
        method: "POST",
        body: JSON.stringify({ text: userInput }), // if the server expects a JSON payload
        headers: {
          "Content-Type": "application/json", // make sure this matches what the server expects
        },
      });
      const data: string = await resp.text();
      setResponse(data);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  const handleSubmit_edge = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      const resp = await fetch("/ai_bare_edge", {
        method: "POST",
        body: JSON.stringify({ text: userInput }), // if the server expects a JSON payload
        headers: {
          "Content-Type": "application/json", // make sure this matches what the server expects
        },
      });
      const data: string = await resp.text();
      setResponse(data);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  const handleSubmit = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      const resp = await fetch("/ai", {
        method: "POST",
        body: JSON.stringify({ text: userInput }),
        // body: userInput,
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'text/plain',
        },
      });
      const data: string = await resp.text();
      setResponse(data);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  return (
    <section className="flex-col items-center text-center">
      <div>
        <h1>Open AI First check without User input</h1>
        <button className="bg-white text-black" onClick={handleSubmit_bare}>
          Submit
        </button>
      </div>
      <div className="flex-col">
        <h1>Open AI Second check with User input</h1>
        <input
          className="bg-white text-black"
          type="text"
          value={userInput}
          onChange={handleInputChange}
        />
        <button className="bg-blue-500 text-black" onClick={handleSubmit}>
          Submit
        </button>
      </div>
      <div className="flex-col">
        <h1>Open AI third check with User input</h1>
        <button className="bg-blue-500 text-black" onClick={handleSubmit_edge}>
          Submit
        </button>
      </div>
      <div>{response}</div>
    </section>
  );
};

export default AiComponent;
