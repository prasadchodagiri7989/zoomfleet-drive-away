
import { Car } from '../types/car';

export const cars: Car[] = [
  {
    id: '1',
    name: 'Honda CR-V',
    brand: 'Honda',
    model: 'CR-V',
    type: 'suv',
    price: 45,
    fuelType: 'petrol',
    transmission: 'automatic',
    location: 'New York',
    image: 'https://images.unsplash.com/photo-1617469767053-8f0475cf3383?q=80&w=1920',
    gallery: [
      'https://images.unsplash.com/photo-1617469767053-8f0475cf3383?q=80&w=1920',
      'https://images.unsplash.com/photo-1617469767053-8f0475cf3383?q=80&w=900',
      'https://images.unsplash.com/photo-1617469767053-8f0475cf3383?q=80&w=800'
    ],
    seating: 5,
    luggage: 3,
    features: ['Air Conditioning', 'Bluetooth', 'Navigation System', 'Backup Camera', 'Cruise Control'],
    description: 'The Honda CR-V is a versatile SUV with ample space for passengers and cargo. Perfect for family trips and city driving.',
    ratings: 4.5,
    year: 2022
  },
  {
    id: '2',
    name: 'Toyota Camry',
    brand: 'Toyota',
    model: 'Camry',
    type: 'sedan',
    price: 40,
    fuelType: 'petrol',
    transmission: 'automatic',
    location: 'Los Angeles',
    image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?q=80&w=1920',
    gallery: [
      'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?q=80&w=1920',
      'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?q=80&w=900',
      'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?q=80&w=800'
    ],
    seating: 5,
    luggage: 2,
    features: ['Air Conditioning', 'Bluetooth', 'USB Charging', 'Backup Camera', 'Lane Departure Warning'],
    description: 'The Toyota Camry is a reliable and comfortable sedan, perfect for business trips or weekend getaways.',
    ratings: 4.3,
    year: 2022
  },
  {
    id: '3',
    name: 'BMW X5',
    brand: 'BMW',
    model: 'X5',
    type: 'luxury',
    price: 85,
    fuelType: 'petrol',
    transmission: 'automatic',
    location: 'Miami',
    image: 'https://images.unsplash.com/photo-1627548439233-3cb3a93e5b56?q=80&w=1920',
    gallery: [
      'https://images.unsplash.com/photo-1627548439233-3cb3a93e5b56?q=80&w=1920',
      'https://images.unsplash.com/photo-1627548439233-3cb3a93e5b56?q=80&w=900',
      'https://images.unsplash.com/photo-1627548439233-3cb3a93e5b56?q=80&w=800'
    ],
    seating: 5,
    luggage: 3,
    features: ['Leather Seats', 'Panoramic Sunroof', 'Advanced Navigation', 'Premium Sound System', 'Heated Seats'],
    description: 'Experience luxury with the BMW X5. This premium SUV offers top-of-the-line features and performance.',
    ratings: 4.8,
    year: 2023
  },
  {
    id: '4',
    name: 'Volkswagen Golf',
    brand: 'Volkswagen',
    model: 'Golf',
    type: 'hatchback',
    price: 35,
    fuelType: 'petrol',
    transmission: 'manual',
    location: 'Chicago',
    image: 'https://images.unsplash.com/photo-1589500357979-5d25a2f95319?q=80&w=1920',
    gallery: [
      'https://images.unsplash.com/photo-1589500357979-5d25a2f95319?q=80&w=1920',
      'https://images.unsplash.com/photo-1589500357979-5d25a2f95319?q=80&w=900',
      'https://images.unsplash.com/photo-1589500357979-5d25a2f95319?q=80&w=800'
    ],
    seating: 5,
    luggage: 1,
    features: ['Air Conditioning', 'Bluetooth', 'USB Charging', 'Backup Camera', 'Fuel Efficient'],
    description: 'The Volkswagen Golf is a compact and fuel-efficient hatchback, perfect for city driving and easy parking.',
    ratings: 4.2,
    year: 2021
  },
  {
    id: '5',
    name: 'Jeep Wrangler',
    brand: 'Jeep',
    model: 'Wrangler',
    type: 'suv',
    price: 55,
    fuelType: 'diesel',
    transmission: 'automatic',
    location: 'Denver',
    image: 'https://images.unsplash.com/photo-1609712613096-c463e479c313?q=80&w=1920',
    gallery: [
      'https://images.unsplash.com/photo-1609712613096-c463e479c313?q=80&w=1920',
      'https://images.unsplash.com/photo-1609712613096-c463e479c313?q=80&w=900',
      'https://images.unsplash.com/photo-1609712613096-c463e479c313?q=80&w=800'
    ],
    seating: 4,
    luggage: 2,
    features: ['4x4 Drive', 'Removable Top', 'Off-Road Capability', 'Bluetooth', 'Air Conditioning'],
    description: 'The Jeep Wrangler is built for adventure with its rugged design and off-road capabilities.',
    ratings: 4.6,
    year: 2022
  },
  {
    id: '6',
    name: 'Honda Civic',
    brand: 'Honda',
    model: 'Civic',
    type: 'sedan',
    price: 38,
    fuelType: 'petrol',
    transmission: 'automatic',
    location: 'Seattle',
    image: 'https://images.unsplash.com/photo-1590502147866-bd4704c9a746?q=80&w=1920',
    gallery: [
      'https://images.unsplash.com/photo-1590502147866-bd4704c9a746?q=80&w=1920',
      'https://images.unsplash.com/photo-1590502147866-bd4704c9a746?q=80&w=900',
      'https://images.unsplash.com/photo-1590502147866-bd4704c9a746?q=80&w=800'
    ],
    seating: 5,
    luggage: 2,
    features: ['Fuel Efficient', 'Bluetooth', 'USB Charging', 'Backup Camera', 'Lane Departure Warning'],
    description: 'The Honda Civic is a reliable and fuel-efficient sedan that offers comfort and modern features.',
    ratings: 4.4,
    year: 2022
  },
  {
    id: '7',
    name: 'Tesla Model 3',
    brand: 'Tesla',
    model: 'Model 3',
    type: 'sedan',
    price: 75,
    fuelType: 'electric',
    transmission: 'automatic',
    location: 'San Francisco',
    image: 'https://images.unsplash.com/photo-1561580125-028ee3bd62eb?q=80&w=1920',
    gallery: [
      'https://images.unsplash.com/photo-1561580125-028ee3bd62eb?q=80&w=1920',
      'https://images.unsplash.com/photo-1561580125-028ee3bd62eb?q=80&w=900',
      'https://images.unsplash.com/photo-1561580125-028ee3bd62eb?q=80&w=800'
    ],
    seating: 5,
    luggage: 2,
    features: ['Autopilot', 'Electric', 'Large Touchscreen', 'Premium Sound System', 'Supercharger Access'],
    description: 'The Tesla Model 3 is an all-electric sedan with cutting-edge technology and impressive range.',
    ratings: 4.9,
    year: 2023
  },
  {
    id: '8',
    name: 'Ford Mustang',
    brand: 'Ford',
    model: 'Mustang',
    type: 'luxury',
    price: 70,
    fuelType: 'petrol',
    transmission: 'automatic',
    location: 'Las Vegas',
    image: 'https://images.unsplash.com/photo-1584345604476-8ec5f452d1f8?q=80&w=1920',
    gallery: [
      'https://images.unsplash.com/photo-1584345604476-8ec5f452d1f8?q=80&w=1920',
      'https://images.unsplash.com/photo-1584345604476-8ec5f452d1f8?q=80&w=900',
      'https://images.unsplash.com/photo-1584345604476-8ec5f452d1f8?q=80&w=800'
    ],
    seating: 4,
    luggage: 1,
    features: ['Convertible Option', 'Powerful Engine', 'Premium Sound System', 'Leather Seats', 'Sport Mode'],
    description: 'The Ford Mustang offers a thrilling driving experience with its powerful engine and iconic design.',
    ratings: 4.7,
    year: 2022
  }
];

export const getCarsByType = (type: string) => {
  return cars.filter(car => car.type === type);
};

export const getCarById = (id: string) => {
  return cars.find(car => car.id === id);
};

export const getCarsByLocation = (location: string) => {
  if (!location) return cars;
  return cars.filter(car => car.location.toLowerCase().includes(location.toLowerCase()));
};

export const getLocations = () => {
  const locations = cars.map(car => car.location);
  return [...new Set(locations)];
};
