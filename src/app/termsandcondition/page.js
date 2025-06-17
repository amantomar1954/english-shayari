"use client"
import Head from 'next/head';
import { useEffect } from 'react';

export default function LegalPages() {
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
        <title>Legal | English Shayari</title>
        <meta name="description" content="Privacy Policy and Terms & Conditions for English Shayari" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mt-16 mx-auto space-y-12">
          {/* Privacy Policy Section */}
         

          {/* Terms and Conditions Section */}
          <div>
            {/* Animated Header */}
            <div className="policy-section opacity-0 -translate-y-5 transform transition-all duration-500 ease-in-out mb-12 text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-indigo-800 mb-4 animate-pulse">
                Terms and Conditions
              </h1>
              <p className="text-lg text-gray-600">
                Effective Date: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>

            {/* Terms Content */}
            <div className="bg-white rounded-xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl">
              {/* Introduction */}
              <div className="policy-section opacity-0 -translate-y-5 transform transition-all duration-500 ease-in-out p-6 md:p-8 border-b border-gray-200">
                <h2 className="text-2xl font-semibold text-indigo-700 mb-4">Introduction</h2>
                <p className="text-gray-600">
                  Welcome to English Shayari. By accessing or using our website https://www.englishshayari.com, you agree to comply with the following terms and conditions:
                </p>
              </div>

              {/* Use of Website */}
              <div className="policy-section opacity-0 -translate-y-5 transform transition-all duration-500 ease-in-out p-6 md:p-8 border-b border-gray-200">
                <h2 className="text-2xl font-semibold text-indigo-700 mb-4">1. Use of Website</h2>
                <p className="text-gray-600">
                  You agree to use this website for lawful purposes only. Do not misuse, hack, or disrupt the site or its services.
                </p>
              </div>

              {/* Intellectual Property */}
              <div className="policy-section opacity-0 -translate-y-5 transform transition-all duration-500 ease-in-out p-6 md:p-8 border-b border-gray-200">
                <h2 className="text-2xl font-semibold text-indigo-700 mb-4">2. Intellectual Property</h2>
                <p className="text-gray-600 mb-4">
                  All content, including Shayaris, articles, design, and branding, is the property of English Shayari unless otherwise credited. You may not copy, reproduce, or redistribute any content without written permission.
                </p>
              </div>

              {/* User Submissions */}
              <div className="policy-section opacity-0 -translate-y-5 transform transition-all duration-500 ease-in-out p-6 md:p-8 border-b border-gray-200">
                <h2 className="text-2xl font-semibold text-indigo-700 mb-4">3. User Submissions</h2>
                <p className="text-gray-600 mb-4">
                  When you submit your Shayari or content:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>You confirm it is your original work.</li>
                  <li>You grant us a non-exclusive right to publish it on our platform.</li>
                  <li>You allow us to edit or format it for clarity, grammar, and consistency.</li>
                </ul>
              </div>

              {/* External Links */}
              <div className="policy-section opacity-0 -translate-y-5 transform transition-all duration-500 ease-in-out p-6 md:p-8 border-b border-gray-200">
                <h2 className="text-2xl font-semibold text-indigo-700 mb-4">4. External Links</h2>
                <p className="text-gray-600">
                  We may include links to third-party websites. We are not responsible for their content or privacy practices.
                </p>
              </div>

              {/* Disclaimer */}
              <div className="policy-section opacity-0 -translate-y-5 transform transition-all duration-500 ease-in-out p-6 md:p-8 border-b border-gray-200">
                <h2 className="text-2xl font-semibold text-indigo-700 mb-4">5. Disclaimer</h2>
                <p className="text-gray-600">
                  Content on English Shayari is for entertainment and emotional expression only. We make no guarantees regarding the accuracy, completeness, or emotional impact of any content.
                </p>
              </div>

              {/* Termination */}
              <div className="policy-section opacity-0 -translate-y-5 transform transition-all duration-500 ease-in-out p-6 md:p-8 border-b border-gray-200">
                <h2 className="text-2xl font-semibold text-indigo-700 mb-4">6. Termination</h2>
                <p className="text-gray-600">
                  We reserve the right to block access or remove content if a user violates these terms or misuses the website.
                </p>
              </div>

              {/* Changes to Terms */}
              <div className="policy-section opacity-100 -translate-y-5 transform transition-all duration-500 ease-in-out p-6 md:p-8 border-b border-gray-200">
                <h2 className="text-2xl font-semibold text-indigo-700 mb-4">7. Changes to Terms</h2>
                <p className="text-gray-600">
                  We may revise these terms at any time without prior notice. Continued use of the website means you accept the updated terms.
                </p>
              </div>

              {/* Contact */}
              <div className="policy-section opacity-100 -translate-y-5 transform transition-all duration-500 ease-in-out bg-indigo-50 p-6 md:p-8">
                <h2 className="text-2xl font-semibold text-indigo-700 mb-4">Contact Us</h2>
                <p className="text-gray-600 mb-4">
                  For any questions related to these Terms and Conditions, email us at:
                </p>
                <div className="mt-4 p-4 bg-white rounded-lg shadow-inner">
                  <p className="text-gray-700 font-medium">Email: support@englishshayari.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}