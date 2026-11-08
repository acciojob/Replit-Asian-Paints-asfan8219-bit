//your JS code here. If required.

const blockId = document.getElementById("block_id");
const colourId = document.getElementById("colour_id");
const changeButton = document.getElementById("change_button");
const resetButton = document.getElementById("Reset");

changeButton.addEventListener("click", function() {
    let id = blockId.value;
    let color = colourId.value;

    let items = document.querySelectorAll(".grid-item");

    items.forEach(function(item) {
        item.style.backgroundColor = "transparent";
    });

    let selectedBlock = document.getElementById(id);

    if (selectedBlock && id >= 1 && id <= 9 && color !== "") {
        selectedBlock.style.backgroundColor = color;
    }
});

resetButton.addEventListener("click", function() {
    let items = document.querySelectorAll(".grid-item");

    items.forEach(function(item) {
        item.style.backgroundColor = "transparent";
    });
});