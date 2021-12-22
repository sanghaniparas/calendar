export class Events {
    ID:number;
    Title:string;
    EventDate:Date;
    EventDescription:string;

    constructor() {
        this.ID=undefined;
        this.Title = "";
        this.EventDescription = "";
        this.EventDate=new Date();
   }
}