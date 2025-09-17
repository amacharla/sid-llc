import React, { useState, useEffect } from 'react';
import { ArrowDown, MapPin, Calendar, Building, Car, Play, Hotel, ParkingCircle, ChevronRight, Clock } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'project', 'phases', 'timeline', 'team', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
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
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-blue-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-blue-900">
              Sid <span className="text-orange-600">Developers</span>
            </div>
            <div className="hidden md:flex space-x-8">
              {['About', 'Project', 'Phases', 'Timeline', 'Team', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`font-medium transition-colors duration-200 ${
                    activeSection === item.toLowerCase() 
                      ? 'text-orange-600' 
                      : 'text-blue-600 hover:text-orange-600'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-24 pb-20 lg:pt-32 lg:pb-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-7xl font-bold text-blue-900 leading-tight mb-8">
              Building the Future of
              <span className="text-orange-600 block">Del Valle</span>
            </h1>
            <p className="text-xl lg:text-2xl text-blue-700 leading-relaxed mb-12">
              Family-owned commercial real estate development bringing world-class entertainment, 
              hospitality, and convenience to the heart of Texas.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
              <div className="flex items-center space-x-2">
                <MapPin className="w-6 h-6 text-orange-600" />
                <span className="text-blue-800 font-semibold text-lg">Del Valle, Texas</span>
              </div>
              <div className="flex items-center space-x-2">
                <Building className="w-6 h-6 text-orange-600" />
                <span className="text-blue-800 font-semibold text-lg">4.5 Acres</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-6 h-6 text-orange-600" />
                <span className="text-blue-800 font-semibold text-lg">3-Phase Development</span>
              </div>
            </div>

            <button 
              onClick={() => scrollToSection('project')}
              className="bg-orange-600 hover:bg-orange-700 text-white px-10 py-5 rounded-xl font-semibold text-lg flex items-center space-x-3 transition-all duration-200 shadow-xl hover:shadow-2xl mx-auto"
            >
              <span>Explore Our Vision</span>
              <ArrowDown className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-8">
                Strategic Location,
                <span className="text-orange-400 block">Endless Possibilities</span>
              </h2>
              <p className="text-xl text-blue-100 leading-relaxed mb-8">
                Our prime 4.5-acre development site in Del Valle, Texas offers unmatched accessibility 
                and growth potential, perfectly positioned near major attractions and transportation hubs.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-blue-800 rounded-lg p-6">
                  <h4 className="font-bold text-orange-400 mb-2">Near COTA</h4>
                  <p className="text-blue-100 text-sm">
                    Minutes from Circuit of the Americas, Austin's premier racing venue
                  </p>
                </div>
                <div className="bg-blue-800 rounded-lg p-6">
                  <h4 className="font-bold text-orange-400 mb-2">Airport Access</h4>
                  <p className="text-blue-100 text-sm">
                    Convenient access to Austin-Bergstrom International Airport
                  </p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-orange-500 to-orange-700 rounded-2xl p-8 shadow-2xl">
                <img 
                  src="/pictures/Sportstheater.jpeg"
                  alt="Sid Developers Project Vision"
                  className="w-full h-80 object-cover rounded-xl"
                />
                <div className="mt-6">
                  <h3 className="text-2xl font-bold mb-3">Prime Development Opportunity</h3>
                  <p className="text-orange-100">
                    Transforming 4.5 acres into a landmark destination for entertainment and commerce
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section id="project" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-blue-900 mb-6">
              Three-Phase <span className="text-orange-600">Master Plan</span>
            </h2>
            <p className="text-xl text-blue-700 max-w-3xl mx-auto">
              A carefully orchestrated development bringing sports entertainment, hospitality, 
              and modern amenities to Del Valle.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                phase: "Phase 1",
                title: "The Cube Sports Theater",
                description: "Revolutionary sports entertainment venue with immersive viewing experience",
                icon: Play,
                timeline: "Completion: April 2026",
                color: "orange",
                features: [
                  "4 Giant Theater Screens", 
                  "Bleacher Seating on All Walls", 
                  "Rooftop Terrace", 
                  "Austin Skyline Views"
                ]
              },
              {
                phase: "Phase 2", 
                title: "Hotel & Retail Complex",
                description: "Modern accommodations with ground-floor shopping experience",
                icon: Hotel,
                timeline: "Future Development",
                color: "blue",
                features: [
                  "Full-Service Hotel", 
                  "Ground Floor Shopping", 
                  "Dining & Entertainment", 
                  "Guest Amenities"
                ]
              },
              {
                phase: "Phase 3",
                title: "Multi-Floor Parking",
                description: "State-of-the-art parking facility serving the entire development",
                icon: ParkingCircle,
                timeline: "Final Phase",
                color: "green",
                features: [
                  "Multi-Story Structure", 
                  "Covered Parking Spaces", 
                  "EV Charging Stations", 
                  "Smart Parking Technology"
                ]
              }
            ].map((phase, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                  <span className={`text-${phase.color}-600 font-bold text-sm tracking-wider uppercase bg-${phase.color}-50 px-3 py-1 rounded-full`}>
                    {phase.phase}
                  </span>
                  <phase.icon className={`w-8 h-8 text-${phase.color}-600`} />
                </div>
                
                <h3 className={`text-2xl font-bold mb-4 group-hover:text-${phase.color}-600 transition-colors`}>
                  {phase.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{phase.description}</p>
                
                <div className="space-y-3 mb-6">
                  {phase.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <ChevronRight className={`w-4 h-4 text-${phase.color}-500`} />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className={`text-${phase.color}-600 font-semibold text-sm flex items-center space-x-2`}>
                  <Clock className="w-4 h-4" />
                  <span>{phase.timeline}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Cube Spotlight */}
      <section id="phases" className="py-20 bg-gradient-to-br from-orange-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <span className="text-orange-600 font-bold text-sm tracking-wider uppercase bg-orange-100 px-4 py-2 rounded-full">
                  Phase 1 Spotlight
                </span>
                <h2 className="text-4xl lg:text-5xl font-bold text-blue-900 mt-4 mb-6">
                  The Cube Sports Theater
                </h2>
                <p className="text-lg text-blue-700 leading-relaxed">
                  An unprecedented sports entertainment destination featuring four massive theater screens 
                  with stadium-style bleacher seating on every wall, creating a complete 360-degree 
                  immersive viewing experience unlike anywhere else in Texas.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                    <Play className="w-8 h-8 text-orange-600" />
                  </div>
                  <h4 className="font-bold text-blue-900 mb-2">360° Experience</h4>
                  <p className="text-blue-600 text-sm">Complete immersion with bleacher seating facing all four walls</p>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                    <Building className="w-8 h-8 text-blue-600" />
                  </div>
                  <h4 className="font-bold text-blue-900 mb-2">Rooftop Terrace</h4>
                  <p className="text-blue-600 text-sm">Stunning panoramic views of the Austin skyline</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-orange-500 to-blue-600 rounded-xl p-6 text-white">
                <h4 className="font-bold mb-2 flex items-center text-lg">
                  <Calendar className="w-6 h-6 mr-3" />
                  World Cup Launch Timing
                </h4>
                <p className="text-orange-100">
                  Grand opening scheduled for April 2026, perfectly aligned with the FIFA World Cup 
                  broadcast season for maximum impact and excitement.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-blue-600 rounded-2xl transform rotate-3"></div>
              <img 
                src="/pictures/Sportstheater.jpeg"
                alt="The Cube Sports Theater Concept"
                className="relative w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm rounded-xl p-4">
                <h4 className="text-xl font-bold text-blue-900 mb-1">The Future of Sports Entertainment</h4>
                <p className="text-blue-700">Opening April 2026 • Del Valle, Texas</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section id="timeline" className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-blue-900 mb-4">Development Timeline</h2>
            <p className="text-xl text-blue-700">From planning to completion - our roadmap to success</p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-orange-400 to-blue-400"></div>
            
            {[
              { 
                date: "November 2024", 
                title: "Project Launch", 
                description: "Official project announcement and final planning phase begins", 
                side: "left",
                color: "orange" 
              },
              { 
                date: "January 2025", 
                title: "Groundbreaking Ceremony", 
                description: "Construction officially begins on Phase 1 - The Cube Sports Theater", 
                side: "right",
                color: "blue" 
              },
              { 
                date: "April 2026", 
                title: "The Cube Grand Opening", 
                description: "Phase 1 complete and opens to coincide with World Cup season", 
                side: "left",
                color: "green" 
              },
              { 
                date: "Future Phases", 
                title: "Hotel & Parking Development", 
                description: "Phases 2 & 3 development timeline to be announced following Phase 1 success", 
                side: "right",
                color: "purple" 
              }
            ].map((milestone, index) => (
              <div key={index} className={`relative flex items-center mb-16 ${
                milestone.side === 'left' ? 'flex-row-reverse' : ''
              }`}>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-br from-orange-400 to-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                <div className={`w-1/2 ${milestone.side === 'left' ? 'text-right pr-12' : 'pl-12'}`}>
                  <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow border border-gray-100">
                    <span className="text-orange-600 font-bold text-sm tracking-wider uppercase">{milestone.date}</span>
                    <h4 className="text-2xl font-bold text-blue-900 mt-2 mb-3">{milestone.title}</h4>
                    <p className="text-blue-600 leading-relaxed">{milestone.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="py-20 bg-gradient-to-br from-blue-50 to-orange-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-blue-900 mb-6">Meet Our Family</h2>
            <p className="text-xl text-blue-700">The experienced leadership team behind Sid Developers</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Veera M", role: "Lead Developer", image: "/pictures/veera_profilepic.jpg" },
              { name: "Anoop M", role: "Development Partner", image: "/pictures/anoop_profilePic.jpeg" },
              { name: "Alok M", role: "Development Partner", image: "/pictures/alok_profilepic.png" }
            ].map((member, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-8">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-blue-600 rounded-full transform group-hover:rotate-6 transition-transform duration-300"></div>
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="relative w-56 h-56 rounded-full mx-auto object-cover shadow-2xl border-4 border-white group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h4 className="text-2xl font-bold text-blue-900 mb-2">{member.name}</h4>
                <p className="text-orange-600 font-semibold text-lg">{member.role}</p>
                <p className="text-blue-600 mt-2">Sid Developers</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Let's Build Together</h2>
            <p className="text-xl text-blue-100">
              Ready to be part of Del Valle's transformation? We'd love to hear from you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-orange-400">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold">Location</p>
                      <p className="text-blue-100">Del Valle, Texas</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                      <Building className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold">Project Size</p>
                      <p className="text-blue-100">4.5-Acre Development</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-bold mb-3 text-orange-400">Partnership Opportunities</h4>
                <p className="text-blue-100 leading-relaxed">
                  Interested in investment opportunities or partnerships? We welcome discussions 
                  about how you can be part of this exciting development in Del Valle.
                </p>
              </div>
            </div>

            <div className="bg-blue-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-blue-100">Full Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-blue-700 rounded-lg border border-blue-600 focus:border-orange-400 focus:outline-none text-white placeholder-blue-200"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-blue-100">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 bg-blue-700 rounded-lg border border-blue-600 focus:border-orange-400 focus:outline-none text-white placeholder-blue-200"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-blue-100">Message</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 bg-blue-700 rounded-lg border border-blue-600 focus:border-orange-400 focus:outline-none text-white placeholder-blue-200"
                    placeholder="Tell us about your interest in the project..."
                  ></textarea>
                </div>
                <button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 py-4 rounded-lg font-bold text-lg transition-all duration-200 shadow-lg hover:shadow-xl">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-950 text-blue-200 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="text-3xl font-bold text-white mb-4">
                Sid <span className="text-orange-500">Developers</span>
              </div>
              <p className="text-blue-300 leading-relaxed mb-6">
                Family-owned commercial real estate development company transforming 
                Del Valle, Texas with innovative entertainment and hospitality destinations.
              </p>
              <div className="text-sm text-blue-400">
                Building the future, one development at a time.
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-6">Development Phases</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center space-x-2">
                  <Play className="w-4 h-4 text-orange-400" />
                  <span>Phase 1: The Cube Sports Theater</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Hotel className="w-4 h-4 text-blue-400" />
                  <span>Phase 2: Hotel & Retail</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Car className="w-4 h-4 text-green-400" />
                  <span>Phase 3: Multi-Floor Parking</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-6">Project Details</h4>
              <ul className="space-y-3 text-sm">
                <li>Del Valle, Texas</li>
                <li>4.5-Acre Development</li>
                <li>Near COTA & Airport</li>
                <li>Family Owned Business</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-blue-800 mt-12 pt-8 text-center">
            <p className="text-blue-400">
              &copy; 2024 Sid Developers. All rights reserved. | Building Del Valle's Future
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
} 