const palindromo = (str) => {
    // 
    const strClean = str.toLowerCase().replace(/[\W_]/g, '');
    return strClean === strClean.split('').reverse().join('');
};

module.exports = { palindromo };