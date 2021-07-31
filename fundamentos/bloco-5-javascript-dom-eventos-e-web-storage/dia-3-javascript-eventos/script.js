const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
function createDaysOfTheWeek() {
  
 const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function insertDays(){
 let getDaysList = document.querySelector("#days");
  for(index=0;index<dezDaysList.length;index+=1){
    let day = dezDaysList[index];
    let dayItem = document.createElement("li");

    if(day === 24 || day === 31){
      dayItem.className = "day holiday";
      dayItem.innerHTML = day;
      getDaysList.appendChild(dayItem);
    } else if (day === 4 || day === 11 || day === 18){
      dayItem.className = "day friday";
      dayItem.innerHTML = day;
      getDaysList.appendChild(dayItem);
    } else if (day === 25){
      dayItem.className = "day holiday friday";
      dayItem.innerHTML = day;
      getDaysList.appendChild(dayItem);
    } else {
      dayItem.className = "day";
      dayItem.innerHTML = day;
      getDaysList.appendChild(dayItem);
    };
  };
};
insertDays();

function createButton(buttonName){
  let buttonContainer = document.querySelector(".buttons-container");
  let newButton = document.createElement("button");
  newButton.innerHTML = buttonName;
  newButton.id = "btn-holiday";
  buttonContainer.appendChild(newButton);
}
createButton("Feriado");

function changeHolidayColor(){
  let getHolidayButton = document.querySelector("#btn-holiday");
  let getHolidays = document.querySelectorAll(".holiday");
  let backgroundColor = "rgb(238,238,238)";
  let setNewColor = "green";
  

  getHolidayButton.addEventListener("click",function(){
    for(let index=0;index<getHolidays.length;index+=1){
      if(getHolidays[index].style.backgroundColor === setNewColor){
        getHolidays[index].style.backgroundColor = backgroundColor;
      } else {
        getHolidays[index].style.backgroundColor = setNewColor;
      }
    }
  })
};
changeHolidayColor(); 

function sextou(diaDaSemana){
  let getFriday = document.querySelector(".buttons-container");
  let fridayButton = document.createElement("button");
  fridayButton.innerHTML = "Sexta!";
  fridayButton.id = "btn-friday";
  getFriday.appendChild(fridayButton);
}
sextou("Sexta-feira");

function displaySexta(){
  let getFridayButton = document.querySelector("#btn-friday");
  let getFridayDays = document.querySelectorAll(".friday");
  let fridayNewText = "Sextou!";
  

  getFridayButton.addEventListener("click",function(){
    for(let index = 0; index < getFridayDays.length; index +=1){
      if(getFridayDays[index].innerHTML !== fridayNewText){
        getFridayDays[index].innerHTML = fridayNewText;
      } else {
        getFridayDays[index].innerHTML = dezFridays[index]; 
      }
    }
  });
}
let dezFridays = [4,11,18,25];
displaySexta(dezFridays);

function zoomMouseOver(){
  let getDay = document.querySelector('#days');
  getDay.addEventListener("mouseover", function(event){
    event.target.style.fontSize = "30px";
    event.target.style.fontWeight = "600";
  })
}
zoomMouseOver();

function zoomMouseOut(){
  let getDay = document.querySelector('#days');
  getDay.addEventListener("mouseout", function(event){
    event.target.style.fontSize = "20px";
    event.target.style.fontWeight = "200";
  })
}
zoomMouseOut();

function AddTask(tarefa){
  let getDiv = document.querySelector(".my-tasks");
  let newSpan = document.createElement("span");
  newSpan.innerHTML = tarefa;
  getDiv.appendChild(newSpan);
}
AddTask("Cozinhar");

function addColor(color){
  let getDiv = document.querySelector(".my-tasks");
  let newDiv = document.createElement("div");
  newDiv.className = "task";
  newDiv.style.backgroundColor = color;
  getDiv.appendChild(newDiv);
}
addColor("green");

function setTaskClass() {
  let selectedTask = document.getElementsByClassName('task selected');
  let myTasks = document.querySelector('.task');

  myTasks.addEventListener('click', function(event) {
    if (selectedTask.length === 0) {
      event.target.className = 'task selected';
    } else {
      event.target.className = 'task';
    }
  });
};

setTaskClass();

function setDayColor() {
  let selectedTask = document.getElementsByClassName('task selected');
  let days = document.querySelector('#days');
  let taskDiv = document.querySelector('.task');
  let taskColor = taskDiv.style.backgroundColor;
  
  days.addEventListener('click', function(event){
    let eventTargetColor = event.target.style.color;
    if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
      let color = selectedTask[0].style.backgroundColor;
      event.target.style.color = color;
    } else if (eventTargetColor === taskColor && selectedTask.length > 0) {
      event.target.style.color = 'rgb(119,119,119)';
    }
  });
};

setDayColor();





