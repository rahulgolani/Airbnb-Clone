import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import SearchPage from "./components/SearchPage";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="search" element={<SearchPage />} />
        <Route path="/" element={<Home />} />
      </Routes>
      {/* FOOTER */}
      <Footer />
      {/* SEARCHPAGE */}
    </div>
  );
}

export default App;
