
export interface Car {
  id: string;
  name: string;
  brand: string;
  model: string;
  type: 'suv' | 'sedan' | 'hatchback' | 'luxury';
  price: number;
  fuelType: 'petrol' | 'diesel' | 'hybrid' | 'electric';
  transmission: 'automatic' | 'manual';
  location: string;
  image: string;
  gallery?: string[];
  seating: number;
  luggage: number;
  features: string[];
  description: string;
  ratings: number;
  year: number;
}

export type SearchParams = {
  location: string;
  pickupDate: string;
  dropoffDate: string;
};
