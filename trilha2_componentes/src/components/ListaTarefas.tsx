import { useState } from 'react';

export function ListaTarefas({ tarefasIniciais }: { tarefasIniciais: string[] }) {
    const [tarefas, setTarefas] = useState(tarefasIniciais);
    const [novaTarefa, setNovaTarefa] = useState("");
  
    const adicionarTarefa = () => {
      if (novaTarefa.trim() !== "") {
        setTarefas([...tarefas, novaTarefa]);
        setNovaTarefa("");
      }
    };
  
    return (
      <div>
        <h2>Lista de Tarefas</h2>
        <ul>
          {tarefas.map((tarefa, index) => (
            <li key={index}>{tarefa}</li>
          ))}
        </ul>
        <input
          type="text"
          value={novaTarefa}
          onChange={(e) => setNovaTarefa(e.target.value)}
        />
        <button onClick={adicionarTarefa}>Adicionar</button>
      </div>
    );
  }
  