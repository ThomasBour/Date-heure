let today = new Date()
let futur = 80000

function addHours(add){
    today.setTime(today.getTime() + (add * 1000 * 60 * 60))
    return today;
}
console.log(addHours(futur));