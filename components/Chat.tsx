"use client";
import React from "react";
import { MessageCircle, X } from "lucide-react";
// @ts-ignore
import { Chat as ThinkbaseChat } from "thinkbase";

function Chat({
  chatVisible,
  setChatVisible,
}: {
  chatVisible: boolean;
  setChatVisible: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div className="fixed bottom-6 right-6 z-50 w-sm   ">
      {/* Chat Toggle Button */}
      {!chatVisible && (
        <button
          onClick={() => setChatVisible(true)}
          className="py-4 px-5 rounded-full bg-[#039b42] text-white cursor-pointer hover:bg-[#00c950] transition-all duration-300 flex items-center justify-self-end justify-center shadow-lg shadow-black/30 hover:scale-105 gap-4"
          aria-label="Open chat"
        >
          <MessageCircle size={24} />
          <h1>Chat With Bot</h1>
        </button>
      )}

      {/* Chat Window */}
      {chatVisible && (
        <div className="relative">
          {/* Close Button */}
          <button
            onClick={() => setChatVisible(false)}
            className="absolute -top-2 -right-2 z-10 p-1.5 rounded-full bg-red-500 text-white hover:bg-red-400 transition-colors shadow-md"
            aria-label="Close chat"
          >
            <X size={16} />
          </button>

          <div
            className="w-full [&_*]:overscroll-contain"
            style={{ overscrollBehavior: "contain" }}
            onWheel={(e) => e.stopPropagation()}
          >
            <ThinkbaseChat
              apiKey={process.env.THINKBASE_API}
              welcomeText="What would you like to know about me?"
              options={[
                "My Projects",
                "Skills & Technologies",
                "Contact / Hire Me",
              ]}
              headerText="Hasala Gayendra"
              headerTextColor="#ffffff"
              headerImg="https://avatars.githubusercontent.com/u/140869934?v=4"
              headerColor="#0d1117"
              bodyTextSize={14}
              bodyColor="#ffffff"
              botImg="https://avatars.githubusercontent.com/u/140869934?v=4"
              msgBgBot="#d6d8dc"
              msgBgUser="#dbdbdb"
              msgTextColor="#000000"
              msgRadius={16}
              outerFrameRadius={5}
              footerColor="#ffffff"
              inputTextColor="#000000"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Chat;
