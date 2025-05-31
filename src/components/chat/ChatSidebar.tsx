
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Plus, MessageSquare, Trash2, MoreHorizontal } from 'lucide-react';

interface ChatSidebarProps {
  selectedChatId: string | null;
  onSelectChat: (chatId: string) => void;
}

// Mock data for development
const mockChats = [
  {
    id: '1',
    title: 'Customer Service AI Implementation',
    lastMessage: 'Analyzing costs for 10,000 monthly conversations...',
    timestamp: '2 hours ago',
    isActive: false
  },
  {
    id: '2',
    title: 'Sales Automation ROI Analysis',
    lastMessage: 'GPT-4 vs Claude comparison for lead generation',
    timestamp: '1 day ago',
    isActive: false
  },
  {
    id: '3',
    title: 'Document Processing Pipeline',
    lastMessage: 'OCR + NLP cost optimization strategies',
    timestamp: '3 days ago',
    isActive: false
  }
];

export function ChatSidebar({ selectedChatId, onSelectChat }: ChatSidebarProps) {
  const [chats, setChats] = useState(mockChats);

  const handleNewChat = () => {
    const newChat = {
      id: Date.now().toString(),
      title: 'New AI Cost Analysis',
      lastMessage: 'Start by describing your AI implementation needs...',
      timestamp: 'Just now',
      isActive: true
    };
    setChats([newChat, ...chats]);
    onSelectChat(newChat.id);
  };

  const handleDeleteChat = (chatId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setChats(chats.filter(chat => chat.id !== chatId));
    if (selectedChatId === chatId) {
      onSelectChat(chats.length > 1 ? chats[0].id : null);
    }
  };

  return (
    <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-gray-200">
        <Button 
          onClick={handleNewChat}
          className="w-full justify-start" 
          size="sm"
        >
          <Plus className="mr-2 h-4 w-4" />
          New Chat
        </Button>
      </div>

      {/* Chat History Header */}
      <div className="px-4 py-3 border-b border-gray-100">
        <h3 className="text-sm font-medium text-gray-900">Chat History</h3>
      </div>

      {/* Chat List */}
      <ScrollArea className="flex-1">
        <div className="p-2">
          {chats.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              <MessageSquare className="mx-auto h-8 w-8 mb-2 text-gray-300" />
              <p className="text-sm">No chats yet</p>
              <p className="text-xs text-gray-400">Start your first analysis</p>
            </div>
          ) : (
            <div className="space-y-1">
              {chats.map((chat) => (
                <div
                  key={chat.id}
                  onClick={() => onSelectChat(chat.id)}
                  className={`group p-3 rounded-lg cursor-pointer transition-colors ${
                    selectedChatId === chat.id
                      ? 'bg-primary-50 border border-primary-200'
                      : 'hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-medium text-gray-900 truncate">
                        {chat.title}
                      </h4>
                      <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                        {chat.lastMessage}
                      </p>
                      <p className="text-xs text-gray-400 mt-1">
                        {chat.timestamp}
                      </p>
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={(e) => handleDeleteChat(chat.id, e)}
                        className="h-6 w-6 p-0 text-gray-400 hover:text-red-500"
                      >
                        <Trash2 className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </ScrollArea>
    </div>
  );
}
