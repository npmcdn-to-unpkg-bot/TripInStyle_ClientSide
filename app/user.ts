export class User {
    email: string;
    imageUrl: string;
    favorites: string[];
    
    constructor(email: string, imageUrl: string, favorites: string[] = []) {
        this.email = email;
        this.imageUrl = imageUrl;
        this.favorites = favorites;
    }

    changeFavorite(eventId: string) {
        console.log("change favorites:");
        console.log(eventId);
        console.log(this.favorites);
        let index = this.favorites.findIndex(evntId => evntId == eventId);
        if(index > -1) {
            this.favorites.splice(index,1);
        }
        else {
            this.favorites.push(eventId);
        }
    }
}