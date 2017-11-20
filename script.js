// $('#exampleModal').on('show.bs.modal', function (event) {
//   var button = $(event.relatedTarget) // Button that triggered the modal
//   var recipient = button.data('whatever') // Extract info from data-* attributes
//   // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
//   // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
//   var modal = $(this)
//   modal.find('.modal-title').text('New message to ' + recipient)
//   modal.find('.modal-body input').val(recipient)
// })


// I need to create a template modal for the staff
// I need it to have the pic of staff and bio pertaining to the specific person



// $('.carousel').carousel({
//   interval: 3000
// })

$(document).ready(function() {  
   $("#carousel-example-generic").swiperight(function() {  
      $("#carousel-example-generic").carousel('prev');  
    });  
   $("#carousel-example-generic").swipeleft(function() {  
      $("#carousel-example-generic").carousel('next');  
   });  
});  