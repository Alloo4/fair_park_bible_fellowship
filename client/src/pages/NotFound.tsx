import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 flex items-center justify-center py-20">
        <div className="container max-w-2xl mx-auto text-center">
          <h1 className="font-serif text-6xl font-bold text-[#6F4E37] mb-4">
            404
          </h1>
          <h2 className="font-serif text-3xl font-bold text-[#1A1A1A] mb-4">
            Page Not Found
          </h2>
          <p className="text-lg text-[#8B8680] mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link
            href="/"
            className="inline-block px-6 py-3 bg-[#6F4E37] text-white font-medium rounded hover:bg-[#5A3F2F] transition-colors duration-200"
          >
            Return to Home
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
