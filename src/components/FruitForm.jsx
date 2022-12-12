import { useRef, useState } from "react";

export default function FruitForm({ handleAdd }) {
  const [nouveauFruit, setNouveauFruit] = useState("");

  //state

  //comportements

  const handleSubmit = (e) => {
    e.preventDefault();
    //1. copie du state

    //2. manipulation sur la copie du state
    const id = new Date().getTime();
    const nom = nouveauFruit;
    const fruitAAjouter = { id, nom };
    // const fruitsCopy = [...fruits];

    //3. modifier le state avec le setter
    handleAdd(fruitAAjouter);
    setNouveauFruit("");

    // console.log(inputRef.current.value);
  };

  const handleChange = (e) => {
    console.log(e.target.value);

    setNouveauFruit(e.target.value);
  };

  //affichage (render)
  return (
    <form action="submit" onSubmit={handleSubmit}>
      <input
        value={nouveauFruit}
        type="text"
        placeholder="Ajouter un fruit..."
        onChange={handleChange}
      />
      <button>Ajouter</button>
    </form>
  );
}
