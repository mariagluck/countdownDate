// The following line makes sure your styles are included in the project. Don't remove this.
import '../styles/main.scss';
// Import any additional modules you want to include below \/

import moment from 'moment';
// \/ All of your javascript should go here \/
const element = document.getElementById("countdown");
const exp = moment("2021-07-24");

setInterval(function() {
  let now = moment().format();
  let diffDuration = moment.duration(exp.diff(now));
  element.innerHTML = ( 
      `<b style='font-size: 3em; color:white; padding-left: 100px'>\ ${diffDuration.days() }</b>` + 
  `<b style='font-size: 2em; color:white; padding-left: 10px;'>\ days</b>` + 
  `<b style='font-size: 3em; color:white; padding-left: 10px;'>\ ${diffDuration.hours() }</b>` + 
  `<b style='font-size: 2em; color:white; padding-left: 10px;'>\ hours</b>` + 
  `<b style='font-size: 3em; color:white; padding-left: 10px;'>\ ${diffDuration.minutes() }</b>` + 
  `<b style='font-size: 2em; color:white; padding-left: 10px;'>\ minutes </b>` + 
  `<b style='font-size: 3em; color:white; padding-left: 10px;'>\ ${diffDuration.seconds() }</b>` + 
  `<b style='font-size: 2em; color:white; padding-left: 10px;'>\ seconds</b>`
  );}, 1000);

