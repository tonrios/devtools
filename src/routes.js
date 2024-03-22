import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "./main/layout/_footer";
import Nav from "./main/layout/_nav";
import GuidGenerator from "./main/pages/guidGenerator";
import ModelCreator from "./main/pages/modelCretor";
const AppRouter = () => {
  return (
    <Router>
      <div className="flex min-h-screen  flex-col justify-between">
        <Nav />
        <Routes>
          <Route path="/" element={<GuidGenerator />} />
          <Route path="/modelCreator" element={<ModelCreator />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default AppRouter;
