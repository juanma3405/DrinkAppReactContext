import { useState, useContext } from "react";
import { DrinkContext } from "../store/drinkstore";
import ApiDrinkService from "../services/ApiDrinkService.service";
import searchImage from "../assets/search.svg";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const { setSearchResults, setSearchFailed } = useContext(DrinkContext);

  const handleSearch = async (e) => {
    debugger;
    e.preventDefault();
    try {
      const response = await ApiDrinkService.getCocktail(query);
      const searchDrinks = response.drinks || [];
      if (searchDrinks.length === 0) {
        setSearchFailed(true);
      }
      console.log(searchDrinks);
      const searchResults = searchDrinks.map((drink) => ({
        idDrink: drink.idDrink,
        name: drink.strDrink,
        urlImage: drink.strDrinkThumb,
      }));
      setSearchResults(searchResults);
    } catch (error) {
      console.error("Error searching for cocktails:", error);
    }
  };

  return (
    <form onSubmit={handleSearch} className="center">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search a cocktail..."
      />
      <button type="submit">
        <img src={searchImage} alt="Search" />
        Search
      </button>
    </form>
  );
};

export default SearchBar;
