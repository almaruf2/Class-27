$(document).ready(function () {

    //drag
    $(".draggable").draggable();

    //drop
    $(".draggable").draggable();
    $(".droppable").droppable({
        drop: function (event, ui) {
            $(this)
                .addClass("ui-state-highlight")
                .find("p")
                .html("Dropped!");
        }
    });
    //resize
    $(".resizable").resizable();
    //select
    $(".selectable").selectable();
    //sort
    $("#sortable").sortable();
    $("#sortable").disableSelection();
    //accordion
    $("#accordion").accordion({
        collapsible: true
    });
    //autocomplete
    var availableTags = [
      "ActionScript",
      "AppleScript",
      "Asp",
      "BASIC",
      "C",
      "C++",
      "Clojure",
      "COBOL",
      "ColdFusion",
      "Erlang",
      "Fortran",
      "Groovy",
      "Haskell",
      "Java",
      "JavaScript",
      "Lisp",
      "Perl",
      "PHP",
      "Python",
      "Ruby",
      "Scala",
      "Scheme"
    ];
    $("#tags").autocomplete({
        source: availableTags
    });
    //datepick
    $("#datepicker").datepicker();
    //tooltip
    $( document ).tooltip();
});