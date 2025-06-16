"use client"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { Heart, BookOpen, Feather, Star, Quote, Users, Eye, ArrowRight, Sparkles, PenLine, Search } from "lucide-react"
import Link from "next/link"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

const featuredShayaris = [
  {
    id: 1,
    text: "The way of expressing heart's feelings is different,\nIn love, every secret has its own charm.",
    author: "Amit Sharma",
    category: "Love",
    likes: 1250,
    views: 5420,
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop",
  },
  {
    id: 2,
    text: "In life's journey there are some moments,\nThat stay in memories and always bring happiness.",
    author: "Priya Gupta",
    category: "Life",
    likes: 980,
    views: 3210,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
  },
  {
    id: 3,
    text: "The bond of friendship is something else,\nHere hearts connect with hearts.",
    author: "Rahul Verma",
    category: "Friendship",
    likes: 1580,
    views: 4890,
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800&h=600&fit=crop",
  },
  {
    id: 4,
    text: "Love is not about possession,\nIt's about appreciation without condition.",
    author: "Neha Kapoor",
    category: "Romantic",
    likes: 2100,
    views: 7500,
    image: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=800&h=600&fit=crop",
  },
  {
    id: 5,
    text: "When words fail, poetry speaks,\nIn verses unspoken, the heart finds its peaks.",
    author: "Arjun Patel",
    category: "Poetry",
    likes: 1870,
    views: 6200,
    image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=800&h=600&fit=crop",
  },
  {
    id: 6,
    text: "The moon whispers to the lonely night,\nAs my pen dances with poetic light.",
    author: "Sanya Malhotra",
    category: "Nature",
    likes: 1430,
    views: 5100,
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=600&fit=crop",
  },
]

const categories = [
  { name: "Love", icon: Heart, count: 1250, color: "from-pink-500 to-red-500", emoji: "💕", href: "/love" },
  { name: "Life", icon: BookOpen, count: 890, color: "from-blue-500 to-cyan-500", emoji: "🌟", href: "/life" },
  { name: "Friendship", icon: Users, count: 650, color: "from-green-500 to-emerald-500", emoji: "🤝", href: "/friendship" },
  { name: "Motivational", icon: Star, count: 720, color: "from-yellow-500 to-orange-500", emoji: "💪", href: "/motivational" },
  { name: "Sad", icon: Quote, count: 540, color: "from-gray-500 to-slate-600", emoji: "😢", href: "/sad" },
  { name: "Romantic", icon: Sparkles, count: 980, color: "from-purple-500 to-pink-500", emoji: "🌹", href: "/romantic" },
]

const stats = [
  { label: "Total Shayaris", value: "10K+", icon: "📝" },
  { label: "Active Poets", value: "2.5K+", icon: "✍️" },
  { label: "Daily Readers", value: "50K+", icon: "👥" },
  { label: "Categories", value: "25+", icon: "📚" },
]

const topPoets = [
  {
    name: "Mirza Ghalib",
    image: "https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?w=500&h=500&fit=crop",
    followers: "1.2M",
    shayaris: 320
  },
  {
    name: "Rahat Indori",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop",
    followers: "980K",
    shayaris: 280
  },
  {
    name: "Faiz Ahmed Faiz",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&h=500&fit=crop",
    followers: "850K",
    shayaris: 250
  },
  {
    name: "Amrita Pritam",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&h=500&fit=crop",
    followers: "720K",
    shayaris: 210
  }
]

export default function ShayariHomePage() {
  const [currentShayari, setCurrentShayari] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentShayari((prev) => (prev + 1) % featuredShayaris.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFDCDC] via-[#FFF2EB] to-[#FFE8CD] relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Poetry Text Elements */}
        {["Poetry", "Love", "Friendship", "Life", "Happiness", "Dreams"].map((text, i) => (
          <motion.div
            key={i}
            className="absolute text-6xl font-bold text-[#FFD6BA]/20 select-none"
            animate={{
              y: [0, -30, 0],
              x: [0, Math.sin(i) * 20, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 3,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            {text}
          </motion.div>
        ))}

        {/* Floating Hearts and Stars */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-2xl opacity-20"
            animate={{
              y: [0, -100, 0],
              x: [0, Math.sin(i) * 30, 0],
              rotate: [0, 360],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 6 + Math.random() * 3,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 4,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            {["💖", "⭐", "🌙", "✨", "🌹", "📝"][Math.floor(Math.random() * 6)]}
          </motion.div>
        ))}

        {/* Gradient Orbs */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-[#FFDCDC] to-[#FFE8CD] rounded-full blur-3xl opacity-40"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-[#FFE8CD] to-[#FFD6BA] rounded-full blur-3xl opacity-40"
        />
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <motion.section
          className="min-h-screen flex items-center justify-center px-4 py-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              className="text-center lg:text-left"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div
                variants={itemVariants}
                className="inline-flex items-center bg-gradient-to-r from-[#FFE8CD] to-[#FFD6BA] rounded-full px-6 py-3 mb-6"
              >
                <Feather className="h-5 w-5 text-orange-600 mr-2" />
                <span className="text-orange-800 font-medium">Welcome to Poetry World</span>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-5xl md:text-7xl font-bold mb-6"
              >
                <span className="bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent">
                  Heart's Voice
                </span>
                <br />
                <span className="text-gray-800">In Poetry</span>
              </motion.h1>

              <motion.p variants={itemVariants} className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl">
                Discover the most beautiful collection of Poetry and Shayari. Express your
                emotions through the power of words.
              </motion.p>

              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mb-12">
                <motion.button
                  className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold py-4 px-8 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <BookOpen className="h-5 w-5 mr-2" />
                  Explore Poetry
                </motion.button>
                <motion.button
                  className="bg-white hover:bg-gray-50 text-gray-800 font-semibold py-4 px-8 rounded-full flex items-center justify-center border-2 border-gray-200 hover:border-orange-300 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <PenLine className="h-5 w-5 mr-2" />
                  Write Your Own
                </motion.button>
              </motion.div>

              {/* Stats */}
              <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <motion.div key={stat.label} className="text-center" whileHover={{ scale: 1.05 }}>
                    <div className="text-3xl mb-2">{stat.icon}</div>
                    <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Content - Featured Shayari Carousel */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/50">
                <motion.div
                  key={currentShayari}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-center"
                >
                  <div className="relative mb-6">
                    <Quote className="h-8 w-8 text-orange-400 mx-auto mb-4" />
                    <p
                      className="text-2xl md:text-3xl font-medium text-gray-800 leading-relaxed mb-6 italic"
                    >
                      {featuredShayaris[currentShayari].text}
                    </p>
                    <div className="flex items-center justify-center space-x-4 text-sm text-gray-600 mb-4">
                      <span className="flex items-center">
                        <Heart className="h-4 w-4 mr-1 text-red-500" />
                        {featuredShayaris[currentShayari].likes}
                      </span>
                      <span className="flex items-center">
                        <Eye className="h-4 w-4 mr-1 text-blue-500" />
                        {featuredShayaris[currentShayari].views}
                      </span>
                    </div>
                    <div className="text-orange-600 font-semibold">- {featuredShayaris[currentShayari].author}</div>
                  </div>
                </motion.div>

                {/* Carousel Indicators */}
                <div className="flex justify-center space-x-2 mt-6">
                  {featuredShayaris.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentShayari(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentShayari ? "bg-orange-500 w-8" : "bg-gray-300 hover:bg-gray-400"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Categories Section */}
        <motion.section
          className="py-20 px-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="max-w-7xl mx-auto">
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Explore Categories</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover poetry for every emotion and occasion
              </p>
            </motion.div>

            <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" variants={containerVariants}>
              {categories.map((category, index) => (
                <motion.div
                  key={category.name}
                  variants={itemVariants}
                  className="group cursor-pointer"
                  whileHover={{ y: -10 }}
                >
                  <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/50 overflow-hidden">
                    {/* Background Gradient */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                    />

                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-6">
                        <div className={`bg-gradient-to-r ${category.color} p-4 rounded-2xl`}>
                          <category.icon className="h-8 w-8 text-white" />
                        </div>
                        <div className="text-4xl">{category.emoji}</div>
                      </div>

                      <h3 className="text-2xl font-bold text-gray-800 mb-2">{category.name}</h3>
                      <p className="text-gray-600 mb-4">{category.count} Poems</p>
                      <Link key={category.name} href={category.href}>
                        <motion.div
                          className="flex items-center text-orange-600 font-semibold group-hover:text-orange-700"
                          whileHover={{ x: 5 }}
                        >
                          <span>Explore</span>
                          <ArrowRight className="h-4 w-4 ml-2" />
                        </motion.div>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Featured Poetry Grid */}
        <motion.section
          className="py-20 px-4 bg-gradient-to-r from-[#FFF2EB] to-[#FFE8CD]"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="max-w-7xl mx-auto">
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Featured Poetry</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Handpicked collection of the most loved poems by our community
              </p>
            </motion.div>

            <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" variants={containerVariants}>
              {featuredShayaris.map((shayari, index) => (
                <motion.div
                  key={shayari.id}
                  variants={itemVariants}
                  className="group cursor-pointer"
                  whileHover={{ y: -5 }}
                >
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/50">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={shayari.image}
                        alt={shayari.category}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute top-4 left-4">
                        <span className="bg-white/90 text-gray-800 px-3 py-1 rounded-full text-sm font-semibold">
                          {shayari.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <p
                        className="text-lg font-medium text-gray-800 leading-relaxed mb-4 italic"
                      >
                        {shayari.text.split("\n")[0]}...
                      </p>

                      <div className="flex items-center justify-between">
                        <span className="text-orange-600 font-semibold">- {shayari.author}</span>
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <span className="flex items-center">
                            <Heart className="h-4 w-4 mr-1 text-red-500" />
                            {shayari.likes}
                          </span>
                          <span className="flex items-center">
                            <Eye className="h-4 w-4 mr-1 text-blue-500" />
                            {shayari.views}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={itemVariants} className="text-center mt-12">
              <Link href="/all-poetry">
                <motion.button
                  className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View All Poetry
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </motion.section>

        {/* Top Poets Section */}
        <motion.section
          className="py-20 px-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="max-w-7xl mx-auto">
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Our Legendary Poets</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover the masters who shaped poetic expression
              </p>
            </motion.div>

            <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" variants={containerVariants}>
              {topPoets.map((poet, index) => (
                <motion.div
                  key={poet.name}
                  variants={itemVariants}
                  className="group cursor-pointer"
                  whileHover={{ y: -5 }}
                >
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/50">
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={poet.image}
                        alt={poet.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{poet.name}</h3>
                      <div className="flex justify-between text-sm text-gray-600 mb-4">
                        <span className="flex items-center">
                          <Users className="h-4 w-4 mr-1" />
                          {poet.followers} followers
                        </span>
                        <span className="flex items-center">
                          <PenLine className="h-4 w-4 mr-1" />
                          {poet.shayaris} poems
                        </span>
                      </div>
                      <Link href={`/poets/${poet.name.toLowerCase().replace(' ', '-')}`}>
                        <motion.button
                          className="w-full py-2 bg-gradient-to-r from-orange-100 to-red-100 text-orange-600 font-medium rounded-full transition-all duration-300"
                          whileHover={{ scale: 1.02 }}
                        >
                          View Profile
                        </motion.button>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Search Poetry Section */}
        <motion.section
          className="py-20 px-4 bg-gradient-to-r from-[#FFDCDC] to-[#FFE8CD]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-12 shadow-2xl text-center">
              <div className="text-5xl mb-6">🔍</div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Find Your Perfect Poem</h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Search through thousands of poems by mood, theme, or keywords
              </p>
              
              <div className="relative max-w-xl mx-auto">
                <input
                  type="text"
                  placeholder="Search for love, life, sadness..."
                  className="w-full p-4 pl-12 rounded-full bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent shadow-lg"
                />
                <Search className="h-5 w-5 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2" />
                <motion.button
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold py-2 px-6 rounded-full"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Search
                </motion.button>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.section
          className="py-20 px-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-[#FFD6BA] to-[#FFE8CD] rounded-3xl p-12 text-gray-800 relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                {[...Array(20)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute text-6xl"
                    animate={{
                      rotate: [0, 360],
                      scale: [0.8, 1.2, 0.8],
                    }}
                    transition={{
                      duration: 10 + Math.random() * 5,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: Math.random() * 3,
                    }}
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                  >
                    ✨
                  </motion.div>
                ))}
              </div>

              <div className="relative z-10">
                <motion.h2
                  className="text-4xl md:text-5xl font-bold mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  Share Your Poetry
                </motion.h2>
                <motion.p
                  className="text-xl mb-8 opacity-90"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  Join thousands of poets and share your beautiful creations with the world
                </motion.p>

                <Link href="/write-poetry">
                  <motion.button
                    className="bg-white text-orange-600 font-semibold py-4 px-8 rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <Feather className="h-5 w-5 mr-2 inline" />
                    Start Writing Today
                  </motion.button>
                </Link>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  )
}