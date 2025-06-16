"use client"
import { useState, useRef, useEffect } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { BookOpen, Heart, Users, Star, Feather, PenLine, Sparkles, Quote, Bookmark, Share2 } from 'lucide-react';

export default function WriteShayari() {
  const [shayari, setShayari] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('love');
  const [selectedMood, setSelectedMood] = useState('romantic');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const textareaRef = useRef(null);

  // Color theme: #D9DFC6, #EFF3EA, #FFFDF0, #FFF2C2
  const categories = [
    { id: 'love', name: 'Love', emoji: '❤️', color: 'bg-[#FFF2C2]', textColor: 'text-amber-800' },
    { id: 'sad', name: 'Sad', emoji: '😢', color: 'bg-[#EFF3EA]', textColor: 'text-slate-700' },
    { id: 'friendship', name: 'Friendship', emoji: '👫', color: 'bg-[#D9DFC6]', textColor: 'text-green-800' },
    { id: 'motivational', name: 'Motivational', emoji: '💪', color: 'bg-[#FFFDF0]', textColor: 'text-amber-700' },
  ];

  const moods = {
    love: [
      { id: 'romantic', name: 'Romantic', emoji: '💘' },
      { id: 'passionate', name: 'Passionate', emoji: '🔥' },
      { id: 'longing', name: 'Longing', emoji: '🌙' },
      { id: 'devotional', name: 'Devotional', emoji: '🙏' },
    ],
    sad: [
      { id: 'heartbreak', name: 'Heartbreak', emoji: '💔' },
      { id: 'loneliness', name: 'Loneliness', emoji: '🏙️' },
      { id: 'pain', name: 'Pain', emoji: '💢' },
      { id: 'memories', name: 'Memories', emoji: '📸' },
    ],
    friendship: [
      { id: 'bonding', name: 'Bonding', emoji: '🤝' },
      { id: 'memories', name: 'Memories', emoji: '📚' },
      { id: 'support', name: 'Support', emoji: '🫂' },
      { id: 'distance', name: 'Distance', emoji: '✈️' },
    ],
    motivational: [
      { id: 'success', name: 'Success', emoji: '🏆' },
      { id: 'hardwork', name: 'Hard Work', emoji: '💪' },
      { id: 'dreams', name: 'Dreams', emoji: '✨' },
      { id: 'self-belief', name: 'Self-Belief', emoji: '👑' },
    ],
  };

  const popularTopics = [
    { name: "First Love", icon: Heart, count: "1.2K" },
    { name: "Broken Heart", icon: Heart, count: "980" },
    { name: "Best Friends", icon: Users, count: "750" },
    { name: "Life Lessons", icon: BookOpen, count: "1.5K" },
    { name: "Dream Big", icon: Star, count: "890" },
  ];

  const recentShayaris = [
    {
      text: "In your eyes, I found my home,\nA place where my heart will forever roam.",
      author: "Priya K.",
      likes: 124,
      category: "love"
    },
    {
      text: "The night whispers your name,\nBut only silence answers my pain.",
      author: "Rahul S.",
      likes: 89,
      category: "sad"
    },
    {
      text: "Together we stand, through thick and thin,\nA friendship that nothing can break within.",
      author: "Neha M.",
      likes: 156,
      category: "friendship"
    }
  ];

  useEffect(() => {
    // Auto-resize textarea as user types
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [shayari]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log({
        shayari,
        category: selectedCategory,
        mood: selectedMood
      });
      setIsSubmitting(false);
      setIsSuccess(true);
      setShayari('');
      
      // Reset success message after 3 seconds
      setTimeout(() => setIsSuccess(false), 3000);
    }, 1500);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#D9DFC6] via-[#EFF3EA] to-[#FFFDF0] py-12 px-4 sm:px-6 lg:px-8">
      <Head>
        <title>Write Shayari | Express Your Feelings</title>
        <meta name="description" content="Create beautiful shayaris and share your emotions" />
      </Head>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-6xl mt-16 mx-auto"
      >
        {/* Header Section */}
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-amber-800">
              Create Your Shayari
            </span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Pour your heart into beautiful words and share with a community that appreciates poetry
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Form Column */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-2"
          >
            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl border border-white">
              <div className="p-6 sm:p-8">
                <form onSubmit={handleSubmit}>
                  {/* Category Selection */}
                  <motion.div variants={itemVariants} className="mb-8">
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      {`What's your shayari about?`}
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {categories.map((category) => (
                        <motion.button
                          key={category.id}
                          type="button"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className={`flex flex-col items-center justify-center p-4 rounded-xl border-2 transition-all ${selectedCategory === category.id ? `border-amber-500 ${category.color} ${category.textColor} font-medium` : 'border-gray-200 hover:border-gray-300 bg-white'}`}
                          onClick={() => setSelectedCategory(category.id)}
                        >
                          <span className="text-2xl mb-1">{category.emoji}</span>
                          <span>{category.name}</span>
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>

                  {/* Mood Selection */}
                  <motion.div variants={itemVariants} className="mb-8">
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Select the mood
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {moods[selectedCategory].map((mood) => (
                        <motion.button
                          key={mood.id}
                          type="button"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className={`flex items-center justify-center p-3 rounded-xl border-2 transition-all ${selectedMood === mood.id ? 'border-amber-500 bg-amber-50 text-amber-800 font-medium' : 'border-gray-200 hover:border-gray-300 bg-white'}`}
                          onClick={() => setSelectedMood(mood.id)}
                        >
                          <span className="mr-2 text-lg">{mood.emoji}</span>
                          <span>{mood.name}</span>
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>

                  {/* Shayari Textarea */}
                  <motion.div variants={itemVariants} className="mb-8">
                    <label htmlFor="shayari" className="block text-sm font-medium text-gray-700 mb-3">
                      Your Beautiful Words
                    </label>
                    <div className="relative">
                      <textarea
                        ref={textareaRef}
                        id="shayari"
                        name="shayari"
                        rows="4"
                        value={shayari}
                        onChange={(e) => setShayari(e.target.value)}
                        className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-amber-500 focus:border-amber-500 resize-none transition-all duration-200 bg-white/80"
                        placeholder="Write from your heart..."
                        required
                      />
                      <div className="absolute bottom-2 right-2 text-xs text-gray-500 bg-white/80 px-2 py-1 rounded">
                        {shayari.length}/500
                      </div>
                    </div>
                    <p className="mt-2 text-sm text-gray-500">
                      Tip: Use metaphors and emotions to make your shayari more impactful
                    </p>
                  </motion.div>

                  {/* Submit Button */}
                  <motion.div variants={itemVariants}>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-white font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all ${isSubmitting ? 'bg-amber-400' : 'bg-amber-600 hover:bg-amber-700 focus:ring-amber-500'}`}
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Publishing...
                        </>
                      ) : (
                        <>
                          <Feather className="h-5 w-5 mr-2" />
                          Publish Shayari
                        </>
                      )}
                    </button>
                  </motion.div>
                </form>
              </div>
            </div>

            {/* Writing Tips Section */}
            <motion.div 
              variants={itemVariants}
              className="mt-8 bg-[#FFFDF0] rounded-xl shadow-xl overflow-hidden border border-[#FFF2C2]"
            >
              <div className="p-6 sm:p-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  <PenLine className="h-5 w-5 mr-2 text-amber-600" />
                  Writing Tips for Beginners
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-amber-600 mr-2">•</span>
                    Start with a strong emotion you want to express
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 mr-2">•</span>
                    Use metaphors and nature imagery (moon, flowers, rivers)
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 mr-2">•</span>
                    Keep it concise - often 2-4 lines is most impactful
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 mr-2">•</span>
                    Read it aloud to check the rhythm and flow
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 mr-2">•</span>
                    {`Don't worry about perfection - authenticity matters most`}
                  </li>
                </ul>
              </div>
            </motion.div>
          </motion.div>

          {/* Sidebar Column */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Popular Topics */}
            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-xl overflow-hidden border border-white">
              <div className="p-6 sm:p-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  <Sparkles className="h-5 w-5 mr-2 text-amber-600" />
                  Popular Topics
                </h3>
                <div className="space-y-3">
                  {popularTopics.map((topic, index) => (
                    <motion.div 
                      key={index}
                      whileHover={{ x: 5 }}
                      className="flex items-center justify-between p-3 rounded-lg hover:bg-[#FFF2C2]/30 cursor-pointer transition-colors"
                    >
                      <div className="flex items-center">
                        <topic.icon className={`h-5 w-5 mr-3 ${topic.icon === Heart ? 'text-red-400' : topic.icon === Users ? 'text-blue-400' : 'text-amber-400'}`} />
                        <span className="font-medium text-gray-700">{topic.name}</span>
                      </div>
                      <span className="text-sm text-gray-500">{topic.count}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Recent Shayaris */}
            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-xl overflow-hidden border border-white">
              <div className="p-6 sm:p-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  <BookOpen className="h-5 w-5 mr-2 text-amber-600" />
                  Recently Shared
                </h3>
                <div className="space-y-5">
                  {recentShayaris.map((shayari, index) => (
                    <motion.div 
                      key={index}
                      whileHover={{ y: -2 }}
                      className="p-4 rounded-lg border border-gray-200 bg-white cursor-pointer transition-all"
                    >
                      <p className="text-gray-800 italic mb-3 whitespace-pre-line">
                        {shayari.text}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-amber-700">— {shayari.author}</span>
                        <div className="flex items-center space-x-3">
                          <span className="flex items-center text-sm text-gray-500">
                            <Heart className="h-4 w-4 mr-1 text-red-400" />
                            {shayari.likes}
                          </span>
                          <span className={`text-xs px-2 py-1 rounded-full ${shayari.category === 'love' ? 'bg-pink-100 text-pink-800' : shayari.category === 'sad' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'}`}>
                            {shayari.category}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Community Stats */}
            <div className="bg-[#FFF2C2]/50 rounded-xl shadow-xl overflow-hidden border border-[#FFF2C2]">
              <div className="p-6 sm:p-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  <Users className="h-5 w-5 mr-2 text-amber-600" />
                  Community Highlights
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/80 p-4 rounded-lg text-center border border-white">
                    <div className="text-2xl font-bold text-amber-700">10K+</div>
                    <div className="text-sm text-gray-600">Shayaris</div>
                  </div>
                  <div className="bg-white/80 p-4 rounded-lg text-center border border-white">
                    <div className="text-2xl font-bold text-amber-700">3.5K</div>
                    <div className="text-sm text-gray-600">Poets</div>
                  </div>
                  <div className="bg-white/80 p-4 rounded-lg text-center border border-white">
                    <div className="text-2xl font-bold text-amber-700">50K</div>
                    <div className="text-sm text-gray-600">Readers</div>
                  </div>
                  <div className="bg-white/80 p-4 rounded-lg text-center border border-white">
                    <div className="text-2xl font-bold text-amber-700">25+</div>
                    <div className="text-sm text-gray-600">Categories</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Success Message */}
        {isSuccess && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed bottom-6 right-6"
          >
            <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded-lg shadow-lg flex items-center">
              <svg className="h-6 w-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>Your shayari has been published successfully!</span>
            </div>
          </motion.div>
        )}

        {/* Decorative Elements */}
        <motion.div 
          className="fixed top-20 left-10 w-32 h-32 bg-[#D9DFC6] rounded-full blur-3xl opacity-30 -z-10"
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
          }}
        />
        <motion.div 
          className="fixed bottom-20 right-10 w-40 h-40 bg-[#FFF2C2] rounded-full blur-3xl opacity-30 -z-10"
          animate={{
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
        />
      </motion.div>
    </div>
  );
}