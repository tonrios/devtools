import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "./main/layout/_footer";
import Nav from "./main/layout/_nav";
import AboutMePage from "./main/pages/aboutMe";
import GuidGeneratorPage from "./main/pages/guidGenerator";
import ModelCreatorPage from "./main/pages/modelCretor";
import { NotePadPage } from "./main/pages/notepad";
const AppRouter = () => {
  return (
    <Router>
      <div className="flex min-h-screen  flex-col justify-between">
        <Nav />
        <Routes>
          <Route path="/" element={<GuidGeneratorPage />} />
          <Route path="/me" element={<AboutMePage />} />
          <Route path="/modelCreator" element={<ModelCreatorPage />} />
          <Route path="/notepad" element={<NotePadPage />} />
          <Route path="/notepad/:id" element={<NotePadPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default AppRouter;
