const TagButton = ({ tag, onClick }) => (
  <button
    onClick={() => onClick?.(tag)}
    className="px-3 py-1 rounded-full text-sm lg:text-base bg-gray-200 text-gray-800 
               hover:bg-accent hover:text-white transition-colors mx-1 my-1 shadow-sm"
  >
    #{tag}
  </button>
);

export default TagButton;