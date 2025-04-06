import { Link } from "react-router-dom";

export function Quartos() {
  return (
    <div>
      <h1>Lista de Quartos</h1>
      <ul>
        <li><Link to="/quarto/1">Quarto 1</Link></li>
        <li><Link to="/quarto/2">Quarto 2</Link></li>
      </ul>
    </div>
  );
}
