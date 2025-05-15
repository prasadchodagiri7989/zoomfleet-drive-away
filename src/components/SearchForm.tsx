
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Calendar, MapPin } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { getLocations } from '@/data/cars';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { Calendar as CalendarComponent } from './ui/calendar';
import { format } from 'date-fns';

interface SearchFormProps {
  variant?: 'hero' | 'compact';
}

const SearchForm = ({ variant = 'hero' }: SearchFormProps) => {
  const navigate = useNavigate();
  const locations = getLocations();
  
  const [location, setLocation] = useState('');
  const [pickupDate, setPickupDate] = useState<Date | undefined>(undefined);
  const [dropoffDate, setDropoffDate] = useState<Date | undefined>(undefined);
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);

  const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(e.target.value);
    setShowLocationDropdown(e.target.value.length > 0);
  };

  const selectLocation = (loc: string) => {
    setLocation(loc);
    setShowLocationDropdown(false);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    const searchParams = new URLSearchParams();
    if (location) searchParams.set('location', location);
    if (pickupDate) searchParams.set('pickup', format(pickupDate, 'yyyy-MM-dd'));
    if (dropoffDate) searchParams.set('dropoff', format(dropoffDate, 'yyyy-MM-dd'));
    
    navigate(`/cars?${searchParams.toString()}`);
  };

  return (
    <form 
      onSubmit={handleSearch} 
      className={`bg-white rounded-lg shadow-lg ${variant === 'hero' ? 'p-6 md:p-8' : 'p-4'}`}
    >
      <div className={`grid ${variant === 'hero' ? 'grid-cols-1 md:grid-cols-3 gap-6' : 'grid-cols-1 md:grid-cols-4 gap-4'}`}>
        {/* Location Field */}
        <div className="relative">
          <Label htmlFor="location" className="mb-2 block">Pickup Location</Label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              id="location"
              type="text"
              placeholder="Enter city or airport"
              className="pl-10"
              value={location}
              onChange={handleLocationChange}
              onFocus={() => setShowLocationDropdown(true)}
              onBlur={() => setTimeout(() => setShowLocationDropdown(false), 200)}
            />
            
            {/* Location Dropdown */}
            {showLocationDropdown && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-md shadow-lg z-10 max-h-60 overflow-auto">
                {locations
                  .filter(loc => loc.toLowerCase().includes(location.toLowerCase()))
                  .map((loc, index) => (
                    <div
                      key={index}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => selectLocation(loc)}
                    >
                      {loc}
                    </div>
                  ))}
              </div>
            )}
          </div>
        </div>
          
        {/* Pickup Date Field */}
        <div>
          <Label htmlFor="pickup-date" className="mb-2 block">Pickup Date</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                id="pickup-date"
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

        {/* Dropoff Date Field */}
        <div>
          <Label htmlFor="dropoff-date" className="mb-2 block">Return Date</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                id="dropoff-date"
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

        {/* Search Button - Only shown in compact mode and on mobile for hero */}
        {variant === 'compact' && (
          <div className="flex items-end">
            <Button type="submit" className="w-full bg-zoomfleet-yellow text-zoomfleet-blue hover:bg-zoomfleet-yellow/90">
              <Search className="mr-2 h-4 w-4" />
              Search
            </Button>
          </div>
        )}
      </div>

      {/* Search Button for hero mode (shown below inputs or in line on desktop) */}
      {variant === 'hero' && (
        <div className="mt-6">
          <Button type="submit" className="w-full md:w-auto bg-zoomfleet-yellow text-zoomfleet-blue hover:bg-zoomfleet-yellow/90 py-6 text-lg">
            <Search className="mr-2 h-5 w-5" />
            Find Available Cars
          </Button>
        </div>
      )}
    </form>
  );
};

export default SearchForm;
