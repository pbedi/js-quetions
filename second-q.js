/*
 When pass any string, the function return an object with unique key letters with number of times the letter was present in the string, ignore the numbers and case insnsitive:
 getMyObjectCount('You Are an Expert') or getMyObjectCount('me 123 them') 
*/
function getMyObjectCount(str) {
    var freq = {};
    str = str.toLowerCase();
    str = str.replace(/[^a-z]/gi,'');

    for (var i=0; i<str.length;i++) {
        var character = str.charAt(i);
        if (freq[character]) {
        freq[character]++;
        } else {
        freq[character] = 1;
        }
    }
   return freq;
}

console.log('Calling with "You Are an Expert" and Answer is = ' );
console.log(getMyObjectCount('You Are an Expert'));
console.log('Calling with "me 123 them" and Answer is = ');
console.log(getMyObjectCount('me 123 them'));