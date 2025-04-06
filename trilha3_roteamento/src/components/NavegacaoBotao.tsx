import { useNavigate } from "react-router-dom";

  export function NavegacaoBotao() {
    const navigate = useNavigate();
    return (
      <button onClick={() => navigate("/sobre")}>
        Ir para Sobre
      </button>
    );
  }