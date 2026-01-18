import Link from 'next/link';
import dbConnect from '@/lib/db';
import Article from '@/models/Articles';

export async function getArticles() {
  await dbConnect();

  // 2. Fetch articles from the database (latest 6)
  const articles = await Article.find({});
  console.log("in honme page re", articles)
  return articles
}

export default async function Home() {
  // 1. Connect to MongoDB Atlas
  const articles = await getArticles();

  return (
    <main className="space-y-8">
      {/* Hero Section */}
      <section className="text-center py-12 bg-white rounded-2xl shadow-sm border">
        <h1 className="text-5xl font-extrabold text-blue-900 mb-4">WikiNITT</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          The ultimate guide to Departments, Hostels, and Student Life at NITT.
        </p>
      </section>

      {/* Database Articles */}
      <section>
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Latest from WikiNITT</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <Link 
              key={article._id.toString()} 
              href={`/articles/${article.slug}`}
              className="block p-6 bg-white border border-gray-200 rounded-xl hover:shadow-lg transition group"
            >
              <span className="text-xs font-bold text-blue-600 uppercase">
                {article.category || 'Article'}
              </span>
              <h3 className="text-xl font-bold mt-2 mb-2 text-gray-900 group-hover:text-blue-700">
                {article.title}
              </h3>
              <p className="text-gray-600 text-sm line-clamp-2">
                {article.content}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}