/* We need to define the variable 
before the document has finished loading. */

var checkLoginCredentials;

/* Shorthand for document.ready() {} */

$(function() {
    console.log("ready!");

    /* Here we check that credentials match the "database" information */
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

            /* This is a closure that will return the
            credentials of the user who just logged in */

            var logThis = (function () {
                var myObject = {"username": username,"password": password};
                return function () { return myObject; }
            })();

            console.log(logThis);
            if(username === data.username && password === data.password) {
                alert("Login successful!" + JSON.stringify(logThis()));
            }
            else {
                alert("Login failed!");
            }
            
        });
    };

});
