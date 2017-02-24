$(document).ready(function() {
    $("form#pingpong").submit(function(event) {
        $("#result").empty();
        var number = parseInt($("input#userInput").val());
        var result = createGame(number);
        result.forEach(function(out){
            $("#result").append("<li>" + out + "</li>");
            event.preventDefault();
        });


function createGame(number) {


    for (var index = 1; index <= number; index++) {

        var out = [];

        if ((index % 5) === 0 && (index % 3)=== 0) {

            out.push("pingpong");

        } else if ((index % 5) === 0) {

            out.push("pong");
        } else if ((index % 3)=== 0) {
            out.push("ping");

        } else {
            out.push(index);

        }
    }
    return out;
};

    });

});
