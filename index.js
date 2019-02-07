#!/usr/bin/env node

const http = require("http");
const url = require("url");
const fs = require("fs");
const path = require("path");
const mime = require("mime");

let argv = process.argv.slice(2);
let webPath = process.cwd();
if(argv.length > 0) {
		webPath += "/" + argv[0];
}
const server = http.createServer((req, res) => {
  let pathname = url.parse(req.url).pathname;
  if (pathname.startsWith("/dest")) {
    //对于tsc编译的es6的js，import引用补上".js"后缀
    let fileName = pathname.split("/").pop();
    if (fileName && fileName.indexOf(".") === -1) {
      pathname += ".js";
    }
  } else if (pathname === "/") {
    pathname += "index.html";
  }
  let file = webPath + pathname;
  console.log(file);
  fs.readFile(file, function(err, data) {
    if (err) {
      res.writeHead(404, { "content-type": "text/plain" });
      res.write("file is not exist!");
      res.end();
    } else {
      let thePath = path.parse(file);
      let mimeType = mime.getType(thePath.ext);
      res.writeHead(200, { "content-type": mimeType });
      res.write(data);
      res.end();
    }
  });
});

server.listen(8000, function() {
  console.log("server startup at 8000...");
});
