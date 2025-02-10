'use client';
import React from 'react';

const ProjectPage = () => {
  const projects = [
    {
      title: 'Meeting Room Booking',
      description: 'A modern web application built using PHP and Oracle Server and mdbootstrap, featuring a responsive design and dynamic content.[username:6511130055,password:1]',
      imageUrl: 'img_projects/p_1.png', 
      link: 'http://203.188.54.9/~u6511130055/cbt/index.php',
    },
    {
      title: 'Overview Subject Linux Management',
      description: 'An e-commerce platform developed using React and Node.js, with secure payment integration and real-time notifications.',
      imageUrl: 'img_projects/p_2.png',
      link: 'https://miic1325-lab08.web.app/',
    },
  ];

  return (
    <div className="mt-20 min-h-screen bg-gray-100 flex flex-col items-center text-center p-8">
      <h1 className="text-4xl font-bold text-gray-900">My Projects</h1>
      <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
        Here are some of the projects I have worked on. Feel free to explore!
      </p>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <div key={index} className="bg-white shadow-lg rounded-xl overflow-hidden">
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-64 object-cover rounded-t-xl"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-900">{project.title}</h2>
              <p className="mt-4 text-gray-600">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block bg-blue-500 text-white px-6 py-2 rounded-lg text-lg font-semibold hover:bg-blue-600 transition"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectPage;
