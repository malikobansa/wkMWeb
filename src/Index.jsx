import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sign from "./components/pages/Sign"; // Ensure correct path
import App from "./App";

function Index() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/sign" element={<Sign />} />
      </Routes>
    </Router>
  );
}

export default Index;
