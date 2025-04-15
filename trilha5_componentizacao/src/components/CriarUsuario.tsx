import { useState } from "react";
import { useForm } from "./hooks/useForm";
import { User } from "./types/user";
import Input from "./form/Input";
import Button from "./form/Button";

const CriarUsuario = () => {
  const { form, handleChange, resetForm } = useForm<User>({
    name: "",
    email: "",
  });

  const [mensagem, setMensagem] = useState("");

  const handleSubmit = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Erro ao cadastrar usuário");

      setMensagem("Usuário cadastrado com sucesso!");
      resetForm();
    } catch {
      setMensagem("Erro ao cadastrar usuário");
    }
  };

  return (
    <div>
      <h2>Criar Usuário</h2>
      <Input
        label="Nome:"
        name="name"
        value={form.name}
        onChange={handleChange}
      />
      <Input
        label="Email:"
        name="email"
        value={form.email}
        onChange={handleChange}
      />
      <Button onClick={handleSubmit}>Cadastrar</Button>

      {mensagem && <p>{mensagem}</p>}
    </div>
  );
};

export default CriarUsuario;
