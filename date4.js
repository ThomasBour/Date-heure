const main = document.querySelector('main');
document.querySelector('main').innerHTML = "";

const date = new Date();
console.log(date);

let weekday = [ 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri','Sat' ];
let month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ];

const conteneur = document.createElement('div');
conteneur.className = 'container';
main.appendChild(conteneur);

const calendrier = document.createElement('div');
calendrier.className = 'calendar';
main.appendChild(calendrier);

const jourSemaine = document.createElement('div');
jourSemaine.className = 'day'
jourSemaine.textContent = weekday[date.getDay()];
calendrier.appendChild(jourSemaine);

const contenu_date_mois = document.createElement('div');
contenu_date_mois.className ='contenuChiffreMois';
calendrier.appendChild(contenu_date_mois);

const chiffreJour = document.createElement('div');
chiffreJour.className = 'daynumber'
chiffreJour.textContent = date.getDate();
contenu_date_mois.appendChild(chiffreJour);

const mois = document.createElement('div');
mois.className = 'month'
mois.textContent = month[date.getMonth()];
contenu_date_mois.appendChild(mois);

const annee = document.createElement('div');
annee.className = 'year'
annee.textContent = date.getFullYear();
calendrier.appendChild(annee);

const heure = document.createElement('div');
heure.id ='heure'
heure.className = 'hour';
heure.textContent = date.toLocalTimeString('fr-FR');
conteneur.appendChild(heure);

function UR_Start()
{
UR_Nu = new Date();
UR_Indhold = showFilled(UR_Nu.getHours())+ ":" + showFilled(UR_Nu.getMinutes()) + ":" + showFilled(UR_Nu.getSeconds());
document.all.heure.innerHTML = UR_Indhold;
//document.writeln(UR_Indhold);
setTimeout("UR_Start()",1000);
}
function showFilled(Value)
{
return (Value > 9) ? "" + Value : "0" + Value;
} 