
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Car, Menu, X, User } from 'lucide-react';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-custom py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Car className="h-6 w-6 text-zoomfleet-blue" />
            <span className="font-bold text-xl text-zoomfleet-blue">ZoomFleet</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-zoomfleet-blue hover:text-zoomfleet-blue/80">Home</Link>
            <Link to="/cars" className="text-zoomfleet-blue hover:text-zoomfleet-blue/80">Cars</Link>
            <div className="relative group">
              <span className="text-zoomfleet-blue hover:text-zoomfleet-blue/80 cursor-pointer">
                Categories
              </span>
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md hidden group-hover:block">
                <Link to="/category/suv" className="block px-4 py-2 text-zoomfleet-blue hover:bg-gray-100">SUVs</Link>
                <Link to="/category/sedan" className="block px-4 py-2 text-zoomfleet-blue hover:bg-gray-100">Sedans</Link>
                <Link to="/category/hatchback" className="block px-4 py-2 text-zoomfleet-blue hover:bg-gray-100">Hatchbacks</Link>
                <Link to="/category/luxury" className="block px-4 py-2 text-zoomfleet-blue hover:bg-gray-100">Luxury</Link>
              </div>
            </div>
            <Link to="/about" className="text-zoomfleet-blue hover:text-zoomfleet-blue/80">About Us</Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link to="/profile">
              <Button variant="outline" size="sm" className="flex items-center">
                <User className="h-4 w-4 mr-2" /> Profile
              </Button>
            </Link>
            <Link to="/login">
              <Button variant="outline" size="sm">Login</Button>
            </Link>
            <Link to="/signup">
              <Button className="bg-zoomfleet-blue text-white" size="sm">Sign Up</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={toggleMenu} className="md:hidden text-zoomfleet-blue">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={cn(
          "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
          isMenuOpen ? "max-h-96" : "max-h-0"
        )}>
          <div className="flex flex-col space-y-3 pt-4 pb-6">
            <Link to="/" className="px-2 py-1 text-zoomfleet-blue" onClick={toggleMenu}>Home</Link>
            <Link to="/cars" className="px-2 py-1 text-zoomfleet-blue" onClick={toggleMenu}>Cars</Link>
            <Link to="/category/suv" className="px-2 py-1 text-zoomfleet-blue pl-4" onClick={toggleMenu}>SUVs</Link>
            <Link to="/category/sedan" className="px-2 py-1 text-zoomfleet-blue pl-4" onClick={toggleMenu}>Sedans</Link>
            <Link to="/category/hatchback" className="px-2 py-1 text-zoomfleet-blue pl-4" onClick={toggleMenu}>Hatchbacks</Link>
            <Link to="/category/luxury" className="px-2 py-1 text-zoomfleet-blue pl-4" onClick={toggleMenu}>Luxury</Link>
            <Link to="/about" className="px-2 py-1 text-zoomfleet-blue" onClick={toggleMenu}>About Us</Link>
            <Link to="/profile" className="px-2 py-1 text-zoomfleet-blue" onClick={toggleMenu}>Profile</Link>
            <div className="flex space-x-2 pt-2">
              <Link to="/login" onClick={toggleMenu} className="w-full">
                <Button variant="outline" size="sm" className="w-full">Login</Button>
              </Link>
              <Link to="/signup" onClick={toggleMenu} className="w-full">
                <Button className="bg-zoomfleet-blue text-white w-full" size="sm">Sign Up</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
