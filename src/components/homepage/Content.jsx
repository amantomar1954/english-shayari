"use client";

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const EnglishShayari = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const shayariCategories = [
    {
      title: "Love",
      description: "Because nothing compares to that feeling expressed through poetry.",
      icon: "❤️"
    },
    {
      title: "Heartbreak",
      description: "Healing takes time, and sometimes the right words are the best therapy.",
      icon: "💔"
    },
    {
      title: "Friendship",
      description: "The kind of friendships that deserve an ode or verse.",
      icon: "👫"
    },
    {
      title: "Motivation",
      description: "Inspiring lines that feed your soul and ignite your passion.",
      icon: "🔥"
    },
    {
      title: "Loneliness",
      description: "Company in words when it's quiet and you feel alone.",
      icon: "🌙"
    }
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="bg-gradient-to-br from-purple-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {isVisible && (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <motion.h1 
              className="text-4xl md:text-5xl font-bold text-purple-900 mb-4"
              whileHover={{ scale: 1.02 }}
            >
              Welcome to <span className="text-blue-600">English Shayari</span>
            </motion.h1>
            <motion.p 
              className="text-lg text-gray-700 max-w-3xl mx-auto"
              whileHover={{ scale: 1.01 }}
            >
              Where you can turn your feelings into words that dance on the tip of every syllable.
            </motion.p>
          </motion.div>
        )}

        

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          <motion.div 
            variants={fadeInUp}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
          >
            <h3 className="text-xl font-bold text-purple-800 mb-2">Why English Shayari?</h3>
            <p className="text-gray-700">
              Shayari is a beautiful way to express love, pain, joy, longing - but for many, it's lost in translation. We bridge that gap with the classic vehicle of poetic expression in the simplicity of English.
            </p>
          </motion.div>

          <motion.div 
            variants={fadeInUp}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
          >
            <h3 className="text-xl font-bold text-purple-800 mb-2">Original & Meaningful</h3>
            <p className="text-gray-700">
              Each piece is crafted to remember moments that often go unheard. Our writers understand poetry is about emotion - silent tears, stolen glances, sleepless nights, and unspent dreams.
            </p>
          </motion.div>

          <motion.div 
            variants={fadeInUp}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
          >
            <h3 className="text-xl font-bold text-purple-800 mb-2">Ideal for Sharing</h3>
            <p className="text-gray-700">
              Perfect quotes for Instagram, WhatsApp status, or conveying special messages. Whether romantic, apologetic, or about inner strength, we help you say what matters most.
            </p>
          </motion.div>
        </motion.div>

        <motion.h2 
          className="text-3xl font-bold text-center text-purple-900 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Shayari for Every Emotion
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
          {shayariCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all cursor-pointer"
            >
              <div className="text-4xl mb-3">{category.icon}</div>
              <h3 className="text-lg font-bold text-purple-800">{category.title}</h3>
              <p className="text-gray-600 text-sm mt-2">{category.description}</p>
            </motion.div>
          ))}
        </div>

        {/* <motion.div 
          className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-8 text-white"
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ 
            repeat: Infinity,
            repeatType: "mirror",
            duration: 5
          }}
        >
          <h2 className="text-2xl font-bold mb-4">Discover, Express, and Embrace Emotions</h2>
          <p className="mb-6">
            Discover an entire universe that voices every emotion. Categories are always expanding with new content, so you'll always find fresh inspiration.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-purple-800 px-6 py-2 rounded-full font-semibold shadow-lg"
          >
            Join Our Community
          </motion.button>
        </motion.div> */}

       
      </div>
    </div>
  );
};

export default EnglishShayari;



