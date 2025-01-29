import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_BLOG_POSTS } from "../hooks/queries";
import client from "../hooks/apolloClient";
import Swipe from "./Swipe";

const News = () => {
  const { loading, error, data } = useQuery(GET_BLOG_POSTS, { client });
  const [currentIndex, setCurrentIndex] = useState(0);

  if (loading) return <p className="text-center text-xl">Loading...</p>;
  if (error) {
    console.error("GraphQL Error:", error);
    return <p className="text-center text-red-500">Error: {error.message}</p>;
  }

  const posts = data?.posts || [];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % posts.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + posts.length) % posts.length);
  };

  return (
    <div className="relative flex items-center justify-center px-4 md:px-8 w-full">
      {/* Left Swipe Button */}
      <Swipe direction="left" onClick={prevSlide} />

      <div className="w-full max-w-[800px] overflow-hidden">
        <AnimatePresence>
          <motion.div
            key={posts[currentIndex]?.id}
            className="relative w-full rounded-lg shadow-lg overflow-hidden"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
            {/* Animated Cover Image */}
            <motion.img
              src={posts[currentIndex]?.coverPhoto?.url}
              alt={posts[currentIndex]?.title}
              className="w-full h-64 object-cover rounded-t-lg"
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1 }}
            />

            {/* Blog Info */}
            <div className="p-6 bg-white min-h-[200px] flex flex-col justify-between">
              <h2 className="text-2xl font-bold">{posts[currentIndex]?.title}</h2>
              <p className="text-sm text-gray-500">
                {new Date(posts[currentIndex]?.publishedAt).toDateString()}
              </p>
              <motion.button
                className="mt-4 text-lg text-blue-600 hover:text-blue-800"
                whileHover={{ scale: 1.1 }}
              >
                Read More →
              </motion.button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Right Swipe Button */}
      <Swipe direction="right" onClick={nextSlide} />
    </div>
  );
};

export default News;
