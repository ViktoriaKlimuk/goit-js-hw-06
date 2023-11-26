const item = document.querySelectorAll('li.item');
console.log('Number of categories:', item.length);


item.forEach(list => {
    const title = list.querySelector('h2').textContent;
    const elem = list.querySelectorAll('ul li').length;

    console.log('Category:', title);
    console.log('Elements:', elem);
})

