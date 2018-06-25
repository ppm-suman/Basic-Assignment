document.addEventListener('DOMContentLoaded', startup);
function startup(){
  document.getElementById("b1").addEventListener("click", showStudent);
  document.getElementById('b2').addEventListener("click", showTeacher);
}

function showStudent(){
  window.location.href = 'http://localhost:8082/studentView';
}

function showTeacher(){
  window.open("http://localhost:8082/teacherView", '_self');
}
