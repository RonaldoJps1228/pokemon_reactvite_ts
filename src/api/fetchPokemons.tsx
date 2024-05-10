import { Pokemon } from "../app/types/types";
import { formatPokemonName } from "../app/utils/utils";

export async function fetchPokemons(): Promise<Pokemon[]> {
  const response = await fetch(
    "https://unpkg.com/pokemons@1.1.0/pokemons.json"
  );

  if (!response.ok) {
    throw new Error("Failed to fetch pokemons");
  }

  const results = await response.json();

  const pokemons = results.results.map((pokemon: any) => ({
    name: pokemon.name,
    id: pokemon.national_number,
    tipo: pokemon.type,
    imgSrc: `https://img.pokemondb.net/sprites/black-white/anim/normal/${formatPokemonName(pokemon.name.toLowerCase())}.gif`,
  }));

  const uniquePokemons = pokemons.filter((pokemon: Pokemon, index: number, self: Pokemon[]) =>
    index === self.findIndex((p: Pokemon) => p.id === pokemon.id)
  );

  return uniquePokemons;
}