// Soldier
class Soldier {
constructor(health, strength) {
    this.health = health;
    this.strength = strength;
}
attack() {
    return this.strength
}
receiveDamage(damage){
    this.health -= damage; 
}
} 

// Viking
class Viking extends Soldier{
    constructor(name,health, strength) {
        super(health, strength)
        this.name = name;
}
    receiveDamage(damage){
        this.health -= damage;  
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`;
        } else {
            return `${this.name} has died in act of combat`  
            }
        }

    battleCry() {
        return "Odin Owns You All!"
    }    
}

// Saxon
class Saxon extends Soldier{
    constructor(health,strength){
       super(health,strength) 
    }
    receiveDamage(damage){
        this.health -= damage;  
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`;
        } else {
            return `A Saxon has died in combat`  
            }
        }
}

/*let viking1 = new Viking('Thor', 100, 45);
let saxon1 = new Saxon('Arthur', 100, 35);
console.log(viking1)*/

// War
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
        addViking(viking){
            this.vikingArmy.push(viking);
        }

        addSaxon(saxon){
            this.saxonArmy.push(saxon);
        }
        vikingAttack(){
            let randomVikingIndex = Math.floor(Math.random()*this.vikingArmy.length);
            let randomSaxonIndex = Math.floor(Math.random()*this.saxonArmy.length);
            let result = this.saxonArmy[randomSaxonIndex].receiveDamage(this.vikingArmy[randomVikingIndex].attack())
            if (this.saxonArmy[randomSaxonIndex].health <= 0) {
                this.saxonArmy.splice([randomSaxonIndex], 1)
            }
            return result
        }

        saxonAttack(){
            let randomVikingIndex = Math.floor(Math.random()*this.vikingArmy.length);
            let randomSaxonIndex = Math.floor(Math.random()*this.saxonArmy.length);
            let result = this.vikingArmy[randomVikingIndex].receiveDamage(this.saxonArmy[randomSaxonIndex].attack())
            if (this.vikingArmy[randomVikingIndex].health <= 0) {
                this.vikingArmy.splice([randomVikingIndex], 1)
            }
            return result
        }

        
        showStatus(){
            if (this.saxonArmy.length === 0) {
                return "Vikings have won the war of the century!"
            } else if (this.vikingArmy.length === 0) {
                return "Saxons have fought for their lives and survive another day..."
            } else if (this.vikingArmy.length >= 1 || this.saxonArmy.length >= 1) {
                return "Vikings and Saxons are still in the thick of battle."
            }
    }
        
}



