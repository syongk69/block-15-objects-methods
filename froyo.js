// original object:
const customer = {
  firstName: "jake",
  lastName: "smith",
  email: "jaekSmih!aol.com",
  phone: undefined,
  zipCode: "631",
  favoriteFlavors: 32,
  cupSize: "Medium",
  favoriteStore: "Target",
  firstVisit: false,
};

// modified original object with new information:
customer["email"] = "jak3Smith1992@email.com";
customer["phone"] = 3195551234;
customer["zipCode"] = "63132";
customer["favoriteFlavors"] = ["coffee", "strawberry", "matcha"];

// deleted object keys using delete keyword:
delete customer["zipCode"];
delete customer.favoriteStore;

// added new object keys:values to existing object:
customer.toppings = ["chocolate sprinkles", "wafer straws", "gummy bears"];
customer.futureFlavors = "mango";
customer.todaysPurchaseCost = 5.32;

// output object keys in an array:
console.log(Object.keys(customer));

// tested different outputs using different methods:

// console.log(Object.values(customer));

// for (const property in customer) {
//   console.log(property);
// }

// for (const keys in customer) {
//   console.log(customer[keys]);
// }

// console.table(customer);
