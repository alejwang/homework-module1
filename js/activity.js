$(document).ready(function () {
  $("tbody > tr > td:not(:first-child)").filter(function () {
    return $(this).text() !== "Not Available";
  })
    .addClass("selectable")
    .click(function () {
      $(this).toggleClass("bg-green");
    })
});


//User interaction with table cells
$(document).ready(function () {
  $("td").click(function () { //user select a table data cell
    var content = $(this).text(); //get content of cell

    if (content != "Not Available") { //check if content does not contain a particular string 
      $(this).toggleClass("tdhighlight"); //add or remove class when cell is selected

      var colIndex = $(this).index();
      var siteName = $(this).closest("table").find("thead th").eq(colIndex).text();

      if ($(this).hasClass("tdhighlight")) { //check if selected cell has class
        $('#displaySelected').css("visibility", "visible"); //make display box visible 
        $('#displaySelected').css("margin-top", "2em"); //add spaces above display box
        $('#result').append("<p>" + content + " at " + siteName + "</p>"); //add child element with contents of cell
      } else { //if selected cell don't have class
        $('#result p:contains(' + content + ')').remove(); // remove child element
        if ($('#result').has('p').length == false) { //check if there are any child elements within parent
          $('#displaySelected').css("visibility", "hidden"); //make display box hidden
          $('#displaySelected').css("margin-top", "0"); //remove spaces above display box
        }
      }
    }
  });
});