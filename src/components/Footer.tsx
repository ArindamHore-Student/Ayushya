
import React from 'react';
import { Link } from 'react-router-dom';
import { Pill, Mail, Phone, MapPin, Shield } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center">
              <Pill className="h-6 w-6 text-medical-600" />
              <span className="ml-2 text-xl font-bold text-medical-700">DruggleMed</span>
            </Link>
            <p className="mt-2 text-sm text-gray-600">
              Helping you understand your medications better with AI-powered analysis and comprehensive drug information.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/" className="text-sm text-gray-600 hover:text-medical-600">Home</Link>
              </li>
              <li>
                <Link to="/drug-info" className="text-sm text-gray-600 hover:text-medical-600">Drug Information</Link>
              </li>
              <li>
                <Link to="/interactions" className="text-sm text-gray-600 hover:text-medical-600">Drug Interactions</Link>
              </li>
              <li>
                <Link to="/ai-assistant" className="text-sm text-gray-600 hover:text-medical-600">AI Assistant</Link>
              </li>
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Resources</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/help" className="text-sm text-gray-600 hover:text-medical-600">Help Center</Link>
              </li>
              <li>
                <Link to="/faq" className="text-sm text-gray-600 hover:text-medical-600">FAQs</Link>
              </li>
              <li>
                <Link to="/blog" className="text-sm text-gray-600 hover:text-medical-600">Blog</Link>
              </li>
              <li>
                <Link to="/terms" className="text-sm text-gray-600 hover:text-medical-600">Terms of Service</Link>
              </li>
              <li>
                <Link to="/privacy" className="text-sm text-gray-600 hover:text-medical-600">Privacy Policy</Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Contact Us</h3>
            <ul className="mt-4 space-y-2">
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-medical-500 mr-2" />
                <span className="text-sm text-gray-600">support@drugglemed.com</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-medical-500 mr-2" />
                <span className="text-sm text-gray-600">+1 (800) 555-MEDS</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-medical-500 mr-2" />
                <span className="text-sm text-gray-600">123 Health Avenue, Medical District, CA 90210</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 text-center">
            © {currentYear} DruggleMed. All rights reserved. Not intended as a substitute for professional medical advice.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
