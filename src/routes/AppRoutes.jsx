import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicial from "../pages/Inicial";
import Sobre from "../pages/Sobre";
import Contato from "../pages/Contato";
import Albuns from "../pages/Albuns";
import Body from "../layout/Body";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      {/* responsável por englobar o app em navegação */}
      <Routes>
        {/* responsável pelas rotas */}
        <Route path="/" element={<Body />}>
          <Route path="/" element={<Inicial />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/albuns" element={<Albuns />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
