export default function reverseString(str) {
  let reverseStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverseStr = reverseStr.concat(str[i]);
  }
  return reverseStr;
}
