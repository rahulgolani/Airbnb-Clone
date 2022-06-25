import React from "react";
import "../styles/Home.css";
import Banner from "./Banner";
import Search from "./Search";
function Home() {
  return (
    <div className="home">
      <Search />
      <Banner />
    </div>
  );
}

export default Home;
