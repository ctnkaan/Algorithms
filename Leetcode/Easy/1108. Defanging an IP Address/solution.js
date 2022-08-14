/**
 * @param {string} address
 * @return {string}
 */
 var defangIPaddr = function(address) {
    
    address = address.split("");
    
    for (let i = 0; i < address.length; i++) {
        if (address[i] === '.')
            address[i] = '[.]';
    }
    
    address = address.join("");
    
    return address;
};