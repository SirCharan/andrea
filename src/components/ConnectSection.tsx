
import { useState } from 'react';
import { Mail, Instagram, Send } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import ScrollReveal from './ScrollReveal';

const ConnectSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // In a real app, this would send the form data to a server
    // Simulating API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });
      setFormData({
        name: '',
        email: '',
        company: '',
        message: '',
      });
    }, 1000);
  };

  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-8">
          <div className="bg-teal-900/50 text-amber-500 text-lg font-medium px-6 py-2 rounded-full border border-amber-500/30">
            Let's Connect
          </div>
        </div>
        
        <ScrollReveal>
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-6">Collaborate With Me</h2>
          <p className="text-xl text-center text-white/80 max-w-3xl mx-auto mb-16">
            Are you a brand, club, restaurant, spa, or travel agency looking to collaborate? Get in touch!
          </p>
        </ScrollReveal>
        
        <div className="max-w-5xl mx-auto">
          <div className="bg-zinc-900 rounded-2xl p-8 md:p-10 shadow-xl">
            <h3 className="text-3xl font-bold mb-8">Get in Touch</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              <div className="flex items-center space-x-4">
                <div className="bg-sky-500/20 p-4 rounded-full">
                  <Mail className="text-sky-400" size={28} />
                </div>
                <div>
                  <div className="text-lg font-medium">Email</div>
                  <a href="mailto:coolandri17@gmail.com" className="text-white/70 hover:text-white transition-colors">
                    coolandri17@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-4 rounded-full">
                  <Instagram className="text-pink-400" size={28} />
                </div>
                <div>
                  <div className="text-lg font-medium">Instagram</div>
                  <a 
                    href="https://www.instagram.com/aindrila_bhowmik/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    @aindrila_bhowmik
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mb-8">
              <h4 className="text-xl font-medium mb-3">Ready to Work Together?</h4>
              <p className="text-white/70">
                Fill out the form with your details and I'll get back to you as soon as possible.
              </p>
            </div>
            
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2">Company/Organization</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your Company"
                    className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Collaboration Details</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell me about your collaboration idea..."
                    className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none"
                  />
                </div>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-sky-500 to-sky-400 hover:from-sky-600 hover:to-sky-500 text-white font-medium py-4 px-6 rounded-lg flex items-center justify-center transition-colors disabled:opacity-70"
              >
                {isSubmitting ? (
                  <div className="flex items-center">
                    <div className="animate-spin mr-2 h-5 w-5 border-2 border-white border-t-transparent rounded-full"></div>
                    Sending...
                  </div>
                ) : (
                  <div className="flex items-center">
                    <Send className="mr-2" size={20} />
                    Send Message
                  </div>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectSection;
