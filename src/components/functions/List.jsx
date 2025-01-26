import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext.jsx";

const List = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="ml-20" onChange={toggleTheme}>
      <ul
        className={`flex flex-row justify-between gap-20 ${
          theme === "dark" ? "text-white" : "text-black"
        }`}
      >
        <li>
          <select
            className={`p-2 rounded ${
              theme === "dark"
                ? "bg-gray-800 text-white border-gray-600"
                : "bg-white text-black border-gray-300"
            }`}
          >
            <option value="someOption">MUSIC</option>
            <option value="otherOption">VIDEO</option>
          </select>
        </li>
        <li>
          <select
            className={`p-2 rounded ${
              theme === "dark"
                ? "bg-gray-800 text-white border-gray-600"
                : "bg-white text-black border-gray-300"
            }`}
          >
            <option value="someOption">STYLE</option>
            <option value="otherOption">CULTURE</option>
          </select>
        </li>
        <li>
          <select
            className={`p-2 rounded ${
              theme === "dark"
                ? "bg-gray-800 text-white border-gray-600"
                : "bg-white text-black border-gray-300"
            }`}
          >
            <option value="someOption">VIDEO</option>
            <option value="otherOption">EVENTS</option>
          </select>
        </li>
        <li>
          <select
            className={`p-2 rounded ${
              theme === "dark"
                ? "bg-gray-800 text-white border-gray-600"
                : "bg-white text-black border-gray-300"
            }`}
          >
            <option value="someOption">SHOP</option>
          </select>
        </li>
      </ul>
    </div>
  );
};

export default List;
