let countEl = document.getElementById("count-el")
let saveEl = document.querySelector("#save-btn")
const busRiderContainer = document.querySelector('.bus-riders')

let count = 0

function increment() {
    count = count + 1
    countEl.innerText = count
}

saveEl.addEventListener('click', () =>{
    const newEntry = document.createElement('div')
    newEntry.classList.add("bus-riders__entry")
    newEntry.textContent = count
    busRiderContainer.append(newEntry)
    count = 0
    countEl.textContent = 0
})
