const modal = document.querySelector(".modal-container");
const openModal = document.querySelector("#openBtn");
const closeModal = document.querySelector(".closeBtn");

openModal.addEventListener('click', ()=>{
    modal.style.display = 'block';
    modal.style.backgroundColor = " rgba(0, 0, 0, 0.4)";
})
closeModal.addEventListener('click', ()=>{
    modal.style.display = "none";
})
window.addEventListener('click', (e)=>{
    if (e.target == modal) {
        modal.style.display = "none";
    }
})