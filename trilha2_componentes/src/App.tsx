import { Contador } from "./components/Contador";
import { Saudacao } from "./components/Saudacao";
import { ListaTarefas } from "./components/ListaTarefas";
import { ToggleVisibilidade } from "./components/ToggleVisibilidade";

export default function Home() {
  return (
    <div>
      <h1>Exercícios React</h1>
      <Contador inicial={0} />
      <Saudacao nomeInicial="Gustavo" />
      <ListaTarefas tarefasIniciais={["Morgar", "teste"]} />
      <ToggleVisibilidade texto="Juca Bala!" />
    </div>
  );
}
