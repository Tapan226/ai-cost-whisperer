
import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Send, FileText, Trash2, Edit2, Bot, User } from 'lucide-react';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

interface ChatInterfaceProps {
  chatId: string | null;
  onReportGenerated: (data: any) => void;
}

export function ChatInterface({ chatId, onReportGenerated }: ChatInterfaceProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [chatTitle, setChatTitle] = useState('New AI Cost Analysis');
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  // Mock initial message
  useEffect(() => {
    if (chatId && messages.length === 0) {
      setMessages([
        {
          id: '1',
          role: 'assistant',
          content: "Hello! I'm here to help you analyze AI implementation costs and ROI. To get started, please tell me about:\n\n• Your specific AI use case or project\n• Expected scale (users, requests, data volume)\n• Your budget range or constraints\n• Timeline for implementation\n\nI'll provide detailed cost analysis, model comparisons, and optimization recommendations.",
          timestamp: new Date()
        }
      ]);
    }
  }, [chatId]);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: inputValue,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: generateMockResponse(userMessage.content),
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
      
      // Simulate report generation after a few messages
      if (messages.length > 2) {
        onReportGenerated(generateMockReport());
      }
    }, 2000);
  };

  const generateMockResponse = (userInput: string) => {
    const responses = [
      "Based on your requirements, I can provide a comprehensive cost analysis. Let me break down the key considerations:\n\n**Infrastructure Costs:**\n• API calls: $0.002 per request\n• Data processing: $50-200/month\n• Storage: $10-50/month\n\n**Model Options:**\n• GPT-4: Higher accuracy, $0.03/1k tokens\n• GPT-3.5: Cost-effective, $0.002/1k tokens\n• Claude: Balanced option, $0.008/1k tokens\n\nWould you like me to calculate specific costs based on your expected volume?",
      
      "Excellent! For your use case, I recommend a hybrid approach to optimize costs:\n\n**Cost Optimization Strategy:**\n1. Use GPT-3.5 for initial processing (80% of queries)\n2. Escalate to GPT-4 for complex cases (20% of queries)\n3. Implement caching to reduce API calls by 30-40%\n\n**Projected Monthly Costs:**\n• Optimized approach: $2,400-3,200\n• Single model approach: $4,800-6,400\n• **Potential savings: 50-60%**\n\nShall I generate a detailed report with ROI projections?",
      
      "Perfect! I'll now generate a comprehensive cost analysis report including:\n\n✅ Detailed cost breakdown\n✅ ROI calculations\n✅ Implementation timeline\n✅ Risk assessment\n✅ Optimization recommendations\n\nThe report will be ready in your right panel shortly. You can export it as PDF or DOCX for stakeholder presentations."
    ];
    
    return responses[Math.min(messages.length / 2, responses.length - 1)] || responses[0];
  };

  const generateMockReport = () => {
    return {
      title: "AI Implementation Cost Analysis",
      executiveSummary: "Cost-optimized AI solution with 50-60% savings potential",
      totalCost: 38400,
      monthlyCost: 3200,
      roi: 180,
      paybackPeriod: 8,
      recommendations: [
        "Implement hybrid model approach",
        "Use caching for 40% cost reduction",
        "Start with MVP and scale gradually"
      ]
    };
  };

  const handleClearChat = () => {
    setMessages([]);
    onReportGenerated(null);
  };

  const handleGenerateReport = () => {
    onReportGenerated(generateMockReport());
  };

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="p-4 border-b border-gray-200 bg-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            {isEditingTitle ? (
              <Input
                value={chatTitle}
                onChange={(e) => setChatTitle(e.target.value)}
                onBlur={() => setIsEditingTitle(false)}
                onKeyDown={(e) => e.key === 'Enter' && setIsEditingTitle(false)}
                className="text-lg font-semibold border-none px-0 focus:ring-0"
                autoFocus
              />
            ) : (
              <h2 
                className="text-lg font-semibold text-gray-900 cursor-pointer hover:text-primary-600"
                onClick={() => setIsEditingTitle(true)}
              >
                {chatTitle}
              </h2>
            )}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsEditingTitle(true)}
            >
              <Edit2 className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm" onClick={handleGenerateReport}>
              <FileText className="mr-2 h-4 w-4" />
              Generate Report
            </Button>
            <Button variant="outline" size="sm" onClick={handleClearChat}>
              <Trash2 className="mr-2 h-4 w-4" />
              Clear Chat
            </Button>
          </div>
        </div>
      </div>

      {/* Messages */}
      <ScrollArea className="flex-1 p-4" ref={scrollAreaRef}>
        <div className="space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`flex max-w-3xl ${message.role === 'user' ? 'flex-row-reverse' : 'flex-row'} items-start space-x-3`}>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                  message.role === 'user' 
                    ? 'bg-primary-500 text-white' 
                    : 'bg-gray-100 text-gray-600'
                }`}>
                  {message.role === 'user' ? (
                    <User className="h-4 w-4" />
                  ) : (
                    <Bot className="h-4 w-4" />
                  )}
                </div>
                <div className={`rounded-lg px-4 py-3 ${
                  message.role === 'user'
                    ? 'bg-primary-500 text-white'
                    : 'bg-white border border-gray-200'
                }`}>
                  <div className="whitespace-pre-wrap text-sm">
                    {message.content}
                  </div>
                  <div className={`text-xs mt-2 ${
                    message.role === 'user' ? 'text-blue-100' : 'text-gray-500'
                  }`}>
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          {/* Typing Indicator */}
          {isTyping && (
            <div className="flex justify-start">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                  <Bot className="h-4 w-4 text-gray-600" />
                </div>
                <div className="bg-white border border-gray-200 rounded-lg px-4 py-3">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-typing animate-typing-dot"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-typing animate-typing-dot"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-typing animate-typing-dot"></div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </ScrollArea>

      {/* Input Area */}
      <div className="p-4 border-t border-gray-200 bg-white">
        <div className="flex items-center space-x-2">
          <div className="flex-1 relative">
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Describe your AI implementation needs..."
              onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && handleSendMessage()}
              className="pr-12"
            />
            <Button
              onClick={handleSendMessage}
              disabled={!inputValue.trim() || isTyping}
              size="sm"
              className="absolute right-1 top-1 h-8 w-8 p-0"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <p className="text-xs text-gray-500 mt-2">
          Press Enter to send • Shift+Enter for new line
        </p>
      </div>
    </div>
  );
}
