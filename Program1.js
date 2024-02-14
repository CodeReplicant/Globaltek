function Serie1(numero, terminos) {
    let suma = 0;
    let valor = 0;
    for (let i = 1; i <= terminos; i++) {
        valor = valor * 10 + numero; // construye el número con los dígitos repetidos
        suma += valor; // agrega el número a la suma total
    }
    return suma;
}

// Ejemplos
console.log("Serie 1")
console.log(Serie1(3, 5)); // Salida: 37035
console.log(Serie1(5, 3)); // Salida: 615


function filtrarNumeros(lista) {
    const salida = [];
    for (let i = 0; i < lista.length; i++) {
        const num = lista[i];
        if (num % 5 === 0 && num <= 1000) {
            if (num > 600) {
                continue; // Salta los números mayores a 600
            }
            salida.push(num); // Agrega el número a la lista de salida
        } else if (num > 1000) {
            break; // Detiene el procesamiento si el número es mayor que 1000
        }
    }
    return salida;
}

// Ejemplos 
console.log("Serie 2")
console.log(filtrarNumeros([24, 150, 300, 660, 295, 1050, 50])); // Salida: [150, 300, 295]
console.log(filtrarNumeros([110, 720, 307, 555, 1095, 12, 300, 1000])); // Salida: [110, 555]


function agruparElementos(lista) {
    const grupos = {};
    lista.forEach(elemento => {
        if (grupos[elemento]) {
            grupos[elemento].push(elemento);
        } else {
            grupos[elemento] = [elemento];
        }
    });
    return Object.values(grupos);
}

// Ejemplos
console.log("Serie 3")
console.log(agruparElementos([12, 25, 1, 1, 7, 25, 25])); // Salida: [[12], [25, 25], [1, 1], [7]]
console.log(agruparElementos([6, 7, 8, 9])); // Salida: [[6], [7], [8], [9]]





// Listas para almacenar los productos y existencias por grupo
let dairyProducts = ["Fairlife Milk", "Alta Dena Milk", "Queensland Butter"];
let dairyStock = [28, 36, 50];
let cleaningProducts = ["Windex", "Clorox Bleach", "Swiffer WetJet"];
let cleaningStock = [20, 15, 10];
let grainProducts = ["Rice", "Quinoa", "Oats"];
let grainStock = [40, 30, 25];

// Función para registrar un producto entrante
function registrarProducto(nombre, cantidad, grupo) {
    let productos, existencias;
    switch (grupo) {
        case "dairy":
            productos = dairyProducts;
            existencias = dairyStock;
            break;
        case "cleaning":
            productos = cleaningProducts;
            existencias = cleaningStock;
            break;
        case "grain":
            productos = grainProducts;
            existencias = grainStock;
            break;
        default:
            console.log("Grupo de producto no válido.");
            return;
    }

    const index = productos.indexOf(nombre);
    if (index === -1) {
        // Si el producto no existe en la lista, se agrega al final
        productos.push(nombre);
        existencias.push(cantidad);
    } else {
        // Si el producto ya existe, se actualiza el número de existencias
        existencias[index] += cantidad;
    }
}

// Función para visualizar el inventario de productos y existencias
function visualizarInventario() {
    console.log("Inventario:");
    console.log("Dairy:");
    for (let i = 0; i < dairyProducts.length; i++) {
        console.log(`${dairyProducts[i]} - ${dairyStock[i]} unidades`);
    }
    console.log("Cleaning:");
    for (let i = 0; i < cleaningProducts.length; i++) {
        console.log(`${cleaningProducts[i]} - ${cleaningStock[i]} unidades`);
    }
    console.log("Grain:");
    for (let i = 0; i < grainProducts.length; i++) {
        console.log(`${grainProducts[i]} - ${grainStock[i]} unidades`);
    }
}

// Ejemplo de uso


console.log('Sistema de inventario');
console.log('----------------------------------------------------');
console.log('1. Registre producto');
console.log('2. Ver reporte de inventario');
console.log('3. Salir');


// Prompt the user to enter a number
console.log("Ingrese un numero:");

// Use el comando process.stdin m=para manejar la entrada desde la consola
process.stdin.on('data', function(data) {
    // Conviert data en string para eliminar espacios
    const userInput = data.toString().trim();
    
    // Convierta string en float
    const number = parseFloat(userInput);

    if (!isNaN(number)) {
        // Procese si no es numero la entrada
        console.log("Ud ingreso: " + number);
    } else {
        // Notifique de dato no deseado
        console.log("Opcion invalida");
    }

    switch (number) {
        case 1:
            console.log("Usted ingreso Fairlife Milk", 10, "dairy");
            registrarProducto("Fairlife Milk", 10, "dairy"); // Actualiza existencias de "Fairlife Milk" en el grupo dairy
            //registrarProducto("Lysol Disinfectant", 5, "cleaning"); // Agrega nuevo producto al grupo cleaning
            break;
        case 2:
            console.log("Usted ingreso 2");
            visualizarInventario(); // Visualiza el inventario actualizado
            break;
        default:
            console.log("Argumento invalido:");
            break;
    }

    // Finalise proceso de consola
    process.stdin.pause();
});

// Resuma proceso de consola
process.stdin.resume();


