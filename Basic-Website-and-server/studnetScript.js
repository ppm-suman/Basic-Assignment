document.addEventListener('DOMContentLoaded', startup);
function startup(){
  /*var request = http.get("http://localhost:8082/studentData", function(response){
    response.on("data", function(chunk){
  		body += chunk;
  	});
    response.on("end",function(){
      body = JSON.parse(body);
      console.log(body);
    });
  });
  */

  var request = new XMLHttpRequest();
  request.open('GET', 'http://localhost:8082/studentData');
  request.onload = function () {
  	// begin accessing JSON data here
  	var body = JSON.parse(request.response);
    var col = [];
    // Creat table header from json data
    for (var i = 0; i < body.length; i++) {
      for (var key in body[i]) {
        if (col.indexOf(key) == -1) {
          col.push(key);
        }
      }
    }
    // CREATE DYNAMIC TABLE.
    var table = document.createElement("table");
    // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.
    var tr = table.insertRow(-1);                   // TABLE ROW.
    for (var i = 0; i < 2; i++) {
      var th = document.createElement("th");      // TABLE HEADER.
      th.innerHTML = col[i];
      tr.appendChild(th);
    }
    // ADD JSON DATA TO THE TABLE AS ROWS.
    for (var i = 0; i < body.length; i++) {
      tr = table.insertRow(-1);
      for (var j = 0; j < 2; j++) {
        var tabCell = tr.insertCell(-1);
        if(j == 0){
          tabCell.innerHTML = '<a href="http://localhost:8080/'+"students/"+body[i][col[j]]+'">'+body[i][col[j]]+'</a>';;
        }
        else{
        tabCell.innerHTML = body[i][col[j]];
        }
      }
    }
    // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
    var divContainer = document.getElementById("showData");
    divContainer.innerHTML = "";
    divContainer.appendChild(table);
  }
request.send();
}
