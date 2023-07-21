

const container = document.querySelector(".container");

function createGrid (row , col) {


    for (let i = 0 ; i < row ; i++)
    {
        let rows = document.createElement('div')
        rows.classList.add('row')
        container.appendChild(rows)
        rows.style.display = 'flex'

        for (let j = 0 ; j < col ; j++)
        {
            let cell = document.createElement('div')
            cell.textContent = j + 1;
            cell.classList.add('cell')
            rows.appendChild(cell)
        }
    }
}

createGrid(10 , 10);

let cells = document.querySelectorAll('.cell');
let eraser = document.querySelector('.eraser')
let colors = document.querySelector('.color')
let clear = document.querySelector('.clear')




colors.addEventListener('click' , () => {
    cells.forEach((cell) => {

        cell.addEventListener('mouseover' , () =>
        {
            cell.style.backgroundColor = 'black'
        });
    });
})





// function color() {
//     cells.forEach((cell) => {

//         cell.addEventListener('mouseover' , () =>
//         {
//             cell.style.backgroundColor = 'black'
//         });
//     });
// }


eraser.addEventListener('click' , () => {
    cells.forEach((cell) => {

        cell.addEventListener('mouseover' , () =>
        {
            cell.style.backgroundColor = 'white'
        });
    });
})


clear.addEventListener('click' , () => {
    cells.forEach((cell) => {
        cell.style.backgroundColor = "white"
    });
})





