let add = document.querySelector(".add p")
let siyahi = document.querySelector("ol")
let siyahiInput = document.querySelector("input")
let buttonPlus = document.querySelector(".add button")
let addElement = document.querySelector(".addelement")
let quitbtninput = document.querySelector(".addelement .quit")
let sortbg = document.querySelector(".sort")
let siyahiArr = []
let editingIndex = null
let issort = true
siyahi.style.display = "none"

function show(arr) {
    if (siyahiArr.length == 0) {
        siyahi.style.display = "none"
    } else {
        siyahi.innerHTML = ""
        arr.forEach((qeyd, i) => {
            siyahi.innerHTML += `<li>${i + 1}. ${qeyd}<div class="btns"><div class="edit"></div><div class="quit"></div></div></li>`
        });
    }
}

add.addEventListener("click", () => {
    if (siyahiInput.value.length != 0) {
        siyahi.style.display = "block"
        siyahiArr.push(siyahiInput.value)
        show(siyahiArr)
        siyahiInput.value = ""
        addElement.style.display = 'none'
    }
})

buttonPlus.addEventListener("click", () => {
    addElement.style.display = 'flex'
})

sortbg.addEventListener("click", () => {
    issort = !issort
    sorting(siyahiArr)
    if (issort) {
        sortbg.style.backgroundImage = 'url("img/sort.svg")'
    } else {
        sortbg.style.backgroundImage = 'url("img/unsort.svg")'
    }
})

function sorting(arr) {
    if (issort == true) {
        siyahiArr.sort().reverse()
    } else {
        siyahiArr.sort()
    }
    show(siyahiArr)
}

sortbg.addEventListener("mouseover", () => {
    if (issort == true) {
        sortbg.style.backgroundImage = 'url("img/sorthover.svg")'
    } else {
        sortbg.style.backgroundImage = 'url("img/unsorthover.svg")'
    }
})

sortbg.addEventListener("mouseout", () => {
    if (issort == true) {
        sortbg.style.backgroundImage = 'url("img/sort.svg")'
    } else {
        sortbg.style.backgroundImage = 'url("img/unsort.svg")'
    }
})

siyahi.addEventListener("click", (e) => {
    if (e.target.classList.contains("quit")) {
        let li = e.target.closest("li")
        let index = Array.from(siyahi.children).indexOf(li)
        siyahiArr.splice(index, 1)
        show(siyahiArr)
    }

    if(e.target.classList.contains("edit")) {
        let li = e.target.closest("li")
        let index = Array.from(siyahi.children).indexOf(li)
        addElement.style.display = "flex"
        siyahiArr.splice(index, 1)
        siyahiInput.value = li.innerText.slice(3)
    }
})

quitbtninput.addEventListener("click", ()=> {
    siyahiInput.value = ""
})