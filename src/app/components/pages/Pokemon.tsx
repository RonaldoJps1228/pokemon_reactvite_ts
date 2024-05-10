import { Link, useParams } from "react-router-dom";
import { Pie } from "../container/Pie";

// import BulbasaurPic from "../../../assets/img/bulbasaur.gif"; 
import PokemonPic from "../../../assets/img/pokeball.png";
import { useEffect, useState } from "react";
import { PokemonDetails } from "../../types/types";
import { fetchPokemon } from "../../../api/fetchPokemon";
import { waitFor } from "../../utils/utils";
import { Cargando } from "../container/Cargando";

export const Pokemon = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [pokemon, setPokemon] = useState<PokemonDetails>();
  const { name } = useParams();

  useEffect(() => {
    async function getPokemon() {
      const fetchedPokemon = await fetchPokemon(name as string);
      setIsLoading(true);
      await waitFor(500);
      setPokemon(fetchedPokemon);
      setIsLoading(false);
    }
    getPokemon();
  }, [name]);

  if (isLoading || !pokemon){
    return <Cargando/>
  }

  return (
    <>
    <Link to="/pokemons">
      <button>
        <img src={PokemonPic} alt="PokePic" style={{width:"10%"}}/>{" "} Go Back
      </button>
    </Link>
      <div>
        <main>
          <div>{pokemon?.name?.toUpperCase()}</div>
          <br/><hr/><br/>
          <div>Nr. {pokemon?.id }</div>
          <div>
            <img src={pokemon?.imgSrc} alt={pokemon?.name} className="card-img-top" style={{ width: "20%", height: "auto" }} />
          </div>
          <div>HP: {pokemon?.hp}</div>
          <div>Attack: {pokemon?.attack}</div>
          <div>Defense: {pokemon?.defense}</div>
        </main>
      </div>
      <Pie/>
    </>
  );
};
