import "./App.css";
import { useState, useEffect, createContext } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import SearchPage from "./components/SearchPage";
import axios from "axios";

export const UserContext = createContext();

function App() {
  const [user, setUser] = useState({
    first: "",
    last: "",
    initials: "RU",
    picture: "",
  });

  useEffect(() => {
    axios
      .get("https://randomuser.me/api/")
      .then((response) => {
        const userData = response.data.results[0];
        setUser({
          first: userData.name.first,
          last: userData.name.last,
          initials: userData.name.first[0] + userData.name.last[0],
          picture: userData.picture.large,
          details: userData,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="app">
      <UserContext.Provider value={user}>
        <Header />
        <Routes>
          <Route path="search" element={<SearchPage />} />
          <Route path="/" element={<Home />} />
        </Routes>
        {/* FOOTER */}
        <Footer />
        {/* SEARCHPAGE */}
      </UserContext.Provider>
    </div>
  );
}

export default App;
