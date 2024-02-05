"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import Hello from "./hello";
import AiComponent from "./ai_parse";

export default function Home() {
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    fetch("/hello")
      .then((response) => response.text())
      .then((data) => setMessage(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <nav className="p-3">
        <h1 className="text-xl font-medium">TEACHER WORKSHEET GENERATOR</h1>
      </nav>
      <div className="flex w-full flex-1 flex-row">
        <div className="min-h-5/6 w-2/3 bg-gray-400">Test</div>
        <div className="min-h-5/6 flex w-1/3 flex-col">
          <div className="min-h-14 bg-teal-200"></div>
          <div className=" flex flex-1 flex-col items-center">
            <h1 className="flex p-12 pt-12 text-xl font-light">
              Start with a topic
            </h1>
            <form>
              <input type="text" id="fname" name="fname"></input>
            </form>
          </div>
          <div className="min-h-24 bg-teal-200"></div>
        </div>
      </div>
      <section></section>
    </main>
  );
}
