import { useForm, ValidationError } from "@formspree/react";

export default function Contact() {
  const [state, handleSubmit] = useForm("xykpprop");

  if (state.succeeded) {
    return (
      <section
        id="contact"
        className="py-20 bg-linear-to-r from-indigo-600 via-purple-600 to-pink-600 text-center text-white"
      >
        <h2 className="text-4xl font-bold mb-6">Contact Us</h2>
        <p className="text-lg text-green-200">
          Thanks for reaching out! We’ll get back to you soon.
        </p>
      </section>
    );
  }

  return (
    <section
      id="contact"
      className="py-20 bg-linear-to-r from-indigo-600 via-purple-600 to-pink-600 text-white"
    >
      <h2 className="text-4xl font-bold text-center mb-12">Contact Us</h2>

      {/* Full-width form container */}
      <div className="max-w-3xl mx-auto px-6">
        <form
          onSubmit={handleSubmit}
          className="bg-white text-gray-900 p-10 rounded-xl shadow-2xl space-y-6"
        >
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-left font-semibold mb-2"
            >
              Full Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              required
              className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
          </div>

          {/* Company Name */}
          <div>
            <label
              htmlFor="company"
              className="block text-left font-semibold mb-2"
            >
              Company Name
            </label>
            <input
              id="company"
              type="text"
              name="company"
              className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <ValidationError
              prefix="Company"
              field="company"
              errors={state.errors}
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-left font-semibold mb-2"
            >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              name="email"
              required
              className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-left font-semibold mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows="6"
              className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            ></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={state.submitting}
            className="w-full py-4 bg-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:bg-indigo-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
