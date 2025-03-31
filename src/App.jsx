import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";
import ProjectDetailsPage from "./pages/ProjectDetailsPage";

import { HashRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <HashRouter> 
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />}></Route>
          <Route path="/contact" element={<ContactPage />}></Route>
          <Route path="/projects/:projectId" element={<ProjectDetailsPage />}></Route>
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
