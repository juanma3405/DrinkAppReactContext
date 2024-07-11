import { createContext, useState, useEffect } from "react";
import ApiDrinkService from "../services/ApiDrinkService.service";

export const DrinkContext = createContext();

export default function DrinkContextProvider({ children }) {
  const [drinkOfTheDay, setDrinkOfTheDay] = useState(null);
  const [searchResults, setSearchResults] = useState([]);
  const [selectedDrink, setSelectedDrink] = useState(null);
  const [searchFailed, setSearchFailed] = useState(null);

  useEffect(() => {
    const fetchRandomDrink = async () => {
      try {
        const response = await ApiDrinkService.getRandomCocktail();
        const drinkData = response.drinks[0];
        const newDrink = {
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
        while (drinkData[nroIngredient] != null) {
          newDrink.ingredients.push(drinkData[nroIngredient]);
          newDrink.ingmeasures.push(drinkData[nroIngMeasure]);
          i++;
          nroIngredient = "strIngredient" + i;
          nroIngMeasure = "strMeasure" + i;
        }
        setDrinkOfTheDay(newDrink);
      } catch (error) {
        console.error("Error fetching the random drink:", error);
      }
    };
    fetchRandomDrink();
  }, []);

  return (
    <DrinkContext.Provider
      value={{
        drinkOfTheDay,
        searchResults,
        setSearchResults,
        selectedDrink,
        setSelectedDrink,
        searchFailed,
        setSearchFailed,
      }}
    >
      {children}
    </DrinkContext.Provider>
  );
}
