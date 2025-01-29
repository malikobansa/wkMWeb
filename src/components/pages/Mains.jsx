import Sidebar from "../functions/SideBar";
import News from "../functions/News";
import Swipe from "../functions/Swipe";
import Lists from "../functions/Lists";

const Mains = () => {
    const popularItems = [
      { id: 1, image: "https://picsum.photos/50/50?random=1" },
      { id: 2, image: "https://picsum.photos/50/50?random=2" },
      { id: 3, image: "https://picsum.photos/50/50?random=3" },
      { id: 4, image: "https://picsum.photos/50/50?random=4" },
    ];
  
    return (
      <div className="relative bg-white">
        <div className="container mx-auto flex items-center justify-between p-8">
          {/* Sidebar */}
          <Sidebar items={popularItems} />
  
          {/* Hero Content */}
          <News />
          <Swipe/>
          <Lists/>
        </div>
      </div>
    );
  };
  
export default Mains;