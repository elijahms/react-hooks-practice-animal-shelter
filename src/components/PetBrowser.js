import React from "react";
import Pet from "./Pet";

function PetBrowser({pets, onAdoptPet}) {

  return <div className="ui cards">{pets.map((pet) => {
    return <Pet 
    key={pet.id}
    type={pet.type}
    name={pet.name}
    gender={pet.gender}
    age={pet.age}
    weight={pet.weight}
    isAdopted={pet.isAdopted}
    id={pet.id}
    />
  })}</div>;
}

export default PetBrowser;

