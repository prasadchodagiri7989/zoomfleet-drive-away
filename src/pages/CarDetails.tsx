
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getCarById } from '@/data/cars';
import { format } from 'date-fns';
import { Car, Fuel, Settings, Car as CarIcon, Users, Briefcase, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const CarDetails = () => {
  const { id } = useParams<{ id: string }>();
  const car = getCarById(id || '');

  const [pickupDate, setPickupDate] = useState<Date | undefined>(undefined);
  const [dropoffDate, setDropoffDate] = useState<Date | undefined>(undefined);
  const [days, setDays] = useState(1);
  const [totalPrice, setTotalPrice] = useState(car?.price || 0);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    if (!car) return;
    
    if (pickupDate && dropoffDate) {
      const diffTime = Math.abs(dropoffDate.getTime() - pickupDate.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      const calculatedDays = diffDays > 0 ? diffDays : 1;
      
      setDays(calculatedDays);
      setTotalPrice(car.price * calculatedDays);
    } else {
      setDays(1);
      setTotalPrice(car.price);
    }
  }, [pickupDate, dropoffDate, car]);

  if (!car) {
    return (
      <div className="container-custom section-padding">
        <div className="bg-white p-8 rounded-lg text-center shadow-sm">
          <h3 className="text-xl font-medium text-zoomfleet-blue mb-2">
            Car not found
          </h3>
          <p className="text-gray-600 mb-4">
            The car you're looking for might have been removed or doesn't exist.
          </p>
          <Link to="/cars">
            <Button>Browse All Cars</Button>
          </Link>
        </div>
      </div>
    );
  }

  const images = car.gallery || [car.image];

  return (
    <>
      <section className="bg-gray-50 py-6">
        <div className="container-custom">
          <div className="flex items-center text-sm text-gray-600">
            <Link to="/" className="hover:text-zoomfleet-blue">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/cars" className="hover:text-zoomfleet-blue">Cars</Link>
            <span className="mx-2">/</span>
            <Link to={`/category/${car.type}`} className="hover:text-zoomfleet-blue capitalize">{car.type}</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-400">{car.name}</span>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Car Details */}
            <div className="lg:col-span-2">
              <h1 className="heading-lg mb-2">{car.name}</h1>
              
              <div className="flex items-center mb-6">
                <div className="flex items-center text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${i < Math.floor(car.ratings) ? 'text-amber-500' : 'text-gray-300'}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="ml-1 text-sm font-medium">{car.ratings}</span>
                </div>
                <span className="mx-3 text-gray-300">•</span>
                <div className="flex items-center text-gray-600">
                  <CarIcon className="h-4 w-4 mr-1" />
                  <span className="capitalize">{car.type}</span>
                </div>
                <span className="mx-3 text-gray-300">•</span>
                <span className="text-gray-600">{car.location}</span>
              </div>

              {/* Car Gallery */}
              <div className="mb-8">
                <div className="relative rounded-lg overflow-hidden h-64 md:h-80 mb-3">
                  <img 
                    src={images[activeImageIndex]} 
                    alt={car.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="grid grid-cols-4 gap-3">
                  {images.map((image, index) => (
                    <div 
                      key={index}
                      className={`h-20 rounded-md overflow-hidden cursor-pointer ${index === activeImageIndex ? 'ring-2 ring-zoomfleet-blue' : ''}`}
                      onClick={() => setActiveImageIndex(index)}
                    >
                      <img 
                        src={image} 
                        alt={`${car.name} - view ${index + 1}`} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Car Info Tabs */}
              <Tabs defaultValue="overview">
                <TabsList className="grid grid-cols-3 mb-6">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="features">Features</TabsTrigger>
                  <TabsTrigger value="specs">Specifications</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="mt-0">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h2 className="font-semibold text-lg mb-4">About this car</h2>
                    <p className="text-gray-700 mb-6">{car.description}</p>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="flex flex-col items-center p-4 bg-gray-50 rounded-md">
                        <Fuel className="h-6 w-6 text-zoomfleet-blue mb-2" />
                        <span className="text-sm text-gray-500">Fuel Type</span>
                        <span className="font-medium capitalize">{car.fuelType}</span>
                      </div>
                      <div className="flex flex-col items-center p-4 bg-gray-50 rounded-md">
                        <Settings className="h-6 w-6 text-zoomfleet-blue mb-2" />
                        <span className="text-sm text-gray-500">Transmission</span>
                        <span className="font-medium capitalize">{car.transmission}</span>
                      </div>
                      <div className="flex flex-col items-center p-4 bg-gray-50 rounded-md">
                        <Users className="h-6 w-6 text-zoomfleet-blue mb-2" />
                        <span className="text-sm text-gray-500">Seats</span>
                        <span className="font-medium">{car.seating} People</span>
                      </div>
                      <div className="flex flex-col items-center p-4 bg-gray-50 rounded-md">
                        <Briefcase className="h-6 w-6 text-zoomfleet-blue mb-2" />
                        <span className="text-sm text-gray-500">Luggage</span>
                        <span className="font-medium">{car.luggage} Bags</span>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="features" className="mt-0">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h2 className="font-semibold text-lg mb-4">Features & Amenities</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3">
                      {car.features.map((feature, index) => (
                        <div key={index} className="flex items-center">
                          <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="specs" className="mt-0">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h2 className="font-semibold text-lg mb-4">Technical Specifications</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="border-b pb-3">
                        <span className="text-sm text-gray-500 block">Brand</span>
                        <span className="font-medium">{car.brand}</span>
                      </div>
                      <div className="border-b pb-3">
                        <span className="text-sm text-gray-500 block">Model</span>
                        <span className="font-medium">{car.model}</span>
                      </div>
                      <div className="border-b pb-3">
                        <span className="text-sm text-gray-500 block">Year</span>
                        <span className="font-medium">{car.year}</span>
                      </div>
                      <div className="border-b pb-3">
                        <span className="text-sm text-gray-500 block">Fuel Type</span>
                        <span className="font-medium capitalize">{car.fuelType}</span>
                      </div>
                      <div className="border-b pb-3">
                        <span className="text-sm text-gray-500 block">Transmission</span>
                        <span className="font-medium capitalize">{car.transmission}</span>
                      </div>
                      <div className="border-b pb-3">
                        <span className="text-sm text-gray-500 block">Type</span>
                        <span className="font-medium capitalize">{car.type}</span>
                      </div>
                      <div className="border-b pb-3">
                        <span className="text-sm text-gray-500 block">Seating Capacity</span>
                        <span className="font-medium">{car.seating} People</span>
                      </div>
                      <div className="border-b pb-3">
                        <span className="text-sm text-gray-500 block">Luggage Capacity</span>
                        <span className="font-medium">{car.luggage} Bags</span>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            {/* Booking Summary */}
            <div className="lg:col-span-1">
              <Card className="sticky top-20">
                <CardContent className="p-6">
                  <h2 className="font-semibold text-lg mb-4">Booking Summary</h2>

                  <div className="flex justify-between items-center mb-4">
                    <span className="text-gray-600">Rate:</span>
                    <span className="font-semibold">${car.price}/day</span>
                  </div>

                  <div className="space-y-4 mb-6">
                    {/* Pickup Date */}
                    <div>
                      <label className="text-sm text-gray-600 block mb-1">Pickup Date</label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant={"outline"}
                            className="w-full justify-start text-left font-normal"
                          >
                            <Calendar className="mr-2 h-4 w-4" />
                            {pickupDate ? format(pickupDate, "PPP") : <span>Select date</span>}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <CalendarComponent
                            mode="single"
                            selected={pickupDate}
                            onSelect={setPickupDate}
                            initialFocus
                            disabled={(date) => date < new Date()}
                          />
                        </PopoverContent>
                      </Popover>
                    </div>

                    {/* Dropoff Date */}
                    <div>
                      <label className="text-sm text-gray-600 block mb-1">Return Date</label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant={"outline"}
                            className="w-full justify-start text-left font-normal"
                          >
                            <Calendar className="mr-2 h-4 w-4" />
                            {dropoffDate ? format(dropoffDate, "PPP") : <span>Select date</span>}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <CalendarComponent
                            mode="single"
                            selected={dropoffDate}
                            onSelect={setDropoffDate}
                            initialFocus
                            disabled={(date) => (pickupDate ? date <= pickupDate : date < new Date())}
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-4 mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-600">Rental Fee:</span>
                      <span>${car.price} x {days} days</span>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-600">Taxes & Fees:</span>
                      <span>${Math.round(totalPrice * 0.1)}</span>
                    </div>
                    <div className="flex justify-between items-center font-semibold text-lg mt-4">
                      <span>Total:</span>
                      <span>${Math.round(totalPrice * 1.1)}</span>
                    </div>
                  </div>

                  <Button className="w-full bg-zoomfleet-yellow text-zoomfleet-blue hover:bg-zoomfleet-yellow/90">
                    Proceed to Booking
                  </Button>

                  <p className="text-sm text-gray-500 text-center mt-4">
                    Free cancellation up to 48 hours before pickup
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CarDetails;
