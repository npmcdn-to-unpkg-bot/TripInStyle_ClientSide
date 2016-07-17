export class Ticket {
    id: number;
    title: string;
    city: string;
    place: string;
    startDate: string;
    endDate: string;
    startTime: string;
    endTime: string;
    imageUrl: string;
    seat: number;
    row: number;
    
    constructor(id:number, title: string, city: string, place: string, 
                startDate: string, endDate: string, startTime: string, 
                endTime:string, imageUrl:string, seat: number, row: number) {
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
}