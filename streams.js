const fs = require("fs");

//read file in batches
const readStreams = fs.createReadStream("./docs/blog.txt", { encoding: 'utf8' });
const writeStreams = fs.createWriteStream("./docs/blog1.txt");

// readStreams.on("data", (chunk) => {
//   console.log("ib");
//   console.log(chunk);
//   console.log("ibimina");
//   writeStreams.write('\nibi\n')
//   writeStreams.write(chunk)
//   writeStreams.write('\nibimina\n')
// })

//or use piping method
readStreams.pipe(writeStreams)