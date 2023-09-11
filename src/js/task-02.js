const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulIngredients = document.getElementById('ingredients');

const listIngredients = document.createDocumentFragment();
ingredients.forEach((ingredient) => {
  const li = document.createElement('li');
  li.textContent = ingredient;
  li.classList.add('item');
  listIngredients.appendChild(li);
});
ulIngredients.appendChild(listIngredients);
console.log(ulIngredients);

