const newlist = document.querySelector('.addlist');
const btnadd = document.querySelector('.btn_add');
const input = document.querySelector('.todo-input');

btnadd.addEventListener('click', added);
newlist.addEventListener("click",removeItem)
function added(e) {
    if (input.value !='') {
        const div = document.createElement('div');
        const li = document.createElement('li');
        const btnE = document.createElement('button');
        const btnD = document.createElement('button');
        btnE.innerHTML = '<li class="fas fa-edit"></li>';
        btnD.innerHTML = '<li class="fas fa-trash"></li>';
        li.classList.add('li');
        btnE.classList.add('btnE');
        btnD.classList.add('btnD');
        li.innerHTML =input.value;
        div.appendChild(btnE);
        div.appendChild(btnD);
        li.appendChild(div)
        newlist.appendChild(li)
        adding(input.value);
        input.value = '';
       
    }
    e.preventDefault();
}


function adding(e) {
    let todos;
    if (localStorage.getItem('todo') === null) {
        todos = [];
    }
    else {
        todos=JSON.parse(localStorage.getItem('todo'))
    }
    todos.push(e)
    localStorage.setItem('todo',JSON.stringify(todos)); 
}

function setfocus() {
    const h = localStorage.getItem('todo');
    const res = JSON.parse(h)
    res.forEach(P => {
        const div = document.createElement('div');
        const li = document.createElement('li');
        const btnE = document.createElement('button');
        const btnD = document.createElement('button');
        btnE.innerHTML = '<li class="fas fa-edit"></li>';
        btnD.innerHTML = '<li class="fas fa-trash"></li>';
        li.classList.add('li');
        btnE.classList.add('btnE');
        btnD.classList.add('btnD');
        li.innerHTML = P ;
        div.appendChild(btnE);
        div.appendChild(btnD);
        li.appendChild(div)
        newlist.appendChild(li)
        input.innerHTML = res[0]
    });
}
setfocus()

function removeItem(e) {
    const item = e.target;
    if (item.classList[0] === 'btnD') {
        const d = item.parentElement.parentElement;
        d.remove();
    }
   removeLocal(e)
}

function removeLocal(e) {
    const item = e.target;
    const list = item.parentElement.parentElement
    console.log(list);
       let todos;
       if (localStorage.getItem('todo') === null) {
               todos = [];
           } else {
           todos = JSON.parse(localStorage.getItem('todo'))
            }
    let result = todos.indexOf(list.innerText)
    console.log(result);
    todos.splice(result,1)
    localStorage.setItem('todo', JSON.stringify(todos));
    
}
