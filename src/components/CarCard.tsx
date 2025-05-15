
import React from 'react';
import { Link } from 'react-router-dom';
import { Car, Fuel, Settings } from 'lucide-react';
import { Car as CarType } from '@/types/car';
import { Button } from './ui/button';
import { Card, CardContent, CardFooter } from './ui/card';

interface CarCardProps {
  car: CarType;
}

const CarCard = ({ car }: CarCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={car.image} 
          alt={car.name} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute top-2 right-2 bg-zoomfleet-yellow text-zoomfleet-blue px-2 py-1 rounded font-medium text-sm">
          ${car.price}/day
        </div>
      </div>
      <CardContent className="pt-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold text-lg text-zoomfleet-blue">{car.name}</h3>
          <div className="flex items-center text-amber-500">
            <span className="text-sm font-medium mr-1">{car.ratings}</span>
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
        </div>
        <div className="flex items-center text-sm text-gray-500 mb-1">
          <Car className="h-4 w-4 mr-1" />
          <span className="capitalize">{car.type}</span>
          <span className="mx-2">•</span>
          <span>{car.location}</span>
        </div>
        <div className="grid grid-cols-2 gap-2 mt-3">
          <div className="flex items-center text-sm text-gray-500">
            <Fuel className="h-4 w-4 mr-1" />
            <span className="capitalize">{car.fuelType}</span>
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <Settings className="h-4 w-4 mr-1" />
            <span className="capitalize">{car.transmission}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="pt-0">
        <Button asChild className="w-full bg-zoomfleet-blue hover:bg-zoomfleet-blue/90">
          <Link to={`/car/${car.id}`}>
            Book Now
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CarCard;
