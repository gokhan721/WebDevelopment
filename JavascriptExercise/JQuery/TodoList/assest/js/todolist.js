// Check off Specific Todos By Clicking
$("ul").on("click", "li", function () {
    $(this).toggleClass("grayLi");
});

// Click on X to Delete Todo
$("ul").on("click", "span", function (e) {
    e.stopPropagation(); // Parent elements not get clicking!
    $(this).parent().fadeOut(500, function () {
        $(this).remove();
    });
});


$("input").keypress(function (e) {
    if (e.which === 13) {
        // Graing new todo text from input
        var todoText = $(this).val();
        $(this).val("");
        // create new li and add to ul
        $("ul").append("<li><span><i class='fa fa-trash'></i></span>" + todoText + "</li>");

    }
});

$(".fa-plus").click(function () {
    $("input").fadeToggle();
});