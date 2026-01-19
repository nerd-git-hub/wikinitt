export default function DepartmentsPage() {
  const departments = [
    {
      name: "Architecture",
      url: "https://nitt.edu/home/academics/departments/cse/",
    },
    {
      name: "CECASE",
      url: "https://nitt.edu/home/academics/departments/cse/",
    },
    {
      name: "Chemical Engineering",
      url: "https://nitt.edu/home/academics/departments/cse/",
    },
    {
      name: "Chemistry",
      url: "https://nitt.edu/home/academics/departments/cse/",
    },
    {
      name: "Civil Engineering",
      url: "https://nitt.edu/home/academics/departments/mech/",
    },
    {
      name: "Computer Applications",
      url: "https://nitt.edu/home/academics/departments/mech/",
    },
    {
      name: "Computer Science and Engineering",
      url: "https://nitt.edu/home/academics/departments/mech/",
    },
    {
      name: "Physics",
      url: "https://nitt.edu/home/academics/departments/mech/",
    },
    {
      name: "Chemical Engineering",
      url: "https://nitt.edu/home/academics/departments/chem/",
    },
    {
      name: "Mechanical Engineering",
      url: "https://nitt.edu/home/academics/departments/mech/",
    },
    {
      name: "Production Engineering",
      url: "https://nitt.edu/home/academics/departments/civil/",
    },
    {
      name: "Electrical and Electronics Engineering",
      url: "https://nitt.edu/home/academics/departments/eee/",
    },
    {
      name: "Electrical and Communication Engineering",
      url: "https://nitt.edu/home/academics/departments/cse/",
    },
    {
      name: "Management Studies",
      url: "https://nitt.edu/home/academics/departments/cse/",
    },
    {
      name: "Mathematics",
      url: "https://nitt.edu/home/academics/departments/cse/",
    },
    {
      name: "Energy and Environment",
      url: "https://nitt.edu/home/academics/departments/cse/",
    },
    {
      name: "Instrumentation and Control Engineering",
      url: "https://nitt.edu/home/academics/departments/cse/",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Departments</h1>

      <div className="space-y-4">
        {departments.map((dept) => (
          <a
            key={dept.name}
            href={dept.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block border border-gray-300 rounded-lg p-4 hover:bg-gray-100 hover:border-blue-500 transition"
          >
            {dept.name} Department
          </a>
        ))}
      </div>
    </div>
  );
}
