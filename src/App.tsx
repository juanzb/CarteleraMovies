import React from "react";
import Navbar from "./components/NavBar";
import PathRender from "./components/Routes";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <PathRender />
      <Footer />
    </>
  );
};

export default App;
