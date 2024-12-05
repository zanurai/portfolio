import { useEffect, useState } from "react";
import HomePage from "@/page/home-page";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import ProjectPage from "@/page/project-page";
import Navbar from "@/components/header/navbar";
import Footer from "./components/footer/footer";
import DetailsPage from "./page/details-page";

const App = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSlider = () => {
    setIsOpen(!isOpen);
  };

    useEffect(() => {
      if (isOpen) {
        const timeout = setTimeout(() => {
          setIsOpen(false);
        }, 5000);

        return () => clearTimeout(timeout);
      }
    }, [isOpen]);

  return (
    <>
      <Router>
        <div className="">
          <Navbar isOpen={isOpen} toggleSlider={toggleSlider} />
          <main>
            <Routes>
              <Route
                path="/"
                element={
                  <HomePage isOpen={isOpen} toggleSlider={toggleSlider} />
                }
              />
              <Route path="/project" element={<ProjectPage />} />
              <Route path="/details-page/:id" element={<DetailsPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </>
  );
};

export default App;
