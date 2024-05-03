import { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Gallery from "./components/Gallery.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import HomeServices from "./components/HomeServices.jsx";
import AllProjects from "./components/AllProjects.jsx";
import AllServices from "./components/AllServices.jsx";
import "./App.css";
import Team from "./components/Team.jsx";

function App() {
  const [tab, setTab] = useState("home");
  let onTabChange = (tabChange) => {
    let newTab = tabChange;
    setTab(newTab);
  };

  return (
    <>
      <Header tab={tab} onTabChange={onTabChange}></Header>
      {tab === "home" && <Home tab={tab} onTabChange={onTabChange}></Home>}
      {tab === "gallery" && <Gallery />}
      {tab === "allservices" && <AllServices />}
      {tab === "allprojects" && <AllProjects />}
      {tab === "team" && <Team />}
      {tab === "about" && <About />}
      {tab === "contact" && <Contact />}
      <Footer onTabChange={onTabChange}></Footer>
    </>
  );
}

export default App;
