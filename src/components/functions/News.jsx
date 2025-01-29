import { motion } from "framer-motion";

const News = () => (
<motion.div
    className="flex-1 ml-8"
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8 }}
  >
    <div className="relative w-[800px] h-[400px] overflow-hidden rounded-lg shadow-lg -mr-[200px]">
      <motion.img
        src="https://picsum.photos/800/400?random=1"
        alt="Hero"
        className="absolute inset-0 w-full h-full object-cover"
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
      />
      <div className="absolute inset-0 bg-pink-600 bg-opacity-70 p-8 flex flex-col justify-end">
        <motion.h3
          className="text-sm text-white uppercase font-semibold mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Couples &middot; 3 months ago
        </motion.h3>
        <motion.h1
          className="text-4xl text-white font-bold leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Rays of her sunshine <br />
          <span className="text-yellow-400">Inside the Explosive Feud</span>
        </motion.h1>
      </div>
    </div>
  </motion.div>
);

export default News