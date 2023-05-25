// Non alpha characters and captical letters are ignored

export default function caesarCipher(str, shift) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const stringArr = str.split("");
  // console.log(stringArr)
  let newStr = stringArr
    .filter((el) => alphabet.includes(el.toLowerCase()))
    .join("")
    .toLowerCase();
  // console.log(newStr)
  let cipher = "";
  let cipherText = "";
  for (let i = 0; i < 26; i++) {
    const newIndex = (i + shift) % 26;
    cipher = cipher.concat(alphabet[newIndex]);
  }
  for (let j = 0; j < newStr.length; j++) {
    cipherText = cipherText.concat(cipher[alphabet.indexOf(newStr[j])]);
  }
  return cipherText;
}
