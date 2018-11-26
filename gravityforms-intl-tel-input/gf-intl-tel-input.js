var phone_inputs = jQuery('.ginput_container_phone > input');
var iti_phone=[];
phone_inputs.each(function(index, phone_input){
	input_name = jQuery(phone_input).attr('name');
	iti_phone[input_name] = window.intlTelInput(phone_input, {
	  initialCountry: "auto",
	  geoIpLookup: function(callback) {
	    jQuery.get('https://ipinfo.io', function() {}, "jsonp").always(function(resp) {
	      var countryCode = (resp && resp.country) ? resp.country : "";
	      callback(countryCode);
	    });
	  },
	  hiddenInput: "intlTelInput_full_phone-"+input_name,
	  utilsScript: "wp-content/plugins/gravityforms-intl-tel-input/intl-tel-input/js/utils.js"
	});
});