"use strict";
var Ticket = (function () {
    function Ticket(id, title, city, place, startDate, endDate, startTime, endTime, imageUrl, seat, row) {
        this.id = id;
        this.title = title;
        this.city = city;
        this.place = place;
        this.startDate = startDate;
        this.endDate = endDate;
        this.startTime = startTime;
        this.endTime = endTime;
        this.imageUrl = imageUrl;
        this.seat = seat;
        this.row = row;
    }
    return Ticket;
}());
exports.Ticket = Ticket;
//# sourceMappingURL=ticket.js.map