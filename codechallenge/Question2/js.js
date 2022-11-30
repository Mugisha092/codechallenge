const items = [
    { name: 'Bike',      price: 100 },
    { name: 'TV',        price: 200 },
    { name: 'Album',     price: 10 },
    { name: 'Book',      price: 5 },
    { name: 'Phone',     price: 500 },
    { name: 'Computer',  price: 1000 },
    { name: 'Keyboard',  price: 25 }   
]
var min;
var max;
const filteredItems = items.filter( item => {
    return item.price<100;
});
console.log(Math.min(item.price));

console.log(Math.max(item.price));

const total = items.reduce((currentTotal,item) => {
    return item.price + currentTotal;
},0);
