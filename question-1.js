// Question #1: Inventory Management

const inventory = {
  apple: { price: 35, quantity: 100 },
  banana: { price: 10, quantity: 50 },
};

// เริ่มเขียนโค้ดตรงนี้
inventory.apple.quantity = 200;
inventory.orange = { price: 20, quantity: 300 };

let totalPrice = 0;
for (let x in inventory) {
  totalPrice += inventory[x].price * inventory[x].quantity;
}

console.log(`Total inventory value: ${totalPrice} baht`);
