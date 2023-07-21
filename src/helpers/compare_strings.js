export function compareStringsLoosely(bigString, smallString) {
  return bigString.toLowerCase().includes(smallString.toLowerCase());
}