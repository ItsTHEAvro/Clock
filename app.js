const Hour = document.querySelector(".hour");
const Minute = document.querySelector(".minute");
const Second = document.querySelector(".second");
const AP = document.querySelector(".am-pm");
const WeekDay = document.querySelector(".weekDay");
const FullDate = document.querySelector(".date");

setInterval(showTime, 1000);

function showTime() {
  let date = new Date();

  currentHour = date.getHours();
  currentHour = currentHour % 12;
  currentHour = currentHour ? currentHour : 12;
  currentHour = ("0" + currentHour).slice(-2);
  Hour.textContent = currentHour;

  currentMinute = date.getMinutes();
  currentMinute = ("0" + currentMinute).slice(-2);
  Minute.textContent = currentMinute;

  currentSecond = date.getSeconds();
  currentSecond = ("0" + currentSecond).slice(-2);
  Second.textContent = currentSecond;

  let period = date.getHours() >= 12 ? 'pm' : 'am';
  AP.textContent = period;
  
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  let dayName = days[date.getDay()];
  WeekDay.textContent = dayName;
  
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let dateFormatted = monthNames[date.getMonth()]+" "+date.getDate()+", "+date.getFullYear();
  FullDate.textContent = dateFormatted;
}

showTime();
