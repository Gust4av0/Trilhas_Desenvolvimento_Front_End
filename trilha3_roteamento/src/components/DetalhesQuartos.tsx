import { useParams, useNavigate } from "react-router-dom";

export function DetalhesQuartos() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <h1>Detalhes do Quarto {id}</h1>
      <button onClick={() => navigate("/sucesso-reserva")}>Reservar</button>
    </div>
  );
}
