let sorting = document.querySelector(".container img")

let siyahiInput = document.querySelector("input")
let addElement = document.querySelector(".addelement")
let siyahi = document.querySelector("ol")
let siyahiElement = document.querySelectorAll("li")
let add = document.querySelector(".add p")
let buttonPlus = document.querySelector(".add button")
let siyahiArr = []
let isSorted = false

sorting.addEventListener("click", () => {
    isSorted = !isSorted
    sorting.src = isSorted ? "img/sort.svg" : "img/unsort.svg"
})

sorting.addEventListener("mouseover", () => {
    sorting.src = isSorted ? "img/sorthover.svg" : "img/unsorthover.svg"
})

sorting.addEventListener("mouseout", () => {
    sorting.src = isSorted ? "img/sort.svg" : "img/unsort.svg"
})

add.addEventListener("click", () => {
    siyahi.innerHTML += `<li>${siyahiInput.value}</li>`
    siyahiArr.push(siyahiInput.value)
    addElement.style.display = "none"
    console.log(siyahiArr)
    siyahiInput.value = ""
})


buttonPlus.addEventListener("click", () => {
    addElement.style.display = "block"
})