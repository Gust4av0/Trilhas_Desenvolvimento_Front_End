import { useState } from 'react';

export function Saudacao({ nomeInicial }: { nomeInicial: string }) {
    const [nome, setNome] = useState(nomeInicial);
  
    return (
      <div>
        <h2>Olá, {nome}!</h2>
        <input 
          type="text" 
          value={nome} 
          onChange={(e) => setNome(e.target.value)}
        />
      </div>
    );
  }