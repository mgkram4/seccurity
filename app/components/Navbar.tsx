'use client';

import { BeakerIcon, BookOpenIcon, ChevronDownIcon, DocumentTextIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const ModernNavbar = () => {
  const pathname = usePathname();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const units = [
    { id: 1, title: 'Unit 1: Digital Information' },
    { id: 2, title: 'Unit 2: Computer Hardware' },
    { id: 3, title: 'Unit 3: Programming' },
    { id: 4, title: 'Unit 4: Data Structures' },
    { id: 5, title: 'Unit 5: Algorithms' },
  ];

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-4">
                {units.map((unit) => (
                  <div key={unit.id} className="relative group">
                    <div className="flex items-center space-x-1">
                      <Link
                        href={`/unit${unit.id}`}
                        className={`text-white hover:bg-blue-500 px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out ${
                          pathname.startsWith(`/unit${unit.id}`) ? 'bg-blue-700' : ''
                        }`}
                      >
                        <div className="flex items-center space-x-2">
                          <BookOpenIcon className="h-5 w-5" />
                          <span>{unit.title}</span>
                        </div>
                      </Link>
                      <div className="absolute top-full left-0 mt-1 w-48 hidden group-hover:block">
                        <div className="bg-white rounded-md shadow-lg py-1">
                          <Link
                            href={`/unit${unit.id}/exercises`}
                            className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
                          >
                            <BeakerIcon className="h-5 w-5 mr-2 text-blue-500" />
                            <span>Exercises</span>
                          </Link>
                          <Link
                            href={`/unit${unit.id}/terminology`}
                            className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
                          >
                            <DocumentTextIcon className="h-5 w-5 mr-2 text-blue-500" />
                            <span>Terminology</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleDropdown}
              className="inline-flex items-center justify-center p-2 rounded-md text-blue-200 hover:text-white hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-600 focus:ring-white transition duration-150 ease-in-out"
            >
              <span className="sr-only">Open menu</span>
              <ChevronDownIcon className={`h-6 w-6 transform ${isDropdownOpen ? 'rotate-180' : ''} transition-transform duration-150`} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isDropdownOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {units.map((unit) => (
              <div key={unit.id} className="space-y-1">
                <Link
                  href={`/unit${unit.id}`}
                  className={`flex items-center text-white hover:bg-blue-500 px-3 py-2 rounded-md text-base font-medium ${
                    pathname.startsWith(`/unit${unit.id}`) ? 'bg-blue-700' : ''
                  }`}
                >
                  <BookOpenIcon className="h-5 w-5 mr-2" />
                  <span>{unit.title}</span>
                </Link>
                <Link
                  href={`/unit${unit.id}/exercises`}
                  className="flex items-center text-white hover:bg-blue-500 px-3 py-2 rounded-md text-base font-medium pl-8"
                >
                  <BeakerIcon className="h-5 w-5 mr-2" />
                  <span>Exercises</span>
                </Link>
                <Link
                  href={`/unit${unit.id}/terminology`}
                  className="flex items-center text-white hover:bg-blue-500 px-3 py-2 rounded-md text-base font-medium pl-8"
                >
                  <DocumentTextIcon className="h-5 w-5 mr-2" />
                  <span>Terminology</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ModernNavbar;