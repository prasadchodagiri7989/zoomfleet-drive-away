
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SearchForm from '@/components/SearchForm';
import { getCarsByLocation } from '@/data/cars';
import CarCard from '@/components/CarCard';
import { Car } from '@/types/car';
import { Fuel, Settings, ArrowDownUp } from 'lucide-react';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';

const Cars = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const initialLocation = searchParams.get('location') || '';
  const pickupDate = searchParams.get('pickup') || '';
  const dropoffDate = searchParams.get('dropoff') || '';

  const [cars, setCars] = useState<Car[]>(getCarsByLocation(initialLocation));
  const [sortOption, setSortOption] = useState('default');
  const [filters, setFilters] = useState({
    types: {
      suv: false,
      sedan: false,
      hatchback: false,
      luxury: false,
    },
    transmission: {
      automatic: false,
      manual: false,
    },
    fuelType: {
      petrol: false,
      diesel: false,
      hybrid: false,
      electric: false,
    },
  });

  useEffect(() => {
    let filteredCars = getCarsByLocation(initialLocation);
    
    // Apply type filters
    const selectedTypes = Object.entries(filters.types)
      .filter(([_, selected]) => selected)
      .map(([type]) => type);
      
    if (selectedTypes.length > 0) {
      filteredCars = filteredCars.filter(car => selectedTypes.includes(car.type));
    }
    
    // Apply transmission filters
    const selectedTransmissions = Object.entries(filters.transmission)
      .filter(([_, selected]) => selected)
      .map(([transmission]) => transmission);
      
    if (selectedTransmissions.length > 0) {
      filteredCars = filteredCars.filter(car => selectedTransmissions.includes(car.transmission));
    }
    
    // Apply fuel type filters
    const selectedFuelTypes = Object.entries(filters.fuelType)
      .filter(([_, selected]) => selected)
      .map(([fuelType]) => fuelType);
      
    if (selectedFuelTypes.length > 0) {
      filteredCars = filteredCars.filter(car => selectedFuelTypes.includes(car.fuelType));
    }
    
    // Apply sorting
    let sortedCars = [...filteredCars];
    switch (sortOption) {
      case 'price-low-high':
        sortedCars.sort((a, b) => a.price - b.price);
        break;
      case 'price-high-low':
        sortedCars.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        sortedCars.sort((a, b) => b.ratings - a.ratings);
        break;
      default:
        // Default sorting, keep original order
        break;
    }
    
    setCars(sortedCars);
  }, [initialLocation, filters, sortOption]);

  const handleFilterChange = (category: 'types' | 'transmission' | 'fuelType', option: string) => {
    setFilters(prev => ({
      ...prev,
      [category]: {
        ...prev[category],
        [option]: !prev[category][option as keyof typeof prev[category]],
      },
    }));
  };

  return (
    <>
      {/* Search Bar */}
      <section className="bg-zoomfleet-blue py-10">
        <div className="container-custom">
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-6">Find Available Cars</h1>
          <SearchForm variant="compact" />
        </div>
      </section>

      {/* Results Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Filters */}
            <div className="lg:col-span-1">
              <div className="bg-white p-5 rounded-lg shadow-sm sticky top-20">
                <h2 className="text-lg font-semibold mb-4">Filters</h2>

                {/* Car Type Filter */}
                <div className="mb-6">
                  <h3 className="font-medium text-zoomfleet-blue mb-2">Car Type</h3>
                  <div className="space-y-2">
                    {['suv', 'sedan', 'hatchback', 'luxury'].map((type) => (
                      <div key={type} className="flex items-center">
                        <Checkbox 
                          id={`type-${type}`}
                          checked={filters.types[type as keyof typeof filters.types]} 
                          onCheckedChange={() => handleFilterChange('types', type)}
                        />
                        <Label htmlFor={`type-${type}`} className="ml-2 capitalize">
                          {type}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Transmission Filter */}
                <div className="mb-6">
                  <h3 className="font-medium text-zoomfleet-blue mb-2">Transmission</h3>
                  <div className="space-y-2">
                    {['automatic', 'manual'].map((transmission) => (
                      <div key={transmission} className="flex items-center">
                        <Checkbox 
                          id={`transmission-${transmission}`}
                          checked={filters.transmission[transmission as keyof typeof filters.transmission]} 
                          onCheckedChange={() => handleFilterChange('transmission', transmission)}
                        />
                        <Label htmlFor={`transmission-${transmission}`} className="ml-2 capitalize">
                          {transmission}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Fuel Type Filter */}
                <div>
                  <h3 className="font-medium text-zoomfleet-blue mb-2">Fuel Type</h3>
                  <div className="space-y-2">
                    {['petrol', 'diesel', 'hybrid', 'electric'].map((fuel) => (
                      <div key={fuel} className="flex items-center">
                        <Checkbox 
                          id={`fuel-${fuel}`}
                          checked={filters.fuelType[fuel as keyof typeof filters.fuelType]} 
                          onCheckedChange={() => handleFilterChange('fuelType', fuel)}
                        />
                        <Label htmlFor={`fuel-${fuel}`} className="ml-2 capitalize">
                          {fuel}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Car Listings */}
            <div className="lg:col-span-3">
              {/* Results Header */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
                <p className="text-gray-600 mb-4 sm:mb-0">
                  <span className="font-medium text-zoomfleet-blue">{cars.length}</span> cars available
                  {initialLocation && ` in ${initialLocation}`}
                  {pickupDate && dropoffDate && ` for your selected dates`}
                </p>

                {/* Sort By */}
                <div className="flex items-center">
                  <ArrowDownUp className="mr-2 h-4 w-4 text-gray-500" />
                  <Select value={sortOption} onValueChange={setSortOption}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="default">Default</SelectItem>
                      <SelectItem value="price-low-high">Price: Low to High</SelectItem>
                      <SelectItem value="price-high-low">Price: High to Low</SelectItem>
                      <SelectItem value="rating">Rating</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Cars Grid */}
              {cars.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {cars.map((car) => (
                    <CarCard key={car.id} car={car} />
                  ))}
                </div>
              ) : (
                <div className="bg-white p-8 rounded-lg text-center shadow-sm">
                  <h3 className="text-xl font-medium text-zoomfleet-blue mb-2">No cars available</h3>
                  <p className="text-gray-600 mb-4">Try adjusting your filters or search for a different location.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cars;
