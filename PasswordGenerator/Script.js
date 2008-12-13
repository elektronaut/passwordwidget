
function makePassword() {
	var passLength = 8;
	var seed = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
	
	var password = "";
	for( var a = 0; a < passLength; a++ ) {
		password += seed[Math.floor( Math.random() * seed.length )];
	}
	document.getElementById( "Password" ).innerHTML = password;
	//animateFieldGlow();
	animatePassword();
}

function copyPassword() {
	var password = document.getElementById( "Password" ).innerHTML;
	if ( password.length > 0 ) {
		animateClipboardNotice();
		widget.system("/bin/echo '" + password + "' | /usr/bin/pbcopy", null);
	}
}

function animatePassword() {
	var passDiv = document.getElementById( "Password" );
	passDiv.style.opacity = 0;
	var i = 0;
	clearInterval( window.passAnimationInterval );
	window.passAnimationInterval = setInterval( function() {
		i++;
		Password.style.opacity = ( ( i / 40 ) );
		if ( i >= 40 )
			clearInterval( window.passAnimationInterval );
	}, 7 );
}

function animateFieldGlow() {
	var glowDiv = document.getElementById( "FieldGlow" );
	var i = 0;
	var animationInterval = setInterval( function() {
		i++;
		glowDiv.style.opacity = ( ( ( 30 - i ) / 30 ) - 0.5 );
		if ( i >= 30 )
			clearInterval( animationInterval );
	}, 7 );
}

function animateClipboardNotice() {
	var noticeDiv = document.getElementById( "ClipboardNotice" );
	var i = 0;
	clearInterval( window.clipAnimationInterval );
	window.clipAnimationInterval = setInterval( function() {
		i++;
		if ( i < 20 )
			noticeDiv.style.opacity = ( i / 20 );
		else if ( i > 20 && i < 100 )
			noticeDiv.style.opacity = ( 1 );
		else
			noticeDiv.style.opacity = ( ( 150 - i ) / 50 );
		
		if ( i >= 150 )
			clearInterval( window.clipAnimationInterval );
		
	}, 7 );
}