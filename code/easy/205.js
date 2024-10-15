/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  if (s.length !== t.length) return false;

  const sToT = new Map();
  const tToS = new Map();

  for (let i = 0; i < s.length; i++) {
    const charS = s[i];
    const charT = t[i];

    if ((sToT.has(charS) && sToT.get(charS) !== charT) ||
      (tToS.has(charT) && tToS.get(charT) !== charS)) {
      return false;
    }

    sToT.set(charS, charT);
    tToS.set(charT, charS);
  }

  return true;
}; 

// var isIsomorphic = function (s, t) {
//   if (s.length !== t.length) return false;
  
//   const map = new Map();
//   const set = new Set();  // 用于跟踪 t 中已经被映射的字符

//   for (let i = 0; i < s.length; i++) {
//       if (map.has(s[i])) {
//           if (t[i] !== map.get(s[i])) {
//               return false;  // 映射的字符不一致
//           }
//       } else {
//           if (set.has(t[i])) {
//               return false;  // t[i] 已经被映射，不能被再次映射
//           }
//           map.set(s[i], t[i]);
//           set.add(t[i]);  // 标记 t[i] 已经被映射
//       }
//   }

//   return true;
// };
const s = "foo";
const t = "bar";
console.log(isIsomorphic(s, t));