import React from 'react';
import { FaFolder } from "react-icons/fa6";
import { RiExternalLinkLine } from "react-icons/ri";

const projects = [
  {
    name: 'Medicurism',
    description: 'A medical treatment website and app built for health tourism in Turkiye.',
    link: '#', // Actual link to the project
    lang: 'php'
  },

  {
    name: 'Kario',
    description: 'Curious people`s dating application.',
    link: '#', // Actual link to the project
    lang: 'Flutter'
  },

  {
    name: 'Raspberrify',
    description: 'A startup-driven web development company, catering to startups through freelance projects.',
    link: '#', // Actual link to the project
    lang: 'Wordpress'
  },

  {
    name: 'Factory Fuse',
    description: 'Time management Gantt chart application runs in your browser.',
    link: '#', // Actual link to the project
    lang: 'React'
  },

  {
    name: 'Grinder',
    description: 'Instantly manipulate your photos with our mobile-app.',
    link: '#', // Actual link to the project
    lang: 'Flutter'
  },

  {
    name: 'Go-App',
    description: 'Payment Gateway Solution for an extraordinary payment experience for remarkable moments.',
    link: '#', // Actual link to the project
    lang: 'Flutter Web'
  },
];

const ProjectsGrid = () => {
  return (
    <>
      <h2 className="mt-20 mb-3 text-center text-2xl font-semibold text-white">
        Projects:
      </h2>
      <div className="mt-5 mb-32 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 text-center text-white">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* Folder Icon */}
            <span className='text-2xl'>
                <FaFolder />
            </span>
            <h2 className="mb-3 text-2xl font-semibold text-white">
              {project.name}{' '}

              <span className="top-0 right-0 inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              <RiExternalLinkLine />
            </span>
            </h2>
            <p className="m-0 max-w-[30ch] text-sm opacity-50 text-white">
              {project.description}
            </p>
            <p className=" text-sm opacity-80 text-yellow-500">
              {project.lang}
            </p>
          </a>
        ))}
      </div>
    </>
  );
};

export default ProjectsGrid;
