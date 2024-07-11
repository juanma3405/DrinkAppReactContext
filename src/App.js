import DrinkOfTheDay from "./components/DrinkOfTheDay.js";
import DrinkList from "./components/DrinkList.js";
import { DrinkContext } from "./store/drinkstore.js";
import SearchFailed from "./components/SearchFailed.js";
import { useContext } from "react";

function App() {
  const { searchResults, selectedDrink, searchFailed } =
    useContext(DrinkContext);

  return (
    <>
      {searchFailed && <SearchFailed />}
      {(searchResults.length === 0 || selectedDrink) && !searchFailed && (
        <div>
          <DrinkOfTheDay />
        </div>
      )}
      {searchResults.length > 0 && !selectedDrink && !searchFailed && (
        <DrinkList />
      )}
    </>
  );
}

export default App;
