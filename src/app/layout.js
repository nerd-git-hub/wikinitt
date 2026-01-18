import Navbar from '@/components/Navbar';
import './globals.css';

export const metadata = {
  title: 'WikiNITT',
  description: 'The NITT Student Wiki',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 min-h-screen text-gray-900">
        <Navbar />
        <div className="max-w-6xl mx-auto p-6">
          {children}
        </div>
      </body>
    </html>
  );
}