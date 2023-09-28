const inputField = document.getElementById("input-txt");
const listContainer = document.getElementById("list-container");

function addTask(){

    if(inputField.value === ''){
        alert("You must write something!")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputField.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }

    inputField.value = "";
    saveData();
}

// to remove or delete tasks

listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }

    else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);


// save tasks data

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

//getting data after closing browser

function showTasks(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showTasks();

//after pressing enter from keyboard

var input = document.getElementById("input-txt");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("add-btn").click();
  }
});
