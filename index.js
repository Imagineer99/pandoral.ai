import React, { useState } from 'react';
import { MessageCircle, Image, Zap, Heart, ChevronDown, Star } from 'lucide-react';

const LandingPage = () => {
  const [hoveredFeature, setHoveredFeature] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  const features = [
    { icon: <MessageCircle size={48} />, title: "Natural Conversations", description: "Engage in fluid, context-aware dialogues that feel human-like." },
    { icon: <Image size={48} />, title: "Visual Responses", description: "Receive and interpret images, and get visual aids in your conversations." },
    { icon: <Zap size={48} />, title: "Instant Understanding", description: "Experience real-time comprehension of complex queries and ideas." },
    { icon: <Heart size={48} />, title: "Personalized Experience", description: "Enjoy interactions tailored to your preferences and conversation history." }
  ];

  const howItWorks = [
    { step: 1, title: "Sign Up", description: "Create your account and set up your profile." },
    { step: 2, title: "Start a Conversation", description: "Begin chatting with pandoral.ai about any topic." },
    { step: 3, title: "Explore Visual Responses", description: "Experience AI-generated images relevant to your chat." },
    { step: 4, title: "Customize Your Experience", description: "Adjust settings to personalize your AI companion." }
  ];

  const testimonials = [
    { name: "Sarah K.", role: "Creative Director", comment: "pandoral.ai has revolutionized my brainstorming sessions. The visual responses spark creativity like never before!" },
    { name: "David L.", role: "Educator", comment: "As a teacher, I find pandoral.ai invaluable for creating engaging visual aids for my lessons." },
    { name: "Emma R.", role: "Tech Enthusiast", comment: "The natural conversations and instant understanding make pandoral.ai feel like a real companion. It's incredible!" }
  ];

  const faqs = [
    { question: "What makes pandoral.ai unique?", answer: "pandoral.ai combines natural language processing with image generation, offering a multi-modal interaction that brings your conversations to life visually." },
    { question: "Is my data safe with pandoral.ai?", answer: "We prioritize your privacy and security. All conversations are encrypted, and we never share your personal data with third parties." },
    { question: "Can I use pandoral.ai for professional purposes?", answer: "Absolutely! pandoral.ai is versatile and can assist with various professional tasks, from brainstorming to creating visual concepts." },
    { question: "How accurate are the visual responses?", answer: "Our AI model is continuously improving. While not perfect, it strives to generate relevant and creative visual responses based on the conversation context." }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 text-white">
      <header className="container mx-auto px-4 py-6">
        <nav className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">pandoral.ai</h1>
          <div className="space-x-4">
            <a href="#features" className="hover:text-yellow-300 transition-colors">Features</a>
            <a href="#how-it-works" className="hover:text-yellow-300 transition-colors">How It Works</a>
            <a href="#testimonials" className="hover:text-yellow-300 transition-colors">Testimonials</a>
            <button className="bg-white text-purple-600 px-4 py-2 rounded-full font-semibold hover:bg-opacity-90 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              Get Started
            </button>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-16 space-y-20">
        <section className="text-center">
          <h2 className="text-5xl font-bold mb-6 transition-all duration-300 hover:text-6xl hover:text-yellow-300">
            Your AI Companion That Speaks in Images
          </h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto transition-all duration-300 hover:text-2xl">
            Experience a new level of interaction with an AI that understands and responds with both text and images. pandoral.ai brings your conversations to life.
          </p>
          <button className="bg-white text-purple-600 px-8 py-3 rounded-full text-xl font-bold hover:bg-opacity-90 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:px-10">
            Start Chatting Now
          </button>
        </section>

        <section id="features" className="text-center">
          <h2 className="text-4xl font-bold mb-12">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className={`bg-white bg-opacity-10 p-6 rounded-lg transition-all duration-300 transform ${
                  hoveredFeature === index ? 'scale-105 shadow-xl bg-opacity-20' : 'hover:scale-102 hover:shadow-md'
                }`}
                onMouseEnter={() => setHoveredFeature(index)}
                onMouseLeave={() => setHoveredFeature(null)}
              >
                <div className={`mb-4 flex justify-center transition-all duration-300 ${
                  hoveredFeature === index ? 'text-yellow-300 rotate-12' : ''
                }`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="how-it-works" className="text-center">
          <h2 className="text-4xl font-bold mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((step, index) => (
              <div key={index} className="bg-white bg-opacity-10 p-6 rounded-lg">
                <div className="text-3xl font-bold text-yellow-300 mb-4">{step.step}</div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="testimonials" className="text-center">
          <h2 className="text-4xl font-bold mb-12">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white bg-opacity-10 p-6 rounded-lg">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={24} className="text-yellow-300 fill-current" />
                  ))}
                </div>
                <p className="mb-4 italic">"{testimonial.comment}"</p>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-gray-300">{testimonial.role}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-4xl font-bold mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white bg-opacity-10 rounded-lg overflow-hidden">
                <button
                  className="w-full p-4 text-left font-semibold flex justify-between items-center"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  {faq.question}
                  <ChevronDown className={`transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === index && (
                  <div className="p-4 bg-white bg-opacity-5">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Experience pandoral.ai?</h2>
          <p className="text-xl mb-8">Join thousands of users who are already enjoying the future of AI interaction.</p>
          <button className="bg-white text-purple-600 px-8 py-3 rounded-full text-xl font-bold hover:bg-opacity-90 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:px-10">
            Get Started for Free
          </button>
        </section>
      </main>

      <footer className="container mx-auto px-4 py-6 mt-20 border-t border-white border-opacity-20">
        <div className="flex flex-wrap justify-between items-center">
          <div className="text-sm opacity-75">
            © 2024 pandoral.ai - Bringing AI companionship to life
          </div>
          <div className="space-x-4">
            <a href="#" className="hover:text-yellow-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-yellow-300 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-yellow-300 transition-colors">Contact Us</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
