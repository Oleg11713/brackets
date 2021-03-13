module.exports = function check(str, bracketsConfig) {
  let brackets = [];
  let tmp1;
  let tmp2;
  for(let i = 0; i < bracketsConfig.length; i++){
    brackets[i] = 0;
  }
  for(let i = 0; i < str.length; i++){
    for(let j = 0; j < bracketsConfig.length; j++){
      if(str[i] == bracketsConfig[j][0]){
        brackets[j]++;
      }if(str[i] == bracketsConfig[j][1]){
        brackets[j]--;
        if(brackets[j] == -1) return false;
      }
    }
  }
  for(let i = 0; i < brackets.length; i++){
    if(brackets[i] % 2 != 0) return false;
  }
  return true;
}
