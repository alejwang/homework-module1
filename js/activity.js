$(document).ready(function() {
    $("tbody > tr > td:not(:first-child)").click(function() {
      $(this).toggleClass("bg-green");
    })
});
