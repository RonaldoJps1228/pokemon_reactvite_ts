import Pokedex from "../../../assets/img/pokedex.png"

export const Cargando = () => {
  return (
    <>
      <div className="bd-example m-0 border-0">
        <div className="text-center bg-dark-subtle  ">
          <span className="spinner-border " aria-hidden="true"></span>
          <span className="spinner-border" aria-hidden="true"></span>
          <span className="spinner-border" aria-hidden="true"></span>
          <br />
            <span role="status">Loading...</span>
        </div>
        <img src={Pokedex} alt="pokedex" className="mx-auto d-block" style={{ width: "20%" }} />
      </div>
    </>
  );
};
