let Date1 = new Date(1997,10,05)
let Date2 = new Date(2020,11,27)

function dayDiff(Date1,Date2)

{
    Date1 = Date1.getTime() / 86400000
    Date2 = Date2.getTime() / 86400000;
    return new Number(Date2 - Date1).toFixed(0);    
}

console.log(dayDiff(Date1, Date2) + ' nombre de jours ')