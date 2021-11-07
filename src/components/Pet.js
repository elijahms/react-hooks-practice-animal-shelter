import React, {useState} from "react";

function Pet({type, name, gender, age, weight, isAdopted, id}) {

  console.log(isAdopted);

  const [petAdopted, setPetAdopted] = useState(isAdopted)

  function onAdoptPet() {
    setPetAdopted((petAdopted) => !petAdopted)
  }

  return (
    <div className="card" data-testid="pet">
      <div className="content">
        <span className="header">
        {name} {gender === "male" ? "♂️" : "♀️"}
        </span>
        <div className="meta">
          <span className="date">{type}</span>
        </div>
        <div className="description">
          <p>Age: {age}</p>
          <p>Weight: {weight} </p>
        </div>
      </div>
      <div className="extra content">
        <button className={!petAdopted ? 'ui disabled button' : "ui primary button"}>Already adopted</button>
        <button onClick={onAdoptPet} className={petAdopted ? 'ui disabled button' : "ui primary button"}>Adopt pet</button>
      </div>
    </div>
  );
}

export default Pet;
