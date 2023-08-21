const palindromo = (str) => {
    // 
    const strInit = str.toLowerCase().replace(/[\W_]/g, '');
    return strInit == strInit.split().reverse().join('');
};

module.exports = { palindromo };