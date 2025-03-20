import { NextResponse } from 'next/server';
import { chatModel, systemPromptTemplate, companyInfo } from '@/lib/langchain/config';
import { HumanMessage, SystemMessage } from '@langchain/core/messages';

export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
  try {
    // Check if API key is loaded
    if (!process.env.OPENAI_API_KEY) {
      throw new Error('OpenAI API key is not configured');
    }
    
    const { messages } = await req.json();

    // Format chat history for the system prompt
    const chatHistory = messages
      .slice(0, -1)
      .map((msg: any) => `${msg.isBot ? 'Assistant' : 'Human'}: ${msg.message}`)
      .join('\n');

    // Generate the system prompt with company info and chat history
    const systemPrompt = await systemPromptTemplate.format({
      companyInfo,
      chatHistory,
    });

    // Create message array for the model
    const modelMessages = [
      new SystemMessage(systemPrompt),
      new HumanMessage(messages[messages.length - 1].message)
    ];

    // Get response from the model
    const response = await chatModel.invoke(modelMessages);

    return NextResponse.json({
      message: response.content
    });
  } catch (error: any) {
    console.error('Chat API Error:', error);
    return NextResponse.json(
      { message: `Error: ${error.message}` },
      { status: 500 }
    );
  }
}