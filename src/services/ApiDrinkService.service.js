const apiUrl = "https://www.thecocktaildb.com/api/json/v1/1/";

class ApiDrinkService {
  static async getRandomCocktail() {
    try {
      const response = await fetch(apiUrl + "random.php", { method: "GET" });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return await response.json();
    } catch (error) {
      console.error(
        "There was a problem with fetch random cocktail operation:",
        error
      );
    }
  }

  static async getCocktail(cocktailName) {
    try {
      const response = await fetch(apiUrl + "search.php?s=" + cocktailName, {
        method: "GET",
      });
      if (!response.ok) {
        throw new Error("Network response was no ok");
      }
      return await response.json();
    } catch (error) {
      console.error(
        "There was a problem with the searching cocktail operation",
        error
      );
    }
  }

  static async getCocktailDetail(cocktailId) {
    try {
      const response = await fetch(apiUrl + "lookup.php?i=" + cocktailId, {
        method: "GET",
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return await response.json();
    } catch (error) {
      console.error(
        "There was a problem with the getting cocktails details operation: ",
        error
      );
    }
  }
}

export default ApiDrinkService;
