/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let magazineArr = magazine.split('');
    for (let i = 0; i < ransomNote.length; i++) {
        let index = magazineArr.indexOf(ransomNote[i]);
        if (index === -1) {
            return false;
        }
        magazineArr.splice(index, 1);
    }
    return true;  
};
const ransomNote = "aa" 
const magazine = "aab"
console.log(canConstruct(ransomNote, magazine)) // true