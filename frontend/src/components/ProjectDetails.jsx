import { useState } from "react";
import { useTranslation } from "react-i18next";

const ProjectDetails = ({ project, onTagClick }) => {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="mb-12">
      <img
        src={project.mainImage}
        alt={project.title}
        className="w-[98vw] lg:w-[70vw] h-[40vh] lg:h-[60vh] object-cover rounded-lg mb-10 mx-auto cursor-pointer"
        onClick={() => setSelectedImage({ src: project.mainImage, alt: project.title })}
      />

      <h1 className="text-5xl lg:text-6xl font-semibold my-10 mx-6 text-center">
        {project.title}
      </h1>

      <h2 className="text-2xl lg:text-3xl mb-4 indent-4 italic mx-6">
        {project.tags.map((tag, i) => (
          <button
            key={i}
            onClick={() => onTagClick(tag)}
            className="text-neutral hover:border-b hover:text-accent/90 hover:underline hover:underline-offset-8 mx-2"
          >
            {tag}
          </button>
        ))}{" "}
        - {project.time}
      </h2>

      <p className="text-lg lg:text-2xl leading-relaxed indent-4 p-10 mx-6 my-10 block whitespace-normal border-accent border-2 rounded-lg">
        {project.description}
      </p>

      <div className="mx-6 mb-10">
        <div className="flex gap-4 overflow-x-auto md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6">
          {project.images.map((img, index) => (
            <img
              key={index}
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="flex-shrink-0 w-64 h-40 md:w-full md:h-64 object-cover rounded-lg shadow-md cursor-pointer hover:scale-105 transition-transform"
              onClick={() => setSelectedImage(img)}
            />
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          role="dialog"
          aria-modal="true"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage.src}
            alt={selectedImage.alt}
            className="max-h-[90%] max-w-[90%] rounded-lg shadow-lg transition-transform transform scale-95 hover:scale-100"
          />
        </div>
      )}
    </div>
  );
};

export default ProjectDetails;
