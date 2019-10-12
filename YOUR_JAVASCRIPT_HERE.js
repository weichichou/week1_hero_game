// Write your JS here

const hero = {
    name: 'Hero_Name',
    heroic: true,
    inventory: [],
    health: 10,
    weapon: {
        type: 'dagger',
        damage: 2,
    }
};

function rest(person){
    if (person.health === 10){
        alert("Your health is alreay 10!")
    }else{
        person.health = 10;
        return person;
    }   
}

function pickUpItem(person, weapon){
    person.inventory.push(weapon);

}

function equipWeapon(person){
    if (person.inventory.length > 0){
    person.weapon = person.inventory[0];
    }
}

const innImg = document.getElementById('inn');
innImg.addEventListener('click',function(event){
    console.log()
    rest(hero);
})

const weaponImg = document.getElementById('dagger');
weaponImg.addEventListener('click',function(event){
    const dagger ={
        type: 'dagger',
        damage: 2
    }
    pickUpItem(hero, dagger);
})

const bagImg = document.getElementById('bag');
bagImg.addEventListener('click',function(event){
    equipWeapon(hero);
})



