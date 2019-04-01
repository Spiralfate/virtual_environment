const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');
// const baseDirectory = process.argv[2];
const distPath = process.argv[3];
const port = process.argv[4];

http.createServer((request, response) => {
    try {
        // primitive whitelist
        // if (request.ip !== '127.0.01') {
        //     response.end();
        // }

        const requestUrl = url.parse(request.url);

        const fsPath = `${distPath}${path.normalize(requestUrl.pathname)}`;// || 'index.html')}`;
        console.log(JSON.stringify(requestUrl));
        const fileStream = fs.createReadStream(fsPath);
        fileStream.pipe(response);
        fileStream.on('open', () => {
             response.writeHead(200);
        });
        fileStream.on('error',function(e) {
             response.writeHead(404);
             response.end();
        })
   } catch(e) {
        response.writeHead(500)
        response.end()
        console.log(e.stack)
   }
}).listen(port);

console.log("listening on port "+port);