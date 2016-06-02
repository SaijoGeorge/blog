var facebook_stats = function(facebook, facebook_like, facebook_comment)
      {
        var $ = jQuery;

        // Pageview Stats
        $('#facebook-stats').dxBarGauge({
          startValue: 0,
          endValue: 100,
          baseValue: 0,
          values: [facebook, facebook_like, facebook_comment],
          label: {
            customizeText: function (arg) {
              return arg.valueText + '%';
            }
          },
          //palette: 'ocean',
          palette: ['#68b828','#7c38bc','#0e62c7'],
          margin : {
            top: 0
          }
        });
      };

var overall_stats = function(count)
		{
		    var $ = jQuery;
		    var xenonPalette = ['#3b5998','#dc4e41','#0077b5','#bd081c','#eb4924','#168eea','#ff4500','#ed812b','#168de2','#45668e'];
			if( ! $.isFunction($.fn.dxChart)) return;
      console.log(count);
			var dataSource = [
				{region: "Facebook", val: parseInt(count.facebook_total)},
				{region: "Google", val: parseInt(count.google)},
				{region: "LinkedIn", val: parseInt(count.linkedIn)},
				{region: "Pintrest", val: parseInt(count.pintrest)},
				{region: "Stumbleupon", val: parseInt(count.stumbleupon)},
				{region: "Buffer", val: parseInt(count.buffer)},
				{region: "Reddit", val: parseInt(count.reddit)},
				{region: "Odnoklassniki", val: parseInt(count.odnoklassniki)},
				{region: "Mail_ru", val: parseInt(count.mail_ru)},
				{region: "Vkontakte", val: parseInt(count.vkontakte)}
			], timer;

			$("#overall-stats-chart").dxPieChart({
				dataSource: dataSource,
				title: "",
				tooltip: {
					enabled: true,
					format:"millions",
					customizeText: function() {
						//return this.argumentText + "<br/>" + this.valueText;
            return "Helllo";
					}
				},
				size: {
					height: 260
				},
				pointClick: function(point) {
					point.showTooltip();
					clearTimeout(timer);
					timer = setTimeout(function() { point.hideTooltip(); }, 2000);
					$("select option:contains(" + point.argument + ")").prop("selected", true);
				},
				legend: {
					visible: false
				},
				series: [{
					type: "doughnut",
					argumentField: "region"
				}],
				palette: xenonPalette
			});

		};

var marketingtoolio_stats = function(score)
		{
		var $ = jQuery;
		if( ! $.isFunction($.fn.dxChart))
			return;

		var gauge = $('#marketingtoolio-stats').dxCircularGauge({
			scale: {
				startValue: 0,
				endValue: 100,
				majorTick: {
					tickInterval: 10
				}
			},
			rangeContainer: {
				palette: 'pastel',
				ranges: [
					{ startValue: 0, endValue: 40, color: '#cc3f44' },
					{ startValue: 40, endValue: 80, color: '#ffba00' },
					{ startValue: 80, endValue: 100, color: '#8dc63f' },
				]
			},
			title: {
				text: '',
				font: { size: 28 }
			},
			value: 85
		}).dxCircularGauge('instance');
		gauge.value(score);
		};
