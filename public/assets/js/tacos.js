$(function(){
    $(".eatMe").on("click", function(event){
        var id = $(this).data("id");
        
        var newDevour = 1;

        var newDevourState = {
            devoured: newDevour
        };
        $.ajax("/api/tacos/" + id, {
            type: "PUT",
            data: newDevourState
          }).then(
            function() {
              console.log("changed devoured to ", newDevour);
              // Reload the page to get the updated list
              location.reload();
            }
          );
    });

    $(".create-form").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
    
        var newTaco = {
            taco_name: $("#textarea").val().trim(),
            devoured: 0
        };

        // Send the POST request.
        $.ajax("/api/tacos", {
            type: "POST",
            data: newTaco
        }).then(
            function() {
            console.log("created new taco");
            // Reload the page to get the updated list
            location.reload();
            }
        );
      });    
});
