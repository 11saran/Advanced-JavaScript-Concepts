function User(a,b){
    this.a =a,
    this.b =b,
    this.add = function(c){
        return this.a+this.b+c
    }
}

let add = new User(10,20);
console.log(add.add(30));