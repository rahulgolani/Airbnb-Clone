import "./App.css";
import { useState, useEffect, createContext } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import SearchPage from "./components/SearchPage";
import axios from "axios";
import Profile from "./components/Profile";

export const UserContext = createContext();

function App() {
  const [user, setUser] = useState({
    first: "", //"Jesus",
    last: "", //"Dumont",
    initials: "", //"JD",
    picture: "", //'https://randomuser.me/api/portraits/men/97.jpg',
    details: {
      gender: "", //"male",
      dob: {
        date: "", // "1945-03-20T12:48:16.093Z",
      },
      email: "", // "jesus.dumont@example.com",
      cell: "", // "079 757 60 07",
      location: {
        country: "", //"Switzerland",
      },
    },
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
          <Route path="profile" element={<Profile />} />
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
