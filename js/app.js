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

// Text Typing

let content = ["Version β 3.0 ", "IDE for your Code", "Now Online... ", "It's all Talk until Code Runs"];

let part = 0;

let partIndex = 0;

let interval;

let element = document.querySelector("#text-typing");

// Implements typing effect
function Type() {
    let text = content[part].substring(0, partIndex + 1);
    element.innerHTML = text;
    partIndex++;

    // If full sentence has been displayed then start to delete the sentence after some time
    if (text === content[part]) {
        clearInterval(interval);
        setTimeout(function () {
            interval = setInterval(Delete, 50);
        }, 1000);
    }
}

// Implements deleting effect
function Delete() {
    let text = content[part].substring(0, partIndex - 1);
    element.innerHTML = text;
    partIndex--;

    // If sentence has been deleted then start to display the next sentence
    if (text === '') {
        clearInterval(interval);

        // If last sentence then display the first one, else move to the next
        if (part == (content.length - 1))
            part = 0;
        else
            part++;
        partIndex = 0;

        // Start to display the next sentence after some time
        setTimeout(function () {
            interval = setInterval(Type, 100);
        }, 200);
    }
}

// Start the typing effect on load
interval = setInterval(Type, 100);
