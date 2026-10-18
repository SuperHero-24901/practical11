export default function Contact() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid gap-12 md:grid-cols-2">
        
        {/* Contact Information */}
        <div>
          <span className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            Contact Us
          </span>

          <h1 className="mt-4 text-4xl font-bold text-gray-900 md:text-5xl">
            Let's start a conversation.
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Have a question or want to learn more about our project?
            Send us a message using the contact form.
          </p>

          <div className="mt-8 space-y-4 text-gray-600">
            <p>
              <strong className="text-gray-900">Email:</strong>{" "}
              hello@example.com
            </p>

            <p>
              <strong className="text-gray-900">Availability:</strong>{" "}
              Monday – Friday
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={(event) => {
            event.preventDefault();
            alert("Your message has been submitted!");
          }}
          className="space-y-5 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm"
        >
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-semibold text-gray-700"
            >
              Full Name
            </label>

            <input
              id="name"
              name="name"
              type="text"
              placeholder="Enter your name"
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-semibold text-gray-700"
            >
              Email Address
            </label>

            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="mb-2 block text-sm font-semibold text-gray-700"
            >
              Message
            </label>

            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Write your message..."
              required
              className="w-full resize-y rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Send Message
          </button>
        </form>

      </div>
    </section>
  );
}