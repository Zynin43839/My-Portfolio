import React, { useState } from "react";

const Terminal = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      let newOutput =
        output + "\n" + "$" + "Oranut_s Portfolio" + " " + input + "\n";

      switch (input.trim()) {
        case "ls":
          newOutput += "List of projects - 1. Clone board game 2. To-do list";
          break;
        case "pwd":
          newOutput += "You're on my cool terminal site!!";
          break;
        default:
          newOutput += "Unknown Command";
      }

      setOutput(newOutput);
      setInput("");
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-black p-10">
      <div className="w-full border rounded-md p-10 bg-black">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="text-white border p-2 w-full rounded-2xl bg-gray-700"
        />
        <div className="whitespace-pre-line my-4 py-2 text-left text-white">
          {output}
        </div>
      </div>
    </div>
  );
};

export default Terminal;
