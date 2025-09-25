import { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from "react-icons/md";

const ProjectDetails = ({ project, onTagClick }) => {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState(null);
  const [mobileIndex, setMobileIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  const totalImages = project.images.length;
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const changeIndex = (newIndex) => {
    setTransitioning(true);
    setTimeout(() => {
      setMobileIndex(newIndex);
      setTransitioning(false);
    }, 300); // match transition duration
  };

  const prevImage = () => {
    changeIndex(mobileIndex === 0 ? totalImages - 1 : mobileIndex - 1);
  };

  const nextImage = () => {
    changeIndex(mobileIndex === totalImages - 1 ? 0 : mobileIndex + 1);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50) nextImage();
    if (diff < -50) prevImage();
  };

  return (
    <div className="mb-12">
      <img
        src={project.mainImage}
        alt={project.title}
        className="w-[98vw] lg:w-[70vw] h-[40vh] lg:h-[60vh] object-cover rounded-lg mb-10 mx-auto cursor-pointer"
        onClick={() =>
          setSelectedImage({ src: project.mainImage, alt: project.title })
        }
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

      {/* Gallery */}
      <div className="mx-6 mb-10">
        {/* Mobile carousel */}
        <div
          className="relative md:hidden w-full h-64 flex items-center justify-center overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <button
            className="absolute left-2 z-10 bg-black bg-opacity-50 p-2 rounded-full text-white"
            onClick={prevImage}
          >
            <MdKeyboardDoubleArrowLeft size={24} />
          </button>

          <img
            key={mobileIndex} 
            src={project.images[mobileIndex].src}
            alt={project.images[mobileIndex].alt}
            className={`w-full h-64 object-cover rounded-lg shadow-md cursor-pointer transition-transform duration-300 ${
              transitioning ? "translate-x-[-100%]" : "translate-x-0"
            }`}
            onClick={() => setSelectedImage(project.images[mobileIndex])}
          />

          <button
            className="absolute right-2 z-10 bg-black bg-opacity-50 p-2 rounded-full text-white"
            onClick={nextImage}
          >
            <MdKeyboardDoubleArrowRight size={24} />
          </button>
        </div>

        {/* Desktop grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 no-scrollbar">
          {project.images.map((img, index) => (
            <img
              key={index}
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="w-full h-64 object-cover rounded-lg shadow-md cursor-pointer hover:scale-105 transition-transform"
              onClick={() => setSelectedImage(img)}
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            />
          ))}
        </div>
      </div>

      {/* Modal / Lightbox */}
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
