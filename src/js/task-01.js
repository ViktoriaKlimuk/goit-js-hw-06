// знайти елемент
const categoryList = document.getElementById('categories');
// знайти всі li
const categoryLi = categoryList.querySelectorAll('li.item');
console.log(`Number of categories: ${categoryLi.length}`);
// інформація
categoryLi.forEach((item) => {
    const categoryTitle = item.querySelector('h2').textContent;
    const categoryListCount = item.querySelectorAll('ul, li').length;
    console.log(`Category: ${categoryTitle}`);
    console.log(`Elements: ${categoryListCount}`);
});
