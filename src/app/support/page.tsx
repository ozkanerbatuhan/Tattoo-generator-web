"use client";

import { motion } from "framer-motion";
import { Mail, MessageCircle, HelpCircle } from "lucide-react";

export default function SupportPage() {
  return (
    <div className="container mx-auto px-4 py-32 max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold mb-4">How can we help?</h1>
        <p className="text-muted-foreground text-lg">
          Our team is here to assist you with any questions or issues.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="bg-muted/30 p-6 rounded-2xl border border-white/10 text-center">
          <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
            <Mail size={24} />
          </div>
          <h3 className="font-semibold mb-2">Email Support</h3>
          <p className="text-sm text-muted-foreground mb-4">Get a response within 24 hours</p>
          <a href="mailto:support@tattoogen.com" className="text-primary hover:underline">support@tattoogen.com</a>
        </div>

        <div className="bg-muted/30 p-6 rounded-2xl border border-white/10 text-center">
          <div className="w-12 h-12 rounded-full bg-secondary/10 text-secondary flex items-center justify-center mx-auto mb-4">
            <MessageCircle size={24} />
          </div>
          <h3 className="font-semibold mb-2">Live Chat</h3>
          <p className="text-sm text-muted-foreground mb-4">Available 9am - 5pm EST</p>
          <button className="text-primary hover:underline">Start Chat</button>
        </div>

        <div className="bg-muted/30 p-6 rounded-2xl border border-white/10 text-center">
          <div className="w-12 h-12 rounded-full bg-accent/10 text-accent flex items-center justify-center mx-auto mb-4">
            <HelpCircle size={24} />
          </div>
          <h3 className="font-semibold mb-2">FAQ</h3>
          <p className="text-sm text-muted-foreground mb-4">Find answers instantly</p>
          <a href="#faq" className="text-primary hover:underline">View FAQ</a>
        </div>
      </div>

      <div className="bg-background border border-white/10 rounded-2xl p-8" id="contact-form">
        <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">Name</label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 rounded-lg bg-muted/50 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                placeholder="Your name"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 rounded-lg bg-muted/50 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                placeholder="your@email.com"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="subject" className="text-sm font-medium">Subject</label>
            <select
              id="subject"
              className="w-full px-4 py-2 rounded-lg bg-muted/50 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
            >
              <option>General Inquiry</option>
              <option>Technical Support</option>
              <option>Billing</option>
              <option>Feature Request</option>
            </select>
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium">Message</label>
            <textarea
              id="message"
              rows={5}
              className="w-full px-4 py-2 rounded-lg bg-muted/50 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
              placeholder="How can we help you?"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-white font-medium py-3 rounded-lg hover:bg-primary/90 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
