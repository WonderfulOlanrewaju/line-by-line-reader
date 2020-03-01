# Line Reader

A promise based and zero dependency javascript package for reading contents of a file in a line by line fashion

```Js
const lineReader = require ('line-by-line-reader');

// Grab your file from its path where you have it
let filepath = "path/to/your/file";

// call lineReader function get with filepath as argument
lineReader(filepath)
  .then(fileContent => {
    console.log(fileContent);
    console.log(fileContent.lines);
    console.log(fieContent.length);
  })
  .catch(err => {
    console.log(err);
  });
```
