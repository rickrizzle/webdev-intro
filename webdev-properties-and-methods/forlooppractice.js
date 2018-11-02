// erxercise 1
let names = ['  john', 'jane    ', '  jeff  '];
names.pop();

for (let i = 0; i < names.length; i++) {
    names[i] = names[i].trim();
}
console.log(names);

// Exercise 2
let languages = ['jave', 'javascript', 'html', 'css', 'ruby'];

for (let i = 0; i < languages.length; i++) {
    if (languages[i].includes('java')) {
        console.log(languages[i]);
    }
}

// Exercise 3
let language = 'javascript';

for (let i = 0; i < langugage.length; i++) {
    console.log(language.charAt(i));
}
console.log('!');

// Exercise 4
let title = 'ceo';

for (let i = 0; i < title.length; i++) {
    console.log(title.charAt(i).toUpperCase());
}
