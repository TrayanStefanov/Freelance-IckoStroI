import React from 'react'
import { useTranslation } from 'react-i18next';

const ProjectsPage = () => {

  const { t } = useTranslation();
  let projectimg = t("project.image"); 
  let projecttitle = t("project.title");

  return (
    <div className="max-w-[100vw] md:max-w-[90vw] lg:max-w-[75vw] mx-auto lg:p-6 pt-24 pb-10">
      <img src={projectimg} alt={projecttitle} className="w-[98vw] lg:w-[70vw] h-[40vh] lg:h-[60vh] object-cover rounded-lg mb-10 justify-self-center" />
      <h1 className="text-5xl font-semibold my-10 mx-6 text-center">{t("project.title")}</h1>
      <h2 className="text-2xl mb-4 indent-4 italic mx-6">{t("project.tags")} - {t("project.time")}</h2>
      <p className="text-lg leading-relaxed indent-4 p-10 mx-6 my-10 block whitespace-normal border-accent border-2 rounded-lg">{t("project.description")}</p>
    </div>
  );
}

export default ProjectsPage
