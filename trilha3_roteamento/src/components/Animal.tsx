import { useParams } from "react-router-dom";

export function Animal() {
  const { name } = useParams();

  return <h1>Animal: {name}</h1>;
}
