$(document).ready(function() {
    $("form#pingpong").submit(function(event) {
        event.preventDefault();
        var number = parseInt($("input#userInput").val());

    for (var index = 1; index <= number; index++) {

        var out = [];

        if (index % 15===0)  {

            out.push("pingpong");

        } else if (index % 5 === 0) {

            out.push("pong");
        } else if (index % 3=== 0) {
            out.push("ping");

        } else {
            out.push(index);

        }

  };
    for ( var ind=0;ind<index;ind++){
      var output = out[ind]
      $("#result").append("<li>"+output+"</li>")

};

    });

});
