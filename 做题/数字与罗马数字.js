var romanToInt = function(s) {
  let m=new Map()
  m.set('I',1)
  m.set('V',5)
  m.set('X',10)
  m.set('L',50)
  m.set('C',100)
  m.set('D',500)
  m.set('M',1000)
  let res=0
  for(let i=0;i<s.length;i++){
    let val=m.get(s[i])
    if(i<s.length-1&&val<m.get(s[i+1])){
      res-=val
    }else{
      res+=val
    }
  }
  return res
};

console.log(romanToInt('LVIII'));


var intToRoman = function(num) {
  const valueSymbols = [[1000, "M"], [900, "CM"], [500, "D"], [400, "CD"], [100, "C"], [90, "XC"], [50, "L"], [40, "XL"], [10, "X"], [9, "IX"], [5, "V"], [4, "IV"], [1, "I"]];
  const roman = [];
  for (const [value, symbol] of valueSymbols) {
      while (num >= value) {
          num -= value;
          roman.push(symbol);
      }
      if (num == 0) {
          break;
      }
  }
  return roman.join('');
};
console.log(intToRoman(48));
