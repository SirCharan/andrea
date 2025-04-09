import type { APIRoute } from "astro";
import emailjs from '@emailjs/browser';

const EMAILJS_SERVICE_ID = import.meta.env.EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.EMAILJS_PUBLIC_KEY;
const WHATSAPP_NUMBER = import.meta.env.WHATSAPP_NUMBER;

export const post: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    const { name, email, company, message, phone } = data;

    // Send email using EmailJS
    await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      {
        to_email: 'coolandri17@gmail.com',
        from_name: name,
        from_email: email,
        message,
        company: company || 'Not specified',
        phone: phone || 'Not provided',
        subject: 'New Collaboration Request',
      },
      EMAILJS_PUBLIC_KEY
    );

    // Send WhatsApp message if phone number is provided
    if (phone && WHATSAPP_NUMBER) {
      const whatsappMessage = `New Contact Form Submission:
Name: ${name}
Email: ${email}
Company: ${company || 'Not specified'}
Phone: ${phone}
Message: ${message}`;

      const whatsappUrl = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(whatsappMessage)}`;
      
      // Send WhatsApp message using the WhatsApp Business API
      await fetch(whatsappUrl);
    }

    return new Response(
      JSON.stringify({
        message: "Message sent successfully",
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error('Error processing contact form:', error);
    return new Response(
      JSON.stringify({
        message: "Failed to send message",
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}; 