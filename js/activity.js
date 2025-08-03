$(document).ready(function() {
    $("tbody > tr > td:not(:first-child)").filter(function() {
        return $(this).text() !== "Not Available";
    })
    .addClass("selectable")
    .click(function() {
      $(this).toggleClass("bg-green");
    })
});
