"use client"
import Head from 'next/head';
import { useEffect } from 'react';

export default function PrivacyPolicy() {
  useEffect(() => {
    // Animation effect for section entries
    const animateSections = () => {
      const sections = document.querySelectorAll('.policy-section');
      sections.forEach((section, index) => {
        setTimeout(() => {
          section.classList.remove('opacity-0', '-translate-y-5');
          section.classList.add('opacity-100', 'translate-y-0');
        }, 150 * index);
      });
    };

    animateSections();
  }, []);

  return (
    <>
      <Head>
        <title>Privacy Policy | English Shayari</title>
        <meta name="description" content="Read our privacy policy to understand how we collect and use your information." />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mt-16 mx-auto">
          {/* Animated Header */}
          <div className="policy-section opacity-0 -translate-y-5 transform transition-all duration-500 ease-in-out mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-indigo-800 mb-4 animate-pulse">
              Privacy Policy
            </h1>
            <p className="text-lg text-gray-600">
              Effective Date: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          {/* Policy Content */}
          <div className="bg-white rounded-xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl">
            {/* Introduction */}
            <div className="policy-section opacity-0 -translate-y-5 transform transition-all duration-500 ease-in-out p-6 md:p-8 border-b border-gray-200">
              <h2 className="text-2xl font-semibold text-indigo-700 mb-4">Introduction</h2>
              <p className="text-gray-600 mb-4">
                At English Shayari, accessible from https://www.englishshayari.com, we are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and safeguard your personal information.
              </p>
              <p className="text-gray-600">
                By using our website, you consent to our Privacy Policy.
              </p>
            </div>

            {/* Information Collection */}
            <div className="policy-section opacity-0 -translate-y-5 transform transition-all duration-500 ease-in-out p-6 md:p-8 border-b border-gray-200">
              <h2 className="text-2xl font-semibold text-indigo-700 mb-4">1. Information We Collect</h2>
              <p className="text-gray-600 mb-4">
                We may collect personal information such as:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Name and email address (when you contact us or submit content)</li>
                <li>Usage data (via cookies, Google Analytics, etc.)</li>
                <li>IP address, browser type, and device information</li>
              </ul>
              <p className="text-gray-600 mt-4">
                We do not sell, trade, or rent your data to third parties.
              </p>
            </div>

            {/* Use of Information */}
            <div className="policy-section opacity-0 -translate-y-5 transform transition-all duration-500 ease-in-out p-6 md:p-8 border-b border-gray-200">
              <h2 className="text-2xl font-semibold text-indigo-700 mb-4">2. How We Use Your Information</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>To respond to your queries</li>
                <li>To improve our content and website performance</li>
                <li>To send occasional updates (only if you opt in)</li>
              </ul>
            </div>

            {/* Cookies */}
            <div className="policy-section opacity-0 -translate-y-5 transform transition-all duration-500 ease-in-out p-6 md:p-8 border-b border-gray-200">
              <h2 className="text-2xl font-semibold text-indigo-700 mb-4">3. Cookies</h2>
              <p className="text-gray-600">
                We use cookies to enhance your browsing experience. You can control or disable cookies through your browser settings.
              </p>
            </div>

            {/* Third-Party Services */}
            <div className="policy-section opacity-0 -translate-y-5 transform transition-all duration-500 ease-in-out p-6 md:p-8 border-b border-gray-200">
              <h2 className="text-2xl font-semibold text-indigo-700 mb-4">4. Third-Party Services</h2>
              <p className="text-gray-600">
                We may use trusted services (e.g., Google Analytics) to monitor website traffic. These services may collect some user data per their privacy policies.
              </p>
            </div>

            {/* Data Protection */}
            <div className="policy-section opacity-0 -translate-y-5 transform transition-all duration-500 ease-in-out p-6 md:p-8 border-b border-gray-200">
              <h2 className="text-2xl font-semibold text-indigo-700 mb-4">5. Data Protection</h2>
              <p className="text-gray-600">
                We implement reasonable measures to protect your data from unauthorised access, alteration, or disclosure.
              </p>
            </div>

            {/* Policy Changes */}
            <div className="policy-section opacity-0 -translate-y-5 transform transition-all duration-500 ease-in-out p-6 md:p-8 border-b border-gray-200">
              <h2 className="text-2xl font-semibold text-indigo-700 mb-4">6. Updates to This Policy</h2>
              <p className="text-gray-600">
                We may update this policy from time to time. Please check this page periodically for any changes.
              </p>
            </div>

            {/* Contact */}
            <div className="policy-section opacity-0 -translate-y-5 transform transition-all duration-500 ease-in-out bg-indigo-50 p-6 md:p-8">
              <h2 className="text-2xl font-semibold text-indigo-700 mb-4">Contact Us</h2>
              <p className="text-gray-600 mb-4">
                If you have any questions about this Privacy Policy, contact us at:
              </p>
              <div className="mt-4 p-4 bg-white rounded-lg shadow-inner">
                <p className="text-gray-700 font-medium">Email: privacy@englishshayari.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}