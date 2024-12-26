const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelectorAll(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");

console.log(btnsOpenModal);

console.log(btnsOpenModal[0].textContent);

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener("click", function () {
    console.log("button clicked");
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  });
}

for (let i = 0; i < btnCloseModal.length; i++)
  btnCloseModal[i].addEventListener("click", function () {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
  });
