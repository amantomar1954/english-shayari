"use client"
import { motion } from 'framer-motion';
import { Heart, PenTool, BookOpen, Users, Star, ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';

const AboutPage = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Team members data
  const teamMembers = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Founder & Chief Poet",
      bio: "Award-winning poet with 15 years of experience in creative writing and poetry curation.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Technical Director",
      bio: "Passionate about blending technology with art to create immersive poetry experiences.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    },
    {
      id: 3,
      name: "Priya Patel",
      role: "Community Manager",
      bio: "Connects poets and readers through engaging events and interactive sessions.",
      image: "https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?w=400&h=400&fit=crop",
    }
  ];

  // Stats data
  const stats = [
    { id: 1, name: "Daily Readers", value: "10K+", icon: BookOpen },
    { id: 2, name: "Poems Shared", value: "50K+", icon: PenTool },
    { id: 3, name: "Community Members", value: "25K+", icon: Users },
    { id: 4, name: "Featured Poets", value: "500+", icon: Star }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#D9DFC6] via-[#EFF3EA] to-[#FFFDF0]">
      {/* Floating decorative elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-[#FFF2C2] text-4xl opacity-20"
            animate={{
              y: [0, -20, 0],
              x: [0, Math.sin(i) * 10, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            ✍️
          </motion.div>
        ))}
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <motion.section 
          className="py-24 px-4 sm:px-6 lg:px-8 text-center"
          initial="hidden"
          animate={isMounted ? "visible" : "hidden"}
          variants={fadeInVariants}
        >
          <div className="max-w-4xl mt-16 mx-auto">
            <motion.div 
              className="inline-flex items-center bg-[#FFF2C2] rounded-full px-6 py-3 mb-6"
              variants={itemVariants}
            >
              <Heart className="h-5 w-5 text-amber-600 mr-2 fill-amber-600" />
              <span className="text-amber-800 font-medium">About Us – English Shayari</span>
            </motion.div>
            <motion.h1 
              className="text-4xl md:text-5xl font-bold text-gray-800 mb-6"
              variants={itemVariants}
            >
              Celebrating the Art of <span className="text-amber-600">English Shayari</span>
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto"
              variants={itemVariants}
            >
              At English Shayari, we consider poetry the language of the soul-- transcending culture, age, and background. We created this platform for a single purpose: to allow the timeless art of Shayari to exist in the world of English so that emotions can flow freely towards the hearts of humans everywhere.
            </motion.p>
          </div>
        </motion.section>

        {/* Our Story Section */}
        <motion.section 
          className="py-16 px-4 sm:px-6 lg:px-8 bg-white/90 backdrop-blur-sm"
          initial="hidden"
          animate={isMounted ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <div className="max-w-6xl mx-auto">
            <motion.div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" variants={containerVariants}>
              <motion.div variants={itemVariants}>
                <img 
                  src="https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&h=600&fit=crop" 
                  alt="Poetry book and pen"
                  className="rounded-2xl shadow-xl w-full"
                />
              </motion.div>
              <motion.div variants={itemVariants}>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Who We Are</h2>
                <p className="text-gray-600 mb-4">
                  We are not a website. We are a group of poetry enthusiasts, creative thinkers and emotionally intuitive people who realise the importance of words. Shayari is not just a style of writing; it is a style of feeling and expressing feelings richly and beautifully. Shayari is traditionally rooted in Urdu and Hindi; however, we wanted to create a place for readers who think and feel in English while yearning for the lyrical, emotive way of Shayari.
                </p>
                <p className="text-gray-600 mb-6">
                  {`Today, we're proud to be one of the largest platforms dedicated to English Shayari, with thousands of poems and hundreds of featured poets. Our mission remains the same: to make poetry accessible, enjoyable, and relevant to modern readers.`}
                </p>
                <div className="space-y-4">
                  {[
                    "Daily featured poems",
                    "Weekly writing challenges",
                    "Monthly poet spotlights",
                    "Interactive poetry workshops"
                  ].map((item, index) => (
                    <motion.div 
                      key={index}
                      className="flex items-center"
                      variants={itemVariants}
                      whileHover={{ x: 5 }}
                    >
                      <ChevronRight className="h-5 w-5 text-amber-600 mr-2" />
                      <span className="text-gray-700">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Our Journey Section */}
        <motion.section 
          className="py-16 px-4 sm:px-6 lg:px-8 bg-[#EFF3EA]"
          initial="hidden"
          animate={isMounted ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <div className="max-w-6xl mx-auto">
            <motion.h2 
              className="text-3xl font-bold text-center text-gray-800 mb-12"
              variants={itemVariants}
            >
              Our Journey
            </motion.h2>
            <motion.div 
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              variants={containerVariants}
            >
              <motion.div variants={itemVariants}>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">How It All Began</h3>
                <p className="text-gray-600 mb-6">
                  We created English Shayari because we felt Shayari in spirit, but people who are interested in Shayari had difficulty accessing it because of the language. This enabled us to create a platform/website that combines the poetic and expressive qualities of Shayari with English.
                </p>
                <p className="text-gray-600 mb-6">
                  We started small with a few passionate verses, and before we knew it. People started reading our work because it spoke to people as readers rather than just writers. They needed to feel something, and we believe they found truth, solace and beauty in poetic expression.
                </p>
              </motion.div>
              <motion.div variants={itemVariants}>
                <img 
                  src="https://images.unsplash.com/photo-1518655048521-f130df041f66?w=800&h=600&fit=crop" 
                  alt="Writing journey"
                  className="rounded-2xl shadow-xl w-full"
                />
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* What Makes Us Unique Section */}
        <motion.section 
          className="py-16 px-4 sm:px-6 lg:px-8 bg-white/90 backdrop-blur-sm"
          initial="hidden"
          animate={isMounted ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <div className="max-w-6xl mx-auto">
            <motion.h2 
              className="text-3xl font-bold text-center text-gray-800 mb-12"
              variants={itemVariants}
            >
              What Makes Us Unique
            </motion.h2>
            <motion.div 
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              variants={containerVariants}
            >
              <motion.div variants={itemVariants}>
                <img 
                  src="https://images.unsplash.com/photo-1517842645767-c639042777db?w=800&h=600&fit=crop" 
                  alt="Unique poetry"
                  className="rounded-2xl shadow-xl w-full"
                />
              </motion.div>
              <motion.div variants={itemVariants}>
                <p className="text-gray-600 mb-6">
                  Many sites provide quotes and poetry; however, English Shayari focuses on one and only thing: emotion through elegant verse. Every piece we create intends to elicit a feeling, whether that be love, sorrow, nostalgia, or hope. We also put a lot of effort into creating original Shayari that is simple to read yet emotionally rich. 
                </p>
                <p className="text-gray-600 mb-6">
                  {`We do not copy in other languages or translate moments of Shayari. We create original pieces with stay true to the poetic tradition while speaking directly to the emotions of today's poets and readers in a modern way.`}
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Our Audience Section */}
        <motion.section 
          className="py-16 px-4 sm:px-6 lg:px-8 bg-[#FFF2C2]"
          initial="hidden"
          animate={isMounted ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <div className="max-w-6xl mx-auto">
            <motion.h2 
              className="text-3xl font-bold text-center text-gray-800 mb-6"
              variants={itemVariants}
            >
              Our Audience
            </motion.h2>
            <motion.p 
              className="text-xl text-center text-gray-600 mb-12 max-w-2xl mx-auto"
              variants={itemVariants}
            >
              Who finds connection through our poetry
            </motion.p>
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              variants={containerVariants}
            >
              <motion.div variants={itemVariants}>
                <p className="text-gray-600 mb-6">
                  Our readership consists of many different types of people: young people exploring their first loves, contemplative readers seeking inspiration, people processing a broken heart, and poets simply enjoying the art. What all of our readers have in common is their desire to connect with something more profound from reading.
                </p>
              </motion.div>
              <motion.div variants={itemVariants}>
                <img 
                  src="https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=800&h=600&fit=crop" 
                  alt="Diverse readers"
                  className="rounded-2xl shadow-xl w-full"
                />
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Looking Ahead Section */}
        <motion.section 
          className="py-16 px-4 sm:px-6 lg:px-8 bg-white/90 backdrop-blur-sm"
          initial="hidden"
          animate={isMounted ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <div className="max-w-6xl mx-auto">
            <motion.h2 
              className="text-3xl font-bold text-center text-gray-800 mb-6"
              variants={itemVariants}
            >
              Looking Ahead
            </motion.h2>
            <motion.p 
              className="text-xl text-center text-gray-600 mb-12 max-w-2xl mx-auto"
              variants={itemVariants}
            >
              Our vision for the future of English Shayari
            </motion.p>
            <motion.div 
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              variants={containerVariants}
            >
              <motion.div variants={itemVariants}>
                <p className="text-gray-600 mb-6">
                  {`As we continue to grow, we want to cultivate a community that embraces poetry and self-expression. We're hoping to introduce new writers, accept submissions, host contests, and introduce additional themes and categories.`}
                </p>
                <p className="text-gray-600 mb-6">
                  {`Whether you're here to find the perfect verse to complement your mood or to simply get lost in thoughtful reading, we appreciate your presence.`}
                </p>
                <p className="text-gray-600">
                  Thank you for being part of English Shayari, where feelings are always appreciated, and words are never disregarded.
                </p>
              </motion.div>
              <motion.div variants={itemVariants}>
                <img 
                  src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=800&h=600&fit=crop" 
                  alt="Future vision"
                  className="rounded-2xl shadow-xl w-full"
                />
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Stats Section */}
        <motion.section 
          className="py-16 px-4 sm:px-6 lg:px-8 bg-[#EFF3EA]"
          initial="hidden"
          animate={isMounted ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <div className="max-w-6xl mx-auto">
            <motion.h2 
              className="text-3xl font-bold text-center text-gray-800 mb-12"
              variants={itemVariants}
            >
              By The Numbers
            </motion.h2>
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
              variants={containerVariants}
            >
              {stats.map((stat) => (
                <motion.div 
                  key={stat.id}
                  className="bg-white rounded-2xl p-6 text-center shadow-lg"
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                >
                  <div className="bg-[#FFF2C2] p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="h-8 w-8 text-amber-600" />
                  </div>
                  <p className="text-4xl font-bold text-gray-800 mb-2">{stat.value}</p>
                  <p className="text-gray-600">{stat.name}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Team Section */}
        <motion.section 
          className="py-16 px-4 sm:px-6 lg:px-8 bg-white/90 backdrop-blur-sm"
          initial="hidden"
          animate={isMounted ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <div className="max-w-6xl mx-auto">
            <motion.h2 
              className="text-3xl font-bold text-center text-gray-800 mb-4"
              variants={itemVariants}
            >
              Meet Our Team
            </motion.h2>
            <motion.p 
              className="text-xl text-center text-gray-600 mb-12 max-w-2xl mx-auto"
              variants={itemVariants}
            >
              The passionate individuals behind Shayari World
            </motion.p>
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              variants={containerVariants}
            >
              {teamMembers.map((member) => (
                <motion.div 
                  key={member.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
                  variants={itemVariants}
                  whileHover={{ scale: 1.03 }}
                >
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
                    <p className="text-amber-600 font-medium mb-4">{member.role}</p>
                    <p className="text-gray-600">{member.bio}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Values Section */}
        <motion.section 
          className="py-16 px-4 sm:px-6 lg:px-8 bg-[#FFF2C2]"
          initial="hidden"
          animate={isMounted ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <div className="max-w-6xl mx-auto">
            <motion.h2 
              className="text-3xl font-bold text-center text-gray-800 mb-12"
              variants={itemVariants}
            >
              Our Core Values
            </motion.h2>
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              variants={containerVariants}
            >
              {[
                {
                  title: "Emotional Authenticity",
                  description: "We believe in creating poetry that comes from genuine emotion and speaks truth to the human experience.",
                  icon: <Heart className="h-8 w-8 text-amber-600 fill-amber-600" />
                },
                {
                  title: "Community",
                  description: "We believe poetry thrives in connection, fostering meaningful interactions between poets and readers.",
                  icon: <Users className="h-8 w-8 text-amber-600" />
                },
                {
                  title: "Innovation",
                  description: "We embrace new ways to experience and share poetry while honoring traditional forms.",
                  icon: <Star className="h-8 w-8 text-amber-600" />
                }
              ].map((value, index) => (
                <motion.div 
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-md"
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                >
                  <div className="bg-[#FFF2C2] p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section 
          className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#D9DFC6] to-[#FFF2C2]"
          initial="hidden"
          animate={isMounted ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-gray-800 mb-6"
              variants={itemVariants}
            >
              Ready to Begin Your Poetry Journey?
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
              variants={itemVariants}
            >
              Join thousands of poets and readers in our growing community.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row justify-center gap-4"
              variants={itemVariants}
            >
              <button className="px-8 py-3 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-full transition-colors">
                Share Your Poems
              </button>
              <button className="px-8 py-3 bg-white text-amber-700 hover:bg-gray-50 font-medium rounded-full transition-colors border border-amber-600">
                Explore Poems
              </button>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default AboutPage;