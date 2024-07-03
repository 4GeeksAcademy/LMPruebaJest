// Importar la función sum del archivo app.js
const { sum, fromDollarToYen, fromYenToPound, fromEuroToDollar } = require('./app.js');

// Comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    // Dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // Esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
 
    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.75); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})

test("One dollar should be 146.2616822429907 yen", function() {
   

    // Hago mi comparación (la prueba)
    expect(fromDollarToYen(3.5)).toBe(511.92); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})

test("One yen should be 0,0111182108626198 pound", function() {
   

    // Hago mi comparación (la prueba)
    expect(fromYenToPound(2)).toBe(0.01); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})