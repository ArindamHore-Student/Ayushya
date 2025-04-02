
import React from 'react';
import { Link } from 'react-router-dom';
import { Search, PillIcon, Zap, Shield, FileText, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

const Index = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="hero-pattern py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Understand Your <span className="text-medical-600">Medications</span> Better
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-6">
                Get comprehensive information about drugs, check for interactions, and use our AI assistant to analyze your prescriptions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link to="/drug-info">Explore Drug Database</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/ai-assistant">Try AI Assistant</Link>
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img 
                src="/placeholder.svg"
                alt="Drug Information Illustration"
                className="max-w-sm w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Search Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Find Medication Information</h2>
            <p className="mt-2 text-xl text-gray-600">Search our comprehensive drug database</p>
          </div>
          <div className="max-w-3xl mx-auto">
            <form className="relative">
              <Input
                type="text"
                placeholder="Enter drug name (e.g., Aspirin, Lisinopril, Metformin)"
                className="w-full pl-12 py-6 text-lg bg-gray-50"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Button type="submit" size="lg" className="absolute right-2 top-1/2 transform -translate-y-1/2">
                Search
              </Button>
            </form>
            <div className="mt-4 text-center text-sm text-gray-500">
              <p>Popular searches: Metformin, Lisinopril, Amoxicillin, Atorvastatin, Albuterol</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Features</h2>
            <p className="mt-2 text-xl text-gray-600">Tools to help you understand your medications</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader className="text-center">
                <div className="mx-auto bg-medical-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-2">
                  <PillIcon className="h-8 w-8 text-medical-600" />
                </div>
                <CardTitle>Comprehensive Drug Information</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Access detailed information about thousands of medications, including usage, side effects, and precautions.
                </p>
              </CardContent>
              <CardFooter className="pt-0 flex justify-center">
                <Button variant="outline" asChild>
                  <Link to="/drug-info">View Database</Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Feature 2 */}
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader className="text-center">
                <div className="mx-auto bg-medical-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-2">
                  <Zap className="h-8 w-8 text-medical-600" />
                </div>
                <CardTitle>Drug Interaction Checker</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Check for potential interactions between different medications to ensure your safety.
                </p>
              </CardContent>
              <CardFooter className="pt-0 flex justify-center">
                <Button variant="outline" asChild>
                  <Link to="/interactions">Check Interactions</Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Feature 3 */}
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader className="text-center">
                <div className="mx-auto bg-medical-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-2">
                  <MessageSquare className="h-8 w-8 text-medical-600" />
                </div>
                <CardTitle>AI Assistant</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Get personalized answers about your medications from our AI-powered assistant with prescription scanning.
                </p>
              </CardContent>
              <CardFooter className="pt-0 flex justify-center">
                <Button variant="outline" asChild>
                  <Link to="/ai-assistant">Try Assistant</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Info Cards Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Drug Information Resources</h2>
            <p className="mt-2 text-xl text-gray-600">Educational content to improve your medication knowledge</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Understanding Medication Labels</CardTitle>
                <CardDescription>Learn how to properly read prescription and over-the-counter medication labels</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Medication labels contain critical information about dosage, active ingredients, warnings, and proper usage. Understanding how to interpret this information is essential for taking medications safely and effectively.
                </p>
                <div className="mt-4">
                  <ul className="list-disc list-inside text-gray-600">
                    <li>Identifying active ingredients</li>
                    <li>Understanding dosage instructions</li>
                    <li>Recognizing warning labels</li>
                    <li>Checking expiration dates</li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/education/medication-labels">Learn More</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Safe Medication Storage</CardTitle>
                <CardDescription>Guidelines for properly storing your medications at home</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Proper medication storage is crucial for maintaining the effectiveness of your medications and preventing accidents, especially in households with children or pets.
                </p>
                <div className="mt-4">
                  <ul className="list-disc list-inside text-gray-600">
                    <li>Temperature and humidity considerations</li>
                    <li>Child-proof storage solutions</li>
                    <li>Organizing medications to prevent errors</li>
                    <li>Proper disposal of expired medications</li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/education/medication-storage">Learn More</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-medical-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Better Understand Your Medications?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Create a free account to save medications, set reminders, and get personalized recommendations.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/signup">Create Free Account</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white hover:bg-white/10" asChild>
              <Link to="/ai-assistant">Try AI Assistant Now</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
