const fs = require("fs");
//reading files
//this is a callback function
//it takes in an the file path , error and data
//if there is an error, it will log the error
//if there is no error, it will log the data
fs.readFile('./node.txt', (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log(data.toString());
})
//writing files
//this is a callback function
//it takes in an the file path , the data we want to write and a callback function
//if there is an error, it creates the file and writes the data
if(!fs.existsSync()){
fs.writeFile('./docs/node.txt', 'Hello World', () => {
    console.log('file was written');
})
}

//deleting files
if(fs.existsSync('./docs/node.txt')){
fs.unlink('./docs/node.txt', (err) => {
    if (err) {
        console.log(err);
    }
    console.log('file deleted');
})
}



//directories
//this is a callback function
//it takes in an the directory path and a callback function
//if the directory exists, it will log the error
//if the directory does not exist, it will create the directory and log the message
if(!fs.existsSync('./assets')){
fs.mkdir('./assets', (err) => {
    if (err) {
        console.log(err);
    }
    console.log('folder created');
})
}
