import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import MainPage from "../../pages/MainPage";
import CompletedTasksPage from "../../pages/CompletedTasksPage";
import NotFound from "../../pages/NotFound";
import "./App.css";

const App = () => (
  <div className="App">
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="CompletedTasksPage" element={<CompletedTasksPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;
