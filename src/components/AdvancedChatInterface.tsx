import { useState, useRef, useEffect } from 'react';
import { Send, Mic, Paperclip, Smile, SendHorizontal } from 'lucide-react';
import { ChatBubble, ChatMessage } from './ChatBubble';

// Sample medical data
const bloodPressureData = [
  { name: 'Jan', systolic: 130, diastolic: 85 },
  { name: 'Feb', systolic: 128, diastolic: 83 },
  { name: 'Mar', systolic: 135, diastolic: 87 },
  { name: 'Apr', systolic: 125, diastolic: 80 },
  { name: 'May', systolic: 122, diastolic: 79 },
  { name: 'Jun', systolic: 120, diastolic: 78 },
];

const medicationEffectivenessData = [
  { name: 'Lisinopril', effectiveness: 85, adherence: 92, sideEffects: 15 },
  { name: 'Atorvastatin', effectiveness: 78, adherence: 88, sideEffects: 22 },
  { name: 'Metformin', effectiveness: 92, adherence: 76, sideEffects: 28 },
];

const medicationScheduleData = [
  { name: 'Morning', value: 5 },
  { name: 'Afternoon', value: 2 },
  { name: 'Evening', value: 4 },
  { name: 'Bedtime', value: 3 },
];

// Sample welcome message
const welcomeMessage: ChatMessage = {
  id: '0',
  content: `Hello, I'm your DruggleMed MedBot. How can I help you today?`,
  timestamp: new Date(),
  sender: 'doctor',
  contentType: 'text'
};

// Sample suggestive questions
const suggestiveQuestions = [
  "What should I know about my blood pressure?",
  "Can you track my glucose levels over time?",
  "What are the side effects of my medication?",
  "Show me statistics on my health progress",
  "Can you explain my lab results?"
];

export function AdvancedChatInterface() {
  const [messages, setMessages] = useState<ChatMessage[]>([welcomeMessage]);
  const [newMessage, setNewMessage] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(true);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (messagesEndRef.current && messagesContainerRef.current) {
      // Calculate the position to scroll to (the bottom of the messages)
      const scrollHeight = messagesContainerRef.current.scrollHeight;
      const clientHeight = messagesContainerRef.current.clientHeight;
      
      // Scroll to the bottom with a smooth animation
      messagesContainerRef.current.scrollTo({
        top: scrollHeight - clientHeight,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    // Wait for the content to be fully rendered then scroll
    setTimeout(() => {
      scrollToBottom();
    }, 100);
  }, [messages]);

  useEffect(() => {
    // Maintain focus within the chat container to keep scrolling within it
    const chatContainer = messagesContainerRef.current;
    
    if (chatContainer) {
      // Set initial focus to contain scroll events
      chatContainer.focus();
      
      // When a new message is received, make sure the container is focused
      const handleFocus = () => {
        chatContainer.focus();
      };
      
      window.addEventListener('focus', handleFocus);
      document.addEventListener('click', handleFocus);
      
      return () => {
        window.removeEventListener('focus', handleFocus);
        document.removeEventListener('click', handleFocus);
      };
    }
  }, []);

  useEffect(() => {
    // Prevent document scrolling when chat section is interacted with
    const preventDocumentScroll = (e: WheelEvent) => {
      if (messagesContainerRef.current?.contains(e.target as Node)) {
        const isAtBottom = messagesContainerRef.current.scrollHeight - messagesContainerRef.current.scrollTop <= messagesContainerRef.current.clientHeight + 100;
        const isAtTop = messagesContainerRef.current.scrollTop <= 0;
        
        // If scrolling down at the bottom of the container or up at the top, prevent default
        if ((e.deltaY > 0 && isAtBottom) || (e.deltaY < 0 && isAtTop)) {
          e.preventDefault();
        }
      }
    };
    
    // Add event listener with passive: false to allow preventDefault()
    document.addEventListener('wheel', preventDocumentScroll, { passive: false });
    
    return () => {
      document.removeEventListener('wheel', preventDocumentScroll);
    };
  }, []);

  const handleSendMessage = () => {
    if (newMessage.trim() === '') return;

    // Hide suggestions after first message
    setShowSuggestions(false);

    // Add user message
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      content: newMessage,
      sender: 'user',
      timestamp: new Date(),
      contentType: 'text'
    };

    setMessages(prev => [...prev, userMessage]);
    setNewMessage('');
    
    // Simulate doctor typing
    setIsTyping(true);
    
    // Simulate doctor response after a delay
    setTimeout(() => {
      const messageContent = newMessage.toLowerCase();
      
      // Logic to determine response type based on user input
      let doctorResponse: ChatMessage;
      
      if (messageContent.includes('blood pressure') || messageContent.includes('hypertension')) {
        doctorResponse = {
          id: (Date.now() + 1).toString(),
          content: "Here's your blood pressure trend from the last 6 months:",
          sender: 'doctor',
          timestamp: new Date(),
          contentType: 'lineChart',
          chartData: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [
              {
                label: 'Systolic',
                data: [120, 125, 128, 130, 126, 123],
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
              },
              {
                label: 'Diastolic',
                data: [80, 82, 85, 87, 84, 82],
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
              },
            ],
          },
          chartTitle: 'Blood Pressure Readings (mmHg)'
        };
      } else if (messageContent.includes('medication') || messageContent.includes('efficacy')) {
        doctorResponse = {
          id: (Date.now() + 1).toString(),
          content: "Here's the effectiveness of your current medications:",
          sender: 'doctor',
          timestamp: new Date(),
          contentType: 'barChart',
          chartData: {
            labels: ['Lisinopril', 'Metformin', 'Atorvastatin'],
            datasets: [
              {
                label: 'Efficacy Score',
                data: [85, 92, 78],
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
              }
            ],
          },
          chartTitle: 'Medication Efficacy (0-100%)'
        };
      } else if (messageContent.includes('lab') || messageContent.includes('test results')) {
        doctorResponse = {
          id: (Date.now() + 1).toString(),
          content: "Here's the breakdown of your recent lab results:",
          sender: 'doctor',
          timestamp: new Date(),
          contentType: 'pieChart',
          chartData: {
            labels: ['Within Range', 'Below Range', 'Above Range'],
            datasets: [
              {
                data: [70, 15, 15],
                backgroundColor: [
                  'rgba(75, 192, 192, 0.6)',
                  'rgba(54, 162, 235, 0.6)',
                  'rgba(255, 99, 132, 0.6)',
                ],
                borderColor: [
                  'rgba(75, 192, 192, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 99, 132, 1)',
                ],
                borderWidth: 1,
              },
            ],
          },
          chartTitle: 'Lab Results Distribution'
        };
      } else {
        doctorResponse = {
          id: (Date.now() + 1).toString(),
          content: getPhysicianResponse(newMessage),
          sender: 'doctor',
          timestamp: new Date(),
          contentType: 'text'
        };
      }
      
      setIsTyping(false);
      setMessages(prev => [...prev, doctorResponse]);
    }, 1500);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setNewMessage(suggestion);
    setTimeout(() => handleSendMessage(), 100);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  // Function to generate clinically-relevant responses
  const getPhysicianResponse = (query: string): string => {
    // ... existing function implementation ...
    // This is a placeholder - in a real app, you might use NLP or AI service
    return "I understand your question about " + query.split(' ').slice(0, 3).join(' ') + 
           "... As your medical assistant, I recommend discussing this with your healthcare provider during your next visit.";
  };

  return (
    <div className="flex flex-col h-full rounded-xl overflow-hidden bg-white">
      {/* Chat Messages Container */}
      <div 
        className="flex-1 overflow-y-auto p-4 pb-8 bg-gradient-to-b from-gray-50 to-white focus:outline-none" 
        ref={messagesContainerRef}
        tabIndex={-1}
      >
        {messages.map((message) => (
          <ChatBubble key={message.id} message={message} />
        ))}
        
        {/* Typing indicator */}
        {isTyping && (
          <div className="flex mb-4">
            <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex-shrink-0 mr-2 flex items-center justify-center">
              <span className="text-xs font-bold">MB</span>
            </div>
            <div className="bg-white text-gray-800 p-3 rounded-2xl rounded-tl-none border border-gray-200 shadow-sm">
              <div className="flex space-x-2">
                <div className="w-2 h-2 rounded-full bg-blue-500 animate-bounce" style={{ animationDelay: '0ms' }} />
                <div className="w-2 h-2 rounded-full bg-blue-500 animate-bounce" style={{ animationDelay: '200ms' }} />
                <div className="w-2 h-2 rounded-full bg-blue-500 animate-bounce" style={{ animationDelay: '400ms' }} />
              </div>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} className="h-8" />
      </div>

      {/* Suggestive Questions */}
      {showSuggestions && messages.length === 1 && (
        <div className="p-3 bg-blue-50">
          <p className="text-sm text-blue-800 mb-2 font-medium">Try asking:</p>
          <div className="flex flex-wrap gap-2">
            {suggestiveQuestions.map((question, index) => (
              <button
                key={index}
                className="bg-white text-blue-700 text-sm py-1 px-3 rounded-full border border-blue-200 hover:bg-blue-100 transition-colors"
                onClick={() => handleSuggestionClick(question)}
              >
                {question}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Chat Input */}
      <div className="border-t border-gray-200 p-4 pt-6 pb-6 bg-white">
        <div className="relative flex">
          <textarea
            ref={inputRef}
            className="flex-1 resize-none border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent max-h-32 min-h-[3rem]"
            placeholder="Type your question..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            rows={1}
          />
          <button
            className="ml-2 bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors"
            onClick={handleSendMessage}
            disabled={!newMessage.trim()}
          >
            <SendHorizontal className="h-5 w-5" />
          </button>
        </div>
        <p className="text-xs text-gray-500 mt-2">
          Ask MedBot about your health data, medications, or medical conditions.
        </p>
      </div>
    </div>
  );
} 