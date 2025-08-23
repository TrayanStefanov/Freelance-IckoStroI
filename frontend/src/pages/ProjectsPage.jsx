import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const ProjectsPage = () => {
  const { t } = useTranslation();

  const projectimg = t("project.mainImage");
  const projecttitle = t("project.title");
  const projectImages = t("project.images", { returnObjects: true });

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="max-w-[100vw] md:max-w-[90vw] lg:max-w-[75vw] mx-auto lg:pt-[15vh] pb-10 font-bn">
      {/* Main image */}
      <img
        src={projectimg}
        alt={projecttitle}
        className="w-[98vw] lg:w-[70vw] h-[40vh] lg:h-[60vh] object-cover rounded-lg mb-10 justify-self-center"
      />

      <h1 className="text-5xl font-semibold my-10 mx-6 text-center">
        {t("project.title")}
      </h1>
      <h2 className="text-2xl mb-4 indent-4 italic mx-6">
        {t("project.tags")} - {t("project.time")}
      </h2>
      <p className="text-lg leading-relaxed indent-4 p-10 mx-6 my-10 block whitespace-normal border-accent border-2 rounded-lg">
        {t("project.description")}
      </p>

      {/* Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-6">
        {projectImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`${projecttitle} - ${index + 1}`}
            className="w-full h-64 object-cover rounded-lg shadow-md cursor-pointer hover:scale-105 transition-transform"
            onClick={() => setSelectedImage(img)}
          />
        ))}
      </div>

      {/* Modal / Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Enlarged"
            className="max-h-[90%] max-w-[90%] rounded-lg shadow-lg"
          />
        </div>
      )}
    </div>
  );
};

export default ProjectsPage;
