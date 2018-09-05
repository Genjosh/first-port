var http=require("http");

var PORT1 = 7000;
var PORT2 = 7500;

function handleRequest2(request, response){
    response.end("AHH man idk, you're not looking so well. think you need some sleep" + request.url);

}

function handleRequest1(request, response){
    response.end("You're looking sharp today! keep up the good work and have a nice day." + request.url);
}

var server1 = http.createServer(handleRequest1);
var server2 = http.createServer(handleRequest2);

server1.listen(PORT1, function(){
    console.log("Server listening on: http://localhost:" + PORT1);
});
server2.listen(PORT2, function(){
    console.log("Server listening on: http://localhost:" + PORT2);
});
