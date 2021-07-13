const ConsultationButton = document.querySelector(".header-search-button")
const PopupBackground = document.getElementById("popup")
const PopupForm = document.getElementById("form")

ConsultationButton.addEventListener("click", () => {
	PopupBackground.classList.remove("none")
	PopupForm.classList.add("form-popup")
})

PopupBackground.addEventListener("click", () => {
	PopupBackground.classList.add("none")
	PopupForm.classList.remove("form-popup")
})


