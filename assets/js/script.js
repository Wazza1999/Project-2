const openModal = document.getElementById("open-modal");
const closeModal = document.getElementById("close-modal");
const modalContainer = document.getElementById("modal-container");

openModal.addEventListener("click",() => {
    modalContainer.classList.add("show");
});

closeModal.addEventListener("click",() => {
modalContainer.classList.remove("show");
});