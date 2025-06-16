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
        <title>Privacy Policy | Your Website</title>
        <meta name="description" content="Read our privacy policy to understand how we collect and use your information." />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mt-16 mx-auto">
          {/* Animated Header */}
          <div className="policy-section  opacity-0 -translate-y-5 transform transition-all duration-500 ease-in-out mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-indigo-800 mb-4 animate-pulse">
              Privacy Policy
            </h1>
            <p className="text-lg text-gray-600">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          {/* Policy Content */}
          <div className="bg-white rounded-xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl">
            {/* Introduction */}
            <div className="policy-section opacity-0 -translate-y-5 transform transition-all duration-500 ease-in-out p-6 md:p-8 border-b border-gray-200">
              <h2 className="text-2xl font-semibold text-indigo-700 mb-4">Introduction</h2>
              <p className="text-gray-600 mb-4">
                Welcome to our website. We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
              </p>
              <p className="text-gray-600">
                Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
              </p>
            </div>

            {/* Information Collection */}
            <div className="policy-section opacity-0 -translate-y-5 transform transition-all duration-500 ease-in-out p-6 md:p-8 border-b border-gray-200">
              <h2 className="text-2xl font-semibold text-indigo-700 mb-4">Information We Collect</h2>
              <p className="text-gray-600 mb-4">
                We may collect information about you in a variety of ways. The information we may collect on the site includes:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>
                  <span className="font-medium">Personal Data:</span> Personally identifiable information, such as your name, email address, and telephone number, that you voluntarily give to us when you register or contact us.
                </li>
                <li>
                  <span className="font-medium">Derivative Data:</span> Information our servers automatically collect when you access the site, such as your IP address, browser type, operating system, access times, and the pages you have viewed.
                </li>
                <li>
                  <span className="font-medium">Cookies:</span> We may use cookies and similar tracking technologies to track activity on our site and hold certain information.
                </li>
              </ul>
            </div>

            {/* Use of Information */}
            <div className="policy-section opacity-0 -translate-y-5 transform transition-all duration-500 ease-in-out p-6 md:p-8 border-b border-gray-200">
              <h2 className="text-2xl font-semibold text-indigo-700 mb-4">Use of Your Information</h2>
              <p className="text-gray-600 mb-4">
                Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the site to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Create and manage your account</li>
                <li>Process your transactions and send you related information</li>
                <li>Improve our website and user experience</li>
                <li>Send you promotional communications</li>
                <li>Respond to your inquiries and offer support</li>
                <li>Monitor and analyze usage and trends</li>
                <li>Prevent fraudulent transactions and monitor against theft</li>
              </ul>
            </div>

            {/* Disclosure of Information */}
            <div className="policy-section opacity-0 -translate-y-5 transform transition-all duration-500 ease-in-out p-6 md:p-8 border-b border-gray-200">
              <h2 className="text-2xl font-semibold text-indigo-700 mb-4">Disclosure of Your Information</h2>
              <p className="text-gray-600 mb-4">
                We may share information we have collected about you in certain situations. Your information may be disclosed as follows:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>
                  <span className="font-medium">{`By Law or to Protect Rights:</span> If we believe the release of information is necessary to comply with the law or to protect our rights or others' rights.`}</span>
                </li>
                <li>
                  <span className="font-medium">Third-Party Service Providers:</span> We may share your information with third parties that perform services for us or on our behalf.
                </li>
                <li>
                  <span className="font-medium">Business Transfers:</span> We may share or transfer your information in connection with a merger or sale of assets.
                </li>
              </ul>
            </div>

            {/* Security */}
            <div className="policy-section opacity-0 -translate-y-5 transform transition-all duration-500 ease-in-out p-6 md:p-8 border-b border-gray-200">
              <h2 className="text-2xl font-semibold text-indigo-700 mb-4">Security of Your Information</h2>
              <p className="text-gray-600 mb-4">
                We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable.
              </p>
              <p className="text-gray-600">
                It is important that you protect against unauthorized access to your password and to your computer. Be sure to sign off when finished using a shared computer.
              </p>
            </div>

            {/* Policy Changes */}
            <div className="policy-section opacity-0 -translate-y-5 transform transition-all duration-500 ease-in-out p-6 md:p-8">
              <h2 className="text-2xl font-semibold text-indigo-700 mb-4">Changes to This Privacy Policy</h2>
              <p className="text-gray-600 mb-4">
                We may update this Privacy Policy from time to time in order to reflect changes to our practices or for other operational, legal, or regulatory reasons. We will notify you of any changes by posting the new Privacy Policy on this page.
              </p>
              <p className="text-gray-600">
                You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
              </p>
            </div>

            {/* Contact */}
            <div className="policy-section opacity-0 -translate-y-5 transform transition-all duration-500 ease-in-out bg-indigo-50 p-6 md:p-8">
              <h2 className="text-2xl font-semibold text-indigo-700 mb-4">Contact Us</h2>
              <p className="text-gray-600">
                If you have questions or comments about this Privacy Policy, please contact us at:
              </p>
              <div className="mt-4 p-4 bg-white rounded-lg shadow-inner">
                <p className="text-gray-700 font-medium">Email: privacy@yourwebsite.com</p>
                <p className="text-gray-700 font-medium">Phone: (123) 456-7890</p>
                <p className="text-gray-700 font-medium">Address: 123 Privacy Lane, Security City, SC 12345</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}