const fs = require('fs')

function isIDPresent(id, array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].id === id) {
            return true; 
        }
    }
    return false;
}


module.exports = {
    isIDPresent
}