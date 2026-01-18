import connectDB from '@/lib/db';
import Article from '@/models/Articles';
import { redirect } from 'next/navigation';

export default function NewArticle() {
  async function createArticle(formData) {
    'use server';
    await connectDB();
    console.log("mongodb connected")
    const title = formData.get('title');
    const content = formData.get('content');
    const slug = title.toLowerCase().replace(/ /g, '-');

    await Article.create({ title, content, slug });
    redirect(`/articles/${slug}`);
  }

  return (
    <form action={createArticle} className="flex flex-col gap-4 p-10 max-w-lg">
      <input name="title" placeholder="Title" className="border p-2 rounded" required />
      <textarea name="content" placeholder="Content" className="border p-2 rounded h-40" required />
      <button type="submit" className="bg-blue-600 text-white p-2 rounded">Publish</button>
    </form>
  );
}