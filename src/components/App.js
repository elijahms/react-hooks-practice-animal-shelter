import React, { useState } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

function App() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({ type: "all" });

  function onChangeType(event) {
      setFilters({ type: event.target.value});
  }

  function onFindPetsClick() {
    fetch(`http://localhost:3001/pets${filters.type !== "all" ? "?type=" + filters.type : ''}`)
    .then(r => r.json())
    .then(data => setPets(data));
  }

  console.log(pets);

  function onAdoptPet(id) {
    console.log("yo");
  }

  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters onChangeType={onChangeType} onFindPetsClick={onFindPetsClick} />
          </div>
          <div className="twelve wide column">
            <PetBrowser pets={pets} onAdoptPet={onAdoptPet} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
