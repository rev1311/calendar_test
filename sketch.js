const h2 = document.querySelector(".calendar-picture h2");
const h3 = document.querySelector(".calendar-picture h3");

const monthArr = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

const dayArr = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

const day31MonthArr = [
    "January",
    "March",
    "May",
    "July",
    "August",
    "October",
    "December"
];

const d = new Date();
const obj = getDate();

function getDate() {
    const month = d.getMonth();
    month = monthArr[month]

    const day = d.getDay();
    day = dayArr[day]

    const date = d.getDate();

    h2.innerHTML = date + ", " + day;
    h2.innerHTML = month;

    return { m:month, dy:day, dt:date, yr:d.getFullYear() };
}