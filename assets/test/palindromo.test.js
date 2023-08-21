// importar el archivo a probar
const {palindromo} = require("../js/palindromo");

test("palindromo de 3 letras", () => {
    expect(palindromo("ana")).toBe(true);
    expect(palindromo("ala")).toBeTruthy();
    expect(palindromo("oso")).toBeTruthy();
    expect(palindromo("Bob")).toBeTruthy();
    expect(palindromo("Somos o no Somos")).toBeTruthy();
});

test("No palindromos de 3 letras", () => {
    expect(palindromo("leo")).toBeFalsy();
    expect(palindromo("ola")).toBeFalsy();
    expect(palindromo("amo")).toBeFalsy();
});