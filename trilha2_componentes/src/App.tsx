import { Contador } from "./components/Contador";
import { Saudacao } from "./components/Saudacao";
import { ListaTarefas } from "./components/ListaTarefas";
import { ToggleVisibilidade } from "./components/ToggleVisibilidade";

export default function Home() {
  return (
    <div>
      <h1>Exercícios React</h1>
      <hr></hr>
      <div className="titulo">
      <p>Exercício 1</p>
      </div>
      <Contador inicial={0} />
      <hr></hr>
      <br />
      <div className="titulo">
      <p>Exercício 2</p>
      </div>
      <Saudacao nomeInicial="Gustavo" />
      <hr></hr>
      <br />
      <div className="titulo">
      <p>Exercício 3</p>
      </div>
      <ListaTarefas tarefasIniciais={["Morgar", "teste"]} />
      <hr></hr>
      <br />
      <div className="titulo">
      <p>Exercício 4</p>
      </div>
      <ToggleVisibilidade texto="Juca Bala!" />
    </div>
  );
}
