# test-web-server-for-typescript
a simple webserver(base on node),used for typescript develop（web4ts）

when I work on web project,In web page, I can set the script's type to "module",
and i can debug the js file(es2015) without map file.

     <script src="./dest/index.js" type="module"></script>

In the index.js,import other file like below:

```
     import { MyFile } from "./myFile.js";
```

but,when i tsc with target("es2015"),it's just like this: 

```
     import { MyFile } from "./myFile";
```

I want the tsc to add .js in the import part default,but i havan't found the configure in tsconfig.json.

so i build this project to add the ".js" part when browser access file from web server.


# Installing:

Installation via `npm`:

     npm install web4ts -g

This will install `web4ts` globally so that it may be run from the command line.

## Usage:

     web4ts [path] [-p port]

     if install web4ts locality(without -g),use below command to run:

     npx web4ts [path] [-p port] 


`[path]` defaults to `./public` if the folder exists, and `./` otherwise.
`[-p port]` default port is 8000.

*Now you can visit http://localhost:8000 to view your server*
