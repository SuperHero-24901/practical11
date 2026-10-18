import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="max-w-3xl">
        
        <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
          Welcome to ReactPages
        </span>

        <h1 className="mt-6 text-4xl font-bold leading-tight text-gray-900 md:text-6xl">
          Build better experiences with{" "}
          <span className="text-blue-600">React</span>
        </h1>

        <p className="mt-6 text-lg leading-8 text-gray-600">
          Explore our website to learn about our platform, discover our
          mission, and get in touch with our team.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            to="/about"
            className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Learn About Us
          </Link>

          <Link
            to="/contact"
            className="rounded-lg border border-gray-300 px-6 py-3 font-semibold text-gray-700 transition hover:bg-gray-100"
          >
            Contact Us
          </Link>
        </div>

      </div>
    </section>
  );
}