import React from 'react';
import { Link } from 'react-router-dom';
import { Activity, Database, User, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Hero section with icon */}
      <div className="text-center mb-12">
        <div className="bg-blue-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"></path>
          </svg>
        </div>
        <h1 className="text-3xl font-bold text-gray-900">About Ayushya</h1>
        <p className="text-lg text-gray-600 mt-3 max-w-2xl mx-auto">
          Learn about our mission to provide healthcare professionals with reliable medication intelligence.
        </p>
        <Button className="mt-6 bg-blue-600 hover:bg-blue-700">
          Explore our platform
        </Button>
      </div>

      {/* Mission section */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Mission</h2>
        <p className="text-gray-600 mb-8">
          Ayushya is dedicated to providing healthcare professionals with accurate, evidence-based medication information to support clinical decision-making.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-blue-50 rounded-lg p-6">
            <div className="bg-white w-12 h-12 rounded-full shadow-sm flex items-center justify-center mb-4">
              <User className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Patient-Centered</h3>
            <p className="text-gray-600 text-sm">
              Focused on improving patient outcomes through better medication decisions
            </p>
          </div>

          <div className="bg-blue-50 rounded-lg p-6">
            <div className="bg-white w-12 h-12 rounded-full shadow-sm flex items-center justify-center mb-4">
              <Database className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Evidence-Based</h3>
            <p className="text-gray-600 text-sm">
              All information is rigorously verified and based on latest research
            </p>
          </div>

          <div className="bg-blue-50 rounded-lg p-6">
            <div className="bg-white w-12 h-12 rounded-full shadow-sm flex items-center justify-center mb-4">
              <Activity className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Innovative</h3>
            <p className="text-gray-600 text-sm">
              Leveraging cutting-edge AI to deliver intelligent medication insights
            </p>
          </div>
        </div>
      </div>

      {/* Stats section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 text-center">
          <h3 className="text-3xl font-bold text-blue-600 mb-2">10K+</h3>
          <p className="text-gray-600 text-sm">Healthcare Professionals</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 text-center">
          <h3 className="text-3xl font-bold text-blue-600 mb-2">50K+</h3>
          <p className="text-gray-600 text-sm">Medications Indexed</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 text-center">
          <h3 className="text-3xl font-bold text-blue-600 mb-2">99.9%</h3>
          <p className="text-gray-600 text-sm">Information Accuracy</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 text-center">
          <h3 className="text-3xl font-bold text-blue-600 mb-2">24/7</h3>
          <p className="text-gray-600 text-sm">Availability</p>
        </div>
      </div>

      {/* Features section */}
      <div className="mb-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Our Features</h2>
          <Link to="/" className="text-blue-600 hover:text-blue-800 text-sm">
            View all features →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div id="sanjeevani" className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2a5 5 0 0 1 5 5v2a5 5 0 0 1-10 0V7a5 5 0 0 1 5-5z"></path>
                <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                <line x1="12" y1="19" x2="12" y2="23"></line>
                <line x1="8" y1="23" x2="16" y2="23"></line>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">MedBot</h3>
            <p className="text-gray-600 mb-4">
              AI-powered medical assistant for medication information
            </p>
            <ul className="text-gray-600 text-sm space-y-2">
              <li>• Natural language processing for medical queries</li>
              <li>• Contextual understanding of medical terminology</li>
            </ul>
          </div>

          <div id="arogya" className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="22" y1="12" x2="18" y2="12"></line>
                <line x1="6" y1="12" x2="2" y2="12"></line>
                <line x1="12" y1="6" x2="12" y2="2"></line>
                <line x1="12" y1="22" x2="12" y2="18"></line>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Ayurveda</h3>
            <p className="text-gray-600 mb-4">
              Comprehensive medication database
            </p>
            <ul className="text-gray-600 text-sm space-y-2">
              <li>• Detailed information on 50000+ medications</li>
              <li>• Regular updates with latest pharmaceutical data</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Team section */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Our Team</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <User className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold">Medical Experts</h3>
            <p className="text-gray-600 text-sm mt-2">
              Physicians and specialists ensuring clinical accuracy
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                <line x1="8" y1="21" x2="16" y2="21"></line>
                <line x1="12" y1="17" x2="12" y2="21"></line>
              </svg>
            </div>
            <h3 className="text-lg font-semibold">AI Engineers</h3>
            <p className="text-gray-600 text-sm mt-2">
              Building intelligent systems for healthcare
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
              </svg>
            </div>
            <h3 className="text-lg font-semibold">Pharmacologists</h3>
            <p className="text-gray-600 text-sm mt-2">
              Experts in medication information and interactions
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold">Data Scientists</h3>
            <p className="text-gray-600 text-sm mt-2">
              Analyzing healthcare data for better insights
            </p>
          </div>
        </div>
      </div>

      {/* CTA section */}
      <div className="bg-blue-50 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to enhance your clinical decision-making?</h2>
        <p className="text-gray-600 mb-8">
          Join thousands of healthcare professionals who trust Ayushya for reliable medication intelligence.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button className="bg-blue-600 hover:bg-blue-700">
            Get Started
          </Button>
          <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
            Request a Demo
          </Button>
        </div>
      </div>

      {/* Disclaimer */}
      <p className="text-center text-gray-500 text-sm mt-16">
        Ayushya is designed to assist healthcare professionals. It should not replace professional medical judgment. Always refer to official product monographs and guidelines.
      </p>
    </div>
  );
};

export default About; 