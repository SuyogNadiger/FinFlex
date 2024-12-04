import React from "react";

const ChatBot = () => {
  return (
    <div style={{ width: "100%", height: "600px", position: "relative" }}>
      <iframe
        src="https://bot.dialogflow.com/b805d92e-9279-4d33-a8ba-55a1379f638a"
        title="Dialogflow Chatbot"
        style={{
          width: "100%",
          height: "100%",
          border: "none",
        }}
        allow="microphone"
      />
    </div>
  );
};

export default ChatBot;
