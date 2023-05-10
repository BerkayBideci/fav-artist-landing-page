window.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector("#hamburger")
    const hamburgerMenu = document.querySelector("#hamburger-menu")
    const headerP = document.querySelector("#header-p")
    const loveForm = document.querySelector("#love-form")
    const love = document.querySelector("#love-form #love")
    const loveUl = document.querySelector("#love-ul")

    const buttons = document.querySelectorAll("#donate-section button")
    const custom = document.querySelector("#custom")
    let donation = document.querySelector("#donation")

    let person = prompt("Enter your name cuzz!");

    if (person != null) {
        alert(`${person} Welcome to the neighborhood!`)
    }


    buttons.forEach((button) => {
        button.addEventListener("click", updateTotal)
    })

    custom.addEventListener("blur", updateCustom)

    function updateTotal(e) {
        const amount = parseInt(e.target.value)
        let newTotal = parseInt(donation.innerText) + amount
        donation.innerText = `${newTotal} `
        console.log(newTotal)
    }

    function updateCustom() {
        let value = parseInt(custom.value) || 0
        if (value >= 0) {
            let newCustomTotal = parseInt(donation.innerText) + value
            donation.innerText = `${newCustomTotal} `
        }
        custom.value = ""
    }

    hamburger.addEventListener("click", toggleHamburger)
    hamburger.addEventListener("blur", removeHamburger)
    loveForm.addEventListener("submit", showLove)

    function toggleHamburger() {
        hamburgerMenu.classList.toggle("invisible")
        if (Array.from(hamburgerMenu.classList).includes("invisible")) {
            headerP.classList.remove("invisible")
        } else {
            headerP.classList.add("invisible")
        }
    }

    function removeHamburger() {
        hamburgerMenu.classList.add("invisible")
        if (Array.from(hamburgerMenu.classList).includes("invisible")) {
            headerP.classList.remove("invisible")
        } else {
            headerP.classList.add("invisible")
        }
    }

    function showLove(e) {
        e.preventDefault();
        const text = love.value
        if (text.trim() !== "") {
            const newLi = document.createElement("li")
            newLi.innerText = text
            loveUl.appendChild(newLi)
        }
    }

})