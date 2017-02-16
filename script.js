const birthday = new Date(1998, 9, 7);
const timer = () => {
  const now = new Date();
  let difference = now.getTime() - birthday.getTime();
  difference = (difference - difference % 10) / 10;
  difference = difference / 3153600000;
  const year = Math.floor(difference);
  const rest = (parseFloat(difference - year).toFixed(9)).substring(1);
  document.getElementById("year").innerHTML = year;
  document.getElementById("rest").innerHTML = rest;
  setTimeout(timer, 100);
}
