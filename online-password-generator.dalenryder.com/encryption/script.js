$(function(){

	var body = $('body'),
		stage = $('#stage'),
		back = $('a.back');

	/* Step 1 */

	$('#step1 .encrypt').click(function(){
		body.attr('class', 'encrypt');

		
		step(2);
	});

	$('#step1 .decrypt').click(function(){
		body.attr('class', 'decrypt');
		step(2);
	});


	/* Step 2 */


	$('#step2 .button').click(function(){
		
		$(this).parent().find('input').click();
	});


	

	var file = null;

	$('#step2').on('change', '#encrypt-input', function(e){

		

		if(e.target.files.length!=1){
			alert('Please select a file to encrypt!');
			return false;
		}

		file = e.target.files[0];

		if(file.size > 1024*1024){
			alert('Please choose files smaller than 1MB.');
			return;
		}

		step(3);
	});

	$('#step2').on('change', '#decrypt-input', function(e){

		if(e.target.files.length!=1){
			alert('Please select a file to decrypt!');
			return false;
		}

		file = e.target.files[0];
		step(3);
	});


	/* Step 3 */


	$('a.button.process').click(function(){

		var input = $(this).parent().find('input[type=password]'),
			a = $('#step4 a.download'),
			password = input.val();

		input.val('');

		if(password.length<0){
			alert('Please choose a longer password!');
			return;
		}

		

		var reader = new FileReader();

		if(body.hasClass('encrypt')){

			// Encrypt file

			reader.onload = function(e){

			
				var encrypted = CryptoJS.AES.encrypt(e.target.result, password);

				
				a.attr('href', 'data:application/octet-stream,' + encrypted);
				a.attr('download', file.name + '.encrypted');

				step(4);
			};

			
			reader.readAsDataURL(file);
		}
		else {

			// Decrypt file

			reader.onload = function(e){

				var decrypted = CryptoJS.AES.decrypt(e.target.result, password)
										.toString(CryptoJS.enc.Latin1);

				if(!/^data:/.test(decrypted)){
					alert("Invalid password or file.");
					return false;
				}

				a.attr('href', decrypted);
				a.attr('download', file.name.replace('.encrypted',''));

				step(4);
			};

			reader.readAsText(file);
		}
	});


	

	back.click(function(){

		

		$('#step2 input[type=file]').replaceWith(function(){
			return $(this).clone();
		});

		step(1);
	});


	

	function step(i){

		if(i == 1){
			back.fadeOut();
		}
		else{
			back.fadeIn();
		}

		

		stage.css('top',(-(i-1)*100)+'%');
	}

});



function ShowEncrypt(){
	ShowItems();
	
	document.getElementById('EncryptFile').style.display = 'block';
	document.getElementById('EncryptFile').style.display = 'inline';
	document.getElementById('EncryptFile').style.display = 'inline-block';
	
	document.getElementById('DecryptFile').style.display = 'none';
	
	
	
	document.getElementById('EncryptFile2').style.display = 'block';
	document.getElementById('EncryptFile2').style.display = 'inline';
	//document.getElementById('EncryptFile2').style.display = 'inline-block';
	
	document.getElementById('DecryptFile2').style.display = 'none';
	
	
	
	
	
	

}

function ShowDecrypt(){
	ShowItems();
	
	document.getElementById('DecryptFile').style.display = 'block';
	document.getElementById('DecryptFile').style.display = 'inline';
	document.getElementById('DecryptFile').style.display = 'inline-block';
	
	document.getElementById('EncryptFile').style.display = 'none';
	
	
	
	document.getElementById('DecryptFile2').style.display = 'block';
	document.getElementById('DecryptFile2').style.display = 'inline';
	//document.getElementById('DecryptFile2').style.display = 'inline-block';
	
	document.getElementById('EncryptFile2').style.display = 'none';
	

}

function ShowItems(){
	
	document.getElementById('step2').style.display = 'block';

	
	document.getElementById('step3').style.display = 'block';

	
	document.getElementById('step4').style.display = 'block';

	
}

