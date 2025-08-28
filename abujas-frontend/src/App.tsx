
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import FurniturePage from "./pages/FurniturePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/furniture" element={<FurniturePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
