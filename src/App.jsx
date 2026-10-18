import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

function NotFound() {
  return (
    <section className="px-6 py-20 text-center">
      <h1 className="text-4xl font-bold text-gray-900">
        404 - Page Not Found
      </h1>

      <p className="mt-4 text-gray-600">
        Sorry, the page you are looking for does not exist.
      </p>
    </section>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        
        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/about" element={<About />} />

            <Route path="/contact" element={<Contact />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <footer className="border-t border-gray-200 bg-white px-6 py-6 text-center text-sm text-gray-500">
          © 2026 ReactPages. Built with React and Tailwind CSS.
        </footer>

      </div>
    </BrowserRouter>
  );
}