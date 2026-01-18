import Link from 'next/link';

export default function StudentLifeHub() {
  const categories = [
    { name: 'Clubs', icon: '🎨', path: '/student-life/clubs', desc: 'Technical and Cultural clubs of NITT.' },
    { name: 'Landmarks', icon: '📍', path: '/student-life/landmarks', desc: 'Must-visit spots around the campus.' },
    { name: 'Events', icon: '📅', path: '/student-life/events', desc: 'Festember, Pragyan, and more.' }
  ];

  return (
    <main className="max-w-5xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-center text-blue-900 mb-4">Student Life</h1>
      <p className="text-center text-gray-600 mb-12 text-lg">Experience the vibrant culture of WikiNITT.</p>
      
      <div className="grid md:grid-cols-3 gap-6">
        {categories.map((cat) => (
          <Link key={cat.name} href={cat.path} className="p-8 bg-white border border-gray-200 rounded-2xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group">
            <div className="text-4xl mb-4">{cat.icon}</div>
            <h2 className="text-2xl font-bold text-gray-800 group-hover:text-blue-600">{cat.name}</h2>
            <p className="text-gray-500 mt-2 text-sm">{cat.desc}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}