
$(document).ready(function() {
    $("#pingpong").submit(function(event) {
        event.preventDefault();
        var number = parseInt($("#userInput").val());

        var output = [];

        for (var index = 1; index <= number; index++) {
            if ((index % 15)=== 0) {
                output.push("pingpong");
            } else if ((index % 5) === 0) {
                output.push("pong");
            } else if ((index % 3) === 0) {
                output.push("ping");
            } else {
                output.push(index);
            }
        };
        $("#result").empty();
        output.forEach(function(element) {
            $("#result").append("<li>" + element + "</li>");
        });
    });
});
