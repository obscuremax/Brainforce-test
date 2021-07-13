const ConsultationButton = document.querySelector('.header-search-button')
const SubmitButton = document.querySelector('.input-button')
const CloseMessageButton = document.querySelector('.message-btn')
const PopupBackground = document.getElementById('popup')
const PopupForm = document.getElementById('form')
const PopupMessage = document.getElementById('message')

function openModalWindow() {
	PopupBackground.classList.remove('none')
  PopupForm.classList.add('form-popup')
}

function closeModalWindow() {
	PopupBackground.classList.add('none')
  PopupForm.classList.remove('form-popup')
}

function openPopupMessageWindow() {
	PopupMessage.classList.remove('none')
}

function closePopupMessageWindow() {
	PopupMessage.classList.add('none')
}

ConsultationButton.addEventListener('click', () => {
  openModalWindow()
})

PopupBackground.addEventListener('click', () => {
	closeModalWindow()
})

SubmitButton.addEventListener('click', () => {
	closeModalWindow()
	openPopupMessageWindow()
})

CloseMessageButton.addEventListener('click', () => {
	closePopupMessageWindow()
})
