let mainContainer = document.querySelector('.container');

function handleMouseOver(event) {
    event.target.style.backgroundColor = 'lightcoral';
}

function handleMouseOut(event) {
    event.target.style.backgroundColor = "lightblue";
}

function removeGrid() {
    while(mainContainer.firstChild) {
        mainContainer.removeChild(mainContainer.firstChild);
    }
}

function generateGrid(gridSize) {
    removeGrid();
    for(let i = 0; i < gridSize; i++)
        {
            for(let j = 0; j < gridSize; j++)
            {
                let newElement = document.createElement('div');
                newElement.className = 'flex-item';
                newElement.innerText = i + " " + j;

                mainContainer.appendChild(newElement);

                let newWidth = (newElement.parentElement.offsetWidth * 1/gridSize) - 20;

                newElement.style.width = `${newWidth}px`;
                newElement.addEventListener('mouseover', handleMouseOver);
                newElement.addEventListener('mouseout', handleMouseOut);
            }
        }
}

let generateButton = document.querySelector('#generate-button');
generateButton.addEventListener('click', function () {
    let input = prompt('Enter new grid size');
    generateGrid(input);
});