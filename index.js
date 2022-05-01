function BuscadorDeSubStrings(string,subString){
    return string.includes(subString)
}

const CryptoJS = require("crypto-js");

var baseString= 'Postulacion de trabajo'
var number = 1
const buda = 'b00da'

var hash = CryptoJS.SHA256(baseString);

var hashString = hash.toString(CryptoJS.enc.Hex)

while(BuscadorDeSubStrings(hashString, buda) === false){
    hash = CryptoJS.SHA256(baseString+number);
    hashString = hash.toString(CryptoJS.enc.Hex)
    console.log('Base String + number: '+baseString+number)
    console.log('Hash: '+hashString)
    number+=1
}
