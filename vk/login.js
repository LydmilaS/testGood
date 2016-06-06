// wp-test.local - domain my app

function login() {
	VK.Auth.login( authInfo, +2);
	function authInfo(response) {
		  if (response.session) {

		  	$("#logout").show();
		  	$("#get_friends").show();
		  	$("#login").hide();

		    alert('user: '+response.session.mid);
		   
		  } else {
            alert('not auth');
		}
	}
}

// VK.Observer.subscribe('auth.login', function f()
// {
// alert ();
// });

function logout() {
	VK.Auth.logout();
	location.reload();
	alert('you left app');
}

function getFiends() {
    VK.Api.call('friends.get', {fields: 'status, sex'}, function(data) {
        if (data.error) {
            alert(data.error.error_msg);
        } else {
            if (data.response.length > 0) {
				for (i = 1; i < data.response.length; i++) {
    					$('#list').append("<li>" + " " + data.response[i].last_name + " " + data.response[i].first_name + "</li>");
		            }
	            }
	        }
   	});

   	localStorage.setItem();
}