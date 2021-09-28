var http = require("http");

http.createServer(function (req,res){


res.end("hiiiii");
}).listen(3000);
console.log('server running at http://127.0.0.1:3000/');
