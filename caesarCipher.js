const caesarCipher = (string, key) => {
    if (key < 0) return caesarCipher(string, key + 26);

    let cipherText = '';

    for (let i = 0; i < string.length; i++) {
        let char = string[i];

        if (char.match(/[a-z]/i)) {
            let code = string.charCodeAt(i);

            if (code >= 65 && code <= 90) {
                char = String.fromCharCode(((code - 65 + key) % 26) + 65);
            } else if (code >= 97 && code <= 122) {
                char = String.fromCharCode(((code - 97 + key) % 26) + 97);
            }
        }
        cipherText += char;
    }
    return cipherText;
}

module.exports = caesarCipher;