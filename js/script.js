'use strict'
const generateKey = (keySize, array) => {
    let result ='';
    for (let i = 0; i <keySize ; i++) {
        result+=array[parseInt(Math.random()*characters.length-1)]
    }
    return result;
}

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
const key = generateKey(16, characters);

console.log(key); // eg599gb60q926j8i