import "./styles.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./NavBar";

import Home from "./routes/Home";
import Second from "./routes/Second";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/second" element={<Second />} />
      </Routes>
    </>
  );
}

export default App;
