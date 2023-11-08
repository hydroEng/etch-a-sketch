const container = document.querySelector("#container")

for (let i = 0; i < 16; i++) {
    const row = document.createElement('div')
    row.style.display = "flex"
    for (let j = 0; j < 16; j++) {
        const cell = document.createElement('div')
        cell.style.padding = '12px'
        cell.style.borderColor = 'black'
        cell.style.borderStyle = 'solid'
        cell.style.border
        row.appendChild(cell)
    }
    container.appendChild(row)
}

