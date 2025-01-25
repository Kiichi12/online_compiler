import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [code, setCode] = useState("");
  const [language, setLanguage] = useState("python");
  const [output, setOutput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [stdin, setInput] = useState("");
  
  const handleTabIndentation = (e) => {
    if (e.key === "Tab") {
      e.preventDefault();
      const cursorPosition = e.target.selectionStart;
      const newCode = code.slice(0, cursorPosition) + "\t" + code.slice(cursorPosition);
      setCode(newCode);
      setTimeout(() => {
        e.target.selectionStart = e.target.selectionEnd = cursorPosition + 1;
      }, 0);
    }
  };
  const handleSubmit = async () => {
    setIsLoading(true);
    setOutput(""); // Clear previous output
  
    try {
      const response = await axios.post("http://localhost:8000/submit", {
        code,
        language,
        stdin,
      });
  
      // Check if the backend response contains 'output'
      if (response.data && response.data.output) {
        setOutput(response.data.output); // Set the output from response
      } else {
        setOutput("No output returned."); // Handle the case where no output is returned
      }
  
      console.log(response.data.output); // Log output to console for debugging
    } catch (error) {
      setOutput("An error occurred.");
      console.error(error); // Log the error for debugging
    } finally {
      setIsLoading(false); // Set loading to false after request is done
    }
  };
  

  return (
    <><div className="top-pane">

      <h1>CODING JUDGE</h1>
      
    </div>
    <div className="container">
        {/* Output Section */}
        <div className="left-pane">
          <h2>Output</h2>
          <pre id="output">{output}</pre>
        </div>

        {/* Code Input Section */}
        <div className="right-pane">
          <div className="select-pane">
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            >
              <option value="python">Python</option>
              <option value="cpp">C++</option>
              <option value="c">C</option>
            </select>
            
          </div>
          
          <textarea className="coding"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Write or Paste your code here..." 
            onKeyDown={handleTabIndentation}
            />
          <textarea className="stdin"
            value={stdin}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Provide standard input here..."
          />
          <div className="bottom-pane">
            <button onClick={handleSubmit} disabled={isLoading}>
              {isLoading ? "Submitting..." : "Submit"}
            </button>
          </div>  
        </div>
      </div>
      
    </>
  );
}

export default App;

