const stringToDate = (date) => {
    return new Date(date);
}

const getToday = () => {
    return new Date();
}

const isSameDay = (a, b) => {
    return a.getFullYear() === b.getFullYear() &&
        a.getDate() === b.getDate() &&
        a.getMonth() === b.getMonth();
}


const _MS_PER_DAY = 1000 * 60 * 60 * 24;
const calculateBetweenDay = (a, b) => {
    // Convert UTC
    const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
    const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
  
    return Math.floor((utc2 - utc1) / _MS_PER_DAY);
}

export {
    stringToDate,
    getToday,
    isSameDay,
    calculateBetweenDay
}