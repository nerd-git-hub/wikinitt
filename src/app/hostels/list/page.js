import Link from 'next/link';
import { getArticles } from '@/data/articles';

export default function HostelsList() {
  const hostels = getArticles().filter(a => a.category === 'Hostels');
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Campus Hostels</h1>
      <div className="grid gap-4">
        {hostels.map(h => (
          <Link key={h.id} href={`/articles/${h.slug}`} className="p-4 bg-white border rounded shadow-sm hover:bg-blue-50">
            {h.title}
          </Link>
        ))}
      </div>
    </div>
  );
}