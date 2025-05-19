
import React from 'react';
import SearchForm from '@/components/SearchForm';
import { getCarsByType } from '@/data/cars';
import CarCard from '@/components/CarCard';
import { Link } from 'react-router-dom';
import { Car, Clock, Check, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Home = () => {
  const featuredSUVs = getCarsByType('suv').slice(0, 4);
  const featuredLuxury = getCarsByType('luxury').slice(0, 4);

  const testimonials = [
    {
      id: 1,
      name: 'Emma Johnson',
      location: 'New York',
      text: 'Cificap made our family vacation a breeze. The SUV was clean, comfortable, and perfect for our road trip.',
      rating: 5,
    },
    {
      id: 2,
      name: 'Michael Chen',
      location: 'San Francisco',
      text: 'I needed a car for a business trip and the process was seamless. Their customer service is exceptional.',
      rating: 4,
    },
    {
      id: 3,
      name: 'Sophia Rodriguez',
      location: 'Miami',
      text: 'I rent cars frequently and Sriram Travels offers the best variety of luxury vehicles. My go-to rental service.',
      rating: 5,
    },
  ];

  const categories = [
    {
      name: 'SUVs',
      description: 'Spacious vehicles perfect for families and group trips',
      image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=1470',
      link: '/category/suv',
    },
    {
      name: 'Sedans',
      description: 'Comfortable and fuel-efficient cars for everyday driving',
      image: 'https://images.unsplash.com/photo-1549275301-41eb9e0e34b3?q=80&w=1470',
      link: '/category/sedan',
    },
    {
      name: 'Hatchbacks',
      description: 'Compact and practical cars ideal for city driving',
      image: 'https://images.unsplash.com/photo-1471444928139-75f9fcd523fe?q=80&w=1470',
      link: '/category/hatchback',
    },
    {
      name: 'Luxury',
      description: 'Premium vehicles for those special occasions',
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1470',
      link: '/category/luxury',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-zoomfleet-blue py-16 md:py-28">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=1470"
            alt="Hero Background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Rent Your Perfect Car in Minutes
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              Find and book your ideal vehicle from our wide selection of quality cars
            </p>
          </div>

          {/* Search Form */}
          <div className="max-w-5xl mx-auto">
            <SearchForm variant="hero" />
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">Browse by Category</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer a wide range of vehicles for all your needs. From compact cars to luxury sedans, we have you covered.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Link to={category.link} key={category.name} className="group">
                <div className="relative rounded-lg overflow-hidden h-60 shadow-md">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                    <div className="absolute bottom-0 left-0 p-6">
                      <h3 className="text-xl font-semibold text-white mb-1">{category.name}</h3>
                      <p className="text-sm text-gray-200">{category.description}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured SUVs */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="flex justify-between items-center mb-8">
            <h2 className="heading-md">Popular SUVs</h2>
            <Link to="/category/suv" className="text-zoomfleet-blue hover:underline font-medium">
              View All SUVs
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredSUVs.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">Why Choose Sriram Travels</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We strive to provide exceptional service and make your car rental experience as smooth as possible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="h-14 w-14 bg-zoomfleet-yellow/20 text-zoomfleet-blue rounded-full flex items-center justify-center mx-auto mb-5">
                <Clock className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold mb-3">24/7 Support</h3>
              <p className="text-gray-600">
                Our customer service team is available around the clock to assist you with any questions or concerns.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="h-14 w-14 bg-zoomfleet-yellow/20 text-zoomfleet-blue rounded-full flex items-center justify-center mx-auto mb-5">
                <Check className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Verified Vehicles</h3>
              <p className="text-gray-600">
                All our vehicles undergo rigorous inspections to ensure safety, cleanliness, and performance.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="h-14 w-14 bg-zoomfleet-yellow/20 text-zoomfleet-blue rounded-full flex items-center justify-center mx-auto mb-5">
                <Car className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Instant Confirmation</h3>
              <p className="text-gray-600">
                Receive immediate confirmation of your booking, allowing you to plan your trip with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Luxury */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="flex justify-between items-center mb-8">
            <h2 className="heading-md">Luxury Collection</h2>
            <Link to="/category/luxury" className="text-zoomfleet-blue hover:underline font-medium">
              View All Luxury Cars
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredLuxury.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-zoomfleet-blue text-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Don't just take our word for it — hear from our satisfied customers who have experienced our service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${i < testimonial.rating ? 'text-zoomfleet-yellow' : 'text-gray-400'}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-gray-200 mb-4">"{testimonial.text}"</blockquote>
                <div className="mt-4">
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-300">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="bg-zoomfleet-yellow/10 border border-zoomfleet-yellow rounded-lg p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0 md:mr-8">
                <h2 className="text-2xl md:text-3xl font-bold text-zoomfleet-blue mb-3">
                  Need Assistance with Your Booking?
                </h2>
                <p className="text-gray-700">
                  Our customer support team is ready to help you find the perfect vehicle.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-zoomfleet-blue hover:bg-zoomfleet-blue/90">
                  <Phone className="h-4 w-4 mr-2" />
                  Contact Support
                </Button>
                <Link to="/cars">
                  <Button variant="outline" className="border-zoomfleet-blue text-zoomfleet-blue hover:bg-zoomfleet-blue hover:text-white">
                    Browse All Cars
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
