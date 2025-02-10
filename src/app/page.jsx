"use client";
import "bootstrap-icons/font/bootstrap-icons.css";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center text-center">
      <div className="mt-20 max-w-2xl p-6 bg-white shadow-lg rounded-xl">
        {/* รูปโปรไฟล์ */}
        <div className="mb-6">
          <img
            src="img_profile/im.jpg" // เปลี่ยน path เป็นที่อยู่ของไฟล์รูปโปรไฟล์
            alt="my img"
            className="w-64 h-64 rounded-full mx-auto border-4 border-blue-500"
          />
        </div>

        {/* ชื่อ */}
        <h1 className="text-4xl font-bold text-gray-900">
          Thanathon Saengwang
        </h1>

        {/* ประวัติสั้น */}
        <p className="mt-4 text-lg text-gray-600">
          Hi, I'm Thanathong Saengwang. I'm a passionate developer specializing
          in modern web technologies like React, Next.js, and more. I love
          building responsive and user-friendly websites.
        </p>

        {/* ข้อมูลติดต่อ/โปรเจกต์ */}
        <div className="mt-6">
          <p className="text-md text-gray-500">
            Feel free to connect with me or view my{" "}
            <a href="/projects" className="text-blue-500 hover:underline">
              projects
            </a>
            .
          </p>
        </div>

        {/* ปุ่มสำหรับไปยังหน้าโปรเจกต์ */}
        <a
          href="/projects"
          className="mt-6 inline-block bg-blue-500 text-white px-6 py-2 rounded-lg text-lg font-semibold hover:bg-blue-600 transition"
        >
          View My Work
        </a>
      </div>
    </div>
  );
};

export default Home;
