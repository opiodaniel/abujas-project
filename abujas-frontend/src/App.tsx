
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import FurniturePage from "./pages/FurniturePage";
import BookServicePage from "./pages/BookServicePage";
import ConstructionPage from "./pages/ConstructionPage";
import InteriorDesignPage from "./pages/InteriorDesignPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/furniture" element={<FurniturePage />} />
        <Route path="/hire" element={<BookServicePage />} />
        <Route path="/construction" element={<ConstructionPage />} />
        <Route path="/interior-design" element={<InteriorDesignPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
