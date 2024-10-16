import DrinkOfTheDay from "./components/DrinkOfTheDay.js";
import DrinkList from "./components/DrinkList.js";
import Error from "./components/Error.js";
import { DrinkContext } from "./store/drinkstore.js";
import SearchFailed from "./components/SearchFailed.js";
import { useContext } from "react";

function App() {
  const { searchResults, selectedDrink, searchFailed, error } =
    useContext(DrinkContext);

  if (error) {
    return <Error />;
  }

  return (
    <>
      {searchFailed && (
        <div>
          <SearchFailed />
        </div>
      )}
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
