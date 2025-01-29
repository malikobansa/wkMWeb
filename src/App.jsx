import AnimatedCursor from "react-animated-cursor";
import Layout from "./components/layouts/Layout";

const App = () => {
  return (
    <>
      {/* Animated Cursor Configuration */}
      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        color="255, 255, 255"
        outerAlpha={0.4}
        innerScale={0.7}
        outerScale={1.5}
        outerStyle={{ border: "3px solid black" }}
        innerStyle={{ backgroundColor: "black" }}
      />
      
      {/* Main Layout */}
      <Layout />
    </>
  );
};

export default App;
