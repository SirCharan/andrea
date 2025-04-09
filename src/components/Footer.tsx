import { Instagram, Mail, Phone, MapPin, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-br from-teal-700 via-teal-800 to-teal-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About Column */}
          <div className="space-y-4">
            <h3 className="font-dancing text-3xl font-bold">Aindrila Bhowmik</h3>
            <p className="text-white/80">Travel enthusiast, MBA graduate, and business professional sharing my adventures around the world.</p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/aindrila_bhowmik/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="mailto:coolandri17@gmail.com?subject=Collaboration%20Inquiry" 
                className="social-icon"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-bold text-xl">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-white/80 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <a href="#featured" className="text-white/80 hover:text-white transition-colors">Discover</a>
              </li>
              <li>
                <a href="#instagram-feed" className="text-white/80 hover:text-white transition-colors">Follow my adventures</a>
              </li>
              <li>
                <a href="#connect" className="text-white/80 hover:text-white transition-colors">Let's connect</a>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-bold text-xl">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin size={20} className="flex-shrink-0 mt-1" />
                <span className="text-white/80">Bangalore, India</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={20} className="flex-shrink-0 mt-1" />
                <a 
                  href="mailto:coolandri17@gmail.com?subject=Collaboration%20Inquiry" 
                  className="text-white/80 hover:text-white transition-colors"
                >
                  coolandri17@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Instagram size={20} className="flex-shrink-0 mt-1" />
                <a 
                  href="https://www.instagram.com/aindrila_bhowmik/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  @aindrila_bhowmik
                </a>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="font-bold text-xl">Collaboration</h3>
            <p className="text-white/80">Interested in working together? Feel free to reach out for travel collaborations!</p>
            <a 
              href="#connect" 
              className="inline-block px-6 py-3 bg-white text-teal-800 rounded-full font-medium hover:bg-teal-50 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
        
        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/20 text-center text-white/60 text-sm">
          <p className="flex items-center justify-center gap-1">
            © {currentYear} Aindrila Bhowmik. All rights reserved. Made with <Heart size={14} className="text-coral-400" /> 
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
