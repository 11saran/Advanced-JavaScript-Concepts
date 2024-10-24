const Character = {
  name : function(){
    console.log("Hello World")
  },
  Gender : "Male",
  Age:25,
}

const person ={
    age:23,
    __proto__:Character,   //used to connect another object
}


person.name();
const chr = person.Gender
console.log(chr)

const chr1 = person.Age
console.log(chr1)


//---------------------Method 02-------------------

function char(name1){
   this.fname = name1
   this.attack = function(){
    console.log(`${this.fname}Swings!`);
   }
}

function fighter (name1){
    this.fname = name1
}

fighter.prototype = new char()


const fight = new fighter("Hulk")
fight.attack()