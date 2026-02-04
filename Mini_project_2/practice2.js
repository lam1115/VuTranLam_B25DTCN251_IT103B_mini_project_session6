let array = [100, 200, 300, 400];
console.log("for ... of");

for (const value of array) {
    console.log(value);
}

console.log("\nfor ... in");
for (const posision in array) {
    console.log(posision);
}

console.log("\nfor");
for(let i = 0; i < array.length; i++){
    if(i % 2 === 0){
        console.log(i);
    }
}
