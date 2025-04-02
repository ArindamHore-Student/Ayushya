import React, { useState } from 'react';
import { 
  UploadCloud, 
  Info, 
  AlertTriangle, 
  FileText, 
  Clock,
  X,
  MessageSquare,
  Stethoscope
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Separator } from '@/components/ui/separator';
import { toast } from 'sonner';
import { AdvancedChatInterface } from '@/components/AdvancedChatInterface';

const AiAssistant = () => {
  const [showSidebar, setShowSidebar] = useState(true);
  const [isUploading, setIsUploading] = useState(false);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;
    
    setIsUploading(true);
    
    // Simulate OCR processing
    setTimeout(() => {
      const file = files[0];
      toast.success('Medical records successfully analyzed');
      setIsUploading(false);
    }, 2000);
    
    // Reset file input
    e.target.value = '';
  };
  
  return (
    <div className="max-w-full mx-auto px-6 sm:px-8 lg:px-10 py-4">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 mb-4">
        {/* Sidebar with information */}
        {showSidebar && (
          <div className="col-span-1 lg:h-[calc(100vh-8rem)] flex flex-col">
            <div className="bg-white rounded-xl shadow-xl border border-gray-200 p-4 flex-grow overflow-y-auto">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-4 -m-4 mb-4 rounded-t-xl">
                <h2 className="text-white font-medium text-lg">MedBot</h2>
                <p className="text-white/80 text-sm">Your medical assistant</p>
              </div>
              
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Clinical Assistant</h3>
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
                  <h4 className="text-sm font-medium text-gray-900 mb-2">About</h4>
                  <p className="text-sm text-gray-600">
                    Our MedBot helps physicians analyze patient data, evaluate treatment efficacy, and provide evidence-based recommendations.
                  </p>
                </div>
                
                <Separator />
                
                <div>
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Clinical Capabilities</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start p-2 rounded-lg hover:bg-blue-50 transition-colors">
                      <Info className="h-4 w-4 mr-2 mt-0.5 text-blue-600" />
                      <span>Patient-specific medication analysis</span>
                    </li>
                    <li className="flex items-start p-2 rounded-lg hover:bg-blue-50 transition-colors">
                      <AlertTriangle className="h-4 w-4 mr-2 mt-0.5 text-blue-600" />
                      <span>Ayurveda evaluation</span>
                    </li>
                    <li className="flex items-start p-2 rounded-lg hover:bg-blue-50 transition-colors">
                      <FileText className="h-4 w-4 mr-2 mt-0.5 text-blue-600" />
                      <span>Medical record pattern recognition</span>
                    </li>
                    <li className="flex items-start p-2 rounded-lg hover:bg-blue-50 transition-colors">
                      <Clock className="h-4 w-4 mr-2 mt-0.5 text-blue-600" />
                      <span>Longitudinal health data analysis</span>
                    </li>
                  </ul>
                </div>
                
                <Separator />
                
                <div>
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Consultation Options</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="bg-gradient-to-r from-blue-50 to-cyan-50 p-2 rounded-lg hover:from-blue-100 hover:to-cyan-100 cursor-pointer transition-all duration-200 shadow-sm hover:shadow-md">
                      Review patient blood pressure readings
                    </li>
                    <li className="bg-gradient-to-r from-blue-50 to-cyan-50 p-2 rounded-lg hover:from-blue-100 hover:to-cyan-100 cursor-pointer transition-all duration-200 shadow-sm hover:shadow-md">
                      Analyze medication efficacy data
                    </li>
                    <li className="bg-gradient-to-r from-blue-50 to-cyan-50 p-2 rounded-lg hover:from-blue-100 hover:to-cyan-100 cursor-pointer transition-all duration-200 shadow-sm hover:shadow-md">
                      Evaluate lab result patterns
                    </li>
                  </ul>
                </div>
                
                <Separator />
                
                <Alert className="bg-yellow-50 border-yellow-200">
                  <AlertTriangle className="h-4 w-4 text-yellow-600" />
                  <AlertTitle className="text-yellow-800">Clinical Decision Support</AlertTitle>
                  <AlertDescription className="text-yellow-700 text-xs">
                    This MedBot provides clinical decision support but does not replace professional medical judgment. Physicians should verify all recommendations before clinical application.
                  </AlertDescription>
                </Alert>
              </div>
            </div>
          </div>
        )}
        
        {/* Main chat interface */}
        <div className={`${showSidebar ? 'lg:col-span-3' : 'col-span-full'} flex flex-col lg:h-[calc(100vh-8rem)]`}>
          <Card className="flex flex-col h-full shadow-2xl rounded-xl overflow-hidden">
            <CardHeader className="border-b bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-500 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  {!showSidebar && (
                    <Button 
                      variant="ghost" 
                      size="icon"
                      onClick={() => setShowSidebar(true)}
                      className="mr-2 text-white hover:bg-white/10"
                    >
                      <MessageSquare className="h-4 w-4" />
                    </Button>
                  )}
                  <div>
                    <CardTitle className="flex items-center text-white">
                      <Stethoscope className="h-5 w-5 mr-2" />
                      Clinical Decision Support Assistant
                    </CardTitle>
                    <CardDescription className="text-white/80">Advanced medical data analysis and personalized clinical insights</CardDescription>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <label htmlFor="file-upload" className="cursor-pointer">
                    <div className="flex items-center gap-1 bg-white/10 hover:bg-white/20 transition-colors py-1 px-3 rounded-md text-sm text-white">
                      <UploadCloud className="h-4 w-4" />
                      <span>Upload Records</span>
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
            <CardContent className="flex-1 p-2 overflow-hidden">
              <div className="h-full border border-gray-100 rounded-lg shadow-inner overflow-hidden scroll-container">
                <AdvancedChatInterface />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AiAssistant;
