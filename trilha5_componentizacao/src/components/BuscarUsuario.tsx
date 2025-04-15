import { useState } from "react";
import { useUser } from "./hooks/useUser";
import Input from "./form/Input";
import Button from "./form/Button";

const BuscarUsuario = () => {
  const [id, setId] = useState("");
  const { user, error, fetchUserById } = useUser();

  const handleBuscar = () => {
    const idNumber = Number(id);
    if (idNumber) fetchUserById(idNumber);
  };

  return (
    <div>
      <h2>Buscar Usuário</h2>
      <Input
        label="ID:"
        type="number"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <Button onClick={handleBuscar}>Buscar</Button>

      {user && (
        <div>
          <p>Nome: {user.name}</p>
          <p>Email: {user.email}</p>
        </div>
      )}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default BuscarUsuario;
