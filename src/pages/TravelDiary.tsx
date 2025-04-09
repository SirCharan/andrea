import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import { MapPin, Calendar, Search, X } from 'lucide-react';

// Mock travel posts data
const travelPosts = [
  {
    id: 1,
    title: "Urban Heights: Marina Bay Sands",
    location: "Marina Bay Sands, Singapore",
    date: "March 2023",
    category: "City",
    description: "Taking in breathtaking views of Singapore's skyline from the iconic Marina Bay Sands SkyPark.",
    imageUrl: "/lovable-uploads/8d6d1ed2-bcc2-4a96-bcfd-3907293f2022.png"
  },
  {
    id: 2,
    title: "Urban Exploration: Kuala Lumpur",
    location: "Kuala Lumpur, Malaysia",
    date: "January 2023",
    category: "City",
    description: "Discovering the vibrant culture and stunning architecture of Malaysia's capital city.",
    imageUrl: "/lovable-uploads/8d6d1ed2-bcc2-4a96-bcfd-3907293f2022.png"
  },
  {
    id: 3,
    title: "Evening Magic at Las Cabanas",
    location: "Las Cabanas, Philippines",
    date: "December 2022",
    category: "Night Life",
    description: "Experiencing the magical evening atmosphere at one of Philippines' most beautiful spots.",
    imageUrl: "/lovable-uploads/c761ec3c-c003-416f-8523-5de276969c0c.png"
  },
  {
    id: 4,
    title: "Infinity Pool Reflections",
    location: "Kuala Lumpur, Malaysia",
    date: "January 2023",
    category: "Luxury",
    description: "Taking in the breathtaking skyline view from an infinity pool high above the city.",
    imageUrl: "/lovable-uploads/77c74f99-b959-47f9-a2ba-186bddc85342.png"
  },
  {
    id: 5,
    title: "Bamboo Nest Lookout",
    location: "Bali, Indonesia",
    date: "November 2022",
    category: "Nature",
    description: "Finding the perfect spot to take in the natural beauty of Indonesia's landscapes.",
    imageUrl: "/lovable-uploads/4784ea21-858b-42d6-8366-c5e8e8a510e4.png"
  },
  {
    id: 6,
    title: "Oceanside Sunset Walk",
    location: "Goa, India",
    date: "October 2022",
    category: "Beach",
    description: "Walking along the beach as the sun sets over the Arabian Sea, creating a magical atmosphere.",
    imageUrl: "/lovable-uploads/11598b2d-dc72-4faf-bd61-b4e964d8ef3c.png"
  },
  {
    id: 7,
    title: "Classical Architecture",
    location: "Bangalore, India",
    date: "August 2022",
    category: "Culture",
    description: "Exploring the elegant architecture and historical landmarks of beautiful buildings.",
    imageUrl: "/lovable-uploads/0cdf9a49-8ba6-4711-8532-e8b12343e0cc.png"
  },
  {
    id: 8,
    title: "Concert Vibes",
    location: "Mumbai, India",
    date: "July 2022",
    category: "Entertainment",
    description: "Celebrating with the national flag at a major concert venue, immersed in the music and energy.",
    imageUrl: "/lovable-uploads/7886fb1c-7a1a-4cb4-9396-2bbe6a061669.png"
  },
  {
    id: 9,
    title: "Underwater World Exploration",
    location: "Phuket, Thailand",
    date: "April 2022",
    category: "Adventure",
    description: "Discovering the colorful underwater world and diverse marine life in an aquarium.",
    imageUrl: "/lovable-uploads/120cabd7-8977-4cd6-9073-10babac3a1bf.png"
  }
];

// Unique categories from the data
const categories = ['All', ...new Set(travelPosts.map(post => post.category))];

const TravelDiary = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Filter posts based on category and search query
  const filteredPosts = travelPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-ocean-100 via-teal-50 to-ocean-50">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">My Travel Diary</h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
              Join me on my adventures around the world as I explore beautiful destinations and share my experiences
            </p>
            
            {/* Search bar */}
            <div className="relative max-w-md mx-auto mb-12">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search destinations, experiences..."
                className="block w-full pl-10 pr-10 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-teal-400 focus:border-transparent outline-none transition"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                >
                  <X className="h-5 w-5" />
                </button>
              )}
            </div>
            
            {/* Category filters */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-5 py-2 rounded-full transition-colors ${
                    selectedCategory === category
                      ? 'bg-teal-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
      
      {/* Travel Posts */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-20">
              <h3 className="text-2xl font-medium text-gray-600 mb-4">No travel stories found</h3>
              <p className="text-gray-500 mb-6">Try adjusting your search or filter criteria</p>
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchQuery('');
                }}
                className="px-6 py-3 bg-teal-600 text-white rounded-full hover:bg-teal-700 transition-colors"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <ScrollReveal key={post.id} delay={index * 100}>
                  <div className="bg-white rounded-xl overflow-hidden shadow-md card-hover border border-gray-100">
                    <div className="relative h-60">
                      <img 
                        src={post.imageUrl} 
                        alt={post.title} 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 right-4">
                        <span className="bg-white/80 backdrop-blur-sm text-teal-800 text-xs font-medium px-3 py-1 rounded-full">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                      <div className="flex flex-wrap items-center text-sm text-gray-500 mb-4">
                        <div className="flex items-center mr-4 mb-2">
                          <MapPin size={16} className="mr-1 text-teal-600" />
                          <span>{post.location}</span>
                        </div>
                        <div className="flex items-center mb-2">
                          <Calendar size={16} className="mr-1 text-teal-600" />
                          <span>{post.date}</span>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-6">{post.description}</p>
                      <button className="text-teal-600 font-medium hover:text-teal-800 transition-colors">
                        Read More
                      </button>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          )}
        </div>
      </section>
      
      {/* Instagram CTA */}
      <section className="py-20 bg-gradient-to-br from-coral-100 to-coral-50">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">More Adventures on Instagram</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-10">
              Follow me on Instagram for daily travel inspiration, behind-the-scenes moments, and real-time stories from my journey
            </p>
            <a 
              href="https://www.instagram.com/aindrila_bhowmik/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-secondary hover:bg-secondary/90 text-white rounded-full transition-colors text-lg font-medium"
            >
              @aindrila_bhowmik
            </a>
          </ScrollReveal>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default TravelDiary;
