"use client";

import { motion } from "framer-motion";
import { Wand2, Smartphone, Palette, Share2, Zap, Shield } from "lucide-react";

const features = [
  {
    icon: <Wand2 className="w-6 h-6 text-primary" />,
    title: "AI Generation",
    description: "Describe your dream tattoo and watch as our AI brings it to life in seconds."
  },
  {
    icon: <Smartphone className="w-6 h-6 text-secondary" />,
    title: "AR Try-On",
    description: "See how the tattoo looks on your body using our advanced Augmented Reality camera."
  },
  {
    icon: <Palette className="w-6 h-6 text-accent" />,
    title: "Style Transfer",
    description: "Convert any image into a tattoo style, from Traditional to Watercolor."
  },
  {
    icon: <Share2 className="w-6 h-6 text-primary" />,
    title: "Easy Sharing",
    description: "Share your designs with friends or your tattoo artist directly from the app."
  },
  {
    icon: <Zap className="w-6 h-6 text-secondary" />,
    title: "Instant Results",
    description: "No waiting times. Get high-quality designs instantly on your device."
  },
  {
    icon: <Shield className="w-6 h-6 text-accent" />,
    title: "Private & Secure",
    description: "Your designs and photos are processed locally and kept private."
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function Features() {
  return (
    <section id="features" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything You Need</h2>
          <p className="text-muted-foreground text-lg">
            Powerful tools to help you find your perfect ink. Designed for tattoo lovers and artists.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-background p-8 rounded-2xl border border-white/10 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
