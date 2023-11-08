const container = document.querySelector("#container")

const beige = 'rgb(230, 230, 220)'
function styleCell(cell, i, j) {
    cell.style.border = '1px solid'
    // If cell is leftmost, keep left border. Similar for bottom cells.
    if (i !=15) {
        cell.style.borderBottomWidth = '0px'
    }

    if (j != 0) {
        cell.style.borderLeftWidth = '0px'
    }

    cell.style.padding = '24px'
    cell.style.boxSizing = 'border-box'
    cell.style.backgroundColor = beige
    console.log(cell.style)
}

function toggleOnHover(event) {
    green = 'rgb(101, 171, 124)'
    red = 'rgb(210, 103, 118)'

    cell = event.target

    if (cell.style.backgroundColor == beige) {
        cell.style.backgroundColor = green
    }

    else if (cell.style.backgroundColor == green) {
        cell.style.backgroundColor = red
    }

    else {
        cell.style.backgroundColor.backgroundColor = beige
    }
    
}


for (let i = 0; i < 16; i++) {
    const row = document.createElement('div')
    row.style.display = "flex"
    for (let j = 0; j < 16; j++) {
        const cell = document.createElement('div')
        styleCell(cell, i, j)
        cell.addEventListener(
            'mouseover', toggleOnHover
        )
        row.appendChild(cell)
    }
    container.appendChild(row)
}
