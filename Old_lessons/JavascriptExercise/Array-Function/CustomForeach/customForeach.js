Array.prototype.myForEach = function (func) {
    for (let item of this) {
        func(item);
    }
}

function myForEach(arr, func) {
    for (let item of arr) {
        func(item);
    }
}

function printHello(item) {
    console.log("Hello " + item);
}

$(function () {
    let list_items = [];
    let lists = document.querySelectorAll("#items>li");
    lists.forEach(element => list_items.push(element.textContent));
    // myForEach(list_items, printHello);
    list_items.myForEach(printHello);
});