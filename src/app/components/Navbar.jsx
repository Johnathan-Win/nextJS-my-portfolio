'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();
  const myName = "Thanathon";

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="bg-gray-900 text-white py-4 shadow-lg fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-6">
        <h1 className="text-2xl font-bold tracking-wide">{myName}</h1>
        <ul className="flex space-x-6">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`text-lg font-medium transition duration-300 hover:text-blue-400 ${
                  pathname === item.href ? 'border-b-2 border-blue-400' : ''
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
