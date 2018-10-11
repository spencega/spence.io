
/* ---------------------------------------------
	Animate In
--------------------------------------------- */

$(document).ready(function(){

	$("#content h1").delay(1000).fadeIn(1500);
	$("#subscribe, #countdown").delay(2500).animate({opacity:0.8}, 1500, 'linear', function() {

        $("#social a i").delay(100).animate({opacity:0.8}, 1500, 'linear', function() {

            $("#logo").delay(500).animate({opacity:1}, 1500, 'linear');

        });

    });

	var progress_made = $('#progress span').text();
	var no_progress = '0%'

	if (progress_made != no_progress){
		$("#progress").delay(2500).animate({opacity:0.8}, 1500, 'linear');
		$("#progress span").delay(3500).animate({width:progress_made}, 500, 'linear');
	}
	
});

/* ---------------------------------------------
    Countdown
--------------------------------------------- */

// jQuery countdown plugin
// http://rendro.github.io/countdown/

$(document).ready(function(){

    var endDate = $('#countdown p').text();

    $(function() {
        $('#countdown').countdown({
            date: endDate,
              render: function(data) {
                $(this.el).html("<div>" + this.leadingZeros(data.days, 3) + " <span class='theme-colour'>days</span></div><div>" + this.leadingZeros(data.hours, 2) + " <span class='theme-colour'>hrs</span></div><div>" + this.leadingZeros(data.min, 2) + " <span class='theme-colour'>min</span></div><div>" + this.leadingZeros(data.sec, 2) + " <span class='theme-colour'>sec</span></div>");
              }
        });
    });

});

/* ---------------------------------------------
	Validate Email
--------------------------------------------- */

$(document).ready(function() {
    $('#submit').click(function(e) {
        var sEmail = $('#email').val();
        if ($.trim(sEmail).length == 0) {
            e.preventDefault();
            $('#email').addClass('error');
        }
        if (validateEmail(sEmail)) {
        	$('#email').removeClass('error');
        }
        else {
        	e.preventDefault();
            $('#email').addClass('error');
        }
    });
});

function validateEmail(sEmail) {
    var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if (filter.test(sEmail)) {
        return true;
    }
    else {
        return false;
    }
}