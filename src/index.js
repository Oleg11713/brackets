module.exports = function check(str, bracketsConfig) {
  let array = [];
  let map = new Map();
  for (const iter of bracketsConfig) {
    map.set(iter[0], iter[1]);
  }
  array.push(str[0]);
  for (let i = 1; i < str.length; i++) {
    if (str[i] === map.get(array[array.length - 1])) array.pop(); 
    else array.push(str[i]);
  }
  if (array.length > 0) return false;
  return true;
}
