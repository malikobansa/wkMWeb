import { ChevronLeft, ChevronRight } from "lucide-react";

const Swipe = ({ direction, onClick }) => {
  return (
    <button
      className="bg-gray-400 flex h-48 w-10 items-center justify-center border-b-2 border-white"
      onClick={onClick}
    >
      {direction === "left" ? <ChevronLeft color="#ffffff" /> : <ChevronRight color="#ffffff" />}
    </button>
  );
};

export default Swipe;
