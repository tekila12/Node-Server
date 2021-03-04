var http = require('http')
var fs = require('fs')
var url = require("url");


http.createServer(function(request, response){
   var urlpathname = url.parse(request.url).pathname;
   console.group("request from: " + urlpathname)  

   fs.readFile(urlpathname.substr(1),function(err, data){
       if(err){
           console.log(err)
           response.writeHead(404,{'Content-type' : "text/plain"})
        }
       else{
          response.writeHead(200,{'Content-type' : "text/plain"} )
          response.write(data.toString())
        }
       response.end();
   });
    
}).listen(8087);

console.log('Server is running at port http://localhost:8087')