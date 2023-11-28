const value = document.getElementById('value');
const decrement = document.querySelector('button[data-action="decrement"]')
const increment = document.querySelector('button[data-action="increment"]')


let counterValue = 0;

decrement.addEventListener('click', () => {
    counterValue--;
    value.textContent = counterValue;
})
increment.addEventListener('click', () => {
    counterValue++;
    value.textContent = counterValue;
})
