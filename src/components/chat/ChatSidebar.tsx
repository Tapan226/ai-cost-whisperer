
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Plus, MessageSquare, Trash2, Clock } from 'lucide-react';

interface ChatSidebarProps {
  selectedChatId: string | null;
  onSelectChat: (chatId: string | null) => void;
}

interface ChatSession {
  id: string;
  title: string;
  lastMessage: string;
  timestamp: Date;
  isActive: boolean;
}

export function ChatSidebar({ selectedChatId, onSelectChat }: ChatSidebarProps) {
  const [chatSessions] = useState<ChatSession[]>([
    {
      id: '1',
      title: 'Customer Support Automation',
      lastMessage: 'Analyzing costs for GPT-4 vs Claude...',
      timestamp: new Date(Date.now() - 1000 * 60 * 30), // 30 minutes ago
      isActive: true
    },
    {
      id: '2', 
      title: 'Document Processing ROI',
      lastMessage: 'Comparing token costs across providers...',
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2 hours ago
      isActive: false
    },
    {
      id: '3',
      title: 'Chatbot Cost Optimization',
      lastMessage: 'Generated cost analysis report',
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24), // 1 day ago
      isActive: false
    }
  ]);

  const handleNewChat = () => {
    onSelectChat(null);
  };

  const formatTimestamp = (timestamp: Date) => {
    const now = new Date();
    const diffInHours = (now.getTime() - timestamp.getTime()) / (1000 * 60 * 60);
    
    if (diffInHours < 1) {
      const diffInMinutes = Math.floor(diffInHours * 60);
      return `${diffInMinutes}m ago`;
    } else if (diffInHours < 24) {
      return `${Math.floor(diffInHours)}h ago`;
    } else {
      const diffInDays = Math.floor(diffInHours / 24);
      return `${diffInDays}d ago`;
    }
  };

  return (
    <div className="w-64 bg-white/60 backdrop-blur-sm border-r border-gray-200 flex flex-col h-full">
      {/* Header */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold gradient-text">Conversations</h2>
        </div>
        <Button
          onClick={handleNewChat}
          className="btn-gradient w-full"
        >
          <Plus className="h-4 w-4 mr-2" />
          New Chat
        </Button>
      </div>

      {/* Chat List */}
      <div className="flex-1 overflow-y-auto">
        <div className="p-2 space-y-1">
          {chatSessions.map((chat) => (
            <div
              key={chat.id}
              onClick={() => onSelectChat(chat.id)}
              className={`p-3 rounded-lg cursor-pointer transition-all duration-200 group hover:bg-white/80 hover:shadow-sm ${
                selectedChatId === chat.id
                  ? 'bg-gradient-primary text-white shadow-gradient'
                  : 'text-gray-700 hover:text-gray-900'
              }`}
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center space-x-2 flex-1 min-w-0">
                  <MessageSquare className={`h-4 w-4 flex-shrink-0 ${
                    selectedChatId === chat.id ? 'text-white' : 'text-primary'
                  }`} />
                  <h3 className={`font-medium text-sm truncate ${
                    selectedChatId === chat.id ? 'text-white' : 'text-gray-900'
                  }`}>
                    {chat.title}
                  </h3>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    // Handle delete
                  }}
                  className={`opacity-0 group-hover:opacity-100 transition-opacity p-1 rounded hover:bg-red-100 ${
                    selectedChatId === chat.id ? 'hover:bg-white/20' : ''
                  }`}
                >
                  <Trash2 className={`h-3 w-3 ${
                    selectedChatId === chat.id ? 'text-white' : 'text-red-500'
                  }`} />
                </button>
              </div>
              
              <p className={`text-xs truncate mb-2 ${
                selectedChatId === chat.id ? 'text-white/80' : 'text-gray-600'
              }`}>
                {chat.lastMessage}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-1">
                  <Clock className={`h-3 w-3 ${
                    selectedChatId === chat.id ? 'text-white/60' : 'text-gray-400'
                  }`} />
                  <span className={`text-xs ${
                    selectedChatId === chat.id ? 'text-white/60' : 'text-gray-400'
                  }`}>
                    {formatTimestamp(chat.timestamp)}
                  </span>
                </div>
                
                {chat.isActive && (
                  <div className={`w-2 h-2 rounded-full ${
                    selectedChatId === chat.id ? 'bg-white/60' : 'bg-green-400'
                  }`} />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-gray-200">
        <div className="text-xs text-gray-500 text-center">
          {chatSessions.length} conversation{chatSessions.length !== 1 ? 's' : ''}
        </div>
      </div>
    </div>
  );
}
