"use client";
import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

// Popular Shayari data in English
const shayariData = [
  {
    id: 1,
    text: "The paths from heart to heart always exist,\nThe words of love remain unspoken,\nYour one smile makes my day,\nIn every heartbeat, only you reside.",
    author: "Unknown",
    category: "Love",
  },
  {
    id: 2,
    text: "In the moonlight, I see your face,\nIn every star, your glow shines,\nI get lost in the sweetness of your words,\nEvery corner of my heart is adorned by you.",
    author: "Mirza Ghalib",
    category: "Romance",
  },
  {
    id: 3,
    text: "In love, every moment becomes a story,\nWithout you, every moment feels incomplete,\nThe sweetness of your laughter brings me peace,\nEvery song of my heart stops at you.",
    author: "Rahat Indori",
    category: "Love",
  },
  {
    id: 4,
    text: "Every night passes in your memory,\nIn the world of dreams, only you appear,\nYour name resides in the depths of my heart,\nEvery breath carries your essence.",
    author: "Unknown",
    category: "Memories",
  },
  {
    id: 5,
    text: "Every moment of life is bright because of you,\nWithout you, this heart is restless and sad,\nEvery moment with you feels precious,\nEvery moment carries only your love.",
    author: "Unknown",
    category: "Love",
  },
  {
    id: 6,
    text: "Without you, everything feels incomplete,\nYou reside in the depths of my heart,\nYour one glance makes the world colorful,\nIn every dream, only you appear.",
    author: "Faiz Ahmed Faiz",
    category: "Romance",
  },
  {
    id: 7,
    text: "Your name is written in the book of my heart,\nOn every page, only your reflection is visible,\nWithout you, this life seems colorless,\nYou bring color to every moment.",
    author: "Unknown",
    category: "Love",
  },
  {
    id: 8,
    text: "Even in silence, I hear your words,\nYour memories live in the depths of my heart,\nWithout you, every path feels empty,\nYour laughter makes life beautiful.",
    author: "Unknown",
    category: "Memories",
  },
];

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [favorites, setFavorites] = useState([]);
  const [filteredShayaris, setFilteredShayaris] = useState(shayariData);
  const [copyStatus, setCopyStatus] = useState({});
  const shayariContainerRef = useRef(null);

  // Featured images for the new sections
  const featuredImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      title: "Classic Poetry",
      description: "Timeless verses that touch the soul"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      title: "Modern Expressions",
      description: "Contemporary words for today's feelings"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      title: "Modern Expressions",
      description: "Contemporary words for today's feelings"
    }
  ];

  // Popular poets section
  const popularPoets = [
    {
      id: 1,
      name: "Mirza Ghalib",
      image: "https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      works: "Romantic & Philosophical Poetry"
    },
    {
      id: 2,
      name: "Rahat Indori",
      image: "https://images.unsplash.com/photo-1542103749-8ef59b94f47e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      works: "Contemporary Urdu Poetry"
    },
    {
      id: 3,
      name: "Faiz Ahmed Faiz",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      works: "Revolutionary Romantic Poetry"
    }
    ,{
      id: 4,
      name: "Faiz Ahmed Faiz",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      works: "Revolutionary Romantic Poetry"
    }
  ];

  // Load favorites from localStorage
  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    setFavorites(savedFavorites);
  }, []);

  // Save favorites to localStorage
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  // Handle search and filter
  useEffect(() => {
    let filtered = shayariData;
    if (searchTerm) {
      filtered = filtered.filter(
        (shayari) =>
          shayari.text.toLowerCase().includes(searchTerm.toLowerCase()) ||
          shayari.author.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    if (selectedCategory !== 'All') {
      filtered = filtered.filter((shayari) => shayari.category === selectedCategory);
    }
    setFilteredShayaris(filtered);

    // GSAP animations
    gsap.fromTo(
      '.shayari-card',
      { opacity: 0, y: 50, scale: 0.9 },
      { opacity: 1, y: 0, scale: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out' }
    );
  }, [searchTerm, selectedCategory]);

  // Toggle favorite (Like)
  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id]
    );
  };

  // Share Shayari
  const shareShayari = async (shayari) => {
    const shareText = `${shayari.text}\n— ${shayari.author} (${shayari.category})`;
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Popular Poetry',
          text: shareText,
        });
      } catch (err) {
        console.error('Share failed:', err);
      }
    } else {
      // Fallback: Copy to clipboard
      await copyShayari(shayari.id, shareText);
      alert('Poetry copied! You can now share it anywhere.');
    }
  };

  // Copy Shayari
  const copyShayari = async (id, text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopyStatus((prev) => ({ ...prev, [id]: true }));
      setTimeout(() => {
        setCopyStatus((prev) => ({ ...prev, [id]: false }));
      }, 2000);
    } catch (err) {
      console.error('Copy failed:', err);
    }
  };

  // Unique categories for filter
  const categories = ['All', ...new Set(shayariData.map((shayari) => shayari.category))];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#D9DFC6] via-[#EFF3EA] to-[#FFFDF0] flex flex-col py-8 px-4">
      {/* Hero Section */}
      <div className="max-w-4xl mt-16 mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Soulful Poetry Collection</h1>
        <p className="text-lg text-gray-600">Discover beautiful expressions of love, romance, and memories</p>
      </div>

      {/* Featured Images Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {featuredImages.map((image) => (
          <div key={image.id} className="relative rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <img src={image.src} alt={image.title} className="w-[500px] h-[400px] object-cover" />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <h3 className="text-xl font-bold text-white">{image.title}</h3>
              <p className="text-gray-200">{image.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Search and Filter Section */}
      <div className="max-w-6xl mx-auto mb-8 flex flex-col sm:flex-row gap-4 items-center justify-between">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search poetry or author..."
          className="w-full sm:w-1/2 p-3 rounded-full bg-white/90 backdrop-blur-sm border-none focus:outline-none focus:ring-2 focus:ring-[#FFF2C2] text-gray-800 placeholder-gray-500"
        />
        <div className="flex gap-2 flex-wrap justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-[#FFF2C2] text-gray-800'
                  : 'bg-white/80 text-gray-700 hover:bg-[#FFF2C2]/70'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Poetry Grid */}
      <div
        ref={shayariContainerRef}
        className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
      >
        {filteredShayaris.length > 0 ? (
          filteredShayaris.map((shayari) => (
            <div
              key={shayari.id}
              className="shayari-card relative bg-white/95 backdrop-blur-md rounded-xl shadow-xl p-6 text-center transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
            >
              <p className="text-md text-gray-800 italic mb-4 whitespace-pre-line font-medium">
                {shayari.text}
              </p>
              <p className="text-sm text-gray-600">— {shayari.author}</p>
              <p className="text-xs text-[#D9DFC6] mt-2">Category: {shayari.category}</p>
              <div className="flex justify-center gap-4 mt-4">
                <button
                  onClick={() => toggleFavorite(shayari.id)}
                  className="flex items-center gap-1 px-4 py-2 bg-[#FFF2C2] text-gray-800 rounded-full hover:bg-[#FFF2C2]/80 transition-all duration-300"
                >
                  <span>{favorites.includes(shayari.id) ? '❤️' : '🤍'}</span>
                  <span>Like</span>
                </button>
                <button
                  onClick={() => shareShayari(shayari)}
                  className="flex items-center gap-1 px-4 py-2 bg-[#EFF3EA] text-gray-800 rounded-full hover:bg-[#EFF3EA]/80 transition-all duration-300"
                >
                  <span>🔗</span>
                  <span>Share</span>
                </button>
                <button
                  onClick={() =>
                    copyShayari(shayari.id, `${shayari.text}\n— ${shayari.author}`)
                  }
                  className="flex items-center gap-1 px-4 py-2 bg-[#D9DFC6] text-gray-800 rounded-full hover:bg-[#D9DFC6]/80 transition-all duration-300"
                >
                  <span>{copyStatus[shayari.id] ? '✅' : '📋'}</span>
                  <span>{copyStatus[shayari.id] ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-800 text-lg col-span-full animate-pulse">
            No poetry found. Try changing your search or filter.
          </p>
        )}
      </div>

      {/* Popular Poets Section */}
      <div className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Popular Poets</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {popularPoets.map((poet) => (
            <div key={poet.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img src={poet.image} alt={poet.name} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{poet.name}</h3>
                <p className="text-gray-600">{poet.works}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}