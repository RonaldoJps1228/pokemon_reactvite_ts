import { Route, Routes } from "react-router-dom";
import { Items } from "../components/pages/Items";
import { Pokemon } from "../components/pages/Pokemon";
import { Pokemons } from "../components/pages/Pokemons";

export const Ruteo = () => {
  return (
    <Routes>
      <Route path="/" element={<Pokemons />}></Route>

      <Route path="/items" element={<Items />}></Route>

      <Route path="/pokemons" element={<Pokemons />}></Route>

      <Route path="/pokemons/:name" element={<Pokemon />}></Route>
    </Routes>
  );
};
