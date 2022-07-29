// Crear el array de objetos "Pizzas". 🍕
// 👉 Debemos crear 6 objetos como mínimo.
// 👉 Cada objeto debe tener definido su id (1,2,3,etc), nombre, ingredientes (Sobre la base) y precio. (Ingredientes debe ser una lista).

const pizza = [
    {
        id: 1,
        name: "calabresa",
        ingredients: ["salsa de tomate", "mozzarella", "longaniza", "oregano"],
        price:1020
    },
    {
        id: 2,
        name: "4 quesos",
        ingredients: ["salsa de tomate", "mozzarella", "parmesano", "provolone", "roquefort"],
        price:1300
    },
    {
        id: 3,
        name: "vegan",
        ingredients: ["salsa de tomate", "espinaca", "brocoli", "queso de almendras"],
        price:100
    },
    {
        id: 4,
        name: "atun",
        ingredients: ["salsa de tomate", "mozzarella", "atun", "huevo picado", "oregano"],
        price:590
    },
    {
        id: 5,
        name: "fugazzeta",
        ingredients: ["cebolla", "mozzarella", "oregano"],
        price:990
    },
    {
        id: 6,
        name: "rucula",
        ingredients: ["mozzarella", "jamon crudo", "rucula", "parmesano"],
        price:1250
    }
]

// a) Las pizzas que tengan un id impar.

pizza.forEach(impar => {
    if (impar.id % 2 != 0)
        console.log(`Las pizzas impares son: ${impar.id} - ${impar.name}`)
});
// ! --------------------------------------------------------------------------------------------------------------
// b) ¿Hay alguna pizza que valga menos de $600?

// const menosDe600 = pizza.filter(name=> name < 600);
// console.log(`si, tenes estas variedades por menos de $600 ${name}`)

const menorA = pizza.filter(pizza => pizza.price < 600);
const menorA600 = menorA.forEach(name => {
    console.log(`Sí, por menos de $600 tenes de: ${name.name}`)
})
//! -------------------------------------------------------------------------------------------------------------------
// c) Los nombres de todos las pizzas.

const nombre = () =>
    pizza.forEach((name) =>
        console.log(`Los nombres de nuestras pizzas son: ${name.name}`));
nombre();

// !---------------------------------------------------------------------------------------------------------------------------
// d) Los precios de las pizzas.

const precio = () =>
    pizza.forEach((price) =>
        console.log(`Los precios que manejamos son estos: $${price.price}`));
precio();

// !-----------------------------------------------------------------------------------------------------------------
// e) El nombre de cada pizza con su respectivo precio.

pizza.forEach(pizza => {
    console.log (`La pizza de ${pizza.name} sale $${pizza.price}`)
})


