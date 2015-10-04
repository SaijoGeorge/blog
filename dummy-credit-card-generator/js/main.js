$(document).ready(function () {

	$('#ftot').click(function(){
		var ccType	=	$('#period').val();
		var cImg	=	"images/logo_"+ccType+".png";
		var card	=	cc_gen(ccType);
		swal({   title: card,   text: "Here's your fake card number. You can use any name & CVV.",   imageUrl: cImg });
		return false;
	});
	$(document).on("click",'#ccval',function(e){
		e.preventDefault();
		$(this).select();
	});
	$(document).on("mousedown",'#ccval',function(e){
		e.preventDefault();
	});
});