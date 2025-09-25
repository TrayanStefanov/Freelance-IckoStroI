import { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";

const ProjectDetails = ({ project, onTagClick }) => {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState(null);

  const [page, setPage] = useState({ index: 0, dir: 0 });
  const total = project.images.length;

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // animation variants
  const variants = {
    enter: (dir) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.98,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      zIndex: 1,
    },
    exit: (dir) => ({
      x: dir > 0 ? -300 : 300,
      opacity: 0,
      scale: 0.98,
      zIndex: 0,
    }),
  };

  const paginate = (inc) => {
    setPage((prev) => {
      const nextIndex = (prev.index + inc + total) % total;
      return { index: nextIndex, dir: inc > 0 ? 1 : -1 };
    });
  };

  const goTo = (target) => {
    setPage((prev) => {
      if (target === prev.index) return prev;

      let dir;
      if (prev.index === total - 1 && target === 0) dir = 1;
      else if (prev.index === 0 && target === total - 1) dir = -1;
      else dir = target > prev.index ? 1 : -1;

      return { index: target, dir };
    });
  };

  // swipe
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50) paginate(1);
    else if (diff < -50) paginate(-1);
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
      <div className="mx-6 mb-4">
        {/* Mobile carousel */}
        <div
          className="relative block md:hidden w-full h-64 overflow-hidden rounded-lg"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >

          {/* Animated image */}
          <AnimatePresence custom={page.dir} initial={false}>
            <motion.img
              key={`${page.index}-${project.images[page.index].src}`}
              src={project.images[page.index].src}
              alt={project.images[page.index].alt}
              className="absolute w-full h-64 object-cover rounded-lg shadow-md cursor-pointer left-0 top-0"
              onClick={() => setSelectedImage(project.images[page.index])}
              custom={page.dir}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.18 },
              }}
            />
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="md:hidden mt-3 flex justify-center items-center gap-2">
          {project.images.map((_, i) => (
            <button
              key={`${i}-${project.images[i].src}`}
              aria-label={`Go to image ${i + 1}`}
              onClick={() => goTo(i)}
              className={`w-2 h-2 rounded-full transition-all ${
                i === page.index
                  ? "bg-accent w-3 h-3"
                  : "bg-white bg-opacity-40"
              }`}
            />
          ))}
        </div>

        {/* Desktop grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {project.images.map((img, index) => (
            <img
              key={`${index}-${img.src}`}
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="w-full h-64 object-cover rounded-lg shadow-md cursor-pointer hover:scale-105 transition-transform"
              onClick={() => setSelectedImage(img)}
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
