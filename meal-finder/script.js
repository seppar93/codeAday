/** @format */

// API CALL www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata
// random api www.themealdb.com/api/json/v1/1/random.php

const submit = document.getElementById("submit"), //form
  search = document.getElementById("search"), //input
  random = document.getElementById("random"),
  mealsEl = document.getElementById("meals"),
  resultHeading = document.getElementById("results-heading"),
  single_mealEl = document.getElementById("single-meal");

// search meal and fetch from API
function searchMeal(e) {
  e.preventDefault();

  // clear single meal
  single_mealEl.innerHTML = "";
  const term = search.value;

  if (term.trim()) {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        resultHeading.innerHTML = `<h2> Search result for '${term}'</h2>`;

        if (data.meals === null) {
          resultHeading.innerHTML = `<h4> no Search results for '${term}' </h4>`;
        } else {
          mealsEl.innerHTML = data.meals
            .map(
              (meal) => `
            <div class='meal'>
            <img src="${meal.strMealThumb}" alt="${meal.strMeal}/>
            <div class="meal-info" data-mealID="${meal.idMeal}">
            </div>
            <h3>${meal.strMeal}</h3>
            </div>
            `
            )
            .join("");
        }
      });
      //clear Search text
      search.value=''
  } else {
    alert("Please enter a search value or term");
  }
}
// Fetch meal by ID
function getMealById(mealID) {

}

// event listener
submit.addEventListener("submit", searchMeal);

mealsEl.addEventListener('click', e => {
    const mealInfo = e.path.find(item => {
        if(item.classList){
            return item.classList.contains('meal-info');
        } else {
            return false
        }
    })
    if(mealInfo) {
        const mealID = mealInfo.getAttribute('data-mealid')
        getMealById(mealID)
    }
})