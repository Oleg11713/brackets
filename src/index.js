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
  for(let i = 0; i < str.length - 1; i++){
    tmp1 = tmp2 = -1;
    for(let j = 0; j < bracketsConfig.length; j++){
      if(str[i] == bracketsConfig[j][0])
      tmp1 = j;
    }
    for(let j = 0; j < bracketsConfig.length; j++){
      if(str[i+1] == bracketsConfig[j][1])
      tmp2 = j;
    }
    if(tmp1 == -1 || tmp2 == -1) continue;
    if (tmp1 != tmp2) return false;
  }
  return true;
}
