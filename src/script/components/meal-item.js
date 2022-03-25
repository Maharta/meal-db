/* eslint-disable no-underscore-dangle */
class MealItem extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: "open" });
  }

  set meal(meal) {
    this._meal = meal;
    this.render();
  }

  render() {
    this._shadowRoot.innerHTML = `
        <style>

        h3{
            font-size: 24px;
            text-align: center;
            margin-bottom: 12px;
          }
        
        .food-image{
            max-width: 300px;
          }
        
        .meal{
            padding: 20px 0;
            border-radius: 20px;
            box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
          }
        
        .category{
            box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
            max-width: fit-content;
            background-color: rgb(31, 86, 141);
            color: white;
            padding: 12px 30px;
            text-align: center;
            margin: 20px auto 0 auto;
            border-radius: 12px;
          }
        
        </style>
        <div class="meal">
            <h3>${this._meal.strMeal}</h3><img class="food-image" src="${this._meal.strMealThumb}">
            <h4 class="category">${this._meal.strCategory}</h4>
        </div>`;

    this._shadowRoot.querySelector(".meal").addEventListener("click", () => {
      document.getElementById("tip").classList.add("hide");
      this.renderDetail(this._meal);
    });
  }

  // renderDetail when an item is clicked
  renderDetail(meal) {
    const mealContainer = document.querySelector(".meals-container");
    mealContainer.innerHTML = "";
    this._shadowRoot.innerHTML = `

    <style>

    .meal{
      
      padding: 20px 0;
      border-radius: 20px;
      box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
      max-width: 700px;
    }

    .food-image{
      max-width: 700px;
    }

    h3{
      text-align: center;
      font-size: 24px;
    }

    .category, .link{
      box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
      max-width: fit-content;
      background-color: rgb(31, 86, 141);
      color: white;
      padding: 12px 30px;
      text-align: center;
      margin: 20px auto 0 auto;
      border-radius: 12px;
    }

    .instruction-container{
      max-height: 200px;
      overflow-y: scroll;

    }

    h4{
      margin-left: 16px;
    }

    p{
      margin: 16px;
      white-space: pre-wrap;
    }

    .link{
      display: block;
      background-color: #f50902;
      margin: 20px auto 0 auto;
      text-decoration: none;
      font-weight: bold;
      padding: 10px 20px;
    }

    @media screen and (max-width: 1024px){
      .meal, .food-image{
        width: 100vw;
      } 
    }
    

    </style>
    <div class="meal card">
            <h3>${meal.strMeal}</h3><img class="food-image" src="${this._meal.strMealThumb}">
            <h4 class="category card">${meal.strCategory}</h4>
            <h4>Ingredients</h4>
            <hr>
            <ol class="ingredients">
            </ol>
            <h4>Instructions</h4>
            <hr>
            <div class="instruction-container">
              <p>${meal.strInstructions}</p>
            </div>
            <a class="link" href="${meal.strYoutube}">Watch on Youtube</a>
            
    </div>`;

    // getting meal ingredients

    const keys = Object.keys(meal);

    keys.forEach((key) => {
      const subsstring = key.substring(0, 13);
      if (subsstring === "strIngredient") {
        if (meal[key] !== "") {
          const li = document.createElement("li");
          li.innerText = meal[key];
          this._shadowRoot.querySelector(".ingredients").appendChild(li);
        }
      }
    });

    mealContainer.appendChild(this);
  }
}

customElements.define("meal-item", MealItem);
