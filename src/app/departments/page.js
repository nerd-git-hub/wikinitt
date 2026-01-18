// src/app/departments/page.js
import Link from 'next/link';
import { getArticles } from '@/data/articles';

export default function DepartmentsPage() {
  const articles = getArticles().filter(a => a.category === 'Departments');

  return (
    <main>
      <h1 className="text-3xl font-bold mb-6">Departments</h1>
      <div className="grid gap-4">
        {articles.length > 0 ? articles.map(a => (
           <Link key={a.id} href={`/articles/${a.slug}`} className="block p-4 bg-white border rounded hover:shadow-md">
             {a.title}
           </Link>
        )) : <p>No departments found.</p>}
      </div>
    </main>
  );
}