import { ChatOpenAI } from '@langchain/openai';
import { PromptTemplate } from '@langchain/core/prompts';

// Initialize the OpenAI model
export const chatModel = new ChatOpenAI({
  openAIApiKey: process.env.OPENAI_API_KEY,
  modelName: 'gpt-3.5-turbo',
  temperature: 0.7,
});

// Company knowledge base
export const companyInfo = `
Intellenai Solutions specializes in:

1. AI Automation Services:
- Custom workflow automation. 
- Process optimization
- Intelligent document processing
- Data analysis and reporting automation

2. Custom AI Development:
- Chatbot and virtual assistant development. (Customer Service, Lead Generation, etc.)
- Voice assistant development. (Voice Assistant, Cold Callers, etc.)
- Personalized AI agent development. (Personal virtual assistant, AI Document Assistant, etc.)
- Custom automated software. (All in one data mangement automation software, Automated sales tracking, etc.)

3. Integration Services:
- Seamless integration with existing systems
- CRM and ERP integration
- API development and integration

4. Implementation Process:
    1. Initial consultation and requirements gathering. We will discuss your business needs and goals.
    2. Custom solution design. We will create a tailored plan to meet your specific requirements.
    3. Development and testing. We will develop your solution and test it to ensure it meets your expectations.
    4. Deployment and training. We will deploy your solution and provide a documentation for your team.
    5. Ongoing support and maintenance. We will provide ongoing support and maintenance to ensure your solution runs smoothly.

5. Support Services:
- Regular maintenance and updates
- Performance monitoring
- Training and documentation

Pricing:
- Custom pricing based on project requirements
- Flexible payment plans available
- ROI-focused solutions

Contact Information:
- Schedule a consultation through our website
- Email: carlos@intellenaisolutions.com`;

// Create a custom system prompt template
export const systemPromptTemplate = PromptTemplate.fromTemplate(`
You are an AI assistant for Intellenai Solutions, a company specializing in AI automation and custom AI solutions.
Use the following company information to answer questions:

{companyInfo}

Guidelines:
- Be professional and friendly
- Focus on Intellenai's services and capabilities
- If you're not sure about something, say you are not able to answer that question.
- Keep responses concise but informative
- Use bullet points for lists
- Maintain a helpful and solution-oriented tone
- If the user asks to talk to a human, tell them to send an email to carlos@intellenaisolutions.com
- If the user wants to shift the conversation to a different topic that doesn't pertain to Intellenai Solutions, politely tell them that you are not able to answer that question.

Current conversation context:
{chatHistory}`); 