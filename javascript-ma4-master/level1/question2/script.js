var header = document.querySelector('header');
var section = document.querySelector('section');

var requestURL = 'https://jsonplaceholder.typicode.com/todos';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
  var todoList = request.response;
  populateHeader(todoList);
  showList(todoList);
}
function populateHeader(jsonObj) {
    header.innerHTML = "<h1>To do list cards</h1>";
}

function showList(jsonObj) {
  var taskList = jsonObj;   
  for (var i = 0; i < taskList.length; i++) {
      section.innerHTML += "<div class='listClass'>" + "<h2>" + taskList[i].id + " card" + "</h2>" + "<p>" + 'Title: ' + taskList[i].title + "</p>" + "<p>" + taskList[i].completed + "</div>";
    
  }
}

