
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Send, Bot, User, Sparkles } from 'lucide-react';

interface ChatInterfaceProps {
  chatId: string | null;
  onReportGenerated: (data: any) => void;
}

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export function ChatInterface({ chatId, onReportGenerated }: ChatInterfaceProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const nudgePrompts = [
    "I want to automate customer support",
    "Compare GPT-4 vs Claude for my use case", 
    "Calculate ROI for AI implementation",
    "Optimize our existing AI costs"
  ];

  const handleSend = async (message?: string) => {
    const messageToSend = message || inputValue.trim();
    if (!messageToSend) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: messageToSend,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    // Simulate AI response
    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: `I'd be happy to help you with "${messageToSend}". Let me analyze your requirements and provide cost optimization insights...`,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, aiMessage]);
      setIsLoading(false);

      // Simulate report generation after a few messages
      if (messages.length >= 2) {
        setTimeout(() => {
          onReportGenerated({
            analysis: 'Sample cost analysis data',
            recommendations: ['Use cheaper model for simple tasks', 'Batch requests for efficiency'],
            totalCost: '$2,450/month',
            savings: '$1,200/month'
          });
        }, 1000);
      }
    }, 1500);
  };

  const handleNudgeClick = (prompt: string) => {
    handleSend(prompt);
  };

  const WelcomeMessage = () => (
    <div className="flex flex-col items-center justify-center h-full p-8 text-center max-w-2xl mx-auto">
      <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6 shadow-gradient">
        <Bot className="h-8 w-8 text-white" />
      </div>
      
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">
        👋 Welcome to your AI Cost Optimization Advisor!
      </h2>
      
      <p className="text-gray-600 mb-8 leading-relaxed">
        I'm here to help you make smart decisions about AI investments. I can assist you with:
      </p>
      
      <ul className="text-left text-gray-600 mb-8 space-y-2">
        <li className="flex items-center">
          <Sparkles className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
          Calculating costs for AI implementations
        </li>
        <li className="flex items-center">
          <Sparkles className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
          Comparing different AI models and providers
        </li>
        <li className="flex items-center">
          <Sparkles className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
          Building ROI projections
        </li>
        <li className="flex items-center">
          <Sparkles className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
          Finding optimization strategies
        </li>
      </ul>
      
      <p className="text-lg font-medium text-gray-900 mb-6">
        How can I help you today?
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full max-w-md">
        {nudgePrompts.map((prompt, index) => (
          <button
            key={index}
            onClick={() => handleNudgeClick(prompt)}
            className="nudge-button text-left"
          >
            {prompt}
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="p-4 border-b border-gray-200 bg-white/50 backdrop-blur-sm">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-900">
            {chatId ? 'AI Cost Analysis' : 'New Conversation'}
          </h2>
          <div className="flex items-center space-x-2">
            <Button size="sm" variant="outline" className="border-gray-300 hover:border-primary/50">
              New Chat
            </Button>
            <Button size="sm" className="btn-gradient">
              Generate Report
            </Button>
          </div>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.length === 0 ? (
          <WelcomeMessage />
        ) : (
          <>
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex items-start space-x-2 max-w-xs lg:max-w-md xl:max-w-lg ${
                  message.role === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                }`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    message.role === 'user' 
                      ? 'bg-gradient-primary text-white' 
                      : 'bg-gray-100 text-gray-600'
                  }`}>
                    {message.role === 'user' ? (
                      <User className="h-4 w-4" />
                    ) : (
                      <Bot className="h-4 w-4" />
                    )}
                  </div>
                  <div className={`rounded-2xl px-4 py-3 ${
                    message.role === 'user'
                      ? 'message-user'
                      : 'message-assistant'
                  }`}>
                    <p className="text-sm">{message.content}</p>
                    <p className={`text-xs mt-1 ${
                      message.role === 'user' ? 'text-white/70' : 'text-gray-500'
                    }`}>
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="flex justify-start">
                <div className="flex items-start space-x-2 max-w-xs lg:max-w-md xl:max-w-lg">
                  <div className="w-8 h-8 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center flex-shrink-0">
                    <Bot className="h-4 w-4" />
                  </div>
                  <div className="message-assistant">
                    <div className="typing-indicator">
                      <div className="typing-dot animate-typing-dot"></div>
                      <div className="typing-dot animate-typing-dot"></div>
                      <div className="typing-dot animate-typing-dot"></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>

      {/* Input Area */}
      <div className="p-4 border-t border-gray-200 bg-white/50 backdrop-blur-sm">
        <div className="flex items-center space-x-2">
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Ask about your AI implementation needs..."
            className="input-gradient flex-1"
            onKeyPress={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSend();
              }
            }}
          />
          <Button
            onClick={() => handleSend()}
            disabled={!inputValue.trim() || isLoading}
            className="btn-gradient"
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
        <p className="text-xs text-gray-500 mt-2">
          Press Enter to send
        </p>
      </div>
    </div>
  );
}
