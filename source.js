const container = document.querySelector("#container")
container.style.display = 'flex'
container.style.flexDirection = 'column'
container.style.width = '800px'
container.style.height = '800px'

const beige = 'rgb(230, 230, 220)'

function styleCell(cell, i, j, size) {
    cell.style.border = '1px solid'
    // If cell is leftmost, keep left border. Similar for bottom cells.
    if (i != size-1) {
        cell.style.borderBottomWidth = '0px'
    }

    if (j != 0) {
        cell.style.borderLeftWidth = '0px'
    }
    cell.style.backgroundColor = beige
    cell.style.flex = '1'
}

function toggleOnHover(event) {
    green = 'rgb(101, 171, 124)'
    cell = event.target

    if (cell.style.backgroundColor == beige) {
        cell.style.backgroundColor = green
    }
    else {
        cell.style.backgroundColor.backgroundColor = beige
    }
    
}

function getGridDimensions() {
    var input = prompt("Please enter grid size as an integer:")
    num = Number(input)
    setGrid(num)
}

function destroyGrid() {
    container.innerHTML = ""
    console.log(container.innerHTML)
}
function setGrid(size) {
    destroyGrid()
    for (let i = 0; i < size; i++) {
        const row = document.createElement('div')
        row.style.display = "flex"
        row.style.flex = '1'
        for (let j = 0; j < size; j++) {
            const cell = document.createElement('div')
            styleCell(cell, i, j, size)
            cell.addEventListener(
                'mouseover', toggleOnHover
            )
            row.appendChild(cell)
        }
        container.appendChild(row)
    }    
}

// Initialize grid.

setGrid(16)

// Attach prompt to button.

const button = document.querySelector("#new-grid")
button.addEventListener('click', getGridDimensions)