

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
            // cell.textContent = j + 1;
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
let rainBow = document.querySelector('.rainbow')
let flag = false



colors.addEventListener('click' , () => {

    cells.forEach((cell)  => {
       
            cell.addEventListener('mousedown' , () => {
            
                flag = true
                cell.style.backgroundColor = 'black'            
           
        });

        cell.addEventListener('mouseover' , () => {
            
            if(flag) cell.style.backgroundColor = 'black'           
       
    });

    cell.addEventListener('mouseup' , () => {
            
        flag = false           
   
});

      
    });
})


eraser.addEventListener('click' , () => {
    cells.forEach((cell) => {
        cell.addEventListener('mousedown' , () => {
            flag = true
            cell.style.backgroundColor = 'white'
        });

        cell.addEventListener('mouseover' , () => {
            if(flag) cell.style.backgroundColor = 'white'
        });

        cell.addEventListener('mouseup' , () => {
            flag = false
        });
    });
});




clear.addEventListener('click' , () => {
    cells.forEach((cell) => {
        cell.style.backgroundColor = "white"
    });
})


rainBow.addEventListener('click' , () => {
    let r, g , b , col;
    cells.forEach((cell) => {
        cell.addEventListener('mousedown' , () => {
             r = Math.floor(Math.random() * 256)
             g = Math.floor(Math.random() * 256)
             b = Math.floor(Math.random() * 256)
             col = "rgb(" + r + "," + g + "," + b + ")";
            flag = true
            cell.style.backgroundColor = col

        })

        cell.addEventListener('mouseover' , () => {
            if(flag) {
                r = Math.floor(Math.random() * 256)
                g = Math.floor(Math.random() * 256)
                b = Math.floor(Math.random() * 256)
                col = "rgb(" + r + "," + g + "," + b + ")";
                cell.style.backgroundColor = col
            }
        })

        cell.addEventListener('mouseup' , () => {
            flag = false
        })
    })
})

// rgb(generateRandomColor , generateRandomColor , generateRandomColor)





