let enigme1 = document.getElementById('enigme1');
let enigme2 = document.getElementById('enigme2');
let enigme3 = document.getElementById('enigme3');
const tabEnigme = [enigme1,enigme2,enigme3];
console.log(tabEnigme);
let boutonNext = document.getElementById('bouton');

boutonNext.addEventListener('submit',(e)=>{
    e.preventDefault;
    nextEnigme();

});

function nextEnigme(){
   for(let i=1 ; i<tabEnigme.length ; i++){
     tabEnigme[i-1].style.display= 'none';
     tabEnigme[i].style.display = 'block';
   }
  
};
