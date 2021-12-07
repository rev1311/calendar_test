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
generateCalendar();

function getDate() {
    let month = d.getMonth();
    month = monthArr[month];

    let day = d.getDay();
    day = dayArr[day];

    let date = d.getDate();

    h2.innerHTML = date + ", " + day;
    h3.innerHTML = month;

    return { m: month, dy: day, dt: date, yr: d.getFullYear() };
    
};

function generateCalendar(){
    let days;

    if(obj.m === "February" && obj.yr % 4 !== 0){
        days = 28
    } else if(obj.m === "February" && obj.yr % 4 === 0){
        days = 29
    } else if(day31MonthArr.includes(obj.m)){
        days = 31
    } else {
        days = 30
    }

    const LocalDayArr = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
    ];

    let startOfMonth = moment().clone().startOf("month").format("dddd");
    let dayIndex = LocalDayArr.indexOf(startOfMonth);

    for(let j=0;j<dayIndex;j++){
        let element = document.createElement("div");
        element.className = "calendar__number_empty";
        document.getElementById("lc").appendChild(element);
    }

    for(let k=1;k<=days;k++){
        let element = document.createElement("div");
        obj.dt === k
        ? (element.className = "calendar__number calendar__number--current")
        : (element.className = "calendar__number");
        
        element.appendChild(document.createTextNode(k));
        document.getElementById("lc").appendChild(element);
    }
}