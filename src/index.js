module.exports = function check(str, bracketsConfig) {
  brackets = [];
  for(let i = 0; i < bracketsConfig.length; i++){
    brackets[i] = 0;
  }
  for(let i = 0; i < str.length; i++){
    for(let j = 0; j < bracketsConfig.length; j++){
      if(str[i] == bracketsConfig[j][0]){
        brackets[j]++;
      }
      if(str[i] == bracketsConfig[j][1]){
        brackets[j]--;
        if(brackets[j] == -1) return false;
      }
    }
  }
  return true;
}
