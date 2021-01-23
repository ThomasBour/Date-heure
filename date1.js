let Brussels = new Date()

let Anchorage = new Date(new Date().getTime() - (10 * 60 * 60 * 1000))

let Reykjavic = new Date(new Date().getTime() - (1 * 60 * 60 * 1000))

let Saint_Petersbourg = new Date(new Date().getTime() + (2 * 60 * 60 * 1000))

console.log('Anchorage : ' + Anchorage.toLocaleTimeString('en-Us') + ' Brussels : ' + Brussels.toLocaleTimeString('en-Us')); 

console.log('Reykjavic : ' + Reykjavic.toLocaleTimeString('en-Us') + ' Brussels : ' + Brussels.toLocaleTimeString('en-Us'));

console.log('Saint Petersbourg : ' + Saint_Petersbourg.toLocaleTimeString('en-Us') + ' Brussels : ' + Brussels.toLocaleTimeString('en-Us'));