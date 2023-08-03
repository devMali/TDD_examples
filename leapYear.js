const leapYear = (year) => {
    let leap_year = false;

    if(year % 400 === 0 || year % 4 === 0 && year % 100 !== 0){
        leap_year= true;
    }
    else if(year %100 === 0 && year % 400 !==0 || year % 4 !== 0){
        leap_year = false;
    }
    else{
        leap_year = true;
    }
    return leap_year;
}

module.exports = leapYear;