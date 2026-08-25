import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";

export default function App() {
  return (
    <>
      {/* =================================================
          NAVBAR
      ================================================= */}

      <Navbar />

      {/* =================================================
          MAIN CONTENT
      ================================================= */}

      <main>
        <Routes>

          <Route
            path="/"
            element={<Home />}
          />

        </Routes>
      </main>
    </>
  );
}