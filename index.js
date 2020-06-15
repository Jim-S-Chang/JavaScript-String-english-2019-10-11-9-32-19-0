// Complete the following procedure, the 'name' variable in all letters to uppercase, output: ' 'HELLO' '.
var name = 'hello';
// TODO write your code here...
name = name.toUpperCase();
console.log(name);


// Complete the following procedure, capitalizing all the words in the variable sentence and printing: 'Good Afternoon, Mr Mike.'
var sentence = 'good afternoon, mr mike.';
//TODO write your code here...
function replaceWordFirstLetter(str) {
    var reg = /\b(\w)|\s(\w)/g;
    return str.replace(reg, function(m) {
        return m.toUpperCase()
    });
}
sentence = replaceWordFirstLetter(sentence)
console.log(sentence)


// Complete the following procedure to extract the amount of money variable, output: 20.
var money = '￥20';
//TODO write your code here...
money = parseInt(money.substr(1))
console.log(money)