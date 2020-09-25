const faqBtn = document.querySelectorAll(".btn")

faqBtn.forEach(function (button) {
    button.addEventListener("click", function () {
        faqBtn.forEach(function (btn) {
            if (!btn.classList.contains("collapsed")) {
                btn.classList.add("expand")
            } else {
                btn.classList.remove("expand")

            }
        })
    })
})