
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { getCarsByType } from '@/data/cars';
import CarCard from '@/components/CarCard';
import { Button } from '@/components/ui/button';

const Category = () => {
  const { type } = useParams<{ type: string }>();
  const cars = getCarsByType(type || '');

  const categoryData = {
    suv: {
      title: 'SUVs',
      description: 'Sport Utility Vehicles offer extra space, comfort, and capability for all your adventures. Perfect for family trips, outdoor activities, or when you need more cargo space.',
      image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=2070',
    },
    sedan: {
      title: 'Sedans',
      description: 'Our selection of sedans provides the perfect balance of comfort, fuel efficiency, and style. Ideal for business trips, daily commutes, or weekend getaways.',
      image: 'https://images.unsplash.com/photo-1549275301-41eb9e0e34b3?q=80&w=2070',
    },
    hatchback: {
      title: 'Hatchbacks',
      description: 'Compact, versatile and easy to park, our hatchbacks are the perfect choice for city driving. Enjoy great fuel economy and surprising cargo space when the rear seats are folded.',
      image: 'https://images.unsplash.com/photo-1471444928139-75f9fcd523fe?q=80&w=2070',
    },
    luxury: {
      title: 'Luxury Cars',
      description: 'Experience ultimate comfort, cutting-edge technology, and superior performance with our luxury vehicle selection. Perfect for special occasions or when you want to travel in style.',
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1770',
    },
  };

  const currentCategory = type && type in categoryData 
    ? categoryData[type as keyof typeof categoryData] 
    : { title: 'Cars', description: 'Browse our selection of quality vehicles', image: '' };

  return (
    <>
      {/* Category Hero */}
      <section className="relative bg-zoomfleet-blue py-16">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={currentCategory.image || 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1470'}
            alt={`${currentCategory.title} Category`}
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {currentCategory.title}
            </h1>
            <p className="text-lg text-gray-300 mb-6">
              {currentCategory.description}
            </p>
            <Link to="/cars">
              <Button className="bg-zoomfleet-yellow text-zoomfleet-blue hover:bg-zoomfleet-yellow/90">
                View All Cars
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Cars Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="heading-md mb-8">Available {currentCategory.title}</h2>
          
          {cars.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {cars.map((car) => (
                <CarCard key={car.id} car={car} />
              ))}
            </div>
          ) : (
            <div className="bg-white p-8 rounded-lg text-center shadow-sm">
              <h3 className="text-xl font-medium text-zoomfleet-blue mb-2">
                No {currentCategory.title} currently available
              </h3>
              <p className="text-gray-600 mb-4">
                Please check back later or browse our other car categories.
              </p>
              <Link to="/cars">
                <Button>Browse All Cars</Button>
              </Link>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Category;
