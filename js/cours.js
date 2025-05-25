let montantCash = document.querySelector(".montant-cash");
let montantBank = document.querySelector(".montant-bank");
let montantDebt = document.querySelector(".montant-debt");
let montantGuns = document.querySelector(".montant-guns");
let barreVie = document.querySelector(".barre-vie");
let pourcentageVie = document.querySelector(".pour-cent");

let cash = 2000;
let bank = 0;
let debt = 5500;
let guns = 0;
let health = 100;

function mettreAJourStatut() {
    montantCash.textContent = cash;
    montantBank.textContent = bank;
    montantDebt.textContent = debt;
    montantGuns.textContent = guns; 
    pourcentageVie.textContent = `${health}%`;
    barreVie.style.width = `${health}%`;
}