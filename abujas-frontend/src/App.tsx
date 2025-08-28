
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import FurniturePage from "./pages/FurniturePage";
import BookServicePage from "./pages/BookServicePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/furniture" element={<FurniturePage />} />
        <Route path="/hire" element={<BookServicePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
