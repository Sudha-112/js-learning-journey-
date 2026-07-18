const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift by apple'
}

// for in

for(const key in myObject){
    console.log(`${key} is the shortcut for ${myObject[key]}`);
}

const programming = ['java', 'c', 'python', 'C++'];

for(const key in programming){
    console.log(`${key} : ${programming[key]}`);
}

// for each

const coding = ["js", "ruby", "java", "python", "cpp"];

// coding.forEach(function(item){
//     console.log(item);
// })

// coding.forEach((item) => {
//     console.log(item);
// })

function printMe(item){
    console.log(item);
}

coding.forEach(printMe);

coding.forEach( (item, index, arr) => {
   console.log(item, index, arr);
})

const myCoding = [
    {
        language: "javaScript",
        languageFileName: "js"
    },
     {
        language: "C++",
        languageFileName: "cpp"
    }, {
        language: "Python",
        languageFileName: "py"
    }
];

myCoding.forEach( (item) => {
      console.log(item.language);
})

