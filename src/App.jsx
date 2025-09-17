import React, { useState, useEffect } from 'react';
import { ArrowDown, MapPin, Calendar, Users, Building, Car, Play, Utensils, ChevronRight } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'overview', 'phases', 'timeline', 'team', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Adjust 100px for a more precise active section indication relative to header
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-slate-900">
              Sid <span className="text-amber-600">Developers</span>
            </div>
            <div className="hidden md:flex space-x-8">
              {['Overview', 'Phases', 'Timeline', 'Team', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-slate-600 hover:text-amber-600 font-medium transition-colors duration-200"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-20 pb-16 lg:pt-32 lg:pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 leading-tight">
                  Redefining
                  <span className="text-amber-600 block">Del Valle</span>
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed">
                  A visionary 4.5-acre commercial development bringing world-class entertainment, 
                  hospitality, and convenience to the heart of Texas.
                </p>
              </div>
              
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5 text-amber-600" />
                  <span className="text-slate-700 font-medium">Del Valle, Texas</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Building className="w-5 h-5 text-amber-600" />
                  <span className="text-slate-700 font-medium">3-Phase Development</span>
                </div>
              </div>

              <button 
                onClick={() => scrollToSection('overview')}
                className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center space-x-2 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <span>Explore the Project</span>
                <ArrowDown className="w-5 h-5" />
              </button>
            </div>
            
            <div className="relative">
              <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-600/20 to-transparent rounded-2xl"></div>
                <img 
                  src="/pictures/Sportstheater.jpeg"
                  alt="Modern Commercial Development"
                  className="w-full h-64 object-cover rounded-lg opacity-90"
                />
                <div className="mt-6 text-white">
                  <h3 className="text-xl font-semibold mb-2">Strategic Location</h3>
                  <p className="text-slate-300">Minutes from COTA and Austin-Bergstrom International Airport</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section id="overview" className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              A <span className="text-amber-500">Landmark</span> Development
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Three carefully planned phases creating a premier destination for entertainment, 
              hospitality, and commerce in Del Valle.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                phase: "Phase 1",
                title: "The Cube Sports Theater",
                description: "Revolutionary 4-theater sports venue with rooftop Austin views",
                icon: Play,
                timeline: "Launch April 2026",
                features: ["4 Giant Theaters", "Bleacher Seating", "Rooftop Terrace", "Premium Sports Experience"]
              },
              {
                phase: "Phase 2", 
                title: "Hotel & Shopping",
                description: "Luxury accommodations with ground-floor retail experience",
                icon: Building,
                timeline: "Future Development",
                features: ["Boutique Hotel", "Ground Floor Retail", "Dining Options", "Guest Amenities"]
              },
              {
                phase: "Phase 3",
                title: "Multi-Level Parking",
                description: "State-of-the-art parking facility serving the entire complex",
                icon: Car,
                timeline: "Final Phase",
                features: ["Multi-Story Structure", "Covered Parking", "EV Charging", "Smart Parking Systems"]
              }
            ].map((phase, index) => (
              <div key={index} className="bg-slate-800 rounded-xl p-8 hover:bg-slate-700 transition-all duration-300 group">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-amber-500 font-semibold text-sm tracking-wider uppercase">
                    {phase.phase}
                  </span>
                  <phase.icon className="w-6 h-6 text-amber-500" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4 group-hover:text-amber-500 transition-colors">
                  {phase.title}
                </h3>
                <p className="text-slate-300 mb-6">{phase.description}</p>
                
                <div className="space-y-2 mb-6">
                  {phase.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <ChevronRight className="w-4 h-4 text-amber-500" />
                      <span className="text-slate-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="text-amber-500 font-semibold text-sm">
                  {phase.timeline}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Cube Spotlight */}
      <section id="phases" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <span className="text-amber-600 font-semibold text-sm tracking-wider uppercase">
                  Phase 1 Spotlight
                </span>
                <h2 className="text-4xl font-bold text-slate-900 mt-2 mb-6">
                  The Cube Sports Theater
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  An unprecedented sports entertainment venue featuring four massive theaters with 
                  stadium-style seating on every wall, creating an immersive 360-degree viewing experience.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-slate-50 rounded-lg p-6">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                    <Play className="w-6 h-6 text-amber-600" />
                  </div>
                  <h4 className="font-semibold text-slate-900 mb-2">Immersive Experience</h4>
                  <p className="text-slate-600 text-sm">360-degree stadium seating in every theater</p>
                </div>
                
                <div className="bg-slate-50 rounded-lg p-6">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                    <Building className="w-6 h-6 text-amber-600" />
                  </div>
                  <h4 className="font-semibold text-slate-900 mb-2">Rooftop Terrace</h4>
                  <p className="text-slate-600 text-sm">Panoramic views of Austin skyline</p>
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
                <h4 className="font-semibold text-slate-900 mb-2 flex items-center">
                  <Calendar className="w-5 h-5 text-amber-600 mr-2" />
                  World Cup Launch
                </h4>
                <p className="text-slate-700">
                  Opening in April 2026, perfectly timed for the World Cup broadcast season.
                </p>
              </div>
            </div>

            <div className="relative">
              <img 
                src="/pictures/Sportstheater.jpeg"
                alt="Modern Sports Entertainment Venue"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent rounded-2xl"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h4 className="text-xl font-semibold mb-1">The Future of Sports Entertainment</h4>
                <p className="text-slate-200">Opening April 2026</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section id="timeline" className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Project Timeline</h2>
            <p className="text-lg text-slate-600">From groundbreaking to grand opening</p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-amber-200"></div>
            
            {[
              { date: "November 2024", title: "Project Launch", description: "Official project announcement and planning phase", side: "left" },
              { date: "January 2025", title: "Groundbreaking", description: "Construction begins on Phase 1 - The Cube", side: "right" },
              { date: "April 2026", title: "The Cube Opens", description: "Grand opening timed with World Cup season", side: "left" },
              { date: "Future Phases", title: "Hotel & Parking", description: "Phases 2 & 3 development timeline to be announced", side: "right" }
            ].map((milestone, index) => (
              <div key={index} className={`relative flex items-center mb-12 ${
                milestone.side === 'left' ? 'flex-row-reverse' : ''
              }`}>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-amber-600 rounded-full border-4 border-white shadow-lg"></div>
                <div className={`w-1/2 ${milestone.side === 'left' ? 'text-right pr-8' : 'pl-8'}`}>
                  <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <span className="text-amber-600 font-semibold text-sm">{milestone.date}</span>
                    <h4 className="text-xl font-bold text-slate-900 mt-1 mb-2">{milestone.title}</h4>
                    <p className="text-slate-600">{milestone.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Development Team</h2>
            <p className="text-lg text-slate-600">Experienced leaders driving innovation in commercial real estate</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Veera M", role: "Lead Developer", image: "/pictures/veera_profilepic.jpg" },
              { name: "Anoop M", role: "Development Partner", image: "/pictures/anoop_profilePic.jpeg" },
              { name: "Alok M", role: "Development Partner", image: "/pictures/alok_profilepic.png" }
            ].map((member, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-48 h-48 rounded-full mx-auto object-cover shadow-lg group-hover:shadow-xl transition-shadow"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent rounded-full"></div>
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">{member.name}</h4>
                <p className="text-amber-600 font-semibold">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
            <p className="text-xl text-slate-300">
              Ready to be part of Del Valle's transformation?
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-amber-500">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-amber-500" />
                    <span>Del Valle, Texas</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Building className="w-5 h-5 text-amber-500" />
                    <span>Near COTA & Austin-Bergstrom Airport</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-2 text-amber-500">Investment Opportunities</h4>
                <p className="text-slate-300">
                  Interested in partnering with us or learning more about investment opportunities? 
                  We'd love to discuss how you can be part of this exciting development.
                </p>
              </div>
            </div>

            <div className="bg-slate-800 rounded-xl p-8">
              <h3 className="text-xl font-bold mb-6">Project Inquiries</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-slate-700 rounded-lg border border-slate-600 focus:border-amber-500 focus:outline-none"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 bg-slate-700 rounded-lg border border-slate-600 focus:border-amber-500 focus:outline-none"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 bg-slate-700 rounded-lg border border-slate-600 focus:border-amber-500 focus:outline-none"
                    placeholder="Tell us about your interest in the project..."
                  ></textarea>
                </div>
                <button className="w-full bg-amber-600 hover:bg-amber-700 py-3 rounded-lg font-semibold transition-colors">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-2xl font-bold text-white mb-4">
                Sid <span className="text-amber-600">Developers</span>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Transforming Del Valle with innovative commercial real estate development.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Project Phases</h4>
              <ul className="space-y-2">
                <li>Phase 1: The Cube Sports Theater</li>
                <li>Phase 2: Hotel & Shopping</li>
                <li>Phase 3: Multi-Level Parking</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Location</h4>
              <ul className="space-y-2">
                <li>Del Valle, Texas</li>
                <li>4.5-Acre Development</li>
                <li>Near COTA & Airport</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-12 pt-8 text-center">
            <p>&copy; 2024 Sid Developers. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
} 