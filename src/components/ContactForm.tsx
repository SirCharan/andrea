import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
  company?: string;
};

// Initialize EmailJS with your public key
emailjs.init("YOUR_PUBLIC_KEY"); // You'll need to replace this with your actual public key

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
    company: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send email using EmailJS
      await emailjs.send(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        {
          to_email: 'coolandri17@gmail.com',
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          company: formData.company || 'Not specified',
        }
      );
      
      // Show success message
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        company: '',
      });
      
      setSubmitted(true);
      
      // Reset the submitted state after some time
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "Please try again later.",
        variant: "destructive",
      });
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="block text-sm font-medium">
            Your Name <span className="text-coral-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-400 focus:border-transparent outline-none transition"
            placeholder="John Doe"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium">
            Your Email <span className="text-coral-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-400 focus:border-transparent outline-none transition"
            placeholder="john@example.com"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="company" className="block text-sm font-medium">
            Company/Organization
          </label>
          <input
            id="company"
            name="company"
            type="text"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-400 focus:border-transparent outline-none transition"
            placeholder="Your company (optional)"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="subject" className="block text-sm font-medium">
            Subject <span className="text-coral-500">*</span>
          </label>
          <select
            id="subject"
            name="subject"
            required
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-400 focus:border-transparent outline-none transition"
          >
            <option value="">Select a subject</option>
            <option value="Business Inquiry">Business Inquiry</option>
            <option value="Sponsorship">Sponsorship</option>
            <option value="Collaboration">Collaboration</option>
            <option value="Feature Request">Feature Request</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="space-y-2 md:col-span-2">
          <label htmlFor="message" className="block text-sm font-medium">
            Your Message <span className="text-coral-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-400 focus:border-transparent outline-none transition"
            placeholder="Please describe how I can help you..."
          ></textarea>
        </div>

        <div className="md:col-span-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-4 px-6 rounded-lg font-medium transition-all duration-300 ${
              isSubmitting
                ? 'bg-gray-400 text-gray-100 cursor-not-allowed'
                : submitted
                ? 'bg-green-500 text-white'
                : 'bg-teal-600 text-white hover:bg-teal-700'
            } flex items-center justify-center gap-2`}
          >
            {isSubmitting ? (
              <span className="flex items-center">
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </span>
            ) : submitted ? (
              <>
                <CheckCircle size={20} />
                Message Sent
              </>
            ) : (
              <>
                <Send size={20} />
                Send Message
              </>
            )}
          </button>
          <p className="text-xs text-center mt-3 text-gray-500">
            Your message will be sent to Aindrila's email: coolandri17@gmail.com
          </p>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
