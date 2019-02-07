# test-web-server-for-typescript
a simple webserver(base on node),used for typescript develop（web4ts）

when I work on web project,In web page, I can set the script's type to "module",
and i can debug the js file(es2015) without map file.

    <script src="./dest/index.js" type="module"></script>

In the index.js,import other file like below:

import { MyFile } from "./myFile.js";

but,when i tsc with target("es2015"),i just like this: 

import { MyFile } from "./myFile";

I want the tsc to add .js in the import part,but i havan't found the configure in tsconfig.json.

so i build this module to add the ".js" part when browser access file from web server.


# Installing globally:

Installation via `npm`:

     npm install web4ts -g

This will install `web4ts` globally so that it may be run from the command line.

## Usage:

     web4ts [path] 

`[path]` defaults to `./public` if the folder exists, and `./` otherwise.

*Now you can visit http://localhost:8000 to view your server*
