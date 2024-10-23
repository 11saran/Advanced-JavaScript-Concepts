const products= ['beans','pizza','chicken']

console.log(
  products.map((el) => {  //Add new value for each array value
    return el + " *";
  })
);

const price = [2,5,7,16,50,38];
 const disCount = 1;

const dicountprice = price.map((price)=>{return price - disCount});
console.log(dicountprice)