'use client';

import { Bot, User } from 'lucide-react';

interface ChatMessageProps {
  isBot: boolean;
  message: string;
}

const ChatMessage = ({ isBot, message }: ChatMessageProps) => (
  <div className={`flex items-start gap-3 ${isBot ? '' : 'flex-row-reverse'}`}>
    <div className={`flex h-10 w-10 items-center justify-center rounded-full ${isBot ? 'bg-blue-600' : 'bg-gray-600'}`}>
      {isBot ? <Bot size={20} className="text-white" /> : <User size={20} className="text-white" />}
    </div>
    <div className={`relative rounded-lg px-5 py-3 shadow-md ${
      isBot 
        ? 'bg-gray-700 text-left max-w-sm' 
        : 'bg-blue-600 inline-block'
    }`}>
      <p className={`text-base text-white whitespace-pre-line ${!isBot && 'text-left'}`}>{message}</p>
    </div>
  </div>
);

export default ChatMessage; 