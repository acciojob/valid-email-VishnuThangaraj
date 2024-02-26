function validEmail(str) {
  //your JS code here.
	const size = str.length;
	if(size < 5 || str[0] == '@' || str[size-1]=='.') return false;
	let at = str.indexOf('@');

	for(let index=size-1; index>=at; index--){
		if(str[index]=='.') return true;
	}

	return false;
}

// Do not change the code below.
const str = prompt("Enter an email address.");
alert(validEmail(str));
