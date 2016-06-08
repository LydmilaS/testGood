
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

function logout() {
    VK.Auth.logout();
    location.reload();
    alert('you left app');
}

function getFiends() {
    VK.Api.call('friends.get', {fields: 'sex'}, function(data) {
        
        if (data.error) {
            alert(data.error.error_msg);
        } else {
            if (data.response.length > 0) {

            for (i = 0; i < data.response.length; i++) {

                //создадим объект
                var friend = {
                    first_name: data.response[i].first_name,
                    last_name: data.response[i].last_name
                };
				 
                var serialFriend = JSON.stringify(friend); //сериализуем его
				 
                localStorage.setItem(i, serialFriend); //запишем его в хранилище по ключу "myKey"
				 
                var returnFriend = JSON.parse(localStorage.getItem(i)) //спарсим его обратно объект
					
                if(returnFriend) {
                    $('#local').append(
                        "<li>" + 
                            "<form action=''>"+
                                "<input type='text' class='last_name' value='' placeholder='last_name' onchange='localStorage.setItem(i, this.value);'/>"+
                                "<input type='text' class='first_name' value='' placeholder='first_name' onchange='localStorage.setItem(i, this.value);'/>"+
                            "</form>" + 
                            friend.last_name + " " + friend.first_name + 
                        "</li>");
                } else {
                    $('#list').append("<li>" + " " + item + "</li>");
                }
	        }

            } else {
                alert('You don"t have friends:(')
            }
        }
    });
}