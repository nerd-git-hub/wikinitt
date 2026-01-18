/** @type {import('next').NextConfig} */
const nextConfig = {

  // 2. Reroute specific paths to the official NITT website
  // async redirects() {
  //   return [
  //     {
  //       source: '/departments',
  //       destination: 'https://www.nitt.edu/home/academics/departments/',
  //       permanent: false,
  //     },
  //     {
  //       source: '/hostels',
  //       destination: 'https://www.nitt.edu/home/students/facilitiesnservices/hostels/',
  //       permanent: false,
  //     },
  //     {
  //       source: '/mess',
  //       destination: 'https://www.nitt.edu/home/students/facilitiesnservices/hostels/mess/',
  //       permanent: false,
  //     }
  //   ];
  // },
};

export default nextConfig;