// ProjectsPage.jsx
import React, { useState, useMemo } from "react";
import { useTranslation } from "react-i18next";

import ProjectCard from "../components/ProjectCard.jsx";
import ProjectDetails from "../components/ProjectDetails.jsx";
import ProjectPagination from "../components/ProjectPagination.jsx";

const ProjectsPage = () => {
  const { t } = useTranslation();

  // Load and normalize projects once per translation change
  const projects = useMemo(() => {
    const projectsRaw = t("projects.allProjects", { returnObjects: true });
    return Array.isArray(projectsRaw)
      ? projectsRaw.map((p) => ({
          ...p,
          tags: Array.isArray(p.tags)
            ? p.tags
            : typeof p.tags === "string"
            ? p.tags.split(",").map((t) => t.trim())
            : [],
        }))
      : [];
  }, [t]); // re-run only when translation function changes (e.g. language switch)

  const [currentProject, setCurrentProject] = useState(null);
  const [tagFilter, setTagFilter] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);

  const projectsPerPage = 6;

  // Filtered projects
  const filteredProjects = useMemo(() => {
    return projects.filter((p) => {
      if (tagFilter) return p.tags.includes(tagFilter);
      return currentProject ? p.title !== currentProject.title : true;
    });
  }, [projects, tagFilter, currentProject]);

  // Paginate filtered projects
  const paginatedProjects = useMemo(() => {
    const start = currentPage * projectsPerPage;
    return filteredProjects.slice(start, start + projectsPerPage);
  }, [filteredProjects, currentPage]);

  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  const handleProjectSelect = (project) => {
    setCurrentProject(project);
    setCurrentPage(0);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleTagClick = (tag) => {
    setTagFilter(tag);
    setCurrentProject(null);
    setCurrentPage(0);
  };

  const handleBackToProjects = () => {
    setCurrentProject(null);
    setCurrentPage(0);
  };

  return (
    <div className="max-w-[100vw] md:max-w-[90vw] lg:max-w-[75vw] mx-auto pt-[15vh] pb-10">
      {/* Project Details */}
      {currentProject && (
        <div>
          <button
            onClick={handleBackToProjects}
            className="mb-6 px-4 py-2 bg-white border-2 border-accent rounded-lg text-neutral hover:bg-neutral hover:text-white transition"
          >
            {t("projects.backToProjects")}
          </button>
          <ProjectDetails project={currentProject} onTagClick={handleTagClick} />
        </div>
      )}

      {/* Filter heading */}
      {tagFilter && !currentProject && (
        <h2 className="text-2xl lg:text-4xl font-semibold mb-6 mx-6 text-center">
          {t("projects.filteredByTag", { tag: tagFilter }) ||
            `Showing results for #${tagFilter}`}
        </h2>
      )}

      {/* Projects Grid */}
      {!currentProject && (
        <div>
          <h2 className="text-2xl lg:text-4xl font-semibold mb-6 mx-6 text-center">
            {t("projects.title")}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-6">
            {paginatedProjects.map((project) => (
              <ProjectCard
                key={project.title}
                project={project}
                onSelect={handleProjectSelect}
                onTagClick={handleTagClick}
                tagFilter={tagFilter}
              />
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <ProjectPagination
              totalPages={totalPages}
              currentPage={currentPage}
              onPageChange={setCurrentPage}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default ProjectsPage;
