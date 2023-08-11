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
    <div> 
      <h1>Title: ${meal.strMeal}</h1>
      <h3>Category: ${meal.strCategory}</h3>
      <p>Origin: ${meal.strArea}
      <img class="img" src="${meal.strMealThumb}"/>
    </div>
    <div>
       <p>Description: ${meal.strInstructions}</p>
    </div>
  </div>`;
}
//Function
