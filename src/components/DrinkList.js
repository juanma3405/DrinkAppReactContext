import { useContext } from "react";
import { DrinkContext } from "../store/drinkstore";
import ApiDrinkService from "../services/ApiDrinkService.service";
import "./DrinkList.css";

const DrinkList = () => {
  const { searchResults, setSelectedDrink, setSearchResults } =
    useContext(DrinkContext);

  const choseDrink = async (drink) => {
    debugger;
    let newDrink;
    let idDrink;
    try {
      if (drink.idDrink !== undefined) {
        idDrink = drink.idDrink?.toString();
      }
      const response = await ApiDrinkService.getCocktailDetail(idDrink);
      const drinkData = response.drinks[0];
      newDrink = {
        idDrink: drinkData.idDrink,
        name: drinkData.strDrink,
        instructions: drinkData.strInstructions,
        urlImage: drinkData.strDrinkThumb,
        ingredients: [],
        ingmeasures: [],
      };
      let i = 1;
      let nroIngredient = "strIngredient" + i;
      let nroIngMeasure = "strMeasure" + i;
      while (drinkData[nroIngredient] !== null) {
        newDrink.ingredients.push(drinkData[nroIngredient]);
        newDrink.ingmeasures.push(drinkData[nroIngMeasure]);
        i++;
        nroIngredient = "strIngredient" + i;
        nroIngMeasure = "strMeasure" + i;
      }
      setSelectedDrink(newDrink);
    } catch (error) {
      console.error("Error fetching drink data: ", error);
    }
  };

  const backToInit = () => {
    setSearchResults([]);
  };

  return (
    <>
      <div className="grid-container">
        {searchResults.map((drink) => (
          <li key={drink.idDrink} className="grid-item">
            <img
              src={drink.urlImage}
              onClick={() => choseDrink(drink)}
              alt="Drink"
            />
            <p>{drink.name}</p>
          </li>
        ))}
      </div>
      <button className="center" onClick={backToInit}>
        Back to drink of the day
      </button>
    </>
  );
};

export default DrinkList;
