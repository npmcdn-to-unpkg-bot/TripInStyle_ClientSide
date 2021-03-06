var loginToGoogle = function (callback) {
    auth2 = {};
    helper = (function () {
        return {
            /**
             * Hides the sign in button and starts the post-authorization operations.
             *
             * @param {Object} authResult An Object which contains the access token and
             *   other authentication information.
             */
            onSignInCallback: function (authResult) {
                $('#authResult').html('Auth Result:<br/>');
                for (var field in authResult) {
                    $('#authResult').append(' ' + field + ': ' +
                        authResult[field] + '<br/>');
                }
                if (authResult.isSignedIn.get()) {
                    $('#authOps').show('slow');
                    $('#gConnect').hide();
                    helper.profile();
                    helper.people();
                } else {
                    if (authResult['error'] || authResult.currentUser.get().getAuthResponse() == null) {
                        // There was an error, which means the user is not signed in.
                        // As an example, you can handle by writing to the console:
                        console.log('There was an error: ' + authResult['error']);
                    }
                    $('#authResult').append('Logged out');
                    $('#authOps').hide('slow');
                    $('#gConnect').show();
                }

                console.log('authResult', authResult);
            },

            /**
             * Calls the OAuth2 endpoint to disconnect the app for the user.
             */
            disconnect: function () {
                // Revoke the access token.
                auth2.disconnect();
            },

            /**
             * Gets and renders the list of people visible to this app.
             */
            people: function () {
                gapi.client.plus.people.list({
                    'userId': 'me',
                    'collection': 'visible'
                }).then(function (res) {
                    var people = res.result;
                    $('#visiblePeople').empty();
                    $('#visiblePeople').append('Number of people visible to this app: ' +
                        people.totalItems + '<br/>');
                    for (var personIndex in people.items) {
                        person = people.items[personIndex];
                        $('#visiblePeople').append('<img src="' + person.image.url + '">');
                    }
                });
            },

            /**
             * Gets and renders the currently signed in user's profile data.
             */
            profile: function () {
                gapi.client.plus.people.get({
                    'userId': 'me'
                }).then(function (res) {
                    var profile = res.result;
                    console.log(profile);
                }, function (err) {
                    var error = err.result;
                });
            }
        };
    })();
    gapi.load('auth2', function () {
        gapi.client.load('plus', 'v1').then(function () {
            gapi.signin2.render('signin-button', {
                scope: 'https://www.googleapis.com/auth/plus.login',
                fetch_basic_profile: false
            });
            gapi.auth2.init({
                fetch_basic_profile: false,
                scope: 'https://www.googleapis.com/auth/plus.login'
            }).then(
                function () {
                    console.log('init');
                    console.log(gapi.auth2.getAuthInstance());
                    auth2 = gapi.auth2.getAuthInstance();
                    gapi.client.plus.people.get({
                        'userId': 'me'
                    }).then(function(res) {
                        callback(res.result);
                    });
                    //return gapi.auth2.getAuthInstance();
                });
        });
    });
}
