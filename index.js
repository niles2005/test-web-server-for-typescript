#!/usr/bin/env node

const http = require("http");
const url = require("url");
const fs = require("fs");
const path = require("path");
const mime = require("mime");
let argv = require("optimist").argv;

let root;
if(argv._.length > 0) {
  root = argv._[0];
} else {
  if (fs.existsSync("public")) {
    root = "public";
  } else  {
    root = ".";
  }
}

let port = argv.p || 8000;

let webPath = process.cwd() + "/" + root;

const server = http.createServer((req, res) => {
  let pathname = url.parse(req.url).pathname;
  if (pathname === "/") {
    pathname += "index.html";
  } else {
    //for the js compiled by tsc(es2015+)，import module name + ".js"
    let fileName = pathname.split("/").pop();
    if (fileName && fileName.indexOf(".") === -1) {
      pathname += ".js";
    }
  }
  let file = webPath + pathname;
  fs.readFile(file, function(err, data) {
    if (err) {
      console.log("x:" + file);
      res.writeHead(404, { "content-type": "text/plain" });
      res.write("file is not exist!");
      res.end();
    } else {
      console.log("v:" + file);
      let thePath = path.parse(file);
      let mimeType = mime.getType(thePath.ext);
      res.writeHead(200, { "content-type": mimeType });
      res.write(data);
      res.end();
    }
  });
});

server.listen(port, function() {
  console.log(`server startup at '${root}' on port ${port} ...`);
});
