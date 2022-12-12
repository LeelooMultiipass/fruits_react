import { useRef, useState } from "react";
import Fruit from "./components/Fruit";
import FruitForm from "./components/FruitForm";
function App() {
  // state (état, données)
  const [fruits, setFruits] = useState([
    { id: 1, nom: "Abricot" },
    { id: 2, nom: "Banane" },
    { id: 3, nom: "Cerise" }
  ]);

  //const inputRef = useRef();

  //comportements
  const handleDelete = (id) => {
    //1.copie du state
    const fruitsCopy = [...fruits];

    //2. manipuler mon state
    const fruitsCopyUpdated = fruitsCopy.filter((fruit) => fruit.id !== id);
    //3. modifier mon state avec le setter

    setFruits(fruitsCopyUpdated);
  };

  const handleAdd = (fruitAAjouter) => {
    const fruitsCopy = [...fruits];
    fruitsCopy.push(fruitAAjouter);
    setFruits(fruitsCopy);
  };

  const afficherFruitPrefere = (fruitNom) => {
    alert(`J'aime trop ce fruits: ${fruitNom}`);
  };

  //affichage (render)
  return (
    <div>
      <h1>Liste de fruits</h1>
      <ul>
        {fruits.map((fruit) => (
          <Fruit
            fruitInfo={fruit}
            onClick={() => handleDelete(fruit.id)}
            key={fruit.id}
          />
          //);
        ))}
      </ul>
      <FruitForm handleAdd={handleAdd} />
    </div>
  );
}

export default App;

//Gestion du formulaire
//1. création du formulaire
//2. soumission du formulaire (onSubmit /handleSubmit)
//3. collecte des données du formulaire
//3a. méthode 1: documentGetElementById "React" (userRef)
//3b. méthode 2 : sync descendante / ascendante (onChange/handleChange)
