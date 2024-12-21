'use client';

import { Bot, Send } from 'lucide-react';
import ChatMessage from './ChatMessage';
import { useState, useRef, useEffect } from 'react';

interface Message {
  isBot: boolean;
  message: string;
}

const initialMessages: Message[] = [
  {
    isBot: true,
    message: "Hello! How can I help you automate your business processes today?"
  }
];

const ChatbotMockup = () => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      const scrollHeight = chatContainerRef.current.scrollHeight;
      chatContainerRef.current.scrollTo({
        top: scrollHeight,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim() || isTyping) return;

    // Add user message
    const userMessage: Message = {
      isBot: false,
      message: inputMessage.trim()
    };
    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    try {
      // Call the chat API
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          messages: [...messages, userMessage],
        }),
      });

      if (!response.ok) {
        const errorData = await response.text();
        console.error('API Response:', errorData);
        throw new Error('Failed to get response');
      }

      const data = await response.json();
      
      // Add bot response
      setMessages(prev => [...prev, {
        isBot: true,
        message: data.message
      }]);
    } catch (error: any) {
      console.error('Chat error:', error);
      // Add error message
      setMessages(prev => [...prev, {
        isBot: true,
        message: error.message || "I apologize, but I'm having trouble connecting to my knowledge base. Please try again later or contact our support team."
      }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="w-full max-w-lg bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-700">
      <div className="p-6 border-b border-gray-700">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center">
            <Bot size={22} className="text-white" />
          </div>
          <div>
            <h3 className="text-base font-semibold text-white">Intellenai Solutions Assistant</h3>
            <p className="text-sm text-gray-400">
              {isTyping ? 'Typing...' : 'Online'}
            </p>
          </div>
        </div>
      </div>
      <div 
        ref={chatContainerRef}
        className="p-6 space-y-6 min-h-[480px] max-h-[480px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent"
      >
        {messages.map((msg, index) => (
          <ChatMessage
            key={index}
            isBot={msg.isBot}
            message={msg.message}
          />
        ))}
      </div>
      <form onSubmit={handleSubmit} className="p-6 border-t border-gray-700">
        <div className="flex items-center gap-3">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 bg-gray-700 text-white rounded-lg px-5 py-3 text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button 
            type="submit"
            className="p-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={!inputMessage.trim() || isTyping}
          >
            <Send size={22} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChatbotMockup; 