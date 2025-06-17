"use client"
import { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { Heart, Share2, Bookmark, ChevronLeft, ChevronRight, Calendar, Sparkles, PenTool, User, Search } from 'lucide-react';

// English Shayari data
const shayariData = [
  {
    text: "Paths from heart to heart always exist,\nWords of love remain unspoken in our midst,\nYour one smile makes my day complete,\nEvery heartbeat finds you in its beat.",
    author: "Anonymous",
    mood: "romantic",
    tags: ["love", "heart", "smile"]
  },
  {
    text: "In moonlight, your face I see,\nEvery star reflects your glee,\nLost in sweetness of your voice,\nEvery corner of my heart makes you its choice.",
    author: "Mirza Ghalib",
    mood: "devotional",
    tags: ["moonlight", "stars", "voice"]
  },
  {
    text: "In love, every moment tells a tale,\nWithout you, every second seems frail,\nYour laughter brings me peace so true,\nEvery song in my heart is about you.",
    author: "Rahat Indori",
    mood: "passionate",
    tags: ["moments", "laughter", "songs"]
  },
  {
    text: "Nights pass in memories of you,\nIn dreamland, you're all I view,\nDeep in heart your name resides,\nEvery breath with your love abides.",
    author: "Anonymous",
    mood: "longing",
    tags: ["memories", "dreams", "breath"]
  },
  {
    text: "Every moment with you shines bright,\nWithout you, my heart loses its light,\nEvery word with you feels so dear,\nYour love is all I want to hear.",
    author: "Anonymous",
    mood: "romantic",
    tags: ["moments", "heart", "love"]
  },
  {
    text: "Without you, everything feels incomplete,\nIn heart's depths, you take your seat,\nOne glance from you colors my world,\nIn every dream, your face is unfurled.",
    author: "Faiz Ahmed Faiz",
    mood: "passionate",
    tags: ["incomplete", "glance", "dreams"]
  },
  {
    text: "Your love is the poetry my heart writes,\nGuiding me through days and nights,\nLike stars that in the heavens glow,\nYour love is all I need to know.",
    author: "Anonymous",
    mood: "romantic",
    tags: ["poetry", "stars", "guidance"]
  },
  {
    text: "The garden of love blooms with care,\nFragrant flowers beyond compare,\nEach petal whispers your sweet name,\nOur love burns with eternal flame.",
    author: "Anonymous",
    mood: "devotional",
    tags: ["garden", "flowers", "eternal"]
  }
];

export default function Home() {
  const [currentShayari, setCurrentShayari] = useState(null);
  const [previousShayaris, setPreviousShayaris] = useState([]);
  const [featuredPoets, setFeaturedPoets] = useState([]);
  const [activeCategory, setActiveCategory] = useState("all");

  useEffect(() => {
    // Calculate Shayari index based on day of the year
    const today = new Date();
    const startOfYear = new Date(today.getFullYear(), 0, 0);
    const diff = today - startOfYear;
    const oneDay = 1000 * 60 * 60 * 24;
    const dayOfYear = Math.floor(diff / oneDay);
    const shayariIndex = dayOfYear % shayariData.length;
    setCurrentShayari(shayariData[shayariIndex]);

    // Get previous 3 Shayaris
    const prevIndices = [
      (shayariIndex - 1 + shayariData.length) % shayariData.length,
      (shayariIndex - 2 + shayariData.length) % shayariData.length,
      (shayariIndex - 3 + shayariData.length) % shayariData.length,
    ];
    setPreviousShayaris(prevIndices.map((index) => shayariData[index]));

    // Featured poets
    setFeaturedPoets([
      {
        name: "Mirza Ghalib",
        bio: "Master of romantic poetry",
        works: 320,
        image: "https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?w=200&h=200&fit=crop"
      },
      {
        name: "Rahat Indori",
        bio: "Contemporary poet with passionate verses",
        works: 280,
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop"
      },
      {
        name: "Faiz Ahmed Faiz",
        bio: "Revolutionary poet of love and justice",
        works: 250,
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop"
      }
    ]);

    // GSAP animations
    gsap.fromTo(
      '.shayari-card',
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }
    );
    gsap.fromTo(
      '.prev-shayari',
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 1, stagger: 0.2, ease: 'power2.out', delay: 0.5 }
    );
    gsap.fromTo(
      '.featured-poet',
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1, stagger: 0.2, delay: 1 }
    );
  }, []);

  const categories = [
    { id: "all", name: "All" },
    { id: "romantic", name: "Romantic" },
    { id: "passionate", name: "Passionate" },
    { id: "devotional", name: "Devotional" },
    { id: "longing", name: "Longing" }
  ];

  const filteredShayaris = activeCategory === "all" 
    ? shayariData 
    : shayariData.filter(shayari => shayari.mood === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#D9DFC6] via-[#EFF3EA] to-[#FFFDF0]">
      {/* Header */}
      {/* <header className="bg-[#FFF2C2] py-6 shadow-md">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-amber-800">Poetry Hub</h1>
          <div className="relative w-64">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search shayaris..." 
              className="w-full pl-10 pr-4 py-2 rounded-full border border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>
        </div>
      </header> */}

      {/* Hero Section */}
      <section className="py-12  bg-[#FFFDF0]">
        <div className="container mt-16 mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Daily Dose of Poetry</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover beautiful expressions of love, passion, and devotion through timeless verses
          </p>
        </div>
      </section>

      {/* Main Shayari Section */}
      <section className="py-12 bg-[#EFF3EA]">
        <div className="container mx-auto px-4">
          <div className="shayari-card bg-white rounded-xl shadow-lg p-8 max-w-3xl mx-auto text-center transform transition-all hover:shadow-xl">
            <div className="flex justify-center items-center mb-4">
              <Calendar className="text-amber-600 mr-2" />
              <span className="text-sm font-medium text-amber-700">{`Today's Featured Verse`}</span>
            </div>
            {currentShayari ? (
              <div>
                <p className="text-2xl text-gray-800 italic mb-6 leading-relaxed whitespace-pre-line">
                  {currentShayari.text}
                </p>
                <p className="text-lg text-amber-700 font-medium">— {currentShayari.author}</p>
                <div className="flex justify-center mt-6 space-x-4">
                  <button className="p-2 rounded-full bg-[#FFF2C2] text-amber-700 hover:bg-amber-100">
                    <Heart className="w-5 h-5" />
                  </button>
                  <button className="p-2 rounded-full bg-[#FFF2C2] text-amber-700 hover:bg-amber-100">
                    <Share2 className="w-5 h-5" />
                  </button>
                  <button className="p-2 rounded-full bg-[#FFF2C2] text-amber-700 hover:bg-amber-100">
                    <Bookmark className="w-5 h-5" />
                  </button>
                </div>
                <div className="mt-4 flex justify-center flex-wrap gap-2">
                  {currentShayari.tags.map((tag, index) => (
                    <span key={index} className="px-3 py-1 bg-[#D9DFC6] text-amber-800 rounded-full text-sm">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            ) : (
              <p className="text-lg text-gray-800">{`Loading today's verse...`}</p>
            )}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12 bg-[#FFFDF0]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Explore Categories</h2>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${activeCategory === category.id ? 'bg-gradient-to-r from-amber-500 to-amber-700 text-white' : 'bg-white text-gray-700 hover:bg-[#EFF3EA]'}`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Shayari Collection */}
      <section className="py-12 bg-[#EFF3EA]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Poetry Collection</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredShayaris.map((shayari, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all">
                <p className="text-lg text-gray-700 italic mb-4 leading-relaxed whitespace-pre-line">
                  {shayari.text}
                </p>
                <p className="text-sm text-amber-700 font-medium">— {shayari.author}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {shayari.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-2 py-1 bg-[#D9DFC6] text-amber-800 rounded-full text-xs">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Poets */}
      <section className="py-12 bg-[#FFFDF0]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Featured Poets</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredPoets.map((poet, index) => (
              <div key={index} className="featured-poet bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all">
                <img src={poet.image} alt={poet.name} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{poet.name}</h3>
                  <p className="text-gray-600 mb-4">{poet.bio}</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <PenTool className="w-4 h-4 mr-1" />
                    <span>{poet.works} works</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Previous Shayaris Section */}
      <section className="py-12 bg-[#EFF3EA]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Recent Verses</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {previousShayaris.map((shayari, index) => (
              <div
                key={index}
                className="prev-shayari bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all"
              >
                <p className="text-lg text-gray-700 italic mb-4 leading-relaxed whitespace-pre-line">
                  {shayari.text}
                </p>
                <p className="text-sm text-amber-700 font-medium">— {shayari.author}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {shayari.tags?.map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-2 py-1 bg-[#D9DFC6] text-amber-800 rounded-full text-xs">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-[#D9DFC6] to-[#FFF2C2]">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
            <Sparkles className="w-12 h-12 text-amber-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Start Your Poetry Journey</h2>
            <p className="text-lg text-gray-600 mb-6">
              Join our community of poetry lovers and share your own verses with the world
            </p>
            <button className="px-8 py-3 bg-gradient-to-r from-amber-500 to-amber-700 text-white font-medium rounded-full hover:from-amber-600 hover:to-amber-800 transition-all">
              Write Your First Verse
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
    
    </div>
  );
}