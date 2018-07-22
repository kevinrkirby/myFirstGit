$( document ).ready(function() {
    console.log("ready!");

    function checkLoginCredentials() {
        $.get("/getData").done(function( data ) {
            alert("Data Loaded: " + data);
        });
    }

});
