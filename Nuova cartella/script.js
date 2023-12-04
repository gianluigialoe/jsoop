/*
class Utente {
    constructor(nome, cognome, eta, localita) {
        this.nome = nome;
        this.cognome = cognome;
        this.eta = eta;
        this.localita = localita;
    }
}


function confrontaEta(utente1, utente2) {
    if (utente1.eta === utente2.eta) {
        console.log(`${utente1.nome} e ${utente2.nome} hanno la stessa età.`);
    } else {
        console.log(`${utente1.nome} è ${utente1.eta > utente2.eta ? 'più grande di' : 'più giovane di'} ${utente2.nome}.`);
    }
}

const utente1 = new Utente("Rossi", "Gigi", 23, "Roma");
const utente2 = new Utente("Anna", "Verdi", 25, "Milano");

console.log(utente1);
console.log(utente2);


confrontaEta(utente1, utente2);



class Pet {
    constructor(petName, ownerName, species, breed) {
        this.petName = petName;
        this.ownerName = ownerName;
        this.species = species;
        this.breed = breed;
    }

    toString() {
        return `Pet: ${this.petName}, Owner: ${this.ownerName}, Species: ${this.species}, Breed: ${this.breed}`;
    }
}

*/
class Pet {
    constructor(petName, ownerName, species, breed) {
        this.petName = petName;
        this.ownerName = ownerName;
        this.species = species;
        this.breed = breed;
    }

   
    sameOwner(otherPet) {
        return this.ownerName === otherPet.ownerName;
    }
}

const petForm = document.getElementById('petForm');
const petList = document.getElementById('petList');
const pets = []; 

function addPet() {
    const petName = document.getElementById('petName').value;
    const ownerName = document.getElementById('ownerName').value;
    const species = document.getElementById('species').value;
    const breed = document.getElementById('breed').value;

  
    const newPet = new Pet(petName, ownerName, species, breed);
    pets.push(newPet);


    const listItem = document.createElement('li');
    listItem.textContent = newPet.toString();
    petList.appendChild(listItem);

  
    petForm.reset();

   
    checkSameOwner();
}
console.log()