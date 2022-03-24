import DataSource from "../data/datasource";
import "../components/meal-item";

function main() {
  const searchElement = document.querySelector("search-bar");
  const mealContainer = document.querySelector(".meals-container");

  async function onButtonSearchClicked() {
    document.querySelector("#tip").classList.remove("hide");
    try {
      mealContainer.innerHTML = "";
      const meals = await DataSource.searchMealByName(searchElement.value);
      meals.forEach((meal) => {
        const mealCard = document.createElement("meal-item");
        mealCard.meal = meal;
        mealContainer.appendChild(mealCard);
      });
    } catch (e) {
      // eslint-disable-next-line no-alert
      alert("Pencarian tidak ditemukan");
    }
    searchElement.value = ""; // clear search input after search done
  }

  searchElement.clickEvent = onButtonSearchClicked;
}

export default main;
