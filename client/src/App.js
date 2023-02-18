import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";

import Home from "pages/home";
import Profile from "pages/profile";
import Login from "pages/login";
import { useState } from "react";

function App() {
  const mode = useState;
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
