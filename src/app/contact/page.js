"use client"
import { useState } from 'react';
import Head from 'next/head';
import { Mail, Phone, MapPin, Heart, Share2, Bookmark, ChevronRight, Instagram, Facebook, Twitter } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#D9DFC6] via-[#EFF3EA] to-[#FFFDF0]">
      <Head>
        <title>Contact Us | English Shayari</title>
        <meta name="description" content="Get in touch with English Shayari team for feedback, suggestions or collaborations" />
      </Head>

      {/* Floating decorative elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div 
            key={i}
            className="absolute text-[#FFF2C2] text-4xl opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg)`
            }}
          >
            ✍️
          </div>
        ))}
      </div>

      <div className="relative z-10">
        {/* Main Content */}
        <main className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mt-16 mb-16">
              <div className="inline-flex items-center bg-[#FFF2C2] rounded-full px-6 py-3 mb-6">
                <Heart className="h-5 w-5 text-amber-600 mr-2 fill-amber-600" />
                <span className="text-amber-800 font-medium">Connect With Us</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                {`Get in Touch – We'd Love to Connect with You`}
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                At English Shayari, we believe that poetry connects hearts, and now we want to connect with you!
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-[#EFF3EA]">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                  Send Your Message
                </h2>
                
                <p className="text-gray-600 mb-6">
                  {`Whether you're a reader, a writer, or just someone who came across a line or verse that touched you, 
                  we want to hear from you. Your voice is important to us, and we welcome all your thoughts, 
                  feedback, and stories of how we may or may not have impacted your day.`}
                </p>
                
                {submitSuccess && (
                  <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                    <p>{`Thank you for your message! We'll get back to you within 24-48 hours.`}</p>
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="mb-6">
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-[#D9DFC6] focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-200 bg-white/50"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div className="mb-6">
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-[#D9DFC6] focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-200 bg-white/50"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div className="mb-8">
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-[#D9DFC6] focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-200 bg-white/50"
                      placeholder="Do you have a suggestion? Are you looking to report an issue or want to work together?"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-white shadow-lg transition-all duration-300 ${
                      isSubmitting 
                        ? 'bg-amber-400 cursor-not-allowed' 
                        : 'bg-gradient-to-r from-amber-500 to-amber-700 hover:shadow-xl hover:from-amber-600 hover:to-amber-800'
                    }`}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </div>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-[#EFF3EA]">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                    Contact Details
                  </h2>

                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 bg-[#FFF2C2] p-3 rounded-full">
                        <Mail className="h-6 w-6 text-amber-600" />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-gray-800">Email Us</h3>
                        <p className="text-gray-600 mt-1">contact@englishshayari.com</p>
                        <p className="text-gray-600">submit@englishshayari.com (for submissions)</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 bg-[#FFF2C2] p-3 rounded-full">
                        <Phone className="h-6 w-6 text-amber-600" />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-gray-800">Call Us</h3>
                        <p className="text-gray-600 mt-1">+91 98765 43210</p>
                        <p className="text-gray-600">Mon-Fri, 10am-6pm</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 bg-[#FFF2C2] p-3 rounded-full">
                        <MapPin className="h-6 w-6 text-amber-600" />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-gray-800">Visit Us</h3>
                        <p className="text-gray-600 mt-1">123 Poetry Lane</p>
                        <p className="text-gray-600">Creative City, CC 123456</p>
                        <p className="text-gray-600">India</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Submit Shayari Section */}
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-[#EFF3EA]">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                    Submit Your Shayari 
                  </h2>
                  <p className="text-gray-600 mb-4">
                    {`Do you have an interest in poetry, whether you're starting out or already experienced? 
                    Are you writing English Shayari and want to share it with the world? We're constantly 
                    looking for new, interesting voices.`}
                  </p>
                  <p className="text-gray-600 mb-6">
                    {`Send us your original poetry, and if it fits the style and tone of the website, 
                    we're happy to publish it with credit to you.`}
                  </p>
                  
                  <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mb-6">
                    <p className="font-medium text-gray-800">Submission Email: submit@englishshayari.com</p>
                    <p className="text-gray-600 text-sm mt-1">
                      (Please provide your name, links to social media or website, and a bio.)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media Section */}
            <div className="mt-16 bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-[#EFF3EA]">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
                Follow & Connect
              </h2>
              <p className="text-xl text-gray-600 mb-8 text-center max-w-3xl mx-auto">
                We would love to have you join our community on social media and continue to 
                share Shayari and get unique updates on Shayari that readers love!
              </p>
              
              <div className="flex justify-center gap-8">
                <a href="#" className="flex flex-col items-center group">
                  <div className="bg-[#FFF2C2] p-4 rounded-full group-hover:bg-amber-100 transition-colors">
                    <Instagram className="h-8 w-8 text-amber-600" />
                  </div>
                  <span className="mt-2 font-medium text-gray-700">@englishshayariofficial</span>
                </a>
                
                <a href="#" className="flex flex-col items-center group">
                  <div className="bg-[#FFF2C2] p-4 rounded-full group-hover:bg-amber-100 transition-colors">
                    <Facebook className="h-8 w-8 text-amber-600" />
                  </div>
                  <span className="mt-2 font-medium text-gray-700">English Shayari</span>
                </a>
                
                <a href="#" className="flex flex-col items-center group">
                  <div className="bg-[#FFF2C2] p-4 rounded-full group-hover:bg-amber-100 transition-colors">
                    <Twitter className="h-8 w-8 text-amber-600" />
                  </div>
                  <span className="mt-2 font-medium text-gray-700">@englishshayari</span>
                </a>
              </div>
              
              <p className="text-center text-gray-600 mt-12 text-xl">
                {`Let's remain connected and keep the poetry flowing!`}
              </p>
            </div>

            {/* Community Section */}
            <div className="mt-24 bg-gradient-to-r from-[#FFF2C2] to-[#D9DFC6] rounded-2xl p-8 md:p-12 shadow-lg">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                  Join Our Shayari Community
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  Connect with fellow poetry lovers, participate in discussions, and get featured on our platform
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <button className="px-8 py-3 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-full transition-colors">
                    Become a Member
                  </button>
                  <button className="px-8 py-3 bg-white text-amber-700 hover:bg-gray-50 font-medium rounded-full transition-colors border border-amber-600">
                    Attend Events
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ContactPage;