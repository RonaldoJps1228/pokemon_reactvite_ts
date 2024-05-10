import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Cabecera } from "../container/Cabecera";
import { Pie } from "../container/Pie";
import { fetchPokemons } from "../../../api/fetchPokemons";
import { Pokemon } from "../../types/types";
import { Cargando } from "../container/Cargando";
import { waitFor } from "../../utils/utils";
import { Colors } from "../../utils/colors";

export const Pokemons = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    const fetchAllPokemons = async () => {
      setIsLoading(true);
      await waitFor(500);
      const allPokemons = await fetchPokemons();
      setPokemons(allPokemons);
      setIsLoading(false);
    }
    fetchAllPokemons();
  },[]);

  if (isLoading || !pokemons){
    return <Cargando/>
  }
  
  const filteredPokemons = pokemons?.slice(0, 151).filter((pokemon) =>  {
    return pokemon.name.toLowerCase().includes(query.toLowerCase())
  })

  const getCardColor = (type: string) => {
    switch (type) {
      case 'Grass':
        return Colors.greenAccent;
      case 'Fire':
        return Colors.redAccent;
      case 'Water':
        return Colors.blueAccent;
      case 'Electric':
        return Colors.yellowAccent;
      case 'Rock':
        return Colors.fromARGB(255, 132, 99, 51);
      case 'Ground':
        return Colors.fromRGBO(221, 171, 54, 1);
      case 'Psychic':
        return Colors.pink;
      case 'Fighting':
        return Colors.orangeAccent;
      case 'Bug':
        return Colors.lightGreenAccent;
      case 'Ghost':
        return Colors.deepPurple;
      case 'Normal':
        return Colors.grey;
      case 'Poison':
        return Colors.purple;
      case 'Ice':
        return Colors.lightBlueAccent;
      default:
        return Colors.fromARGB(255, 86, 98, 156);
    }
  }

  return (
    <>
    <div className="page-content py-5 position-relative ">
      <Cabecera query={query} setQuery={setQuery} />
      <main>
        <h1 className="px-3 py-3">Pokemons</h1>
        <div className="container">
          <div className="row">
            {filteredPokemons?.slice(0, 151).map((pokemon) => (
              <div className="col-md-2 pb-5" key={pokemon.id}>
                <div className="card" style={{ backgroundColor: getCardColor(pokemon.tipo[0]) }}>
                  <img src={pokemon.imgSrc} alt={pokemon.name} className="card-img-top" style={{ width: "80%", height: "200px" }} />
                  <div className="card-body">
                    <Link to={`/pokemons/${pokemon.name.toLowerCase()}`} className="link-dark link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover">
                      <h4 className="card-title">{pokemon.name}</h4>
                    </Link>
                    <p className="card-text">Type: {pokemon.tipo.join(", ")}</p>
                  </div>
                  <div className="card-footer bg-white"><small className="text-body-dark">{pokemon.id}</small></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
    <Pie />
    </>
  );
}