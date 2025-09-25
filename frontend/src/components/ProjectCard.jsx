const ProjectCard = ({ project, onSelect }) => (
  <div
    className="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition"
    onClick={() => onSelect(project)}
  >
    <img
      src={project.mainImage}
      alt={project.title}
      className="w-full h-40 object-cover"
    />
    <div className="p-4">
      <h3 className="text-lg font-semibold">{project.title}</h3>
      <p className="text-sm text-gray-600">{project.time}</p>
    </div>
  </div>
);

export default ProjectCard;