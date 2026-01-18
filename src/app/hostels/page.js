import Link from 'next/link';

export default function HostelsHub() {
  return (
    <main className="max-w-4xl mx-auto py-12 px-4 text-center">
      <h1 className="text-4xl font-bold text-blue-900 mb-8">Hostels & Dining</h1>
      <p className="text-gray-600 mb-12">Select a category to explore life at NITT.</p>
      
      <div className="grid md:grid-cols-2 gap-8">
        {/* Route to Hostel List */}
        <Link href="/hostels/list" className="p-10 bg-white border-2 border-blue-100 rounded-2xl hover:border-blue-500 hover:shadow-xl transition group">
          <div className="text-5xl mb-4">🏠</div>
          <h2 className="text-2xl font-bold text-gray-800 group-hover:text-blue-600">Hostels</h2>
          <p className="text-gray-500 mt-2">Explore the various residential halls on campus.</p>
        </Link>

        {/* Route to Mess Details */}
        <Link href="/hostels/mess" className="p-10 bg-white border-2 border-blue-100 rounded-2xl hover:border-blue-500 hover:shadow-xl transition group">
          <div className="text-5xl mb-4">🍽️</div>
          <h2 className="text-2xl font-bold text-gray-800 group-hover:text-blue-600">Mess & Dining</h2>
          <p className="text-gray-500 mt-2">View mess menus, locations, and timings.</p>
        </Link>
      </div>
    </main>
  );
}