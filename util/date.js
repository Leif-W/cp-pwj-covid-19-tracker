'use strict';

let date_now = Date();

console.log(date_now);
date_now.getMinutes();
//date_now.setMinutes(date_now.getMinutes() - 10);
//console.log(date_now);

let endDate = new Date(),
    startDate = new Date(endDate),
    durationInMinutes = 20;

startDate.setMinutes(endDate.getMinutes() - durationInMinutes);
