let next = document.querySelector(".next");
let prev = document.querySelector(".prev");
let items = document.querySelectorAll(".item");
items.forEach(item => {
    
    item.addEventListener("click", function () {
        document.querySelector(".slide").prepend(item)
    })
})


next.addEventListener("click", function () {
    let items = document.querySelectorAll(".item");
    document.querySelector(".slide").appendChild(items[0])
});

prev.addEventListener("click", function () {
    let items = document.querySelectorAll(".item");
    document.querySelector(".slide").prepend(items[items.length - 1])
});