import TagButton from "./TagButton.jsx";

const ProjectCard = ({ project, onSelect, onTagClick, tagFilter }) => (
    <div
        role="button"
        tabIndex={0}
        onClick={() => onSelect(project)}
        onKeyDown={(e) => e.key === "Enter" && onSelect(project)}
        className="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition focus:outline-none focus:ring-2 focus:ring-accent"
    >
        <img
            src={project.mainImage}
            alt={project.title}
            loading="lazy"
            className="w-full h-60 object-cover"
        />
        <div className="p-4">
            <h3 className="text-lg font-semibold">{project.title}</h3>
            <p className="text-sm text-gray-600">{project.time}</p>

            <div className="flex flex-wrap mt-2">
                {project.tags.slice(0, 5).map((tag, i) => (
                    <TagButton
                        key={i}
                        tag={tag}
                        active={tag === tagFilter}
                        onClick={(clickedTag) => onTagClick(clickedTag)} 
                    />
                ))}
            </div>
        </div>
    </div>
);

export default ProjectCard;
