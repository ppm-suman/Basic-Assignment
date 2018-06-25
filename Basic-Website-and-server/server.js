var http = require('http');
var fs = require('fs');
var url = require('url');
var server = http.createServer(requestHandler);
console.log("Server Started on http://localhost:8082");
function requestHandler(request, response){
  var path = url.parse(request.url, true).pathname;
  switch(path){
    case '/':
      fs.readFile('./consumer.html', function(error, data){
        if(error){
          errorMsg(response, error);
        }
        else{
          response.writeHead(200, {'Content-Type': 'text/html'});
          response.write(data);
          response.end();
        }
      });
      break;
    case '/styles':
      fs.readFile('./styles.css', function(error, data){
        if(error){
          errorMsg(response, error);
        }
        else{
          response.writeHead(200, {'Content-Type': 'text/css'});
          response.write(data);
          response.end();
        }
      });
      break;
    case '/scripts':
      fs.readFile('./scripts.js', function(error, data){
        if(error){
          errorMsg(response, error);
        }
        else{
          response.writeHead(200, {'Content-Type': 'text/javascript'});
          response.write(data);
          response.end();
        }
      });
      break;
    case '/studentScript':
      fs.readFile('./studnetScript.js', function(error, data){
        if(error){
          errorMsg(response, error);
        }
        else{
          response.writeHead(200, {'Content-Type': 'text/javascript'});
          response.write(data);
          response.end();
        }
      });
      break;
    case '/studentView':
      fs.readFile('./studnetView.html', function(error, data){
        if(error){
          errorMsg(response, error);
        }
        else{
          response.writeHead(200, {'Content-Type': 'text/html'});
          response.write(data);
          response.end();
        }
      });
      break;
    case '/teacherScript':
      fs.readFile('./teacherScript.js', function(error, data){
        if(error){
          errorMsg(response, error);
        }
        else{
          response.writeHead(200, {'Content-Type': 'text/javascript'});
          response.write(data);
          response.end();
        }
      });
      break;
    case '/teacherView':
      fs.readFile('./teacherView.html', function(error, data){
        if(error){
          errorMsg(response, error);
        }
        else{
          response.writeHead(200, {'Content-Type': 'text/html'});
          response.write(data);
          response.end();
        }
      });
      break;
    case '/studentData':
      fs.readFile('./studentData.json', function(error, data){
        if(error){
          errorMsg(response, error);
        }
        else{
          response.writeHead(200, {'Content-Type': 'application/json'});
          response.write(data);
          response.end();
        }
      });
      break;
    case '/teacherData':
      fs.readFile('./teacherData.json', function(error, data){
        if(error){
          errorMsg(response, error);
        }
        else{
          response.writeHead(200, {'Content-Type': 'application/json'});
          response.write(data);
          response.end();
        }
      });
      break;
    default:
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.write("Incorrect Path");
      response.end();
  }
};
server.listen(8082);

function errorMsg(response, error){
  response.writeHead(404, {'Content-Type': 'text/html'});
  response.write(error.message);
  response.end();
}
