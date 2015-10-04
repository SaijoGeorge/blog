//
// Random Credit Card Number Generator
//
// By: Brad Conte (http://bradconte.com)
//
 
function cc_gen(ctype) {
	var pos;
	var str = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
	var sum = 0;
	var final_digit = 0;
	var t = 0;
	var len_offset = 0;
	var len = 0;
	var issuer;
 
	//
	// Fill in the first values of the string based with the specified bank's prefix.
	//
 
	// Visa
	if (ctype=='V' || ctype=='V13') {
		str[0] = 4;
		pos = 1;
		len= (ctype=='V')? 16 :13;
	}	
	// Mastercard
	else if (ctype=='MC'){
		str[0] = 5;
		t = Math.floor(Math.random() * 5) % 5;
		str[1] = 1 + t;	  // Between 1 and 5.
		pos = 2;
		len = 16;
	}
	// American Express
	else if (ctype=='AE'){
		str[0] = 3;
		t = Math.floor(Math.random() * 4) % 4;
		str[1] = 4 + t;	  // Between 4 and 7.
		pos = 2;
		len = 15;
	}
	// Discover
	else if (ctype=='D'){
		str[0] = 6;
		str[1] = 0;
		str[2] = 1;
		str[3] = 1;
		pos = 4;
		len = 16;
	}
 
	//
	// Fill all the remaining numbers except for the last one with random values.
	//
 
	while (pos < len - 1) {
		str[pos++] = Math.floor(Math.random() * 10) % 10;
	}
 
	//
	// Calculate the Luhn checksum of the values thus far.
	//
 
	len_offset = (len + 1) % 2;
	for (pos = 0; pos < len - 1; pos++) {
		if ((pos + len_offset) % 2) {
			t = str[pos] * 2;
			if (t > 9) {
				t -= 9;
			}
			sum += t;
		}
		else {
			sum += str[pos];
		}
	}
 
	//
	// Choose the last digit so that it causes the entire string to pass the checksum.
	//
 
	final_digit = (10 - (sum % 10)) % 10;
	str[len - 1] = final_digit;
 
	// Output the CC value.
	t = str.join('');
	t = t.substr(0, len);
	return t;
}