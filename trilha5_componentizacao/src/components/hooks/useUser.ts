import { useState } from "react";
import { User } from "../types/user";

export function useUser() {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState("");

  const fetchUserById = async (id: number) => {
    setUser(null);
    setError("");
    try {
      const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
      if (!res.ok) throw new Error("Usuário não encontrado");
      const data = await res.json();
      setUser({ name: data.name, email: data.email });
    } catch (err: any) {
      setError(err.message);
    }
  };

  return { user, error, fetchUserById };
}
