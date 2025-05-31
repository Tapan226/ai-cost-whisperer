
import { useState } from 'react';
import { Navigation } from '@/components/layout/Navigation';
import { ChatSidebar } from '@/components/chat/ChatSidebar';
import { ChatInterface } from '@/components/chat/ChatInterface';
import { ReportArea } from '@/components/report/ReportArea';

const Dashboard = () => {
  const [selectedChatId, setSelectedChatId] = useState<string | null>(null);
  const [reportData, setReportData] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="pt-16 h-screen flex">
        {/* Chat Sidebar */}
        <ChatSidebar 
          selectedChatId={selectedChatId}
          onSelectChat={setSelectedChatId}
        />
        
        {/* Main Content Area */}
        <div className="flex-1 flex">
          {/* Chat Interface */}
          <div className="flex-1 flex flex-col border-r border-gray-200">
            <ChatInterface 
              chatId={selectedChatId}
              onReportGenerated={setReportData}
            />
          </div>
          
          {/* Report Area */}
          <div className="w-1/2 flex flex-col">
            <ReportArea 
              reportData={reportData}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
