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
console.log(category);
//


ingredients.forEach(ingredient => {
  const list = document.createElement('li');
  list.textContent = ingredient;
  list.classList.add('item')
  console.log(list);
  category.append(list)
});
