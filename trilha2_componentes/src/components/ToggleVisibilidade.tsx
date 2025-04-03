import { useState } from 'react';

export function ToggleVisibilidade({ texto }: { texto: string }) {
    const [visivel, setVisivel] = useState(false);
  
    return (
      <div>
        <button onClick={() => setVisivel(!visivel)}>
          {visivel ? "Ocultar" : "Mostrar"}
        </button>
        {visivel && <p>{texto}</p>}
      </div>
    );
  }