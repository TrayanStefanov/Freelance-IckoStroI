const ProjectPagination = ({ totalPages, currentPage, onPageChange }) => {
  if (totalPages <= 1) return null;

  return (
    <div className="flex justify-center gap-2 mt-6">
      {Array.from({ length: totalPages }, (_, i) => (
        <button
          key={i}
          onClick={() => onPageChange(i)}
          className={`px-3 py-1 rounded ${
            i === currentPage ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
};

export default ProjectPagination;