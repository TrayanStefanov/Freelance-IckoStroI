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
    let list = projects.filter((p) => {
      if (tagFilter) return p.tags.includes(tagFilter);
      return p.title !== currentProject?.title;
    });
    return list;
  }, [projects, currentProject, tagFilter]);

  const projectsPerPage = 6;
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  const paginatedProjects = filteredProjects.slice(
    currentPage * projectsPerPage,
    currentPage * projectsPerPage + projectsPerPage
  );

  const handleTagClick = (tag) => {
    setTagFilter(tag);
    setCurrentProject(null); 
    setCurrentPage(0);       
  };

  const handleProjectSelect = (project) => {
    setCurrentProject(project);
    setTagFilter(null);       
    setCurrentPage(0);        
  };

  return (
    <div className="max-w-[100vw] md:max-w-[90vw] lg:max-w-[75vw] mx-auto pt-[10vh] lg:pt-[15vh] pb-10">
      {currentProject && (
        <ProjectDetails project={currentProject} onTagClick={handleTagClick} />
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-6">
        {paginatedProjects.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            onSelect={handleProjectSelect}
          />
        ))}
      </div>

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
