import { useState } from "react";
import { projects } from "../../pages/Data/projects.js";
import github from "../images/SVG/github.svg";

export default function Projects({}) {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="flex flex-col justify-center items-center">
      {projects.map((p) => (
        <div
          key={p.link}
          className="cursor-pointer"
          onClick={() => setSelectedProject(p)}
        >
          <div className="flex flex-col justify-center bg-pale-pink p-5 m-4 rounded-sm items-stretch shadow-sm hover:scale-103 transition-all ease-in-out duration-200 lg:flex-row">
            <img
              src={p.view.src}
              className="aspect-4/3 object-cover rounded-sm w-md shadow-sm"
              alt={p.title}
            />
            <div className="ml-6 flex flex-col justify-between">
              <div className="flex flex-col max-w-sm my-5 lg:my-0">
                <h2 className="font-bold my-2">{p.title}</h2>
                <p>{p.summary}</p>
              </div>
              <a
                href={p.github}
                onClick={(e) => e.stopPropagation()}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="flex bg-white p-1 rounded-sm mt-2 max-w-[90px] justify-center items-center shadow-sm hover:cursor-pointer hover:bg-gray-50">
                  <img
                    src={github.src}
                    alt="Github logo"
                    className="w-5 h-5 mr-1"
                  />
                  Github
                </button>
              </a>
            </div>
          </div>
        </div>
      ))}

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl relative max-h-[90vh] m-5 flex flex-col">
            {/* Header */}
            <div className="flex justify-between items-center p-5 border-b border-gray-100 sticky top-0 bg-white z-10">
              <h2 className="text-2xl font-bold">{selectedProject.title}</h2>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-gray-500 hover:text-black hover:cursor-pointer"
              >
                ✕
              </button>
            </div>

            {/* Scrollable content */}
            <div className="overflow-y-auto p-5">
              <div>
                <img
                  src={selectedProject.image.src}
                  alt={selectedProject.title}
                  className="rounded-md mb-4"
                />
                <p className="font-bold mt-4">Description</p>
                <p>{selectedProject.description}</p>
              </div>

              <div>
                <p className="font-bold mt-4">Key Features</p>
                <ul>
                  {selectedProject.features.map((point, i) => (
                    <li key={i}>- {point}</li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="font-bold mt-4">Technologies</p>
                <div className="flex gap-2 mt-2">
                  {selectedProject.technologies.map((p, i) => (
                    <img
                      src={p.src}
                      key={i}
                      className="w-15 bg-gray-50 p-2 lg:w-20"
                    />
                  ))}
                </div>
              </div>

              <div>
                <p className="font-bold mt-4">Links</p>
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="flex bg-white p-1 rounded-sm mt-2 max-w-[90px] justify-center items-center shadow-sm hover:cursor-pointer">
                    <img
                      src={github.src}
                      alt="Github logo"
                      className="w-5 h-5 mr-1"
                    />
                    Github
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
