import { getArticleBySlug, getArticles } from '@/data/articles';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export default async function ArticlePage({ params }) {
  // Await params for Next.js 15+ compatibility
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  const allArticles = getArticles();

  if (!article) notFound();

  // --- START: processedContent LOGIC ---
  // This satisfies the "Auto-Linking" bonus requirement
  const contentWords = article.content.split(' ');

  const processedContent = contentWords.map((word, index) => {
    const cleanWord = word.replace(/[.,]/g, ''); 
    const linkedArticle = allArticles.find(
      (a) => a.title === cleanWord && a.slug !== slug
    );

    if (linkedArticle) {
      return (
        <Link key={index} href={`/articles/${linkedArticle.slug}`} className="text-blue-600 underline font-semibold hover:text-blue-800">
          {word}{' '}
        </Link>
      );
    }
    return word + ' ';
  });
  // --- END: processedContent LOGIC ---

  return (
    <article className="max-w-4xl mx-auto bg-white p-10 rounded-xl shadow-sm border mt-6">
      <div className="mb-6">
        <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full uppercase">
          {article.category}
        </span>
      </div>
      
      <h1 className="text-4xl font-bold text-gray-900 mb-6">{article.title}</h1>
      
      {/* This is where processedContent is used */}
      <div className="prose lg:prose-xl text-gray-700 leading-relaxed mb-10">
        <p>{processedContent}</p>
      </div>

      {/* MAP SECTION: Only shows if mapUrl exists in articles.js */}
      {article.mapUrl && (
        <div className="mt-8 border-t pt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Location</h2>
          <div className="w-full h-80 rounded-xl overflow-hidden border shadow-sm">
            <iframe
              src={article.mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      )}
    </article>
  );
}