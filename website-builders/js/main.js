//----------------------------------------------------------------------------------//
//
// DOM READY
//
//----------------------------------------------------------------------------------//
$(document).ready(function(){

	//----------------------------------------------------------------------------------//
	// TWITTER API
	//----------------------------------------------------------------------------------//
	!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");


	//----------------------------------------------------------------------------------//
	// INCLUDES LOADING
	//----------------------------------------------------------------------------------//

	//from localhost
	//$(".top").load("http://localhost/DopeLists/include_top.html"); $(".footer").load("http://localhost/DopeLists/include_footer.html");

	//from dominikserafin.pl
	//$(".top").load("http://dominikserafin.pl/dope/include_top.html"); $(".footer").load("http://dominikserafin.pl/dope/include_footer.html");

	//from dopelists.com
	$(".top").load("/include_top.html"); $(".footer").load("/include_footer.html");


	//----------------------------------------------------------------------------------//
	// ANCHOR LINKS
	//----------------------------------------------------------------------------------//

	//Goes through every .listWindow and adds inside it <a> link with href= of .listWindow id
	$(".listWindow").each(function() {

		var currentId = $(this).attr("id");

		$(this).children("h2").before("<a class='anchor' href=#" + currentId + ">#" + currentId + "</a>");
	});

	$(".listWindow").mouseenter(function() {
		$(this).children(".anchor").css("opacity","1");
	});

	$(".listWindow").mouseleave(function() {
		$(this).children(".anchor").css("opacity","0");
	});

// Terminal Text Effect - as seen on http://codemyui.com/post/139832686855/terminal-style-text-effect   
 consoleText(['SEO', 'Marketing', 'Social', 'Site Audit', 'Outreach', 'A/B Testing', 'and more'], 'terminaltext',['#F98B60','#FAA9DF','#FC5185', '#3FBAC2', '#FFE35E', '#FFBD67', '#C7F6F5']);

function consoleText(words, id, colors) {
  if (colors === undefined) colors = ['#fff'];
  var visible = true;
  var con = document.getElementById('console');
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id)
  target.setAttribute('style', 'color:' + colors[0])
  window.setInterval(function() {

    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount)
      window.setTimeout(function() {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute('style', 'color:' + colors[0])
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function() {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 120)
  window.setInterval(function() {
    if (visible === true) {
      con.className = 'console-underscore hidden'
      visible = false;

    } else {
      con.className = 'console-underscore'

      visible = true;
    }
  }, 400)
}

	//----------------------------------------------------------------------------------//
	// LINK DESCRIPTIONS
	//----------------------------------------------------------------------------------//

	// Removes empty description divs so they don't show up empty
	$(".listWindow > div > li > div:empty").remove();

	// Displays description on hover
	$('.listWindow > div > li').mouseenter(function() {
		$(this).children('div').slideDown(0);
	});
	$('.listWindow > div > li').mouseleave(function() {
		$(this).children('div').slideUp(0);
	});
	$('.listWindow > div > li > div').mouseenter(function() {
		$(this).slideUp(0);
	});

	// Displays description on focus
	$('.listWindow > div > li').focusin(function() {
		$(this).children('div').slideDown(0);
	});
	$('.listWindow > div > li').focusout(function() {
		$(this).children('div').slideUp(0);
	});


	//----------------------------------------------------------------------------------//
	// FAVICON LOADER: Prepends blankfavicon.png before every link and then changes it to site favicon
	//----------------------------------------------------------------------------------//

	//Goes through each list element a
	$(".listWindow > div > li > a").each(function() {

		//Prepends blankfavicon <img> in list element a (kind of doesn't work on Chrome and Firefox)
		$(this).prepend("<img src='../img/blankfavicon.png'>");

		//Gets href value of list element a
		var siteurl = $(this).attr("href");

		//Sets first <img> src as Google favicons service with added site url
		//Alternatives:
		// https://s2.googleusercontent.com/s2/favicons?domain_url= [best]
		// https://s2.googleusercontent.com/s2/favicons?domain= [best]
		// https://plus.google.com/_/favicon?domain_url= [good]
		// https://plus.google.com/_/favicon?domain= [good]
		// http://www.google.com/s2/favicons?domain= [unreliable, sometimes blocked by anti-spam bots]
		// http://g.etfv.co/ [slow]
		// http://fvicon.com/ [slow and unreliable, but many features]
		$(this).children("img:nth-of-type(1)").attr("src","https://s2.googleusercontent.com/s2/favicons?domain_url=" + siteurl);

		//If second <img> exists (manually inserted <img> inside a - because sometimes Google favicons don't work)
		if ($(this).children("img:nth-of-type(2)").length > 0) {

				//Then it removes first <img> in a
				$(this).children("img").first().remove();
		};
	});

	});

//----------------------------------------------------------------------------------//
//
// FOOTER REVEAL
//
//----------------------------------------------------------------------------------//	
$(function() {
	$('footer').footerReveal();
});	

//----------------------------------------------------------------------------------//
//
// AJAX STOP
//
//----------------------------------------------------------------------------------//
$(document).ajaxStop(function() {

	//----------------------------------------------------------------------------------//
	// MASONRY - cascading grid - http://masonry.desandro.com/
	//----------------------------------------------------------------------------------//

	$(function(){        
		$(".lists").masonry({
			columnWidth: 200,
			itemSelector: '.listWindow',
			transitionDuration: '0'
		});
	});


	//----------------------------------------------------------------------------------//
	// TOP BORDER COLOR CHANGE
	//----------------------------------------------------------------------------------//

	$(".top > a:nth-of-type(1)").mouseenter(function() {
		$(".top").css("border-color","rgba(0,0,0,0.5)");
	});

	$(".top > a:nth-of-type(1)").mouseleave(function() {
		$(".top").css("border-color","rgba(0,0,0,0.7)");
	});


	//----------------------------------------------------------------------------------//
	// NAVIGATION BUTTONS CREATOR
	//----------------------------------------------------------------------------------//

	$(".navigation > .buttons").append( "<span class='show'>All</span>" );

	$(".listWindow").each(function() {

		$(".navigation > .buttons").append(
			"<div class='pressed' value='" + $(this).attr("id") + "'>" + $(this).children("h2").text() + "</div>"
		);

	}); 


	// divs for no result, used by function below
	$(".lists").before("<div class='listsInfo'></div>");


	//----------------------------------------------------------------------------------//
	// NAVIGATION BUTTONS CHECKER listWindowCheckForPressed();
	//----------------------------------------------------------------------------------//
	// Checks what lists are visible and makes relevant navigation buttons pressed
	function listWindowCheckForPressed() {

		$(".listWindow").each(function() {

			if ( $(this).css("display") == "block" ) {
				$( ".navigation > .buttons > div[value=" + $(this).attr("id") + "]" ).addClass("pressed");
				$( ".navigation > .buttons > div[value=" + $(this).attr("id") + "] > .add" ).text("-");
			}

			else if ( $(this).css("display") == "none" ) {
				$( ".navigation > .buttons > div[value=" + $(this).attr("id") + "]" ).removeClass("pressed");
				$( ".navigation > .buttons > div[value=" + $(this).attr("id") + "] > .add" ).text("+");
			}

		});

		if( $(".listWindow:visible").length == $(".listWindow").length ) {
			$( ".navigation > .buttons > .show" ).addClass("pressed");
			//$( ".navigation > .buttons > .show" ).text("Show All");
			$(".listsInfo").hide();
		} else {
			$( ".navigation > .buttons > .show" ).removeClass("pressed");
			//$( ".navigation > .buttons > .show" ).text("Show All");
		}

		if ( $(".listWindow:visible").length == 0 ) {
			$(".listsInfo").show();
			$(".listsInfo").text("No results...");
		} else {
			$(".listsInfo").hide();
		}

		$(".lists").masonry();

	};

	//
	listWindowCheckForPressed();

	// List hash 
	$(".anchor").click(function() {
		$(".listWindow").show();
		listWindowCheckForPressed();
		$("#livesearch").val("");
	});


	//----------------------------------------------------------------------------------//
	// NAVIGATION BUTTONS
	//----------------------------------------------------------------------------------//

	$(".navigation > .buttons > div").click(function() {
		$(".listsInfo").hide();
		$(".listWindow").hide();

		$(".listWindow#" + $(this).attr("value") ).show();
		$("html, body").animate({ scrollTop: $(".lists").offset().top }, '1000', 'swing');
		window.location.hash = "";
		listWindowCheckForPressed();
		$("#livesearch").val("");

		return false;
	});

	// Show all button
	$(".navigation > .buttons > .show").click(function() {
		$(".listWindow").show();

		window.location.hash = "";
		listWindowCheckForPressed();
		$("#livesearch").val("");

		return false;
	});


	//----------------------------------------------------------------------------------//
	// LIVE SEARCH
	//----------------------------------------------------------------------------------//
	$('#livesearch').keyup(function() {
		var f = $(this).val();
		var regex = new RegExp(f, 'gi');

		window.location.hash = "";
		$('.listWindow').hide();

		$("h2").each(function() {

			if($(this).html().match(regex)) {
				$(this).parent(".listWindow").show();
			}
		});

		$("h3").each(function() {

			if($(this).html().match(regex)) {
				$(this).parent("div").parent(".listWindow").show();
			}
		});

	listWindowCheckForPressed();
	});

	// Scroll on Enter
	$("#livesearch").keypress(function(e) {
		if(e.which == 13) {
			if( $(".listsInfo:visible").length == 1 ) {
				$("html, body").animate({ scrollTop: $(".listsInfo").offset().top }, '1000', 'swing');
			} else {
			$("html, body").animate({ scrollTop: $(".lists").offset().top }, '1000', 'swing');
			}
		}
	});


	//----------------------------------------------------------------------------------//
	// HASHLINKS FIX
	//----------------------------------------------------------------------------------//

	if ( $(window.location.hash).length > 0 ) {
		$("html, body").animate({ scrollTop: $(window.location.hash).offset().top }, '1000', 'swing');
	}
});
//----------------------------------------------------------------------------------//
// FOOTERCOLOR
//----------------------------------------------------------------------------------//
var colors = new Array(
  [121,205,139],
  [193,141,230],
  [236,154,118],
  [218, 103, 144],
  [57, 170, 228]);

var step = 0;
//color table indices for: 
// current color left
// next color left
// current color right
// next color right
var colorIndices = [0,1,2,3];

//transition speed
var gradientSpeed = 0.005;

function updateGradient()
{
var c0_0 = colors[colorIndices[0]];
var c0_1 = colors[colorIndices[1]];
var c1_0 = colors[colorIndices[2]];
var c1_1 = colors[colorIndices[3]];

var istep = 1 - step;
var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
var color1 = "#"+((r1 << 16) | (g1 << 8) | b1).toString(16);

var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
var color2 = "#"+((r2 << 16) | (g2 << 8) | b2).toString(16);

 $('#gradient').css({
   background: "-webkit-gradient(linear, left top, right top, from("+color1+"), to("+color2+"))"}).css({
    background: "-moz-linear-gradient(left, "+color1+" 0%, "+color2+" 100%)"});
  
  step += gradientSpeed;
  if ( step >= 1 )
  {
    step %= 1;
    colorIndices[0] = colorIndices[1];
    colorIndices[2] = colorIndices[3];
    
    //pick two new target color indices
    //do not pick the same as the current one
    colorIndices[1] = ( colorIndices[1] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
    colorIndices[3] = ( colorIndices[3] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
    
  }
}

setInterval(updateGradient,10);
//----------------------------------------------------------------------------------//
// ANALYTICS OUTBOUND CLICKS
//----------------------------------------------------------------------------------//
function _gaLt(event){
    var el = event.srcElement || event.target;

    /* Loop up the tree through parent elements if clicked element is not a link (eg: an image inside a link) */
    while(el && (typeof el.tagName == 'undefined' || el.tagName.toLowerCase() != 'a' || !el.href))
        el = el.parentNode;

    if(el && el.href){
        if(el.href.indexOf(location.host) == -1){ /* external link */
            ga("send", "event", "Outgoing Links", el.href, document.location.pathname + document.location.search);
            /* if target not set then delay opening of window by 0.5s to allow tracking */
            if(!el.target || el.target.match(/^_(self|parent|top)$/i)){
                setTimeout(function(){
                    document.location.href = el.href;
                }.bind(el),500);
                /* Prevent standard click */
                event.preventDefault ? event.preventDefault() : event.returnValue = !1;
            }
        }

    }
}

/* Attach the event to all clicks in the document after page has loaded */
var w = window;
w.addEventListener ? w.addEventListener("load",function(){document.body.addEventListener("click",_gaLt,!1)},!1)
  : w.attachEvent && w.attachEvent("onload",function(){document.body.attachEvent("onclick",_gaLt)});


    var emailOctopus = {
        successMessage: 'Thanks for subscribing!',
        missingEmailAddressMessage: 'Your email address is required.',
        invalidEmailAddressMessage: 'Your email address looks incorrect, please try again.',
        botSubmissionErrorMessage: 'This doesn\'t look like a human submission.',
        invalidParametersErrorMessage: 'This form has missing or invalid fields.',
        unknownErrorMessage: 'Sorry, an unknown error has occurred. Please try again later.',
        isBotPost: function() {
            return $('.email-octopus-form-row-hp input').val();
        },
        basicValidateEmail: function(email) {
            var regex = /\S+@\S+\.\S+/;
            return regex.test(email);
        },
        ajaxSuccess: function() {
            $('.email-octopus-success-message').text(
                emailOctopus.successMessage
            );
            $('.email-octopus-form').hide();
        },
        ajaxError: function(textStatus) {
            var response = $.parseJSON(textStatus.responseText);
            if (response && response.error && response.error.code) {
                switch(response.error.code) {
                    case 'INVALID_PARAMETERS':
                        $('.email-octopus-error-message').text(
                            emailOctopus.invalidParametersErrorMessage
                        );
                        return;
                    case 'BOT_SUBMISSION':
                        $('.email-octopus-error-message').text(
                            emailOctopus.botSubmissionErrorMessage
                        );
                        return;
                }
            }

            $('.email-octopus-error-message').text(
                emailOctopus.unknownErrorMessage
            );
        },
        ajaxSubmit: function() {
            var form = $('.email-octopus-form');
            $.ajax({
                type: form.attr('method'),
                url: form.attr('action'),
                data: form.serialize(),
                success: function() {
                    emailOctopus.ajaxSuccess();
                },
                error: function(textStatus) {
                    emailOctopus.ajaxError(textStatus);
                },
            });
        }
    }

    $(function() {
        $('.email-octopus-form').submit(function(e) {
            $('.email-octopus-error-message').empty();
            var emailAddress = $('.email-octopus-email-address').val();

            if (emailOctopus.isBotPost()) {
                $('.email-octopus-error-message').text(
                    emailOctopus.botSubmissionErrorMessage
                );
            } else if (!$.trim(emailAddress)) {
                $('.email-octopus-error-message').text(
                    emailOctopus.missingEmailAddressMessage
                );
            } else if (!emailOctopus.basicValidateEmail(emailAddress)) {
                $('.email-octopus-error-message').text(
                    emailOctopus.invalidParametersErrorMessage
                );
            } else {
                emailOctopus.ajaxSubmit();
            }

            return false;
        });
    });