const btns = document.querySelectorAll("[data-target]");
const closebtn = document.querySelectorAll(".close");
btns.forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelector(btn.dataset.target).classList.add("active");
    });
});
closebtn.forEach(btn => {
    btn.addEventListener("click", () =>{
        document.querySelector(btn.dataset.target).classList.remove("active");
    })
});