let username = 'rick';
console.log(username.length); //4
let password = '123';

let languages = ['javascript', 'ruby', 'python']
console.log(languages.length); //3

if (username.length > 5 && password.length > 5) {
    console.log('Your username and password meet the length requirements!');
} else {   
  console.log('Your username or password is too short.');
}
console.log(true && true); //true
console.log(true && false); //false
console.log(false && true); //false
console.log(false && false); //false
// above known as the "truth table"

console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false
// OR logical operator; recreated truth table with diff logical operator

let user = {
    isAdmin: false,
    isModerator: true
};

if (user.isAdmin || user.isModerator) {
    console.log('I only care about one of these! They are authorized!');
} else {
    console.log('Don\'t let them in!');
}

let favoriteFruits = ['mango', 'blueberry', 'raspberry'];
let returnedValue = favoriteFruits.pop();

console.log(favoriteFruits); // ['mango', 'blueberry']
console.log(returnedValue); // raspberry

let name = 'ricky';

//console.log(name.charAt(0)); // r
//console.log(name.CharAt(1)); // i
//console.log(name.charAt(2)); // c
//console.log(name.charAt(3)); // k
//console.log(name.CharAt(4)); // y
// but this gets repetive and error prone. So we're going to continue and try a more efficient method with 'for' loops...

for (let i = 0; i < name.length; i++) {
    console.log(name.charAt(i));
}