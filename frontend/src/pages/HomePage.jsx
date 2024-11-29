import React from "react";
import { useChatStore } from "../store/useChatStore";
import Sidebar from "../components/Sidebar";
import NoChatSelected from "../components/NoChatSelected";
import ChatContainer from "../components/ChatContainer";

const HomePage = () => {
  const { selectedUser } = useChatStore();
  return (
    <div className="h-full overflow-x-hidden  bg-base-200">
      <div className="flex items-center justify-center pt-20 p-2">
        <div
          className="bg-base-100 rounded-lg shadow-cl w-full max-w-6xl h-[calc(100vh-5rem)]
">
          <div className="flex h-full rounded-lg ">
            <Sidebar />

            {!selectedUser ? <NoChatSelected /> : <ChatContainer />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
