var checkLoginCredentials;
$(function() {
    console.log("ready!");

    checkLoginCredentials = function() {
        $.get("/getData").done(function( data ) {
            var formData = $('form').serializeArray();
            var username; var password; var result;
            for (var value in formData) {
                if(formData[value].name == "username") {
                    username = formData[value].value;
                }
                else if(formData[value].name == "password") {
                    password = formData[value].value;
                }
            }
            var logThis = {
                "username": username,
                "password": password
            };
            console.log(logThis);
            if(username === data.username && password === data.password) {
                alert("Login successful!" + JSON.stringify(logThis));
            }
            else {
                alert("Login failed!");
            }
            
        });
    };

});
