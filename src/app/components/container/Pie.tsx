import { Link } from "react-router-dom";

import PokemonPic from "../../../assets/img/pikachu.png"
import ItemsPic from "../../../assets/img/pokeball.png"
import LocationPic from "../../../assets/img/pointer.png"

export const Pie = () => {
    return (
        <>
        <footer className="footer fixed-bottom bg-info" >
            <div className="container-fluid">
                <div className="d-flex justify-content-center text-center">
                    <Link className="link-dark link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover" to="/pokemons">
                        <img src={PokemonPic} alt="pokeball" style={{ width: "8%" }} />
                        <div>Pokemons</div>
                    </Link>
                    <Link className="link-dark link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover" to="/items">
                        <img src={ItemsPic} alt="pokeball" style={{ width: "8%" }} />
                        <div>Items</div>
                    </Link>
                    <Link className="link-dark link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover" to="/maps">
                        <img src={LocationPic} alt="pokeball" style={{ width: "8%" }} />
                        <div>Maps</div>
                    </Link>
                </div>
            </div>
        </footer>
        </>
    )
}
