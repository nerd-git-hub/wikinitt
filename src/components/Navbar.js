// src/components/Navbar.js
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-blue-900 text-white p-4 shadow-md">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Logo / Title */}
        <Link href="/" className="text-2xl font-bold tracking-wider">
          WikiNITT
        </Link>

        {/* Navigation Menu */}
        <div className="flex gap-6 text-sm font-medium">
          <Link href="/" className="hover:text-blue-300 transition">Home</Link>
          <Link href="/departments" className="hover:text-blue-300 transition">Departments</Link>
          <Link href="/hostels" className="hover:text-blue-300 transition">Hostels</Link>
          <Link href="/student-life" className="hover:text-blue-300 transition">Student Life</Link>
          <Link href="/admin" className="hover:text-blue-300 transition text-yellow-300">Admin</Link>
        </div>

        {/* Search Bar (UI Only as permitted) */}
        <div className="relative">
          <input 
            type="text" 
            placeholder="Search Wiki..." 
            className="px-4 py-1 rounded-full text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
      </div>
    </nav>
  );
}