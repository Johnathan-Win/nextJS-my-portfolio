'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const myName = "Thanathon";

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ];

  const handleMenuClose = () => {
    setIsMenuOpen(false); // ปิดเมนูเมื่อกดลิงก์
  };

  return (
    <nav className="bg-gray-900 text-white py-4 shadow-lg fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* เพิ่ม mr-10 เพื่อห่างจากชื่อ */}
        <h1 className="text-2xl font-bold tracking-wide mr-10">{myName}</h1>
        
        {/* เมนู */}
        <ul className={`md:flex space-x-0 ${isMenuOpen ? 'flex' : 'hidden'} md:block absolute md:static top-full left-0 w-full bg-gray-900 md:bg-transparent`}>
          {navItems.map((item) => (
            <li key={item.href} className="w-full text-center md:w-auto">
              <Link
                href={item.href}
                className={`text-lg font-medium transition duration-300 hover:text-blue-400 px-4 py-2 block ${pathname === item.href ? 'border-b-2 border-blue-400' : ''}`}
                onClick={item.href === item.href  ? handleMenuClose : undefined} // ปิดเมนูเมื่อกดเลือก 'Home' หรือ 'Contact' อื่นๆ
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* เมนูขนาดมือถือ */}
        <div className="md:hidden ml-auto">
          <button
            className="text-3xl text-white p-2 rounded-md focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
