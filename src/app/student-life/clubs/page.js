import Link from 'next/link';
import { getArticles } from '@/data/articles';

export default function CategoryPage() {
  // Change 'Events' to 'Clubs' or 'Landmarks' for the other files
  const items = getArticles().filter(a => a.category === 'Clubs'); 

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <Link href="/student-life" className="text-blue-600 hover:underline mb-4 block">← Back to Student Life</Link>
      <h1 className="text-3xl font-bold mb-8 underline decoration-blue-500">Student Events</h1>
      <div className="grid gap-4">
        {items.map(item => (
          <Link key={item.id} href={`/articles/${item.slug}`} className="p-5 bg-white border rounded-xl shadow-sm hover:border-blue-400 transition">
            <h2 className="text-xl font-bold">{item.title}</h2>
            <p className="text-gray-500 text-sm line-clamp-1">{item.content}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}