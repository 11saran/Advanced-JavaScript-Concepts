var numbers = [1,3,6,8,11];
 var filter = numbers.filter((number)=>{
   return number>7;
 })

 console.log(filter)

 // filter with objects array

 var creatures = [
   { name: "Shark", habitat: "Ocean" },
   { name: "Whale", habitat: "Ocean" },
   { name: "Lion", habitat: "Savanna" },
   { name: "Monkey", habitat: "Jungle" },
 ];

const Ocean = creatures.filter((creature) => {
  return creature.habitat == "Ocean";
});

console.log(Ocean)