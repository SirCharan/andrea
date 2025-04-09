import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Instagram, MapPin, Briefcase, GraduationCap, ChevronDown, ChevronRight } from 'lucide-react';
import InstagramFeed from '@/components/InstagramFeed';
import ScrollReveal from '@/components/ScrollReveal';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ConnectSection from '@/components/ConnectSection';
const Index = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/lovable-uploads/8d6d1ed2-bcc2-4a96-bcfd-3907293f2022.png" alt="Aindrila at a beach" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <div className="animate-fade-in max-w-3xl mx-auto">
            <p className="text-lg md:text-xl mb-3 opacity-90">Hello, I'm</p>
            <h1 className="font-dancing text-5xl md:text-7xl lg:text-8xl font-bold mb-6">Aindrila Bhowmik</h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">Team Lead by Profession
Influencer by Passion</p>
            
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              <div className="flex items-center">
                <MapPin className="mr-2 text-coral-400" size={20} />
                <span>Bangalore, India</span>
              </div>
              <div className="flex items-center">
                <Instagram className="mr-2 text-coral-400" size={20} />
                <span>25K+ Followers</span>
              </div>
              <div className="flex items-center">
                
                
              </div>
              <div className="flex items-center">
                <GraduationCap className="mr-2 text-coral-400" size={20} />
                <span>MBA from NIT Trichy</span>
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-5">
              <a href="#connect" className="px-8 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-full transition-colors flex items-center gap-2">
                Collaborate with me <ChevronRight size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <a href="#featured" className="text-white opacity-80 hover:opacity-100 transition-opacity">
            <ChevronDown size={30} />
          </a>
        </div>
      </section>
      
      {/* Featured Destinations */}
      <section id="featured" className="py-20 bg-gradient-to-r from-ocean-50 to-teal-50">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h2 className="section-heading text-teal-800">Discover My Travel Journey</h2>
            <p className="section-subheading">Join me as I explore breathtaking destinations around the world</p>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <ScrollReveal delay={100}>
              <div className="rounded-xl overflow-hidden shadow-md card-hover bg-white">
                <div className="relative h-64">
                  <img src="/lovable-uploads/a.jpeg" alt="Beach destination" className="w-full h-full object-cover" />
                  <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/70 to-transparent">
                    <span className="text-white font-medium">Singapore</span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-semibold mb-2">City Lights, City Sights</h3>
                  <p className="text-gray-600 mb-4">Exploring the crystal clear waters and pristine beaches of Thailand's tropical islands.</p>
                  
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={200}>
              <div className="rounded-xl overflow-hidden shadow-md card-hover bg-white">
                <div className="relative h-64">
                  <img src="/lovable-uploads/636ec691-4bdf-4f04-a392-7eb68dd76112.png" alt="City skyline" className="w-full h-full object-cover" />
                  <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/70 to-transparent">
                    <span className="text-white font-medium">Malaysia</span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-semibold mb-2">Urban Exploration in Asia</h3>
                  <p className="text-gray-600 mb-4">Discovering the vibrant culture and stunning architecture of Kuala Lumpur.</p>
                  
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={300}>
              <div className="rounded-xl overflow-hidden shadow-md card-hover bg-white">
                <div className="relative h-64">
                  <img src="/lovable-uploads/c761ec3c-c003-416f-8523-5de276969c0c.png" alt="Night destination" className="w-full h-full object-cover" />
                  <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/70 to-transparent">
                    <span className="text-white font-medium">Goa</span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-semibold mb-2">Magical Evenings in Paradise</h3>
                  <p className="text-gray-600 mb-4">Experiencing vibrant nightlife and magical moments in dreamy destinations.</p>
                  
                </div>
              </div>
            </ScrollReveal>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/travel-diary" className="inline-flex items-center gap-2 px-8 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-full transition-colors">
              Explore More Destinations <ChevronRight size={20} />
            </Link>
          </div>
        </div>
      </section>
      
      {/* About Me Preview */}
      
      
      {/* Instagram Feed */}
      <section className="py-20 bg-gradient-to-br from-ocean-100 to-teal-50">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="flex items-center justify-center mb-4">
              <Instagram size={28} className="text-secondary mr-2" />
              <span className="text-lg font-medium">@aindrila_bhowmik</span>
            </div>
            <h2 className="section-heading text-teal-800">Follow My Adventures</h2>
            <p className="section-subheading">Beautiful moments from my journey around the world</p>
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <InstagramFeed limit={6} />
          </ScrollReveal>
          
          <div className="text-center mt-12">
            <a href="https://www.instagram.com/aindrila_bhowmik/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-3 bg-secondary hover:bg-secondary/90 text-white rounded-full transition-colors">
              Follow on Instagram <Instagram size={20} />
            </a>
          </div>
        </div>
      </section>
      
      {/* Connect Section */}
      <ConnectSection />
      
      {/* Collaboration CTA - removed this section since we added the ConnectSection */}
      
      <Footer />
    </div>;
};
export default Index;