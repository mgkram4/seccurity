// app/unit1/components/Unit1Navbar.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Unit1Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="bg-blue-600 p-4">
      <ul className="flex space-x-4 max-w-4xl mx-auto">
        <li>
          <Link href="/" className={`text-white hover:text-blue-200 ${pathname === '/unit1' ? 'font-bold' : ''}`}>
            Unit 1 Content
          </Link>
        </li>
        <li>
          <Link href="/unit1/exercises" className={`text-white hover:text-blue-200 ${pathname === '/unit1/exercises' ? 'font-bold' : ''}`}>
            Exercises
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Unit1Navbar;