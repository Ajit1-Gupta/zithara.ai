import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./ChatBot.css";

import axios from "axios";

const ChatBot = () => {
  // states
  const [text, settext] = useState("");
  const [response, setResponse] = useState("");
  const [error, setError] = useState("");

  //register ctrl
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/api/v1/openai/chatbot", { text });
      console.log(data);
      setResponse(data);
    } catch (err) {
      console.log(error);
      if (err.response.data.error) {
        setError(err.response.data.error);
      } else if (err.message) {
        setError(err.message);
      }
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };
  return (
    <div className="chat-box">
      <div className="chatbot"> ChatBot</div>
      <form onSubmit={handleSubmit} className="chat-form">
        <div className="heading">Customer Query Assistant...</div>

        <div className="input-div">
          <input
            placeholder="Hi! How can I assist you today"
            type="text"
            multiline={true}
            required
            margin="normal"
            fullWidth
            value={text}
            onChange={(e) => {
              settext(e.target.value);
            }}
          />
        </div>

        <button type="submit" className="send-btn">
          send
        </button>
      </form>

      {response ? (
        <div>
          <p>{response}</p>
        </div>
      ) : (
        <div className="response">
          <h3>AI Response</h3>
        </div>
      )}

      <div>
        <NavLink to="/home">
          <div className="back">Go Back</div>
        </NavLink>
      </div>
    </div>
  );
};

export default ChatBot;
