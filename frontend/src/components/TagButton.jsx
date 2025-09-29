const TagButton = ({ tag, onClick, active }) => (
  <button
    type="button"
    onClick={(e) => {
      e.stopPropagation();
      onClick?.(tag);
    }}
    className={`px-3 py-1 rounded-full text-sm lg:text-base mx-1 my-1 shadow-sm border-2
      ${active 
        ? "border-accent text-neutral bg-transparent" 
        : "border-gray-200 bg-gray-200 text-gray-800 hover:border-accent hover:text-neutral transition-colors"
      }`}
  >
    # {tag}
  </button>
);

export default TagButton;
