import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";
import ProjectDetailsPage from "./pages/ProjectDetailsPage";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />}></Route>
          <Route path="/contact" element={<ContactPage />}></Route>
          <Route path="/projects/:projectId" element={<ProjectDetailsPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
