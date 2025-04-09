import { useState } from 'react';
import { Mail, Instagram, Send, Phone } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import ScrollReveal from './ScrollReveal';
import emailjs from '@emailjs/browser';

// Initialize EmailJS
emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

const ConnectSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    message: '',
    phone: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [phoneError, setPhoneError] = useState('');

  const validatePhoneNumber = (phone: string) => {
    // Remove any non-digit characters
    const digits = phone.replace(/\D/g, '');
    
    // Check if it's a valid Indian phone number
    if (digits.length === 0) return true; // Allow empty field
    if (digits.length !== 12) return false; // Must be 12 digits (+91 + 10 digits)
    if (!digits.startsWith('91')) return false; // Must start with 91
    
    return true;
  };

  const formatPhoneNumber = (phone: string) => {
    // Remove any non-digit characters
    const digits = phone.replace(/\D/g, '');
    
    // Format as +91 XXXXXXXXXX
    if (digits.length === 0) return '';
    if (digits.length <= 2) return `+${digits}`;
    return `+${digits.slice(0, 2)} ${digits.slice(2, 12)}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    if (name === 'phone') {
      const formattedPhone = formatPhoneNumber(value);
      const isValid = validatePhoneNumber(value);
      
      setFormData(prev => ({ ...prev, [name]: formattedPhone }));
      setPhoneError(isValid ? '' : 'Please enter a valid Indian phone number (+91 followed by 10 digits)');
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate phone number if provided
    if (formData.phone && !validatePhoneNumber(formData.phone)) {
      setPhoneError('Please enter a valid Indian phone number (+91 followed by 10 digits)');
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          to_email: 'coolandri17@gmail.com',
          from_name: formData.name,
          message: formData.message,
          company: formData.company || 'Not specified',
          phone: formData.phone || 'Not provided',
          subject: 'New Collaboration Request',
        }
      );

      if (formData.phone && import.meta.env.VITE_WHATSAPP_NUMBER) {
        const whatsappMessage = `New Contact Form Submission:
Name: ${formData.name}
Brand: ${formData.company || 'Not specified'}
Phone: ${formData.phone}
Message: ${formData.message}`;

        window.open(
          `https://api.whatsapp.com/send?phone=${import.meta.env.VITE_WHATSAPP_NUMBER}&text=${encodeURIComponent(whatsappMessage)}`,
          '_blank'
        );
      }

      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });
      
      setFormData({
        name: '',
        company: '',
        message: '',
        phone: '',
      });
      setPhoneError('');
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Failed to send message",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="connect" className="py-20 bg-black text-white">
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
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
              <div className="flex items-center space-x-4">
                <div className="bg-sky-500/20 p-4 rounded-full">
                  <Mail className="text-sky-400" size={28} />
                </div>
                <div>
                  <div className="text-lg font-medium">Email</div>
                  <a 
                    href="mailto:coolandri17@gmail.com?subject=Collaboration%20Inquiry" 
                    className="text-white/70 hover:text-white transition-colors"
                  >
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

              <div className="flex items-center space-x-4">
                <div className="bg-green-500/20 p-4 rounded-full">
                  <Phone className="text-green-400" size={28} />
                </div>
                <div>
                  <div className="text-lg font-medium">WhatsApp</div>
                  <span className="text-white/70">Available on request</span>
                </div>
              </div>
            </div>
            
            <div className="mb-8">
              <h4 className="text-xl font-medium mb-3">Ready to Work Together?</h4>
              <p className="text-white/70">
                Fill out the form with your details and I'll get back to you as soon as possible.
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                  <label htmlFor="company" className="block text-sm font-medium mb-2">Brand</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your Brand"
                    className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone Number (WhatsApp)</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 XXXXXXXXXX"
                    className={`w-full bg-zinc-800 border ${
                      phoneError ? 'border-red-500' : 'border-zinc-700'
                    } rounded-lg px-4 py-3 text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent`}
                  />
                  {phoneError && (
                    <p className="mt-1 text-sm text-red-500">{phoneError}</p>
                  )}
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
