import { useState } from "react";

const CriarUsuario = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");

  const cadastrarUsuario = async () => {
    setMensagem("");
    try {
      const resposta = await fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: nome, email }),
      });

      if (!resposta.ok) throw new Error("Erro ao cadastrar");

      const dados = await resposta.json();
      console.log("Usuário criado:", dados);
      setMensagem("Usuário cadastrado com sucesso!");
      setNome("");
      setEmail("");
    } catch (e: any) {
      setMensagem("Erro ao cadastrar usuário");
    }
  };

  return (
    <div>
      <h2>Criar Usuário</h2>
      <input
        type="text"
        placeholder="Nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={cadastrarUsuario}>Cadastrar</button>

      {mensagem && <p>{mensagem}</p>}
    </div>
  );
};

export default CriarUsuario;
