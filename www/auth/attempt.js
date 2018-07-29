/* We need to define the variable 
before the document has finished loading. */


/* Shorthand for document.ready() {} */

$(function() {
    console.log("ready!");

    /* Here we check that credentials match the "database" information */
    var loginSuccess = function (data) {
        console.log(data);
        if(data) {
            $('#post-result').html("<p>" + JSON.stringify(data) + "</p>");
        }

        // Reset FormData after Posting
        resetForm();
        
        function resetForm(){
            $("#username").val("");
            $("#password").val("");
        }      
    };

    var loginFailed = function (error) {
        $('#post-result').html("<p>{'Login': 'Failed'}</p>");
    };

    $('#loginform').submit(function( event ) {
        event.preventDefault();
        postForm();
    });

    var postForm = function () {
    	// PREPARE FORM DATA
    	var formData = {
    		username : $("#username").val(),
    		password :  $("#password").val()
        };

        $.ajax({
            type : "POST",
            contentType : "application/json",
            url : window.location,
            data : JSON.stringify(formData),
            datatype : "json",
            success: function (data) {
                loginSuccess(data);
            },
            error: function (jqXHR) {
                loginFailed(jqXHR);
            }
        });
    };

});
