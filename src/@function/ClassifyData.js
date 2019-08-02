import * as Time from './Time.js';

function TaskDate (name = "ME!", date = new Date(), data = []) {
    this.name = name;
    this.date = date;
    this.data = data;
}

export default class ClassifyDate {
    

    constructor(data) {
        this.data = {};
        this.n = ["TODAY", "TOMMORROW", "THIS WEEK", "LATER", "UNDONE"]
        // this.afterData = null;
        this.classify(data);
    }

    classify(data) {
        const tdy = Time.getToday();
        for (var i = 0; i < data.length; i++) {
            const key = data[i];
            const diff = Time.calculateBetweenDay(tdy, Time.stringToDate(key.date));
            switch (true){
                case diff == 0: // Today
                this.data[this.n[0]] = new TaskDate(this.n[0], key.date, key.data)
                break;
                case diff == 1: // Tommorrow
                this.data[this.n[1]] = new TaskDate(this.n[1], key.date, key.data)
                break;
                case diff > 1 && diff <= 7: // This week
                this.data[this.n[2]] = new TaskDate(this.n[2], key.date, key.data)
                break;
                case diff > 7: // Later
                this.data[this.n[3]] = new TaskDate(this.n[3], key.date, key.data)
                break;
                case diff < 0: // Un-DONE
                this.data[this.n[4]] = new TaskDate(this.n[4], key.date, key.data)
                break;
                default:
            }
        }
    }
    /* 
        get classification result
    */
    get result() {
        return this.data;
    }
}
