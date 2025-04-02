
import React from 'react';
import { Search, ChevronDown, HelpCircle, MessageSquare, Pill, User, AlertTriangle, Heart, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertDescription } from '@/components/ui/alert';

const Help = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold mb-2">How Can We Help You?</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Find answers to common questions about medications, using our platform, and managing your health.
        </p>
        
        <div className="max-w-2xl mx-auto mt-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input
              placeholder="Search for help topics..."
              className="pl-10 py-6 text-lg"
            />
            <Button className="absolute right-1 top-1/2 transform -translate-y-1/2">
              Search
            </Button>
          </div>
        </div>
      </div>
      
      <Tabs defaultValue="faq" className="mb-12">
        <TabsList className="grid grid-cols-4 w-full max-w-3xl mx-auto">
          <TabsTrigger value="faq">
            <HelpCircle className="mr-2 h-4 w-4" />
            FAQ
          </TabsTrigger>
          <TabsTrigger value="using">
            <Pill className="mr-2 h-4 w-4" />
            Using DruggleMed
          </TabsTrigger>
          <TabsTrigger value="account">
            <User className="mr-2 h-4 w-4" />
            Account Help
          </TabsTrigger>
          <TabsTrigger value="medical">
            <Heart className="mr-2 h-4 w-4" />
            Medical Information
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="faq">
          <Card>
            <CardHeader>
              <CardTitle>Frequently Asked Questions</CardTitle>
              <CardDescription>Common questions about our platform and services</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Is the drug information on this site accurate and up-to-date?</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">
                      We strive to provide the most accurate and up-to-date drug information possible. Our content is:
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      <li>Regularly updated based on the latest medical research and guidelines</li>
                      <li>Reviewed by healthcare professionals</li>
                      <li>Sourced from reputable medical databases and references</li>
                    </ul>
                    <p className="mt-2 text-sm text-gray-600">
                      However, medical knowledge evolves constantly, and we recommend consulting with healthcare providers for personalized medical advice.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2">
                  <AccordionTrigger>How accurate is the AI assistant?</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">
                      Our AI assistant is designed to provide helpful information about medications and answer general questions, but has some limitations:
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      <li>It&apos;s trained on a comprehensive database of medication information</li>
                      <li>It can analyze prescriptions and provide general guidance</li>
                      <li>It cannot diagnose conditions or replace professional medical advice</li>
                      <li>It may not have information on very recently approved medications</li>
                    </ul>
                    <Alert className="mt-3 bg-yellow-50 border-yellow-200">
                      <AlertTriangle className="h-4 w-4 text-yellow-600" />
                      <AlertDescription className="text-yellow-700 text-sm">
                        Always verify important medical information with healthcare professionals. The AI assistant is a tool to help you understand medications better, not a replacement for medical care.
                      </AlertDescription>
                    </Alert>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-3">
                  <AccordionTrigger>Is my personal and medical information secure?</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">
                      Protecting your personal and medical information is our highest priority:
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      <li>All data is encrypted both in transit and at rest</li>
                      <li>We comply with healthcare privacy regulations</li>
                      <li>We never sell your personal information to third parties</li>
                      <li>You can delete your account and associated data at any time</li>
                    </ul>
                    <p className="mt-2 text-sm text-gray-600">
                      For more details, please review our Privacy Policy to understand how we collect, use, and protect your information.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-4">
                  <AccordionTrigger>How do I report an error in drug information?</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">
                      We appreciate your help in keeping our information accurate. If you find an error:
                    </p>
                    <ol className="list-decimal list-inside space-y-1 text-gray-700">
                      <li>Navigate to the specific drug information page with the error</li>
                      <li>Click the &quot;Report an Issue&quot; button at the bottom of the page</li>
                      <li>Fill out the form with details about the error</li>
                      <li>Our medical content team will review and correct verified errors</li>
                    </ol>
                    <p className="mt-2 text-sm text-gray-600">
                      We typically review and respond to error reports within 48-72 hours.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-5">
                  <AccordionTrigger>Is the service free to use?</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">
                      We offer both free and premium features:
                    </p>
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-medium">Free Features:</h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                          <li>Basic drug information lookup</li>
                          <li>Simple interaction checks</li>
                          <li>Limited AI assistant usage</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium">Premium Features ($4.99/month):</h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                          <li>Unlimited AI assistant usage</li>
                          <li>Advanced medication tracking and reminders</li>
                          <li>Detailed interaction reports</li>
                          <li>Prescription history storage</li>
                          <li>Priority customer support</li>
                        </ul>
                      </div>
                    </div>
                    <p className="mt-2 text-sm text-gray-600">
                      We also offer special discounts for seniors, students, and healthcare workers.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="using">
          <Card>
            <CardHeader>
              <CardTitle>Using DruggleMed</CardTitle>
              <CardDescription>Guides and tutorials for using our platform</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader className="bg-gray-50 border-b">
                    <div className="flex items-center">
                      <Pill className="h-5 w-5 mr-2 text-medical-600" />
                      <CardTitle className="text-lg">Finding Drug Information</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <ol className="list-decimal list-inside space-y-2 text-gray-700">
                      <li>Navigate to the &quot;Drug Information&quot; section</li>
                      <li>Use the search box to enter a drug name (brand or generic)</li>
                      <li>Select the correct medication from the results</li>
                      <li>Browse different tabs for specific information</li>
                    </ol>
                  </CardContent>
                  <CardFooter className="border-t pt-4">
                    <Button variant="outline" className="w-full">View Tutorial</Button>
                  </CardFooter>
                </Card>
                
                <Card>
                  <CardHeader className="bg-gray-50 border-b">
                    <div className="flex items-center">
                      <AlertTriangle className="h-5 w-5 mr-2 text-medical-600" />
                      <CardTitle className="text-lg">Checking Drug Interactions</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <ol className="list-decimal list-inside space-y-2 text-gray-700">
                      <li>Navigate to the &quot;Interactions&quot; section</li>
                      <li>Search and add all medications you&apos;re taking</li>
                      <li>Click &quot;Check Interactions&quot; to see results</li>
                      <li>Review interaction severity and recommendations</li>
                    </ol>
                  </CardContent>
                  <CardFooter className="border-t pt-4">
                    <Button variant="outline" className="w-full">View Tutorial</Button>
                  </CardFooter>
                </Card>
                
                <Card>
                  <CardHeader className="bg-gray-50 border-b">
                    <div className="flex items-center">
                      <MessageSquare className="h-5 w-5 mr-2 text-medical-600" />
                      <CardTitle className="text-lg">Using the AI Assistant</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <ol className="list-decimal list-inside space-y-2 text-gray-700">
                      <li>Navigate to the &quot;AI Assistant&quot; section</li>
                      <li>Type your medication question in the chat box</li>
                      <li>Upload prescriptions using the upload button</li>
                      <li>Save important information to your profile</li>
                    </ol>
                  </CardContent>
                  <CardFooter className="border-t pt-4">
                    <Button variant="outline" className="w-full">View Tutorial</Button>
                  </CardFooter>
                </Card>
                
                <Card>
                  <CardHeader className="bg-gray-50 border-b">
                    <div className="flex items-center">
                      <User className="h-5 w-5 mr-2 text-medical-600" />
                      <CardTitle className="text-lg">Managing Your Profile</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <ol className="list-decimal list-inside space-y-2 text-gray-700">
                      <li>Click on your profile icon in the top right</li>
                      <li>Add your medications to your personal list</li>
                      <li>Set up medication reminders</li>
                      <li>Review your search and interaction history</li>
                    </ol>
                  </CardContent>
                  <CardFooter className="border-t pt-4">
                    <Button variant="outline" className="w-full">View Tutorial</Button>
                  </CardFooter>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="account">
          <Card>
            <CardHeader>
              <CardTitle>Account Help</CardTitle>
              <CardDescription>Managing your account and subscription</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="account-1">
                  <AccordionTrigger>How do I create an account?</AccordionTrigger>
                  <AccordionContent>
                    <ol className="list-decimal list-inside space-y-2 text-gray-700">
                      <li>Click the "Sign Up" button in the top right corner</li>
                      <li>Enter your email address and create a password</li>
                      <li>Verify your email address by clicking the link sent to your inbox</li>
                      <li>Complete your profile with your name and basic information</li>
                    </ol>
                    <p className="mt-2 text-sm text-gray-600">
                      Creating an account allows you to save your medications, set reminders, and access your history across devices.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="account-2">
                  <AccordionTrigger>How do I reset my password?</AccordionTrigger>
                  <AccordionContent>
                    <ol className="list-decimal list-inside space-y-2 text-gray-700">
                      <li>Click on "Sign In" in the top right corner</li>
                      <li>Select the "Forgot Password?" link below the sign-in form</li>
                      <li>Enter the email address associated with your account</li>
                      <li>Check your email for a password reset link</li>
                      <li>Create and confirm your new password</li>
                    </ol>
                    <p className="mt-2 text-sm text-gray-600">
                      If you don't receive the password reset email, check your spam folder or contact our support team.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="account-3">
                  <AccordionTrigger>How do I upgrade to a premium account?</AccordionTrigger>
                  <AccordionContent>
                    <ol className="list-decimal list-inside space-y-2 text-gray-700">
                      <li>Sign in to your account</li>
                      <li>Navigate to "Profile" > "Subscription"</li>
                      <li>Select the premium plan that best suits your needs</li>
                      <li>Enter your payment information</li>
                      <li>Confirm your subscription</li>
                    </ol>
                    <div className="mt-3 p-3 bg-gray-50 rounded-md">
                      <p className="text-sm font-medium">Premium Benefits:</p>
                      <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                        <li>Unlimited AI assistant usage</li>
                        <li>Advanced medication management</li>
                        <li>Comprehensive interaction reports</li>
                        <li>Prescription history storage</li>
                        <li>Priority support</li>
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="account-4">
                  <AccordionTrigger>How do I delete my account?</AccordionTrigger>
                  <AccordionContent>
                    <ol className="list-decimal list-inside space-y-2 text-gray-700">
                      <li>Sign in to your account</li>
                      <li>Navigate to "Profile" > "Settings"</li>
                      <li>Scroll to the bottom and click "Delete Account"</li>
                      <li>Read the information about account deletion</li>
                      <li>Confirm by entering your password</li>
                    </ol>
                    <Alert className="mt-3 bg-red-50 border-red-200">
                      <AlertTriangle className="h-4 w-4 text-red-600" />
                      <AlertDescription className="text-red-700 text-sm">
                        Account deletion is permanent. All your saved medications, history, and personal information will be permanently removed from our systems. This action cannot be undone.
                      </AlertDescription>
                    </Alert>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="medical">
          <Card>
            <CardHeader>
              <CardTitle>Medical Information</CardTitle>
              <CardDescription>Understanding medication information and health resources</CardDescription>
            </CardHeader>
            <CardContent>
              <Alert className="mb-6 bg-yellow-50 border-yellow-200">
                <AlertTriangle className="h-4 w-4 text-yellow-600" />
                <AlertDescription className="text-yellow-700">
                  <strong>Medical Disclaimer:</strong> The information provided on DruggleMed is intended for educational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition or medication.
                </AlertDescription>
              </Alert>
              
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="med-1">
                  <AccordionTrigger>How to read medication labels?</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-3">
                      Medication labels contain critical information that helps you take medications safely and effectively. Key elements include:
                    </p>
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-medium">Essential Label Components:</h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                          <li><strong>Active ingredient:</strong> The therapeutic substance in the medication</li>
                          <li><strong>Dosage strength:</strong> Amount of active ingredient per unit</li>
                          <li><strong>Dosage instructions:</strong> How and when to take the medication</li>
                          <li><strong>Warnings:</strong> Potential risks and side effects</li>
                          <li><strong>Expiration date:</strong> When the medication may no longer be safe or effective</li>
                          <li><strong>Storage instructions:</strong> How to properly store the medication</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-medium">Prescription Label Specifics:</h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                          <li><strong>Refill information:</strong> Number of refills allowed</li>
                          <li><strong>Prescribing doctor:</strong> Name and contact information</li>
                          <li><strong>Pharmacy information:</strong> Where the prescription was filled</li>
                          <li><strong>Special instructions:</strong> Any specific guidance for taking the medication</li>
                        </ul>
                      </div>
                    </div>
                    <Button variant="outline" className="mt-4">View Detailed Guide</Button>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="med-2">
                  <AccordionTrigger>What are medication side effects?</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-3">
                      Medication side effects are unwanted reactions that may occur when taking a medication. Understanding side effects helps you recognize when to seek medical attention.
                    </p>
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-medium">Common vs. Serious Side Effects:</h4>
                        <p className="text-sm text-gray-700 mb-2">
                          Side effects typically fall into two categories:
                        </p>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                          <li><strong>Common side effects:</strong> Usually mild and may resolve as your body adjusts to the medication (e.g., headache, nausea, drowsiness)</li>
                          <li><strong>Serious side effects:</strong> Require immediate medical attention (e.g., severe allergic reaction, difficulty breathing, unusual bleeding)</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-medium">Factors That Influence Side Effects:</h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                          <li>Age and overall health</li>
                          <li>Other medications you're taking</li>
                          <li>Dosage and duration of treatment</li>
                          <li>Genetic factors that affect how your body processes medications</li>
                        </ul>
                      </div>
                    </div>
                    <Alert className="mt-3 bg-blue-50 border-blue-200">
                      <AlertDescription className="text-blue-700 text-sm">
                        <strong>Important:</strong> Always report unusual or severe side effects to your healthcare provider promptly. Do not stop taking prescribed medications without consulting your doctor first.
                      </AlertDescription>
                    </Alert>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="med-3">
                  <AccordionTrigger>How to safely store medications?</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-3">
                      Proper medication storage is crucial for maintaining effectiveness and preventing accidents.
                    </p>
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-medium">General Storage Guidelines:</h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                          <li>Store medications in a cool, dry place (avoid bathroom medicine cabinets where humidity is high)</li>
                          <li>Keep medications in their original containers with labels intact</li>
                          <li>Store medication out of direct sunlight</li>
                          <li>Follow specific storage instructions (refrigeration, etc.)</li>
                          <li>Use childproof containers and keep all medications out of reach of children and pets</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-medium">Medication Disposal:</h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                          <li>Check for specific disposal instructions on medication labels</li>
                          <li>Use community drug take-back programs when available</li>
                          <li>For household disposal, mix with undesirable substance (coffee grounds, kitty litter), seal in container, and place in trash</li>
                          <li>Remove personal information from prescription labels before disposal</li>
                        </ul>
                      </div>
                    </div>
                    <Button variant="outline" className="mt-4">View Storage Guide</Button>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="med-4">
                  <AccordionTrigger>What questions should I ask my doctor about medications?</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-3">
                      Being informed about your medications helps ensure safe and effective use. Here are important questions to ask your healthcare provider:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                      <div className="bg-gray-50 p-3 rounded-md">
                        <h4 className="font-medium text-medical-700 mb-2">About the Medication</h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                          <li>What is this medication used for?</li>
                          <li>How long will I need to take it?</li>
                          <li>How will I know if it's working?</li>
                          <li>Are there alternatives to this medication?</li>
                          <li>Is a generic version available?</li>
                        </ul>
                      </div>
                      
                      <div className="bg-gray-50 p-3 rounded-md">
                        <h4 className="font-medium text-medical-700 mb-2">Taking the Medication</h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                          <li>How and when should I take it?</li>
                          <li>Should I take it with food or on an empty stomach?</li>
                          <li>What should I do if I miss a dose?</li>
                          <li>Are there foods, drinks, or activities I should avoid?</li>
                          <li>How should I store this medication?</li>
                        </ul>
                      </div>
                      
                      <div className="bg-gray-50 p-3 rounded-md">
                        <h4 className="font-medium text-medical-700 mb-2">Side Effects & Risks</h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                          <li>What are common side effects?</li>
                          <li>What side effects require medical attention?</li>
                          <li>Will this interact with my other medications?</li>
                          <li>Are there long-term risks or concerns?</li>
                          <li>Does this medication cause drowsiness or affect driving?</li>
                        </ul>
                      </div>
                      
                      <div className="bg-gray-50 p-3 rounded-md">
                        <h4 className="font-medium text-medical-700 mb-2">Follow-up & Monitoring</h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                          <li>Do I need any tests to monitor this medication?</li>
                          <li>When should I follow up about this medication?</li>
                          <li>How often will my dosage be reviewed?</li>
                          <li>What symptoms should prompt me to call you?</li>
                          <li>When might this medication be discontinued?</li>
                        </ul>
                      </div>
                    </div>
                    <p className="mt-4 text-sm text-gray-600">
                      It may be helpful to write down these questions before your appointment and take notes during your discussion with your healthcare provider.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      
      {/* Contact section */}
      <div className="mt-12 bg-medical-50 rounded-lg p-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Still Need Help?</h2>
          <p className="text-gray-600 mb-6">
            Our support team is available to assist you with any questions or issues you may have.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-center">
                  <MessageSquare className="h-5 w-5 mr-2" />
                  Live Chat Support
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-4">
                  Chat with our support team for immediate assistance with your questions.
                </p>
                <Button>Start Chat</Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-center">
                  <Mail className="h-5 w-5 mr-2" />
                  Email Support
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-4">
                  Send us an email and we'll respond within 24 hours.
                </p>
                <Button variant="outline">support@drugglemed.com</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
