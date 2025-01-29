import { motion } from "framer-motion";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

const SideBar = ({ items = [] }) => (
<div className="flex flex-col items-center space-y-4">
    <motion.h2
      className="text-sm font-semibold rotate-90 transform origin-bottom-left -ml-4"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      Popular Now
    </motion.h2>
    {items.map((item) => (
      <motion.div key={item.id} className="relative">
        <motion.img
          src={item.image}
          alt={`Popular ${item.id}`}
          className="w-12 h-12 rounded-full border-2 border-gray-200"
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
    <motion.button
      className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-200 text-gray-500"
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

export default SideBar