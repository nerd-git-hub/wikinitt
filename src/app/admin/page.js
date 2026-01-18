export default function AdminPage() {
  return (
    <div className="max-w-2xl mx-auto p-8 bg-white shadow-md rounded-xl mt-10">
      <h1 className="text-3xl font-bold mb-6 text-red-600">WikiNITT Admin Panel</h1>
      <p className="mb-6 text-gray-600">Add a new article to the Wiki. (Hardcoded version - will reset on restart)</p>
      
      <form className="flex flex-col gap-4">
        <input type="text" placeholder="Article Title" className="border p-3 rounded" />
        <select className="border p-3 rounded">
          <option>Departments</option>
          <option>Hostels</option>
          <option>Student Life</option>
        </select>
        <textarea placeholder="Content..." className="border p-3 rounded h-40"></textarea>
        <button type="button" className="bg-blue-900 text-white p-3 rounded font-bold">
          Publish to WikiNITT
        </button>
      </form>
    </div>
  );
}