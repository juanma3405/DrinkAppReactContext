import { useContext } from "react";
import { DrinkContext } from "../store/drinkstore.js";

const SearchFailed = () => {
  const { setSearchFailed } = useContext(DrinkContext);

  const backToDrinkOfDay = () => {
    setSearchFailed(null);
  };

  return (
    <div className="container">
      <h2>Sorry that drink is not on our list</h2>
      <button onClick={backToDrinkOfDay}>Back to drink of the day </button>
    </div>
  );
};

export default SearchFailed;
