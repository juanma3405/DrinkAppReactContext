import { useContext } from "react";
import { DrinkContext } from "../store/drinkstore.js";
import "./SearchFailed.css";

const SearchFailed = () => {
  const { setSearchFailed } = useContext(DrinkContext);

  const backToDrinkOfDay = () => {
    setSearchFailed(null);
  };

  return (
    <div>
      <div className="no-results-container">
        <h2>Sorry, that drink is not on our list</h2>
      </div>
      <button className="btn-style" onClick={backToDrinkOfDay}>
        Back to drink of the day
      </button>
    </div>
  );
};

export default SearchFailed;
