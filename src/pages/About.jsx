export default function About() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="max-w-3xl">
        
        <span className="text-sm font-semibold uppercase tracking-widest text-blue-600">
          About Us
        </span>

        <h1 className="mt-4 text-4xl font-bold text-gray-900 md:text-5xl">
          We make web experiences simple.
        </h1>

        <p className="mt-6 text-lg leading-8 text-gray-600">
          ReactPages is a demonstration project built with React,
          React Router DOM, and Tailwind CSS. It shows how modern
          web applications can provide smooth navigation and a
          consistent user experience.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          
          <div className="rounded-2xl border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-gray-900">
              Our Mission
            </h2>

            <p className="mt-3 leading-7 text-gray-600">
              To create simple, accessible, and user-friendly
              web experiences.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-gray-900">
              Our Technology
            </h2>

            <p className="mt-3 leading-7 text-gray-600">
              React for interfaces, React Router for navigation,
              and Tailwind CSS for styling.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}