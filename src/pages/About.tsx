
import React from 'react';
import { Link } from 'react-router-dom';
import { Car, Shield, Clock, Users, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const About = () => {
  const teamMembers = [
    {
      name: 'Sarah Johnson',
      position: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=687',
    },
    {
      name: 'Michael Chen',
      position: 'Chief Operations Officer',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=687',
    },
    {
      name: 'Emily Rodriguez',
      position: 'Fleet Manager',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688',
    },
    {
      name: 'David Kim',
      position: 'Customer Experience Lead',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=687',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-zoomfleet-blue py-16 md:py-24">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1471479917193-f00955256257?q=80&w=1931"
            alt="About Us Hero"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              About ZoomFleet
            </h1>
            <p className="text-lg md:text-xl text-gray-300">
              Revolutionizing the car rental experience with quality vehicles and exceptional service since 2015.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-lg mb-6">Our Story</h2>
              <p className="text-gray-700 mb-4">
                ZoomFleet was founded in 2015 with a simple mission: to make car rentals hassle-free, affordable, and enjoyable. What started as a small fleet of just 10 cars has grown into a nationwide service with thousands of vehicles across multiple categories.
              </p>
              <p className="text-gray-700 mb-4">
                Our founder, Sarah Johnson, experienced firsthand the frustrations of traditional car rental services - long waiting lines, hidden fees, and disappointing vehicles. She decided to create a company that prioritizes transparency, quality, and customer satisfaction.
              </p>
              <p className="text-gray-700">
                Today, ZoomFleet continues to innovate in the car rental industry, leveraging technology to provide seamless bookings, verified quality vehicles, and 24/7 customer support for all your transportation needs.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1591456983933-ea95b7f93a9b?q=80&w=1471"
                alt="ZoomFleet Office"
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-zoomfleet-yellow p-6 rounded-lg shadow-lg hidden md:block">
                <p className="text-zoomfleet-blue font-semibold text-lg">
                  "Quality vehicles, exceptional service. That's our promise."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">Our Core Values</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do, from selecting our fleet to training our team members.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="h-14 w-14 bg-zoomfleet-yellow/20 text-zoomfleet-blue rounded-full flex items-center justify-center mx-auto mb-5">
                <Car className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Quality First</h3>
              <p className="text-gray-600">
                We maintain a modern fleet of well-maintained vehicles to ensure your comfort and safety on every journey.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="h-14 w-14 bg-zoomfleet-yellow/20 text-zoomfleet-blue rounded-full flex items-center justify-center mx-auto mb-5">
                <Shield className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Transparency</h3>
              <p className="text-gray-600">
                No hidden fees or surprises. We believe in clear communication and upfront pricing for all our services.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="h-14 w-14 bg-zoomfleet-yellow/20 text-zoomfleet-blue rounded-full flex items-center justify-center mx-auto mb-5">
                <Clock className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Reliability</h3>
              <p className="text-gray-600">
                Count on us for on-time vehicle delivery, responsive support, and a hassle-free rental experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">Meet Our Team</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              The dedicated professionals who make ZoomFleet's mission possible every day.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg text-zoomfleet-blue">{member.name}</h3>
                  <p className="text-gray-600">{member.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-zoomfleet-blue py-16">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-zoomfleet-yellow mb-2">8+</div>
              <div className="text-lg">Years in Business</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-zoomfleet-yellow mb-2">5000+</div>
              <div className="text-lg">Vehicles</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-zoomfleet-yellow mb-2">25+</div>
              <div className="text-lg">Cities</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-zoomfleet-yellow mb-2">50K+</div>
              <div className="text-lg">Happy Customers</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="heading-lg mb-6">Get in Touch</h2>
              <p className="text-gray-700 mb-6">
                Have questions or feedback? We'd love to hear from you. Our customer service team is available to assist you 24/7.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-zoomfleet-blue mr-3" />
                  <span>(123) 456-7890</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-zoomfleet-blue mr-3" />
                  <span>support@zoomfleet.com</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-zoomfleet-blue mr-3" />
                  <span>24/7 Support Team</span>
                </div>
              </div>

              <div className="mt-8">
                <Button className="bg-zoomfleet-blue hover:bg-zoomfleet-blue/90">
                  Contact Support
                </Button>
              </div>
            </div>

            <div className="bg-gray-100 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Send Us a Message</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-zoomfleet-blue"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-zoomfleet-blue"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-zoomfleet-blue"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-zoomfleet-blue"
                  ></textarea>
                </div>
                <Button className="w-full bg-zoomfleet-yellow text-zoomfleet-blue hover:bg-zoomfleet-yellow/90">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
