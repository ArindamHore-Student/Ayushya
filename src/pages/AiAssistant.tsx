
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Send, 
  UploadCloud, 
  Clock, 
  Info, 
  AlertTriangle, 
  FileText, 
  User, 
  Bot, 
  X,
  Pill,
  MessageSquare
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Separator } from '@/components/ui/separator';
import { toast } from 'sonner';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

const AiAssistant = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: 'Hello! I\'m your AI medication assistant. You can ask me questions about your medications, upload a prescription for analysis, or check for drug interactions. How can I help you today?',
      timestamp: new Date()
    }
  ]);
  
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [showSidebar, setShowSidebar] = useState(true);
  
  const handleMessageSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!input.trim()) return;
    
    const newUserMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
      timestamp: new Date()
    };
    
    setMessages([...messages, newUserMessage]);
    setInput('');
    setIsLoading(true);
    
    // Simulate AI response
    setTimeout(() => {
      const newAiMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: generateAIResponse(input),
        timestamp: new Date()
      };
      
      setMessages(prevMessages => [...prevMessages, newAiMessage]);
      setIsLoading(false);
    }, 1500);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;
    
    setIsUploading(true);
    
    // Simulate OCR processing
    setTimeout(() => {
      const file = files[0];
      
      const newUserMessage: Message = {
        id: Date.now().toString(),
        role: 'user',
        content: `Uploaded a prescription: ${file.name}`,
        timestamp: new Date()
      };
      
      const newAiMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: `I've analyzed your prescription and detected the following medications:\n\n1. Metformin 500mg - Take 1 tablet twice daily with meals\n2. Lisinopril 10mg - Take 1 tablet once daily\n3. Atorvastatin 20mg - Take 1 tablet at bedtime\n\nWould you like information about any of these medications or should I check for potential interactions between them?`,
        timestamp: new Date()
      };
      
      setMessages(prevMessages => [...prevMessages, newUserMessage, newAiMessage]);
      setIsUploading(false);
      toast.success('Prescription successfully analyzed');
    }, 2000);
    
    // Reset file input
    e.target.value = '';
  };
  
  const generateAIResponse = (query: string): string => {
    // Simple mock responses based on keywords
    if (/metformin|diabetes/i.test(query)) {
      return "Metformin is an oral diabetes medicine that helps control blood sugar levels. It's generally the first medication prescribed for type 2 diabetes. Common side effects may include nausea, stomach upset, and diarrhea, which often improve over time. Take metformin with meals to minimize these effects. Always follow your doctor's dosage instructions.";
    } else if (/lisinopril|blood pressure|hypertension/i.test(query)) {
      return "Lisinopril is an ACE inhibitor used to treat high blood pressure and heart failure. It works by relaxing blood vessels so blood can flow more easily. Common side effects may include dry cough, dizziness, and headache. Take it at the same time each day, and monitor your blood pressure regularly.";
    } else if (/interaction|interact/i.test(query)) {
      return "When checking for drug interactions, I need to know which medications you're taking. Could you please list all your current medications, including prescription drugs, over-the-counter medicines, and supplements?";
    } else if (/side effect|adverse/i.test(query)) {
      return "All medications can potentially cause side effects, though not everyone experiences them. Common side effects across many medications include nausea, headache, drowsiness, and dizziness. Severe side effects that require immediate medical attention include difficulty breathing, severe rash, and unusual swelling. Which medication's side effects are you concerned about?";
    } else {
      return "I'm here to help with your medication questions. You can ask about specific drugs, side effects, interactions, or upload a prescription for analysis. What would you like to know?";
    }
  };
  
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar with information, only shown on larger screens or when toggled */}
        {showSidebar && (
          <div className="col-span-1 h-[calc(100vh-10rem)] flex flex-col">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 flex-grow overflow-y-auto">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">AI Assistant Info</h3>
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={() => setShowSidebar(false)}
                  className="lg:hidden"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-medium text-gray-900 mb-2">How it works</h4>
                  <p className="text-sm text-gray-600">
                    Our AI assistant helps you understand your medications by answering questions and analyzing prescriptions.
                  </p>
                </div>
                
                <Separator />
                
                <div>
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Features</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start">
                      <Info className="h-4 w-4 mr-2 mt-0.5 text-medical-600" />
                      <span>Get medication information</span>
                    </li>
                    <li className="flex items-start">
                      <AlertTriangle className="h-4 w-4 mr-2 mt-0.5 text-medical-600" />
                      <span>Check drug interactions</span>
                    </li>
                    <li className="flex items-start">
                      <FileText className="h-4 w-4 mr-2 mt-0.5 text-medical-600" />
                      <span>Upload & analyze prescriptions</span>
                    </li>
                    <li className="flex items-start">
                      <Clock className="h-4 w-4 mr-2 mt-0.5 text-medical-600" />
                      <span>Set medication reminders</span>
                    </li>
                  </ul>
                </div>
                
                <Separator />
                
                <div>
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Example questions</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="bg-gray-50 p-2 rounded hover:bg-gray-100 cursor-pointer">
                      What are the side effects of Metformin?
                    </li>
                    <li className="bg-gray-50 p-2 rounded hover:bg-gray-100 cursor-pointer">
                      Can I take Ibuprofen with Lisinopril?
                    </li>
                    <li className="bg-gray-50 p-2 rounded hover:bg-gray-100 cursor-pointer">
                      How should I store my medications?
                    </li>
                  </ul>
                </div>
                
                <Separator />
                
                <Alert className="bg-yellow-50 border-yellow-200">
                  <AlertTriangle className="h-4 w-4 text-yellow-600" />
                  <AlertTitle className="text-yellow-800">Medical Disclaimer</AlertTitle>
                  <AlertDescription className="text-yellow-700 text-xs">
                    This AI assistant provides general information and is not a substitute for professional medical advice. Always consult your healthcare provider before changing any medication regimen.
                  </AlertDescription>
                </Alert>
              </div>
            </div>
          </div>
        )}
        
        {/* Main chat interface */}
        <div className={`${showSidebar ? 'lg:col-span-3' : 'col-span-full'} flex flex-col h-[calc(100vh-10rem)]`}>
          <Card className="flex flex-col h-full">
            <CardHeader className="border-b">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  {!showSidebar && (
                    <Button 
                      variant="ghost" 
                      size="icon"
                      onClick={() => setShowSidebar(true)}
                      className="mr-2"
                    >
                      <MessageSquare className="h-4 w-4" />
                    </Button>
                  )}
                  <div>
                    <CardTitle className="flex items-center">
                      <Bot className="h-5 w-5 text-medical-600 mr-2" />
                      Medication AI Assistant
                    </CardTitle>
                    <CardDescription>Ask questions about your medications or upload a prescription</CardDescription>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <label htmlFor="file-upload" className="cursor-pointer">
                    <div className="flex items-center gap-1 bg-gray-50 hover:bg-gray-100 transition-colors py-1 px-3 rounded-md text-sm">
                      <UploadCloud className="h-4 w-4 text-gray-600" />
                      <span className="text-gray-700">Upload Prescription</span>
                    </div>
                    <input 
                      id="file-upload" 
                      type="file" 
                      accept="image/*, application/pdf" 
                      onChange={handleFileUpload}
                      className="hidden"
                    />
                  </label>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="flex-grow overflow-y-auto p-4">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div 
                    key={message.id} 
                    className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div 
                      className={`max-w-3/4 rounded-lg p-4 ${
                        message.role === 'user' 
                          ? 'bg-medical-600 text-white' 
                          : 'bg-gray-100 text-gray-800'
                      }`}
                      style={{ maxWidth: '75%' }}
                    >
                      <div className="flex items-center mb-1">
                        <div className={`rounded-full p-1 mr-2 ${
                          message.role === 'user' 
                            ? 'bg-white/20' 
                            : 'bg-medical-100'
                        }`}>
                          {message.role === 'user' ? (
                            <User className="h-3 w-3" />
                          ) : (
                            <Bot className="h-3 w-3" />
                          )}
                        </div>
                        <span className="text-xs opacity-70">
                          {formatTime(message.timestamp)}
                        </span>
                      </div>
                      <div className="whitespace-pre-line">
                        {message.content}
                      </div>
                    </div>
                  </div>
                ))}
                
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="max-w-3/4 rounded-lg p-4 bg-gray-100 text-gray-800">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 rounded-full bg-medical-400 animate-pulse"></div>
                        <div className="w-2 h-2 rounded-full bg-medical-500 animate-pulse delay-100"></div>
                        <div className="w-2 h-2 rounded-full bg-medical-600 animate-pulse delay-200"></div>
                      </div>
                    </div>
                  </div>
                )}
                
                {isUploading && (
                  <div className="flex justify-end">
                    <div className="max-w-3/4 rounded-lg p-4 bg-gray-100 text-gray-800">
                      <div className="flex items-center">
                        <UploadCloud className="animate-pulse h-5 w-5 mr-2 text-medical-600" />
                        <span>Analyzing your prescription...</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
            
            <CardFooter className="border-t p-4">
              <form onSubmit={handleMessageSubmit} className="w-full flex gap-2">
                <Input
                  placeholder="Ask about your medications..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="flex-grow"
                  disabled={isLoading || isUploading}
                />
                <Button 
                  type="submit" 
                  size="icon"
                  disabled={!input.trim() || isLoading || isUploading}
                >
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AiAssistant;
