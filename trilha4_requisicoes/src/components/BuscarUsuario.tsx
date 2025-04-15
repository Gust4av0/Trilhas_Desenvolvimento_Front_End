import { useState } from "react";

const BuscarUsuario = () => {
  const [id, setId] = useState("");
  const [usuario, setUsuario] = useState<{ name: string; email: string } | null>(null);
  const [erro, setErro] = useState("");

  const buscarUsuario = async () => {
    setErro("");
    setUsuario(null);
    try {
      const resposta = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
      if (!resposta.ok) throw new Error("Usuário não encontrado");
      const dados = await resposta.json();
      setUsuario({ name: dados.name, email: dados.email });
    } catch (e: any) {
      setErro(e.message);
    }
  };

  return (
    <div>
      <h2>Buscar Usuário</h2>
      <input
        type="number"
        placeholder="Digite o ID do usuário"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <button onClick={buscarUsuario}>Buscar</button>

      {usuario && (
        <div>
          <p><strong>Nome:</strong> {usuario.name}</p>
          <p><strong>Email:</strong> {usuario.email}</p>
        </div>
      )}

      {erro && <p style={{ color: "red" }}>{erro}</p>}
    </div>
  );
};

export default BuscarUsuario;
