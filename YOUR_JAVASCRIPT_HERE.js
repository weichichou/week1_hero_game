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
    displayStatus();

}

function equipWeapon(person){
    if (person.inventory.length > 0){
    person.weapon = person.inventory[0];
    }
    displayStatus();
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

function showInventory(person){
    let currentInventory ='';
    for (i = 0; i < person.inventory.length; i++){
        console.log(person.inventory[i].type)
        console.log(person.inventory[i].damage)
        currentInventory += `${person.inventory[i].type} (${person.inventory[i].damage}) `;
        
    }   
    return currentInventory;
}


function displayStatus(){
    const userName = document.getElementById('user_name')
    const userHealth = document.getElementById('user_health')
    const userWeapon = document.getElementById('user_weapon')
    const userInventory = document.getElementById('user_inventory')

    userName.innerHTML = hero.name
    userHealth.innerHTML = `Heath: ${hero.health}`
    userWeapon.innerHTML = `Weapon: ${hero.weapon.type}; Damage: ${hero.weapon.damage}`
    userInventory.innerHTML = `Inventory: ${showInventory(hero)}`

}

displayStatus();


