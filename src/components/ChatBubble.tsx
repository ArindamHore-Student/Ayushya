import React from 'react';
import { LineChart } from './data-visualization/LineChart';
import { BarChart } from './data-visualization/BarChart';
import { PieChart } from './data-visualization/PieChart';

export interface ChatMessage {
  id: string;
  content: string;
  timestamp: Date;
  sender: 'user' | 'doctor';
  contentType: 'text' | 'lineChart' | 'barChart' | 'pieChart';
  chartData?: any;
  chartTitle?: string;
}

interface ChatBubbleProps {
  message: ChatMessage;
}

export const ChatBubble: React.FC<ChatBubbleProps> = ({ message }) => {
  const { sender, content, timestamp, contentType, chartData, chartTitle } = message;
  
  // Format the timestamp
  const formatTime = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      hour: 'numeric',
      minute: 'numeric'
    }).format(date);
  };

  return (
    <div className={`flex mb-4 ${sender === 'user' ? 'justify-end' : 'justify-start'}`}>
      {sender === 'doctor' && (
        <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex-shrink-0 mr-2 flex items-center justify-center">
          <span className="text-xs font-bold">MB</span>
        </div>
      )}

      <div className={`max-w-[80%] md:max-w-[70%] ${
        sender === 'user' 
          ? 'bg-blue-600 text-white rounded-2xl rounded-tr-none' 
          : 'bg-white text-gray-800 rounded-2xl rounded-tl-none border border-gray-200 shadow-sm'
      } p-3`}>
        <div className="mb-1">
          {content}
        </div>

        {contentType === 'lineChart' && chartData && (
          <div className="mt-3 bg-white p-3 rounded-lg">
            <h4 className="text-sm font-medium text-gray-700 mb-2">{chartTitle}</h4>
            <div className="h-64">
              <LineChart data={chartData} />
            </div>
          </div>
        )}

        {contentType === 'barChart' && chartData && (
          <div className="mt-3 bg-white p-3 rounded-lg">
            <h4 className="text-sm font-medium text-gray-700 mb-2">{chartTitle}</h4>
            <div className="h-64">
              <BarChart data={chartData} />
            </div>
          </div>
        )}

        {contentType === 'pieChart' && chartData && (
          <div className="mt-3 bg-white p-3 rounded-lg">
            <h4 className="text-sm font-medium text-gray-700 mb-2">{chartTitle}</h4>
            <div className="h-64">
              <PieChart data={chartData} />
            </div>
          </div>
        )}

        <div className="text-xs opacity-70 mt-1">
          {formatTime(timestamp)}
        </div>
      </div>

      {sender === 'user' && (
        <div className="w-8 h-8 rounded-full bg-gray-300 text-gray-700 flex-shrink-0 ml-2 flex items-center justify-center">
          <span className="text-xs font-bold">You</span>
        </div>
      )}
    </div>
  );
}; 