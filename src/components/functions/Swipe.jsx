import { ChevronLeft, ChevronRight } from "lucide-react";

const Swipe = () => {
  return (
    <div className="flex flex-col w-6 h-full -mx-[-200px]">
      <div className="bg-gray-400 flex h-48 items-center justify-center border-b-2 border-b-white">
        <ChevronLeft color="#ffffff" />
      </div>
      <div className="bg-gray-400 flex h-48 items-center justify-center">
        <ChevronRight color="#ffffff" />
      </div>
    </div>
  );
};

export default Swipe;
