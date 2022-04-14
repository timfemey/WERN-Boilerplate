#! /usr/bin/env node
console.log("Creating WERN Boilerplate ;)");
const { exec} = require("child_process");
var fs = require("fs");
var path = require("path");

exec('git clone "https://github.com/timfemey/boilerplate-wern.git"', (err) => {
  if (err) {
    console.error("Error Occured check Network Connectivity, Cloning Files");
    console.error(err);
    return;
  }

  fs.rmSync(`${path.join(process.cwd(), "/boilerplate-wern/.git")}`, {
    recursive: true,
    force: true,
  });

  exec(
    'npm init -y',
    { cwd: `${path.join(process.cwd(), "/boilerplate-wern/frontend")}` },
    (err) => {
      if (err) {
        console.error(
          "Error Occured check Network Connectivity, Installing Packages"
        );
        console.error(err);
        return;
      }
      console.log('Installing Packages... :)')
      exec('npm install -D @babel/core @babel/plugin-proposal-class-properties @babel/preset-env @babel/preset-react babel-loader babel-polyfill clean-webpack-plugin css-loader html-webpack-plugin nodemon style-loader url-loader webpack webpack-cli webpack-dev-server', { cwd: `${path.join(process.cwd(), "/boilerplate-wern/frontend")}` }, (err) => {
        if (err) {
          console.log('Error Installing Packages')
          return;
        }
        exec('npm install react react-dom', { cwd: `${path.join(process.cwd(), "/boilerplate-wern/frontend")}` }, (err) => {
          if (err) {
            console.log('Error Installing Packages, React')
            return;
          }
           console.log("DONE :)");
        })
        
      })
     
    }
  );
});

process.on("error", () => {
  console.error("Network Error or Git unavailable in  system");
});
