export default class Calender {
    constructor() {
        // Month Count for 0
        // this.firstDay = (new Date(year, month - 1)).getDay();
        this.months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    }

    getDaysInMonth(iMonth = 7, iYear = 2019) {
        return 32 - new Date(iYear, iMonth, 32).getDate();
    }

    getFirstDayInMonth(year = 2019, month = 7) {
        return (new Date(year, month - 1)).getDay();
    }

}