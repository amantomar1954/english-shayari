"use client";
import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

// Top Writers Data
const writersData = [
  {
    id: 1,
    name: "Mirza Ghalib",
    image: "https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    bio: "Mirza Ghalib is one of the greatest Urdu and Persian poets, known for his profound poetry on love, pain, and the depths of life.",
    genres: ["Romance", "Pain"],
    shayaris: [
      "In the moonlight, I see your face,\nIn every star, your glow shines.",
      "Thousands of desires, each worth dying for...\nMany of them I have realized... yet I yearn for more."
    ],
  },
  {
    id: 2,
    name: "Rahat Indori",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    bio: "Rahat Indori's poetry is a unique blend of passion and liveliness that touches the heart.",
    genres: ["Love", "Passion"],
    shayaris: [
      "In love, every moment becomes a story,\nWithout you, every moment feels incomplete.",
      "No height remains forever,\nEvery person has their own limits."
    ],
  },
  {
    id: 3,
    name: "Faiz Ahmed Faiz",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    bio: "Faiz's poetry beautifully blends love with social realities, touching every heart.",
    genres: ["Romance", "Society"],
    shayaris: [
      "Without you, everything feels incomplete,\nYou reside in the depths of my heart.",
      "Don't ask about the night of separation, it came and passed,\nMy restless heart grew even more impatient."
    ],
  },
  {
    id: 4,
    name: "Ahmed Faraz",
    image: "https://images.unsplash.com/photo-1522556189639-b1509e4e4703?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    bio: "Ahmed Faraz's poetry reveals the depth of love and emotions in every verse.",
    genres: ["Love", "Pain"],
    shayaris: [
      "Let there be resentment, but come to hurt my heart,\nCome again to leave me after meeting.",
      "I said all that needed to be said and heard,\nThat whole night kept burning and then extinguished."
    ],
  },
  {
    id: 5,
    name: "Allama Iqbal",
    image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    bio: "Philosopher-poet who inspired millions with his vision of self-realization and spiritual awakening.",
    genres: ["Philosophy", "Inspiration"],
    shayaris: [
      "Rise above sectional interests and private aims...\nAnd like the tulip, grow with a smile on your lips.",
      "The ultimate aim of the ego is not to see something, but to be something."
    ],
  },
  {
    id: 6,
    name: "Javed Akhtar",
    image: "https://images.unsplash.com/photo-1514222709107-a180c68d72b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    bio: "Contemporary poet and lyricist known for his progressive thoughts and simple yet profound poetry.",
    genres: ["Contemporary", "Social"],
    shayaris: [
      "The world is a puzzle, unsolved, incomplete,\nWhere every piece fits yet nothing seems to meet.",
      "Life is a story, don't read it too fast,\nThe best chapters come when you pause at last."
    ],
  },
  {
    id: 7,
    name: "Gulzar",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    bio: "Renowned poet and filmmaker known for his minimalist yet deeply evocative style.",
    genres: ["Romance", "Nature"],
    shayaris: [
      "Like a drop of dew on a leaf's edge,\nMy love for you trembles before the morning pledge.",
      "The river doesn't drink its own water,\nThe tree doesn't eat its own fruit."
    ],
  },
  {
    id: 8,
    name: "Amrita Pritam",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    bio: "First prominent woman Punjabi poet who wrote with boldness and sensitivity.",
    genres: ["Feminism", "Love"],
    shayaris: [
      "I will meet you yet again,\nHow and where? I know not.",
      "On some day with a new name, a new form,\nI'll see you again and recognize you."
    ],
  },
  {
    id: 9,
    name: "Bashir Badr",
    image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    bio: "Modern Urdu poet known for his simple language and profound thoughts on everyday life.",
    genres: ["Contemporary", "Life"],
    shayaris: [
      "Don't ask me about the pain of love today,\nLet me be happy for just one day.",
      "Every leaf that falls from the tree,\nWhispers a story that you and I can't see."
    ],
  },
  {
    id: 10,
    name: "Parveen Shakir",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    bio: "One of the most progressive female Urdu poets who brought a fresh feminine perspective to Urdu poetry.",
    genres: ["Feminine", "Romance"],
    shayaris: [
      "Love is not about possession,\nIt's about appreciation.",
      "My words are like scattered pearls,\nString them together to understand my world."
    ],
  }
];

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('All');
  const [filteredWriters, setFilteredWriters] = useState(writersData);
  const writersContainerRef = useRef(null);

  // Handle search and filter
  useEffect(() => {
    let filtered = writersData;
    if (searchTerm) {
      filtered = filtered.filter(
        (writer) =>
          writer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          writer.bio.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    if (selectedGenre !== 'All') {
      filtered = filtered.filter((writer) => writer.genres.includes(selectedGenre));
    }
    setFilteredWriters(filtered);

    // GSAP animations
    gsap.fromTo(
      '.writer-card',
      { opacity: 0, y: 50, scale: 0.95 },
      { opacity: 1, y: 0, scale: 1, duration: 1, stagger: 0.2, ease: 'power3.out' }
    );
  }, [searchTerm, selectedGenre]);

  // Unique genres for filter
  const genres = ['All', ...new Set(writersData.flatMap((writer) => writer.genres))];

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-100 via-blue-100 to-purple-100 flex flex-col py-8 px-4">
      {/* Hero Section */}
      <div className="max-w-5xl mx-auto  text-center mb-12 mt-16">
        <h1 className="text-4xl md:text-5xl font-bold text-teal-800 mb-4">Legendary Poets Collection</h1>
        <p className="text-lg text-gray-600">Discover the timeless words of Urdu and Persian poetry masters</p>
      </div>

      {/* Search and Filter Section */}
      <div className="max-w-5xl mx-auto mb-12 flex flex-col sm:flex-row gap-4 items-center justify-between">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search poet or bio..."
          className="w-full sm:w-1/2 p-4 rounded-full bg-white/90 backdrop-blur-sm border-none focus:outline-none focus:ring-2 focus:ring-teal-400 text-gray-800 placeholder-gray-500 shadow-md"
        />
        <div className="flex gap-3 flex-wrap justify-center">
          {genres.map((genre) => (
            <button
              key={genre}
              onClick={() => setSelectedGenre(genre)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedGenre === genre
                  ? 'bg-teal-500 text-white shadow-lg'
                  : 'bg-white/80 text-gray-700 hover:bg-teal-200'
              }`}
            >
              {genre}
            </button>
          ))}
        </div>
      </div>

      {/* Writers Grid */}
      <div
        ref={writersContainerRef}
        className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {filteredWriters.length > 0 ? (
          filteredWriters.map((writer) => (
            <div key={writer.id} className="flip-card h-96 w-full">
              <div className="flip-card-inner relative w-full h-full rounded-2xl shadow-2xl transition-transform duration-700">
                {/* Front Side */}
                <div className="flip-card-front absolute w-full h-full bg-white rounded-2xl p-6 flex flex-col items-center justify-center backface-hidden">
                  <img
                    src={writer.image}
                    alt={writer.name}
                    className="w-32 h-32 rounded-full object-cover border-4 border-teal-300 mb-4"
                  />
                  <h2 className="text-xl font-bold text-teal-700 mb-2">{writer.name}</h2>
                  <p className="text-sm text-gray-600 text-center line-clamp-3">{writer.bio}</p>
                  <div className="mt-4 flex flex-wrap gap-2 justify-center">
                    {writer.genres.map((genre, index) => (
                      <span key={index} className="px-3 py-1 bg-teal-100 text-teal-800 text-xs rounded-full">
                        {genre}
                      </span>
                    ))}
                  </div>
                  <p className="mt-4 text-xs text-teal-600">Hover to view poetry</p>
                </div>

                {/* Back Side */}
                <div className="flip-card-back absolute w-full h-full bg-teal-50 rounded-2xl p-6 flex flex-col items-center justify-center backface-hidden overflow-y-auto">
                  <h2 className="text-xl font-bold text-teal-700 mb-4">{writer.name}</h2>
                  <div className="space-y-4">
                    {writer.shayaris.map((shayari, index) => (
                      <p
                        key={index}
                        className="text-md text-gray-800 italic whitespace-pre-line font-medium text-center"
                      >
                        {shayari}
                      </p>
                    ))}
                  </div>
                  <p className="mt-4 text-xs text-teal-600">Hover to view bio</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-800 text-lg col-span-full animate-pulse">
            No poets found. Try changing your search or filter.
          </p>
        )}
      </div>

      {/* CSS for flip card effect */}
      <style jsx>{`
        .flip-card {
          perspective: 1000px;
        }
        .flip-card-inner {
          transform-style: preserve-3d;
        }
        .flip-card:hover .flip-card-inner {
          transform: rotateY(180deg);
        }
        .flip-card-front, .flip-card-back {
          backface-visibility: hidden;
        }
        .flip-card-back {
          transform: rotateY(180deg);
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
      `}</style>
    </div>
  );
}