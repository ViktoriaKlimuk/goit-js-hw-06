const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

//
const category = document.getElementById('ingredients');
const fragment = document.createDocumentFragment();
//

const liElements = ingredients.map(ingredient => {
  const li = document.createElement("li");
  li.textContent = ingredient;
  li.classList.add('item');
  return li
})

category.append(...liElements);

