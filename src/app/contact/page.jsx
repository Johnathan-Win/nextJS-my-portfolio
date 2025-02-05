import React from "react";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center text-center">
      {/* กรอบเดียวกันสำหรับส่วนหัวและฟอร์ม */}
      <div className="mt-20 max-w-4xl p-8 bg-white shadow-xl rounded-2xl space-y-8">
        {/* ส่วนหัวของหน้า Contact */}
        <div>
          <h1 className="text-4xl font-bold text-gray-900">Contact Me</h1>
          <p className="mt-4 text-lg text-gray-600">
            If you have any questions or would like to get in touch with me, feel free to reach out!
          </p>
        </div>

        {/* ฟอร์มการติดต่อ */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-900">Get In Touch</h2>
          <form className="mt-4 space-y-6">
            <div>
              <label htmlFor="name" className="block text-left text-lg text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full mt-2 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-left text-lg text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full mt-2 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-left text-lg text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows="4"
                className="w-full mt-2 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 rounded-lg text-lg font-semibold hover:bg-blue-600 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
