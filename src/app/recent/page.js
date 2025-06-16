"use client";
import { useState, useEffect } from 'react';
import Head from 'next/head';

const RecentShayari = () => {
  const [shayaris, setShayaris] = useState([]);
  const [visualPoetry, setVisualPoetry] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('recent');
  const [copiedId, setCopiedId] = useState(null);
  const [likedShayaris, setLikedShayaris] = useState([]);

  useEffect(() => {
    // Simulate API fetch for shayaris
    const fetchData = () => {
      setLoading(true);
      setTimeout(() => {
        // Text shayaris
        setShayaris([
          {
            id: 1,
            english: "The heart's words remain on the lips before being spoken, We're not those who say everything like others do.",
            author: "Anonymous",
            likes: 1245,
            date: "2 days ago",
            category: "Love"
          },
          {
            id: 2,
            english: "The shadow of your memories is so deep, That I'm growing distant even from myself.",
            author: "Rahul",
            likes: 892,
            date: "3 days ago",
            category: "Memories"
          },
          {
            id: 3,
            english: "Lost myself on the path of love, Now living only by your name.",
            author: "Priya",
            likes: 1567,
            date: "5 days ago",
            category: "Love"
          },
          {
            id: 4,
            english: "In this crowd of life, only you are with me, Otherwise everyone here lives just for themselves.",
            author: "Vikas",
            likes: 2103,
            date: "1 week ago",
            category: "Life"
          },
          {
            id: 5,
            english: "Your memories haunt me in the loneliness of night, Even in daylight, thoughts of you don't fade.",
            author: "Neetu",
            likes: 1789,
            date: "1 week ago",
            category: "Memories"
          },
          {
            id: 6,
            english: "Even in dreams I see your face, Even when awake I wait for you.",
            author: "Arjun",
            likes: 1456,
            date: "4 days ago",
            category: "Love"
          },
          {
            id: 7,
            english: "Every moment passes in your memories, Life feels incomplete without you.",
            author: "Meera",
            likes: 1987,
            date: "6 days ago",
            category: "Longing"
          },
          {
            id: 8,
            english: "Without you everything seems meaningless, Every moment spent with you feels precious.",
            author: "Kabir",
            likes: 2234,
            date: "2 days ago",
            category: "Romance"
          }
        ]);

        // Visual poetry
        setVisualPoetry([
          {
            id: 101,
            image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop",
            shayari: "The heart's words remain on the lips before being spoken",
            english: "The heart's words remain on the lips before being spoken",
            author: "Anonymous",
            likes: 342,
            category: "Love",
            date: "3 days ago"
          },
          {
            id: 102,
            image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
            shayari: "The shadow of your memories is so deep",
            english: "The shadow of your memories is so deep",
            author: "Rahul",
            likes: 256,
            category: "Memories",
            date: "5 days ago"
          },
          {
            id: 103,
            image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800&h=600&fit=crop",
            shayari: "Lost myself on the path of love",
            english: "Lost myself on the path of love",
            author: "Priya",
            likes: 189,
            category: "Love",
            date: "1 day ago"
          },
          {
            id: 104,
            image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=800&h=600&fit=crop",
            shayari: "In this crowd of life, only you are with me",
            english: "In this crowd of life, only you are with me",
            author: "Vikas",
            likes: 421,
            category: "Life",
            date: "4 days ago"
          }
        ]);

        setLoading(false);
      }, 1500);
    };

    fetchData();
  }, []);

  useEffect(() => {
    // Auto-rotate shayaris
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % shayaris.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [shayaris.length]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % shayaris.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + shayaris.length) % shayaris.length);
  };

  const copyToClipboard = (id, text) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const toggleLike = (id) => {
    setLikedShayaris(prev => 
      prev.includes(id) ? prev.filter(shayariId => shayariId !== id) : [...prev, id]
    );
  };

  const shareShayari = (shayari) => {
    const text = shayari.english || shayari.shayari;
    if (navigator.share) {
      navigator.share({
        title: 'Beautiful Poetry',
        text: text,
        url: window.location.href
      });
    } else {
      copyToClipboard(shayari.id, text);
      alert('Poetry copied to clipboard!');
    }
  };

  const categories = ['All', 'Love', 'Memories', 'Life', 'Longing', 'Romance'];
  const filteredShayaris = activeTab === 'recent' 
    ? shayaris 
    : shayaris.filter(shayari => shayari.category === activeTab);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#D9DFC6] via-[#EFF3EA] to-[#FFFDF0] py-8 px-4">
      <Head>
        <title>Poetry Collection | Beautiful Shayari in English</title>
        <meta name="description" content="Explore our collection of beautiful poetry in English" />
      </Head>

      {/* Header Section */}
      <header className="max-w-6xl mx-auto text-center mt-16 mb-12">
        <h1 className="text-4xl md:text-6xl font-bold text-[#5A7247] mb-4 animate-fade-in">
          Poetry Collection
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto animate-fade-in">
          Discover beautiful expressions of emotion in English
        </p>
      </header>

      <div className="max-w-6xl mx-auto">
        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center animate-fade-in">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveTab(category === 'All' ? 'recent' : category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeTab === (category === 'All' ? 'recent' : category) ? 'bg-[#FFF2C2] text-gray-800' : 'bg-white/80 text-gray-600 hover:bg-[#FFF2C2]/50'}`}
            >
              {category}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#5A7247]"></div>
          </div>
        ) : (
          <>
            {/* Featured Shayari Carousel */}
            <section className="mb-16 relative">
              <h2 className="text-2xl font-bold text-[#5A7247] mb-6 animate-fade-in">Featured Poetry</h2>
              
              <div className="relative">
                {/* Featured Shayari Card */}
                <div 
                  key={filteredShayaris[currentIndex]?.id}
                  className="bg-white/95 backdrop-blur-sm rounded-xl shadow-lg p-8 mb-8 transform transition-all duration-500 hover:shadow-xl animate-fade-in"
                >
                  <p className="text-xl md:text-2xl text-gray-800 font-medium leading-relaxed mb-4 min-h-[120px]">
                    {filteredShayaris[currentIndex]?.english}
                  </p>
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div>
                      <p className="text-[#5A7247] font-semibold">{filteredShayaris[currentIndex]?.author}</p>
                      <div className="flex items-center gap-3 mt-2">
                        <span className="text-gray-500 text-sm">{filteredShayaris[currentIndex]?.date}</span>
                        <span className="text-xs px-2 py-1 bg-[#EFF3EA] rounded-full text-gray-700">
                          {filteredShayaris[currentIndex]?.category}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <button 
                        onClick={() => toggleLike(filteredShayaris[currentIndex]?.id)}
                        className="flex items-center gap-2 text-gray-600 hover:text-[#5A7247]"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" 
                          className={`h-5 w-5 ${likedShayaris.includes(filteredShayaris[currentIndex]?.id) ? 'text-red-500 fill-current' : 'text-gray-500'}`} 
                          viewBox="0 0 20 20" 
                          fill="none"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                        <span>{likedShayaris.includes(filteredShayaris[currentIndex]?.id) ? 'Liked' : 'Like'}</span>
                      </button>
                      <button 
                        onClick={() => shareShayari(filteredShayaris[currentIndex])}
                        className="flex items-center gap-2 text-gray-600 hover:text-[#5A7247]"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                        </svg>
                        <span>Share</span>
                      </button>
                      <button 
                        onClick={() => copyToClipboard(filteredShayaris[currentIndex]?.id, filteredShayaris[currentIndex]?.english)}
                        className="flex items-center gap-2 text-gray-600 hover:text-[#5A7247]"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                          <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
                        </svg>
                        <span>{copiedId === filteredShayaris[currentIndex]?.id ? 'Copied!' : 'Copy'}</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Navigation Arrows */}
                <button 
                  onClick={handlePrev}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 bg-white p-3 rounded-full shadow-md hover:bg-[#FFF2C2] transition-colors focus:outline-none z-10"
                  aria-label="Previous poetry"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#5A7247]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button 
                  onClick={handleNext}
                  className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 bg-white p-3 rounded-full shadow-md hover:bg-[#FFF2C2] transition-colors focus:outline-none z-10"
                  aria-label="Next poetry"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#5A7247]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </section>

            {/* Visual Poetry Gallery Section */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-[#5A7247] mb-6 animate-fade-in">
                Visual Poetry Gallery
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {visualPoetry.map((item) => (
                  <div 
                    key={item.id}
                    className="group relative bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
                  >
                    <div className="max-h-[250px] overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.shayari}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                      <div className="text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <p className="font-medium mb-2">{item.shayari}</p>
                        <p className="text-sm">- {item.author}</p>
                      </div>
                      <div className="flex justify-between items-center mt-3">
                        <span className="text-xs bg-[#5A7247] text-white px-2 py-1 rounded-full">
                          {item.category}
                        </span>
                        <div className="flex space-x-2">
                          <button 
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleLike(item.id);
                            }}
                            className="p-1 text-white hover:text-[#FFF2C2]"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" 
                              className={`h-5 w-5 ${likedShayaris.includes(item.id) ? 'text-red-500 fill-current' : 'text-white'}`} 
                              viewBox="0 0 20 20" 
                              fill="none"
                              stroke="currentColor"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                          </button>
                          <button 
                            onClick={(e) => {
                              e.stopPropagation();
                              copyToClipboard(item.id, `${item.shayari}\n- ${item.author}`);
                            }}
                            className="p-1 text-white hover:text-[#FFF2C2]"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                              <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
                            </svg>
                          </button>
                          <button 
                            onClick={(e) => {
                              e.stopPropagation();
                              shareShayari(item);
                            }}
                            className="p-1 text-white hover:text-[#FFF2C2]"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-[#5A7247]">{item.category}</h3>
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-xs text-gray-500">{item.likes} likes</span>
                        <button className="text-xs text-[#5A7247] hover:underline">
                          View Full
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* All Poetry Grid */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-[#5A7247] mb-6 animate-fade-in">
                {activeTab === 'recent' ? 'Recent Collection' : `${activeTab} Poetry`}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredShayaris.map((shayari, index) => (
                  <div 
                    key={shayari.id}
                    className={`bg-white/95 backdrop-blur-sm rounded-lg p-6 shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer ${index === currentIndex ? 'ring-2 ring-[#D9DFC6]' : ''}`}
                    onClick={() => setCurrentIndex(filteredShayaris.findIndex(s => s.id === shayari.id))}
                  >
                    <p className="text-lg text-gray-700 mb-4 line-clamp-3 min-h-[72px]">
                      {shayari.english}
                    </p>
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-[#5A7247] font-medium text-sm">{shayari.author}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-xs text-gray-500">{shayari.date}</span>
                          <span className="text-xs px-2 py-1 bg-[#EFF3EA] rounded-full text-gray-700">
                            {shayari.category}
                          </span>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleLike(shayari.id);
                          }}
                          className="p-2 rounded-full hover:bg-[#FFF2C2]"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" 
                            className={`h-5 w-5 ${likedShayaris.includes(shayari.id) ? 'text-red-500 fill-current' : 'text-gray-500'}`} 
                            viewBox="0 0 20 20" 
                            fill="none"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                          </svg>
                        </button>
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            shareShayari(shayari);
                          }}
                          className="p-2 rounded-full hover:bg-[#FFF2C2]"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                          </svg>
                        </button>
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            copyToClipboard(shayari.id, shayari.english);
                          }}
                          className="p-2 rounded-full hover:bg-[#FFF2C2]"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                            <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Call to Action */}
            <section className="bg-gradient-to-r from-[#FFF2C2] to-[#EFF3EA] rounded-2xl p-8 md:p-12 text-center mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-[#5A7247] mb-4">Contribute Your Poetry</h2>
              <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                Join our community of poets and share your beautiful creations with the world
              </p>
              <button className="bg-[#5A7247] text-white px-8 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 focus:outline-none">
                Submit Your Poetry
              </button>
            </section>
          </>
        )}
      </div>

      {/* Footer */}
      

      {/* Custom Animations */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
        .animate-fade-in-up {
          animation: fadeIn 0.8s ease-out 0.3s both;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default RecentShayari;