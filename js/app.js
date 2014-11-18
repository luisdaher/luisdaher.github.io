$( document ).ready(function() {
  var easter_egg = new Konami();

  easter_egg.code = function() { 
    $( "#dialog" ).dialog({
      width: 450,
      height: 388
    }); 
  }

  easter_egg.load();
});