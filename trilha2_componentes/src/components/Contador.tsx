import { useState } from 'react';

// Exercício 1: Contador Simples
export function Contador({ inicial }: { inicial: number }) {
  const [contador, setContador] = useState(inicial);

  return (
    <div>
      <h2>Contador: {contador}</h2>
      <button onClick={() => setContador(contador + 1)}>+</button>
      <button onClick={() => setContador(contador - 1)}>-</button>
    </div>
  );
}

