$(function() {
	var data = {
		login: '',
		password: ''
	};

	$('#login').focusout(function(e){
		data.login = e.target.value;
	});
	$('#password').focusout(function(e){
		data.password = e.target.value;
	});

	$('.b-button').on('click', function() {
		$.post('/login', data, function() {
			alert('Авторизация прошла успешно!');
		});
	});
});