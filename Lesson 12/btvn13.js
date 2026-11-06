let h1 = document.querySelector('.titleH1');
let btnClick = document.querySelector('.btnClick');
let isChanged = false;

btnClick.addEventListener('click', function() {
  if (!isChanged) {
    h1.innerText = 'Đây là nội dung';
    h1.style.color = 'red';
    h1.style.backgroundColor = 'blue';
    isChanged = true;
  } else {
    h1.innerText = 'This is content';
    h1.style.color = '';
    h1.style.backgroundColor = '';
    isChanged = false;
  }
});

let input4 = document.getElementById('myInput4');
let btn4 = document.getElementById('addBtn4');
let result4 = document.getElementById('result4');

btn4.addEventListener('click', function() {
  let val = input4.value;
  if (val !== '') {
    result4.innerHTML = `<input type="checkbox"> ${val}`;
    input4.value = '';
  }
});

let input5 = document.getElementById('myInput5');
let btn5 = document.getElementById('addBtn5');
let taskListUI = document.getElementById('taskList5');

let listTask = [];

function renderList() {
  taskListUI.innerHTML = '';
  listTask.forEach(function(task) {
    let li = document.createElement('li');
    li.innerHTML = `<input type="checkbox"> ${task}`;
    taskListUI.appendChild(li);
  });
}

btn5.addEventListener('click', function() {
  let text = input5.value;
  if (text !== '') {
    listTask.push(text);
    renderList();
    input5.value = '';
  }
});