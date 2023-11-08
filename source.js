const container = document.querySelector("#container")

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

    
}

for (let i = 0; i < 16; i++) {
    const row = document.createElement('div')
    row.style.display = "flex"
    for (let j = 0; j < 16; j++) {
        const cell = document.createElement('div')
        styleCell(cell, i, j)
        row.appendChild(cell)
    }
    container.appendChild(row)
}
