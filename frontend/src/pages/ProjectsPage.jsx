import React, { useState, useMemo } from "react";
import { useTranslation } from "react-i18next";

import ProjectCard from "../components/ProjectCard.jsx";
import ProjectDetails from "../components/ProjectDetails.jsx";
import ProjectPagination from "../components/ProjectPagination.jsx";


const ProjectsPage = () => {
  const { t } = useTranslation();

  const projects = t("allProjects", { returnObjects: true });

  const [currentProject, setCurrentProject] = useState(projects[0]);
  const [currentPage, setCurrentPage] = useState(0);
  const [tagFilter, setTagFilter] = useState(null);

  // Filtered + paginated list
  const filteredProjects = useMemo(() => {
    let list = projects.filter((p) => p.title !== currentProject.title);
    if (tagFilter) {
      list = list.filter((p) => p.tags.includes(tagFilter));
    }
    return list;
  }, [projects, currentProject, tagFilter]);

  const projectsPerPage = 6;
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  const paginatedProjects = filteredProjects.slice(
    currentPage * projectsPerPage,
    currentPage * projectsPerPage + projectsPerPage
  );

  return (
    <div className="max-w-[100vw] md:max-w-[90vw] lg:max-w-[75vw] mx-auto pt-[10vh] lg:pt-[15vh] pb-10">
      {/* Current Project */}
      <ProjectDetails project={currentProject} onTagClick={setTagFilter} />

      {/* Grid of projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-6">
        {paginatedProjects.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            onSelect={(p) => {
              setCurrentProject(p);
              setCurrentPage(0);
            }}
          />
        ))}
      </div>

      {/* Pagination */}
      {filteredProjects.length > projectsPerPage && (
        <ProjectPagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
      )}
    </div>
  );
};

export default ProjectsPage;
