//  Template String
// Evita armar String poniendo varios mas seguidos combinando variables
let a = 5;
let b = 10;
console.log(`Quince es ${a + b} y
no ${2 * a + b}.`);


// Evaluar una expresion con || vs ??
// || evalua hasta que alguna parte sea verdadera toma 0 , undefined y null como falsos
// || evalua hasta que alguna parte sea verdadera pero toma solo undefined y null como falsos
let tmp = 0;
console.log(tmp || "Falso"); // "Falso"
console.log(tmp ?? "Falso"); // 0
