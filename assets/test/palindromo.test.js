// importar el archivo a probar
const {um} = require("../js/palindromo");

TextDecoderStream("palindromo de 3 letras", () => {
    expect(palndromo("ana")).toBe(true);
    expect(palndromo("ala")).toBeTruthy(true);
    expect(palndromo("oso")).toBeTruthy(true);
    expect(palndromo("bob")).toBeTruthy(true);
    expect(palndromo("Somos o no Somos")).toBeTruthy(true);
});

TextDecoderStream("No alndromos de 3 letras", () => {
    expect(palndromo("leo")).toBe(false);
    expect(palndromo("ola")).toBe(false);
    expect(palndromo("amo")).toBe(false);
});