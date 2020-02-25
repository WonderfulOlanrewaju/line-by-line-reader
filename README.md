# Line Reader

```Js
const {lineReader} = require ('line-by-line-reader');

// Grab your file from its path
let filepath = "./companies.txt";

// call lineReader function get with file path fileContent with promise
lineReader(filepath)
  .then(fileContent => {
    console.log(fileContent.lines);
  })
  .catch(err => {
    console.log(err);
  });
```
