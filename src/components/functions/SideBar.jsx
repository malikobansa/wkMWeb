import { motion } from "framer-motion";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

const SideBar = ({ items = [] }) => (
  <div className="flex sm:flex-row md:flex-col items-center space-y-4 md:w-10 w-full p-2 md:p-0">
    {/* Sidebar Title */}
    <motion.h2
      className="text-xs md:text-sm font-semibold md:rotate-90 md:transform origin-bottom-left -ml-4 md:ml-0"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      Popular Now
    </motion.h2>

    {/* Sidebar Items */}
    <div className="flex sm:space-x-2 md:space-y-4 md:flex-col sm:flex-col">
      {items.map((item) => (
        <motion.div key={item.id} className="relative w-50 h-50">
          <motion.img
            src={item.image}
            alt={`Popular ${item.id}`}
            className="w-50 h-50 md:w-50 md:h-50 rounded-full border-2 border-gray-200"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: item.id * 0.1 }}
            data-tooltip-id={`tooltip-${item.id}`}
            data-tooltip-content={`Details about Popular ${item.id}`}
          />
          <Tooltip id={`tooltip-${item.id}`} />
        </motion.div>
      ))}
    </div>

    {/* Add Button (Hidden on Mobile, Visible on Desktop) */}
    <motion.button
      className="hidden md:flex w-10 h-10 items-center justify-center rounded-full bg-gray-200 text-gray-500"
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: items.length * 0.1 }}
    >
      +
    </motion.button>
  </div>
);

export default SideBar;
