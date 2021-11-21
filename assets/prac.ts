var products: string[] = ["Smartphones", "Mobiles", "fmcg", "Television", "complimentary", "Refrigerator","defenceGoods"];
var myproducts: string[] = [];
function fun(prodList) {
    for (var i of prodList) {
        if (i.match("[a-z]+s")) myproducts.push(i);
        else prodList.pop();
    }
    return myproducts;
}
console.log(fun(products));


// enum mobilePrice { "Iphone7" = 70000, "OnePlus6" = 45000, "Iphone8plus" };
// abstract class Product {
//     protected prodId?: number = 4366;
//     static category: string = "Gadget";
//     constructor(prodId) { this.prodId = this.getDetails(); }
//     getDetails(): number { return this.prodId; }
// }
// interface Gadget {
//     seasonalOffer?: number;
//     offer(mName: string): number;
// }
// class Mobile extends Product implements Gadget {
//     prodId = 2533;
//     constructor(prodId) { super(prodId); }
//     seasonalOffer = 6;
//     getDetails() {
//         Product.category = "smartPhones";
//         return this.prodId;
//     }
//     offer(mName): number {
//         if (mName == "Iphone8plus") {
//             if (mobilePrice.Iphone8plus > 50000) return (this.seasonalOffer + 15);
//             else return (this.seasonalOffer + 10);
//         }
//     }
// }
// Product.category = "Cell Phone";
// var myPhone = new Mobile(3489);
// console.log("The " + Product.category + " belongs to " + myPhone.getDetails() + " productId!!");
// console.log("You will get a discount of " + myPhone.offer("Iphone8plus") + "%");



// abstract class Game {
//   constructor(public points: number) {
//       this.points = points
//   }
//   abstract getPoints();
//   addPoints() {
//       this.points += 100;
//   }
// }

// class ComputerGame extends Game {
//   points = 300;
//   constructor(points) {
//       super(points);
//   }
//   getPoints() {
//       let points = 50;
//       return points += this.points
//   }
// }

// var cg1 = new ComputerGame(200);

// cg1.addPoints();
// console.log(cg1.getPoints());


// let students = ["Joseph", "Emily", "Maria", "Steven"];  
// function petnames(name:string) {     
//     return name.substr(1, 4); 
// } 
// console.log("pet_name_list= "+students.forEach(petnames));
// console.log("map_pet_names= "+students.map(petnames));