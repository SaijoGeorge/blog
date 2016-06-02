var $ = jQuery;
var apiConfig = {
	apiKey: "qQX1Vd3Z3f1MCbJrcMBtc2h5dwx82CO8efTgx993"
};
var apigClient = apigClientFactory.newClient(apiConfig);

var calcMarketingtoolioStats = function(statsCount){
	var fbGrade = 0;
	var googleGrade = 0;
	var linkedInGrade = 0;
	var bufferGrade = 0;
	var restOfThem = 0;
	var restOfThemGrade = 0;

	if(parseInt(statsCount.facebook) < 10 ) fbGrade = 5;
	else if(parseInt(statsCount.facebook) < 100 ) fbGrade = 10;
	else if(parseInt(statsCount.facebook) < 1000 ) fbGrade = 15;
	else if(parseInt(statsCount.facebook) < 5000 ) fbGrade = 20;
	else if(parseInt(statsCount.facebook) < 15000 ) fbGrade = 25;
	else fbGrade = 30;

	if(parseInt(statsCount.google) < 10 ) googleGrade = 5;
	else if(parseInt(statsCount.google) < 100 ) googleGrade = 10;
	else if(parseInt(statsCount.google) < 1000 ) googleGrade = 15;
	else googleGrade = 20;

	if(parseInt(statsCount.linkedIn) < 10 ) linkedInGrade = 5;
	else if(parseInt(statsCount.linkedIn) < 100 ) linkedInGrade = 10;
	else if(parseInt(statsCount.linkedIn) < 1000 ) linkedInGrade = 15;
	else linkedInGrade = 20;

	if(parseInt(statsCount.buffer) < 10 ) bufferGrade = 2;
	else if(parseInt(statsCount.buffer) < 100 ) bufferGrade = 5;
	else if(parseInt(statsCount.buffer) < 1000 ) bufferGrade = 8;
	else bufferGrade = 10;

	restOfThem = parseInt(statsCount.pintrest) + parseInt(statsCount.stumbleupon) + parseInt(statsCount.vkontakte) + parseInt(statsCount.reddit) + parseInt(statsCount.odnoklassniki) + parseInt(statsCount.mail_ru);
	if(restOfThem < 100 ) restOfThemGrade = 5;
	else if(restOfThem < 1000 ) restOfThemGrade = 10;
	else if(restOfThem < 5000 ) restOfThemGrade = 15;
	else restOfThemGrade = 20;
	console.log(fbGrade+googleGrade+linkedInGrade+bufferGrade+restOfThemGrade);
	return fbGrade+googleGrade+linkedInGrade+bufferGrade+restOfThemGrade;

};
var getShareCount = function(url){
		return apigClient.socialCountsPost({}, url);
	  }

var setShareCount = function(dataCount){
    console.log(dataCount.facebook);
	$('#facebook').text(dataCount.facebook);
	$('#facebook_comment').text(dataCount.facebook_comment);
	$('#facebook_like').text(dataCount.facebook_like);
	$('#facebook_total').text(dataCount.facebook_total);
	$('#google').text(dataCount.google);
	$('#linkedIn').text(dataCount.linkedIn);
	$('#pintrest').text(dataCount.pintrest);
	$('#stumbleupon').text(dataCount.stumbleupon);
	$('#buffer').text(dataCount.buffer);
	$('#reddit').text(dataCount.reddit);
	$('#odnoklassniki').text(dataCount.odnoklassniki);
	$('#mail_ru').text(dataCount.mail_ru);
	$('#vkontakte').text(dataCount.vkontakte);

	$('#overall-stats').text(parseInt(dataCount.facebook_total) + parseInt(dataCount.google) + parseInt(dataCount.linkedIn) + parseInt(dataCount.pintrest) + parseInt(dataCount.stumbleupon) + parseInt(dataCount.buffer) + parseInt(dataCount.reddit) + parseInt(dataCount.odnoklassniki) + parseInt(dataCount.mail_ru) + parseInt(dataCount.vkontakte));
	$('#marketingtoolio_score').text(calcMarketingtoolioStats(dataCount));



	facebook_stats((parseInt(dataCount.facebook)/parseInt(dataCount.facebook_total))*100, (parseInt(dataCount.facebook_like)/parseInt(dataCount.facebook_total))*100, (parseInt(dataCount.facebook_comment)/parseInt(dataCount.facebook_total))*100);
	overall_stats(dataCount);
	marketingtoolio_stats(calcMarketingtoolioStats(dataCount));
	$('.url-submitted').toggleClass('hidden');
}

var submitShareCount = function(){
  //$scope.urlSubmitted = true;
  $('.url-submitted').toggleClass('hidden');
  getShareCount({url: $('#url').val()}).then(
	function(payload) {
	 console.log(payload);
	 setShareCount(payload.data.count);
	},
	function(errorPayload) {
	  console.log(errorPayload);
	  setShareCount({"facebook":"0","facebook_like":"0","facebook_comment":"0","facebook_total":"0","linkedIn":"0","stumbleupon":"0","buffer":"0","pintrest":"0","odnoklassniki":"0","mail_ru":"0","vkontakte":"0","google":"0","reddit":"0"});
	}
  );
}
var sampleSocialCount = {"facebook":"12","facebook_like":"22","facebook_comment":"12","facebook_total":"46","linkedIn":"33","stumbleupon":"12","buffer":"11","pintrest":"32","odnoklassniki":"2","mail_ru":"10","vkontakte":"23","google":"10","reddit":"42"};
facebook_stats(24, 32, 44);
overall_stats(sampleSocialCount);
marketingtoolio_stats(calcMarketingtoolioStats(sampleSocialCount));
