const input = document.querySelector("input");

input.addEventListener("blur", handleInput);

function handleInput(event) {
    // event.preventDefault();
    const inputValue = event.target.value;
    if (inputValue.length >= 6) {
        // input.classList.add("valid");
        input.classList.toggle("valid");
    } else {
        // input.classList.add("invalid");
        input.classList.toggle("invalid");
    }
}

