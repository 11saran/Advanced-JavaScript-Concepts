class Character{
    constructor(name){
        this.name = name
    }

    attack(){
        console.log(`${this.name}:swings!`)
    }
}


class Fighter extends Character{
   constructor(name){
    super(name)      // The super() function is use for call parent class's constructor and pass the value to parent class.
   }
}

const fight = new Fighter("Hulk")

fight.attack()