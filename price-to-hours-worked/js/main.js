$(document).ready(function () {

	$('#ftot').click(function(){
		var earningsphr=0;
		if($('#speriod .nl-dd-checked').html()=='hour'){
			earningsphr=parseFloat($('#searn a').html());
		}
		else {
			earningsphr=parseFloat($('#searn a').html())/2080;
		}
		var tot	=	parseFloat($('#sspend a').html())/earningsphr;
		tot	=	tot.toFixed(2);
		swal("You have to work "+tot+" hour(s) to buy this!", "Hope it's really worth it!", "success")
		return false;
	});
	$('#sspend').on("blur",'li input',function(){
		if($('#sspend li input').val()!=''){
			if(!/^(?:\d*\.\d{1,2}|\d+)$/.test($('#sspend li input').val())){
				$('#sspend li input').val('')
				sweetAlert("Oops...", "Just numbers will do!", "error");			
			}
		}
	});
	$('#searn').on("blur",'li input',function(){
		if($('#searn li input').val()!=''){
			if(!/^(?:\d*\.\d{1,2}|\d+)$/.test($('#searn li input').val())){
				$('#searn li input').val('')
				sweetAlert("Oops...", "Just numbers will do!", "error");			
			}
		}
	});
	$('#sspend').on("change",function(){
	});
	$('#period').click(function(){
		alert($('#earn').val());
		return false;
	});
	
});