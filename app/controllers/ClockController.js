import { setText } from "../utils/Writer.js";

export class ClockController {

    constructor() {
        this.newDate()
        setInterval(this.newDate, 1000);
    }

    newDate() {
        const newClock = new Date()
        // console.log(newClock.toLocaleTimeString())
        setText('clock', newClock.toLocaleTimeString())
    }



}