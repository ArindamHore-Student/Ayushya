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
                Get comprehensive information about drugs, check for Ayurveda, and use our MedBot to analyze your prescriptions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link to="/ayurveda">Explore Drug Database</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/ai-assistant">Try MedBot</Link>
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img 
                src="data:image/jpeg;base64,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"
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
                <CardTitle>Ayurveda Checker</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Check for potential Ayurveda connections between different medications to ensure your safety.
                </p>
              </CardContent>
              <CardFooter className="pt-0 flex justify-center">
                <Button variant="outline" asChild>
                  <Link to="/ayurveda">Check Ayurveda</Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Feature 3 */}
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader className="text-center">
                <div className="mx-auto bg-medical-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-2">
                  <MessageSquare className="h-8 w-8 text-medical-600" />
                </div>
                <CardTitle>MedBot</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Get personalized answers about your medications from our MedBot with prescription scanning.
                </p>
              </CardContent>
              <CardFooter className="pt-0 flex justify-center">
                <Button variant="outline" asChild>
                  <Link to="/ai-assistant">Try MedBot Now</Link>
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
              <Link to="/ai-assistant">Try MedBot Now</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
