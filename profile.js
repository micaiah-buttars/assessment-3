let color = document.querySelector('#color')
let place = document.querySelector('#place')
let ritual = document.querySelector('#ritual')

function giveColor(){
    alert('Yellow')
}
function givePlace(){
    alert('My house, but mountains are pretty rad too.')
}
function giveRitual(){
    alert("Buying an order of Rancherito's carne asada fries, going home, and gorging myself on them while watching Youtube on Friday evenings to officially kick off the weekend.")
}

color.addEventListener('click', giveColor)
place.addEventListener('click', givePlace)
ritual.addEventListener('click', giveRitual)
