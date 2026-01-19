export default function LandmarksPage() {
  const landmarks = [
    {
      name: "Octagon",
      url: "https://nitt.edu/home/campus-life/landmarks/",
    },
    {
      name: "Library (Central Library)",
      url: "https://www.nitt.edu/home/students/facilitiesnservices/library/",
    },
    {
      name: "Pragyan Grounds",
      url: "https://pragyan.org/",
    },
    {
      name: "Sports Complex",
      url: "https://nitt.edu/home/campus-life/sports/",
    },
    {
        name: "Computer Support Group",
        url: "https://www.nitt.edu/home/students/facilitiesnservices/ComputerSupportGroup/"
    },
    {
        name: "Orion",
        url: "https://www.nitt.edu/home/students/facilitiesnservices/ComputerSupportGroup/"
    },
    {
        name: "Shopping Centre",
        url: "https://www.nitt.edu/home/students/facilitiesnservices/sc/    "
    },
    {
        name: "Computer Support Group",
        url: "https://www.nitt.edu/home/students/facilitiesnservices/ComputerSupportGroup/"
    },
    {
      name: "Guest House Building",
      url: "https://www.nitt.edu/home/students/facilitiesnservices/guesthouse/",
    },
    
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Campus Landmarks</h1>

      <div className="space-y-4">
        {landmarks.map((place) => (
          <a
            key={place.name}
            href={place.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block border border-gray-300 rounded-lg p-4 hover:bg-gray-100 hover:border-blue-500 transition"
          >
            {place.name}
          </a>
        ))}
      </div>
    </div>
  );
}
