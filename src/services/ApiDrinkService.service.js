const apiUrl = "https://www.thecocktaildb.com/api/json/v1/1/";

class ApiDrinkService {
  static async getRandomCocktail() {
    return fetch(apiUrl + "random.php", {
      //mode: "no-cors",
      method: "GET",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }

  static async getCocktail(cocktailName) {
    return fetch(apiUrl + "search.php?s=" + cocktailName, {
      //mode: "no-cors",
      method: "GET",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }

  static async getCocktailDetail(cocktailId) {
    return fetch(apiUrl + "lookup.php?i=" + cocktailId, {
      //mode: "no-cors",
      method: "GET",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }
}

export default ApiDrinkService;
