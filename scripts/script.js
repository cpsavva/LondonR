
$(document).ready(function() {  
// Carousel
   $("#carousel-example-generic").swiperight(function() {  
      $("#carousel-example-generic").carousel('prev');  
    });  
   $("#carousel-example-generic").swipeleft(function() {  
      $("#carousel-example-generic").carousel('next');  
   });  

//eshop modals
		$('#eshopModal').on('show.bs.modal', function (event) {
		var button = $(event.relatedTarget) 
		var recipient = button.data('whatever') 
		console.log("idk why this isn't working")

		var eshopimg = "<img src='./css/images/" + recipient + ".jpeg'/>";
		console.log(recipient)
		
		var modal = $(this)
		$(".modal-content").empty();
		modal.find('.modal-content').append('<img src="./css/images/'+ recipient +'.jpeg">');
	}) 






});  
