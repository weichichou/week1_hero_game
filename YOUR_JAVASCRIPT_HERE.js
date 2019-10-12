// Write your JS here

const inputName = window.prompt("What is your name?","");


const hero = {
    name: `Hero ${inputName}`,
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
    person.inventory.shift();
    }
    displayStatus();
}

const innImg = document.getElementById('inn');
innImg.addEventListener('click',function(event){
    rest(hero);
    displayStatus();
})


for(const weapon of weapons){
    const weaponImg = document.getElementById(weapon.type);
    weaponImg.addEventListener('click',function(event){
        pickUpItem(hero, weapon);
        weaponImg.style.display = 'none';
    })
}

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
    userHealth.innerHTML = `Health: ${hero.health}`
    userWeapon.innerHTML = `Weapon: ${hero.weapon.type}; Damage: ${hero.weapon.damage}`
    userInventory.innerHTML = `Inventory: ${showInventory(hero)}`

    //if user health < 0
    if (hero.health <= 0){
    document.getElementById('overlay').style.display = 'block';
}

}

displayStatus();

const enemy1 = {
    health: 10,
}

const enemy2 = {
    health: 10,
}

const enemy3 = {
    health: 10,
}


//Enemy Events

const enemy1Img = document.getElementById('enemy1_img')
enemy1Img.addEventListener('click',function(event){

    //enemy health decreases
    enemy1.health -= hero.weapon.damage;
    document.querySelector('#enemy1_status h4').innerHTML = `Health: ${enemy1.health}`

    //if health <= 0, image disapper
    if (enemy1.health <= 0){
        document.getElementById('enemy1_status').style.display = 'none';
        document.getElementById('enemy1_img').style.display = 'none';
        const winMessage = document.createElement('h1');
        winMessage.innerHTML = `YOU WIN!!`
        document.getElementById('enemy1').appendChild(winMessage);
    }

})

const enemy2Img = document.getElementById('enemy2_img')
enemy2Img.addEventListener('click',function(event){

    //enemy health decreases
    enemy2.health -= hero.weapon.damage;
    document.querySelector('#enemy2_status h4').innerHTML = `Health: ${enemy2.health}`


    //enemy attack user
    const enemyAttackDamage = Math.floor(Math.random()*6)+1;
    if (enemy2.health > 0 ){
        setTimeout(function(){
            alert(`Enemy 2 attacks! You lose ${enemyAttackDamage} health`);

            hero.health -= enemyAttackDamage;
            displayStatus();
            },300);
    }


    //if health <= 0, image disapper
    if (enemy2.health <= 0){
        document.getElementById('enemy2_status').style.display = 'none';
        document.getElementById('enemy2_img').style.display = 'none';
        const winMessage = document.createElement('h1');
        winMessage.innerHTML = `YOU WIN!!`
        document.getElementById('enemy2').appendChild(winMessage);
    }

})

const enemy3Img = document.getElementById('enemy3_img')
enemy3Img.addEventListener('click',function(event){

    //enemy health decreases
    enemy3.health -= hero.weapon.damage;
    document.querySelector('#enemy3_status h4').innerHTML = `Health: ${enemy3.health}`

    //enemy restore health
    const possibilityOfRegenerate = Math.random();
    console.log(possibilityOfRegenerate);
    if (enemy3.health <= 3 && possibilityOfRegenerate >= 0.5){
        enemy3.health = 10;
        document.querySelector('#enemy3_status h4').innerHTML = `Health: ${enemy3.health}`
        alert(`Enemy 3 regenerates health!`);
    }


    //enemy attack user
    const enemyAttackDamage = Math.floor(Math.random()*6)+1;
    if (enemy3.health > 0 ){
        setTimeout(function(){
            alert(`Enemy 3 attacks! You lose ${enemyAttackDamage} health`);

            hero.health -= enemyAttackDamage;
            displayStatus();
            },300);
    }
    
    


    //if health <= 0, image disapper
    if (enemy3.health <= 0){
        document.getElementById('enemy3_status').style.display = 'none';
        document.getElementById('enemy3_img').style.display = 'none';
        const winMessage = document.createElement('h1');
        winMessage.innerHTML = `YOU WIN!!`
        document.getElementById('enemy3').appendChild(winMessage);
    }

})



