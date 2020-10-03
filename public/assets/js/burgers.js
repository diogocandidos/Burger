// *********************************************************************************
// ********************************** AJAX *****************************************
// *********************************************************************************

$(document).ready(() => {     
    $(".create-form").on("submit", function(event) {
      event.preventDefault();
          
      var newBurger = {
        name: $("#burger").val().trim(), 
        devoured: '0'
      };

        console.log(newBurger)
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(() => {
          console.log("created new burger");
          location.reload();
        }
      );
        
    });
  
    $(".eat").on("click", function(event) {
      var id = $(this).data("id");
      var newEaten = $(this).data("neweaten") === false;
  
      var newEatenState = {
        devoured:  newEaten
      };

      console.log('id:' + id)
      console.log('devoured:' + newEatenState.devoured)
  

      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newEatenState
      }).then(() => {
          console.log("changed eaten state to", newEaten);
          location.reload();
        }
      );
    });
    
});