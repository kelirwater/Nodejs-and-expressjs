const fs = require("fs");

//reading files
//asynchronous file
// fs.readFile("./docs/blog12.txt", (err, data) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(data.toString());
// });

// console.log("last line");

//print lastline first
//after prints reading file

//writing files
fs.writeFile("./docs/blog1.txt", "hello, world aced", () => {
  console.log("file written ace");
});

fs.writeFile("./docs/blog2.txt", "hello, again, ace", () => {
  console.log("file written ace2");
});

//directories
// if (!fs.existsSync("./assets")) {
//   fs.mkdir("./assets", (err) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log("folder created");
//   });
// } else {
//   fs.rmdir("./assets", (err) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log("folder deleted");
//   });
// }

// //delete files
// fs.unlink("./docs/deleteme.txt", (err) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log("files deleted");
// });
