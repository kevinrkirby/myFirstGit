var checkLoginCredentials;
$(function() {
    console.log("ready!");

    checkLoginCredentials = function() {
        $.get("/getData").done(function( data ) {
            var formData = $('form').serializeArray();
            var username; var password; var result;
            for (var value in formData) {
                console.log(formData[value].value);
                if(formData[value].name == "username") {
                    username = formData[value].value;
                }
                else if(formData[value].name == "password") {
                    password = formData[value].value;
                }
            }
            console.log("Username: "+ username + " - Password: " + password);
            console.log("Username: "+ data.username + " - Password: " + data.password);
            if(username === data.username && password === data.password) {
                alert("Login successful!");
            }
            else {
                alert("Login failed!");
            }
            
        });
    };

});
