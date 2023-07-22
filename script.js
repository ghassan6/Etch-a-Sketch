

const container = document.querySelector(".container");

function deleteGrid() {
    let rows = document.querySelectorAll('.row')
    let cols = document.querySelectorAll('.cell')
   
    rows.forEach(row => {
        row.remove()
    })  
        
    cols.forEach(col => {
        col.remove
        // console.log('suc')
    })
}

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
            // cell.textContent = j + 1
            cell.classList.add('cell')
            rows.appendChild(cell)
        }
    }
}

// this function does ... 

createGrid(16 , 16);

let range = document.querySelector('.range')
let label = document.querySelector('label')

range.addEventListener('input' , () => {
    label.textContent = `Grid Size: ${range.value} X ${range.value}`
    console.log(range.value)
    deleteGrid();
    createGrid(range.value , range.value); 
     cells = document.querySelectorAll('.cell');
    eraser = document.querySelector('.eraser')
    colors = document.querySelector('.color')
    clear = document.querySelector('.clear')
    rainBow = document.querySelector('.rainbow')
    color1 = document.querySelector('.picker')
})



let cells = document.querySelectorAll('.cell');
let eraser = document.querySelector('.eraser')
let colors = document.querySelector('.color')
let clear = document.querySelector('.clear')
let rainBow = document.querySelector('.rainbow')
let color1 = document.querySelector('.picker')


let flag = false
label.textContent = `Grid Size: ${range.value} X ${range.value}` 







color1.addEventListener('change' , () => {
    colors.style.backgroundColor = color1.value
colors.style.color = 'white'
})


colors.addEventListener('click' , () => {
    console.log('55')
    cells.forEach((cell)  => {
       
            cell.addEventListener('mousedown' , () => {
                console.log('55')
                flag = true
                cell.style.backgroundColor = color1.value           
           
        });

        cell.addEventListener('mouseover' , () => {
            
            if(flag) cell.style.backgroundColor = color1.value           
       
    });

    cell.addEventListener('mouseup' , () => {
            
        flag = false           
   
});

      
    });
 } )


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










