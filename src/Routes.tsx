import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const AscendWebCoursePage = React.lazy(
  () => import("pages/AscendWebCoursePage"),
);
const AscendWebLandingPage = React.lazy(
  () => import("pages/AscendWebLandingPage"),
);
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route
            path="/ascendweblandingpage"
            element={<AscendWebLandingPage />}
          />
          <Route
            path="/ascendwebcoursepage"
            element={<AscendWebCoursePage />}
          />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
