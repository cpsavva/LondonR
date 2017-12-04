$(document).ready(function() {  

var button = $(event.relatedTarget) 
var recipient = button.data('whatever') 
var modal = $(this)


// Carousel Media Query
   $("#services-carousel").swiperight(function() {  
      $("#services-carousel").carousel('prev');  
    });  
   $("#services-carousel").swipeleft(function() {  
      $("#services-carousel").carousel('next');  
   });  

// Carousel Modal
	$('#carModal').on('show.bs.modal', function(event){
			var button = $(event.relatedTarget) 
			var recipient = button.data('whatever') 
			var carouselImage = "<img src='../css/images/" + recipient + ".jpg'/>";
			console.log(recipient)


			$("#car-content").empty()
			// $("#services-carousel").clone().appendTo($('#car-content'));
			$("#car-content").append(carouselImage)
		});


//eshop modals
	$('#eshopModal').on('show.bs.modal', function (event) {
		var button = $(event.relatedTarget) 
		var recipient = button.data('whatever') 
		var modal = $(this)
		// console.log("idk why this isn't working")
		var eshopimg = "<img src='./css/images/" + recipient + ".jpeg'/>";
		// console.log(recipient)
		$(".modal-content").empty();
		modal.find('.modal-content').append(eshopimg);
	}) 





});  
