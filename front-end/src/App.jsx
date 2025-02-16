import "./App.css";
import Header from "./components/Header";

import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import Artists from "./pages/Artists";
import Artist from "./pages/Artist";
import Songs from "./pages/Songs";
import Song from "./pages/Song";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Outlet />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/artistas" element={<Artists />} />
        <Route path="/artista/:id" element={<Artist />} />
        <Route path="/musicas" element={<Songs />} />
        <Route path="/musica/:id" element={<Song />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
