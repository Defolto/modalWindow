const body = document.querySelector("body")

function closeModal() {
    body.style.overflowY = "auto"
    const btnClose = document.querySelector(".modal-content > button")
    btnClose.removeEventListener('click', closeModal)

    const modal = document.querySelector(".modal")
    modal.remove()
}

function showModal(text) {
    body.style.overflowY = "hidden"
    body.insertAdjacentHTML('beforeend', `<div class="modal">
    <div class="modal-content">
        <p>${text}</p>
        <button>закрыть</button>
    </div>
</div>`)

    const btnClose = document.querySelector(".modal-content > button")
    btnClose.addEventListener('click', closeModal)

    const modal = document.querySelector(".modal")
    modal.addEventListener('click', closeModal)

    const modalContent = document.querySelector(".modal-content")
    modalContent.addEventListener('click', (e)=>{
        e.stopPropagation()
    })
}