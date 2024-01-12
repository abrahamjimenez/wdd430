const y :Element = document.querySelector("#year")
const year : number = new Date().getFullYear()
y.textContent = year.toString()