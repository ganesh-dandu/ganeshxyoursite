var accordians = document.querySelectorAll(".accordion");

accordians.forEach(accordian => {
    var icon = accordian.querySelector(".icon");
    var answer = accordian.querySelector(".answer");

    accordian.addEventListener("click", () => {
        icon.classList.toggle("active");
        answer.classList.toggle("active");
        console.log("ganesh");
    })
});
