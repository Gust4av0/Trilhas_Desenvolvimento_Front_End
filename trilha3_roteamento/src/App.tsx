import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home } from "./components/Home";
import { Sobre } from "./components/Sobre";
import { Contato } from "./components/Contato";
import { Animal } from "./components/Animal";
import { Quartos } from "./components/Quartos";
import { DetalhesQuartos } from "./components/DetalhesQuartos";
import { SucessoReserva } from "./components/SucessoReserva";

export default function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/sobre">Sobre</Link> | 
        <Link to="/contato">Contato</Link> | 
        <Link to="/quartos">Quartos</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/animal/:name" element={<Animal />} />
        <Route path="/quartos" element={<Quartos />} />
        <Route path="/quarto/:id" element={<DetalhesQuartos />} />
        <Route path="/sucesso-reserva" element={<SucessoReserva />} />
      </Routes>
    </Router>
  );
}
