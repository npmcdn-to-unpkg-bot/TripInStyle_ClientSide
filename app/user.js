"use strict";
var User = (function () {
    function User(email, imageUrl, favorites) {
        if (favorites === void 0) { favorites = []; }
        this.email = email;
        this.imageUrl = imageUrl;
        this.favorites = favorites;
    }
    User.prototype.changeFavorite = function (eventId) {
        console.log("change favorites:");
        console.log(eventId);
        console.log(this.favorites);
        var index = this.favorites.findIndex(function (evntId) { return evntId == eventId; });
        if (index > -1) {
            this.favorites.splice(index, 1);
        }
        else {
            this.favorites.push(eventId);
        }
    };
    return User;
}());
exports.User = User;
//# sourceMappingURL=user.js.map