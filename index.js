console.log("Creating WERN Boilerplate ;)");
const { spawn } = require("child_process");

let process = spawn("git", [
  "clone",
  "https://github.com/timfemey/WERN-Boilerplate.git",
]);
let p = "+";
process.stdout.on("data", () => {
  p += "+";
  console.log(p);
});

process.stderr.on("error", () => {
  console.error(
    "An Error Occured, check if git installed or network connectivity"
  );
});

process.on("close", () => {
  let process2 = spawn("cd", ["frontend"]);
  process2.stdout.on("data", () => {
    p += "+";
    console.log(p);
  });

  process2.stderr.on("error", () => {
    console.error(
      "An Error Occured, check if git installed or network connectivity"
    );
  });
  process2.on("close", () => {
    let process3 = spawn("npm", ["install"]);

    process3.stdout.on("data", () => {
      p += "+";
      console.log(p);
    });

    process3.stderr.on("error", () => {
      console.error(
        "An Error Occured, check if git installed or network connectivity"
      );
    });
    process3.on("close", () => {
      console.log("DONE :)");
    });
  });
});