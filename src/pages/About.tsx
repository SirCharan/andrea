
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import { MapPin, Briefcase, GraduationCap, Instagram, Heart, Star, Award, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-ocean-50 to-teal-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-2/5">
              <ScrollReveal>
                <div className="relative">
                  <div className="absolute -top-6 -left-6 w-64 h-64 bg-coral-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse-soft"></div>
                  <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse-soft animation-delay-1000"></div>
                  
                  <img 
                    src="/lovable-uploads/0cdf9a49-8ba6-4711-8532-e8b12343e0cc.png" 
                    alt="Aindrila Bhowmik" 
                    className="relative z-10 rounded-xl shadow-lg border-4 border-white"
                  />
                </div>
              </ScrollReveal>
            </div>
            
            <div className="lg:w-3/5">
              <ScrollReveal delay={100}>
                <span className="inline-block bg-teal-100 text-teal-800 text-sm font-medium mb-4 px-4 py-1.5 rounded-full">About Me</span>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Aindrila Bhowmik</h1>
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center text-gray-700">
                    <MapPin size={18} className="mr-1 text-teal-600" />
                    <span>Bangalore, India</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Instagram size={18} className="mr-1 text-secondary" />
                    <span>25K+ Followers</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Briefcase size={18} className="mr-1 text-teal-600" />
                    <span>Business Team Lead at Accenture</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <GraduationCap size={18} className="mr-1 text-teal-600" />
                    <span>MBA from NIT Trichy</span>
                  </div>
                </div>
                <p className="text-lg text-gray-700 mb-6">
                  I'm a travel enthusiast with roots in Bengal, now based in Bangalore. I balance my professional career with my passion for exploring diverse cultures, breathtaking landscapes, and creating authentic travel content.
                </p>
                <div className="flex space-x-4">
                  <a 
                    href="https://www.instagram.com/aindrila_bhowmik/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-secondary hover:bg-secondary/90 text-white rounded-full transition-colors flex items-center gap-2"
                  >
                    <Instagram size={18} />
                    Follow on Instagram
                  </a>
                  <Link 
                    to="/contact" 
                    className="px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-full transition-colors"
                  >
                    Work With Me
                  </Link>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
      
      {/* My Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h2 className="section-heading text-teal-800">My Story</h2>
            <p className="section-subheading">The journey that brought me where I am today</p>
          </ScrollReveal>
          
          <div className="max-w-3xl mx-auto">
            <ScrollReveal delay={100}>
              <div className="prose prose-lg mx-auto text-gray-700">
                <p>
                  Born and raised in the culturally rich state of Bengal, India, I have always been fascinated by different cultures, languages, and traditions. This curiosity led me to pursue an MBA at the prestigious National Institute of Technology in Trichy, where I honed my business acumen and leadership skills.
                </p>
                <p>
                  After graduation, I joined Accenture, where I currently serve as a Business Team Lead, managing complex projects and driving strategic initiatives. The corporate world has taught me discipline, strategy, and teamwork - skills that have proven invaluable in my parallel journey as a travel content creator.
                </p>
                <p>
                  My travel journey began as a personal passion - exploring hidden corners of India during weekends and holidays. What started as casual Instagram posts sharing my experiences gradually evolved into a dedicated travel page that resonated with thousands of followers. Today, I'm proud to have built a community of over 25,000 travel enthusiasts who join me virtually on my adventures.
                </p>
                <p>
                  I believe in authentic travel experiences that go beyond popular tourist spots. Whether it's savoring local cuisine in a small Thai village, participating in traditional festivals in remote Indian towns, or finding hidden beaches in the Philippines, I strive to showcase the heart and soul of each destination I visit.
                </p>
                <p>
                  When I'm not working or traveling, you'll find me practicing yoga, reading travel literature, or planning my next adventure. I'm also passionate about sustainable travel and supporting local communities through my content.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
      
      {/* What I Do */}
      <section className="py-20 bg-gradient-to-br from-ocean-50 to-teal-50">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h2 className="section-heading text-teal-800">What I Do</h2>
            <p className="section-subheading">Combining my professional expertise with travel passion</p>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <ScrollReveal delay={100}>
              <div className="bg-white rounded-xl p-8 shadow-md card-hover">
                <div className="w-14 h-14 bg-coral-100 rounded-full flex items-center justify-center text-coral-600 mb-6">
                  <Globe size={28} />
                </div>
                <h3 className="text-xl font-bold mb-4">Travel Content Creation</h3>
                <p className="text-gray-600">
                  I create authentic travel content showcasing destinations through photography, stories, and practical recommendations for fellow travelers.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={200}>
              <div className="bg-white rounded-xl p-8 shadow-md card-hover">
                <div className="w-14 h-14 bg-teal-100 rounded-full flex items-center justify-center text-teal-600 mb-6">
                  <Briefcase size={28} />
                </div>
                <h3 className="text-xl font-bold mb-4">Business Leadership</h3>
                <p className="text-gray-600">
                  At Accenture, I lead business teams to deliver strategic solutions, leveraging my MBA education and professional expertise.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={300}>
              <div className="bg-white rounded-xl p-8 shadow-md card-hover">
                <div className="w-14 h-14 bg-ocean-100 rounded-full flex items-center justify-center text-ocean-600 mb-6">
                  <Heart size={28} />
                </div>
                <h3 className="text-xl font-bold mb-4">Brand Collaborations</h3>
                <p className="text-gray-600">
                  I partner with travel brands, hotels, and destinations to create authentic content that resonates with my engaged audience.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={400}>
              <div className="bg-white rounded-xl p-8 shadow-md card-hover">
                <div className="w-14 h-14 bg-sunset-100 rounded-full flex items-center justify-center text-sunset-600 mb-6">
                  <Star size={28} />
                </div>
                <h3 className="text-xl font-bold mb-4">Travel Consulting</h3>
                <p className="text-gray-600">
                  I provide personalized travel recommendations and itineraries based on my firsthand experiences across various destinations.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={500}>
              <div className="bg-white rounded-xl p-8 shadow-md card-hover">
                <div className="w-14 h-14 bg-leaf-100 rounded-full flex items-center justify-center text-leaf-600 mb-6">
                  <Award size={28} />
                </div>
                <h3 className="text-xl font-bold mb-4">Cultural Storytelling</h3>
                <p className="text-gray-600">
                  I share authentic cultural experiences and traditions from around the world, fostering cross-cultural understanding.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={600}>
              <div className="bg-white rounded-xl p-8 shadow-md card-hover">
                <div className="w-14 h-14 bg-coral-100 rounded-full flex items-center justify-center text-coral-600 mb-6">
                  <Instagram size={28} />
                </div>
                <h3 className="text-xl font-bold mb-4">Social Media Growth</h3>
                <p className="text-gray-600">
                  I've built an engaged community of 25,000+ followers who connect with my authentic travel content and experiences.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
      
      {/* Photo Gallery */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h2 className="section-heading text-teal-800">Travel Moments</h2>
            <p className="section-subheading">Glimpses from my adventures around the world</p>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
            <ScrollReveal delay={100}>
              <div className="relative rounded-xl overflow-hidden aspect-square card-hover">
                <img 
                  src="/lovable-uploads/120cabd7-8977-4cd6-9073-10babac3a1bf.png" 
                  alt="Travel moment" 
                  className="w-full h-full object-cover"
                />
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={200}>
              <div className="relative rounded-xl overflow-hidden aspect-square card-hover">
                <img 
                  src="/lovable-uploads/7886fb1c-7a1a-4cb4-9396-2bbe6a061669.png" 
                  alt="Travel moment" 
                  className="w-full h-full object-cover"
                />
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={300}>
              <div className="relative rounded-xl overflow-hidden aspect-square card-hover">
                <img 
                  src="/lovable-uploads/11598b2d-dc72-4faf-bd61-b4e964d8ef3c.png" 
                  alt="Travel moment" 
                  className="w-full h-full object-cover"
                />
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={400}>
              <div className="relative rounded-xl overflow-hidden aspect-square card-hover">
                <img 
                  src="/lovable-uploads/c6cffef2-8462-4ad6-a4ce-55f903f368bd.png" 
                  alt="Travel moment" 
                  className="w-full h-full object-cover"
                />
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={500}>
              <div className="relative rounded-xl overflow-hidden aspect-square card-hover col-span-1 sm:col-span-2 lg:col-span-1">
                <img 
                  src="/lovable-uploads/77c74f99-b959-47f9-a2ba-186bddc85342.png" 
                  alt="Travel moment" 
                  className="w-full h-full object-cover"
                />
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={600}>
              <div className="relative rounded-xl overflow-hidden aspect-square card-hover">
                <img 
                  src="/lovable-uploads/4784ea21-858b-42d6-8366-c5e8e8a510e4.png" 
                  alt="Travel moment" 
                  className="w-full h-full object-cover"
                />
              </div>
            </ScrollReveal>
          </div>
          
          <div className="text-center mt-12">
            <a 
              href="https://www.instagram.com/aindrila_bhowmik/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-secondary hover:bg-secondary/90 text-white rounded-full transition-colors"
            >
              See More on Instagram <Instagram size={20} />
            </a>
          </div>
        </div>
      </section>
      
      {/* Collaboration CTA */}
      <section className="py-20 bg-gradient-to-r from-ocean-600 to-teal-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Let's Create Something Amazing</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-10">
              Whether you're a brand looking for authentic promotion, a travel company seeking partnership, or just want to connect - I'd love to hear from you!
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-teal-800 hover:bg-teal-50 rounded-full transition-colors text-lg font-medium"
            >
              Get in Touch
            </Link>
          </ScrollReveal>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
