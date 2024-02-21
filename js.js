let container = document.querySelector(".container")
let button = document.querySelector("#btn")

for (let i=0; i<256;i++) {
    div = document.createElement("div")
    div.className = "innerdiv"
    container.appendChild(div)
}

button.addEventListener("click", () => {
    let answer = prompt("Enter number of squares per side (max 100): ", "");
    if (answer === null) return;
    answer = parseInt(answer);

    while (isNaN(answer) || answer > 100) {
        answer = prompt("Enter number of squares per side (max 100): ", "");
        if (answer === null) return;
        answer = parseInt(answer);
    }

    container.innerHTML = "";

    let totalWidth = 256/answer;

    for (let i=0; i<answer * answer; i++) {
        let userDiv = document.createElement("div");
        userDiv.className = "innerDiv";
        userDiv.style.width = `${totalWidth}px`;
        userDiv.style.height = `${totalWidth}px`;
        container.appendChild(userDiv);
    }
});