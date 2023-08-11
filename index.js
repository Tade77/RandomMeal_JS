const getMealBtn = document.getElementById("get_meal");
const mealContainer = document.getElementById("meal");

// EventListener:
getMealBtn.addEventListener("click", () => {
  fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    .then((res) => res.json())
    .then((res) => {
      createMeal(res.meals[0]);
    });
});
function createMeal(meal) {
  mealContainer.innerHTML = `
  <div class="meal--wrapper">
  <aside class="meal--info">
    <aside>
      <div class="img--wrapper">
      <img class="img" src="${meal.strMealThumb}"/>
      </div>
      <div>
      <h3>Meal Type: ${meal.strCategory}</h3>
      <p>Origin: ${meal.strArea}
      </div>
    </aside>
    <div>
       <h1>Title: ${meal.strMeal}</h1>
       <p class="desc">Description: ${meal.strInstructions}</p>
    </div>
    </aside>
    <div class="video">
      <h4>Video Recipe</h4>
      <iframe width="560" height="315" src="https://youtube.com/embed/${meal.strYoutube.slice(
        -11
      )}" />
    </div>
  </div>`;
}
//Function
