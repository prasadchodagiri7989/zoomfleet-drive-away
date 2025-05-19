
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarIcon, User, Settings, Car, Clock } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Badge } from "@/components/ui/badge";

// Mock data for previous bookings
const previousBookings = [
  {
    id: 'BK1001',
    carName: 'Toyota Camry',
    carType: 'sedan',
    startDate: new Date(2024, 4, 5),
    endDate: new Date(2024, 4, 8),
    status: 'completed',
    totalAmount: 240,
    image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=464&ixlib=rb-4.0.3'
  },
  {
    id: 'BK1002',
    carName: 'Honda CR-V',
    carType: 'suv',
    startDate: new Date(2024, 3, 15),
    endDate: new Date(2024, 3, 20),
    status: 'completed',
    totalAmount: 400,
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=1170&ixlib=rb-4.0.3'
  },
  {
    id: 'BK1003',
    carName: 'BMW 3 Series',
    carType: 'luxury',
    startDate: new Date(2024, 2, 10),
    endDate: new Date(2024, 2, 12),
    status: 'completed',
    totalAmount: 360,
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=1170&ixlib=rb-4.0.3'
  }
];

// Mock user data
const userData = {
  name: 'John Doe',
  email: 'demo@sriramtravels.com',
  phone: '+1 (555) 123-4567',
  joinDate: new Date(2023, 5, 15),
  totalBookings: 3,
  points: 450,
  address: '123 Main Street, New York, NY 10001',
};

const DatePickerWithButton = ({ date, setDate }: { date: Date | undefined, setDate: (date: Date | undefined) => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-full justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={(day) => {
            setDate(day);
            setIsOpen(false); // Close the popover when a date is selected
          }}
          initialFocus
          className="pointer-events-auto"
        />
      </PopoverContent>
    </Popover>
  );
};

const Profile = () => {
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* User Info Card */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="h-24 w-24 rounded-full bg-zoomfleet-blue flex items-center justify-center">
                    <User className="h-12 w-12 text-white" />
                  </div>
                </div>
                <CardTitle>{userData.name}</CardTitle>
                <CardDescription>{userData.email}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-gray-500">Phone Number</p>
                  <p>{userData.phone}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Member Since</p>
                  <p>{format(userData.joinDate, "PPP")}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Address</p>
                  <p className="text-sm">{userData.address}</p>
                </div>
                <div className="flex justify-between pt-4 border-t border-gray-100">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-zoomfleet-blue">{userData.totalBookings}</p>
                    <p className="text-xs text-gray-500">Bookings</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-zoomfleet-blue">{userData.points}</p>
                    <p className="text-xs text-gray-500">Reward Points</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  <Settings className="mr-2 h-4 w-4" /> Account Settings
                </Button>
              </CardFooter>
            </Card>
          </div>
          
          {/* Main Content Area */}
          <div className="lg:col-span-3">
            <h1 className="text-3xl font-bold text-zoomfleet-blue mb-6">My Profile</h1>
            
            <Tabs defaultValue="bookings" className="w-full">
              <TabsList className="grid grid-cols-2 w-full max-w-md mb-6">
                <TabsTrigger value="bookings">Booking History</TabsTrigger>
                <TabsTrigger value="upcoming">Upcoming Bookings</TabsTrigger>
              </TabsList>
              
              {/* Bookings Tab */}
              <TabsContent value="bookings" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Filter Bookings</CardTitle>
                    <CardDescription>Select a date range to filter your bookings</CardDescription>
                  </CardHeader>
                  <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="text-sm font-medium text-gray-500">From Date</div>
                      <DatePickerWithButton date={startDate} setDate={setStartDate} />
                    </div>
                    <div className="space-y-2">
                      <div className="text-sm font-medium text-gray-500">To Date</div>
                      <DatePickerWithButton date={endDate} setDate={setEndDate} />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button 
                      variant="outline" 
                      className="mr-2"
                      onClick={() => {
                        setStartDate(undefined);
                        setEndDate(undefined);
                      }}
                    >
                      Clear Filter
                    </Button>
                    <Button className="bg-zoomfleet-blue">Apply Filter</Button>
                  </CardFooter>
                </Card>
                
                {/* Previous Bookings */}
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold text-gray-800">Previous Bookings</h2>
                  
                  {previousBookings.map((booking) => (
                    <Card key={booking.id} className="overflow-hidden">
                      <div className="grid grid-cols-1 md:grid-cols-3">
                        <div className="h-48 md:h-full bg-gray-100">
                          <img 
                            src={booking.image} 
                            alt={booking.carName} 
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="md:col-span-2 p-6">
                          <div className="flex justify-between items-start mb-4">
                            <div>
                              <h3 className="text-lg font-semibold">{booking.carName}</h3>
                              <p className="text-sm text-gray-500 capitalize">{booking.carType}</p>
                            </div>
                            <Badge variant={booking.status === 'completed' ? 'default' : 'destructive'} className="bg-green-100 text-green-800 hover:bg-green-200">
                              {booking.status}
                            </Badge>
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div>
                              <p className="text-sm text-gray-500">Booking ID</p>
                              <p className="font-medium">{booking.id}</p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-500">Total Amount</p>
                              <p className="font-medium">${booking.totalAmount}</p>
                            </div>
                            <div className="flex items-start space-x-2">
                              <CalendarIcon className="h-5 w-5 text-gray-400 mt-0.5" />
                              <div>
                                <p className="text-sm text-gray-500">Pick-up Date</p>
                                <p className="font-medium">{format(booking.startDate, "PPP")}</p>
                              </div>
                            </div>
                            <div className="flex items-start space-x-2">
                              <CalendarIcon className="h-5 w-5 text-gray-400 mt-0.5" />
                              <div>
                                <p className="text-sm text-gray-500">Return Date</p>
                                <p className="font-medium">{format(booking.endDate, "PPP")}</p>
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                            <div className="flex items-center text-sm text-gray-500">
                              <Clock className="h-4 w-4 mr-1" />
                              <span>
                                {Math.round((booking.endDate.getTime() - booking.startDate.getTime()) / (1000 * 60 * 60 * 24))} days rental
                              </span>
                            </div>
                            <div>
                              <Button variant="outline" size="sm" className="mr-2">
                                View Details
                              </Button>
                              <Button size="sm" className="bg-zoomfleet-blue">
                                Book Again
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              {/* Upcoming Tab (Empty State) */}
              <TabsContent value="upcoming">
                <Card className="text-center p-12">
                  <div className="flex flex-col items-center max-w-md mx-auto">
                    <div className="rounded-full bg-blue-50 p-6 mb-4">
                      <Car className="h-12 w-12 text-zoomfleet-blue" />
                    </div>
                    <CardTitle className="mb-2">No Upcoming Bookings</CardTitle>
                    <CardDescription className="mb-6">
                      You don't have any upcoming car rentals scheduled. Ready for your next adventure?
                    </CardDescription>
                    <Link to="/cars">
                      <Button className="bg-zoomfleet-blue">Browse Cars</Button>
                    </Link>
                  </div>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
