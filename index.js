const pkToAddress = require("@tronscan/client/src/utils/crypto").pkToAddress

const originalKey = "2036677FB3E360329A89CFBCACB1312F3DFDD5C7B12712D51DA32F9A7284BBB8";
const knownAddr = "TGDkv7yp1LZdPJ99r1MaDgPjyXu1RNbydJ";

const validHex = "ABCDEFGH0123456789";


function setCharAt(str,index,chr) {
    if(index > str.length-1) return str;
    return str.substr(0,index) + chr + str.substr(index+1);
}

for (var iKey = 0; iKey < originalKey.length; iKey++) {
        for(var iHex = 0; iHex < validHex.length; iHex++) {
                var nextHexChar = validHex.charAt(iHex);
                var tempKey = setCharAt(originalKey,iKey,nextHexChar);
                if (pkToAddress(tempKey) == knownAddr) {
                        console.log(tempKey); // Found it
                }
        }
}
