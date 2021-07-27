// Requisito 5
let divPai = document.getElementById("pixel-board");
       
for(let index2 = 0; index2 <= 4; index2 +=1){
   let newSpan = document.createElement("div");
   newSpan.classList.add("pixel-line");
   newSpan.style.display = "flex"
    divPai.appendChild(newSpan);
 }

let spanList = document.querySelectorAll(".pixel-line");

for(let index = 0; index <= 4; index +=1){
   for(let index3 = 0; index3 <= 4; index3 +=1){
    let newDiv = document.createElement("div");
    newDiv.classList.add("pixel");
    newDiv.style.height = '50px'
    newDiv.style.width = '50px'
    spanList[index].appendChild(newDiv);
   }
}  

// Requisito 7
let colorList = document.querySelectorAll(".color");
let pixelList = document.querySelectorAll(".pixel");
function addSelected(event){
   let getSelected = document.querySelector(".selected");
   getSelected.classList.remove("selected");
   event.target.classList.add("selected");
}

for(let index = 0; index < colorList.length; index +=1){
   colorList[index].addEventListener("click", addSelected);
}

// Requisito 12
let um = document.getElementById("um");
let x = Math.random()* 255;
let y = Math.random()* 255;
let z = Math.random()* 255;
um.style.backgroundColor = `rgb(${x}, ${z}, ${y})`;

let dois = document.getElementById("dois");
let x2 = Math.random()* 255;
let y2 = Math.random()* 255;
let z2 = Math.random()* 255;
dois.style.backgroundColor = `rgb(${x2}, ${y2}, ${z2})`;

let tres = document.getElementById("tres");
let x3 = Math.random()* 255;
let y3 = Math.random()* 255;
let z3 = Math.random()* 255;
tres.style.backgroundColor = `rgb(${x3}, ${y3}, ${z3})`;

let quatro = document.getElementById("quatro");
let x4 = Math.random()* 255;
let y4 = Math.random()* 255;
let z4 = Math.random()* 255;
quatro.style.backgroundColor = `rgb(${x4}, ${y4}, ${z4})`;

let getButtonNewColor = document.getElementById("new-color");
function newColor() {
   let um = document.getElementById("um");
   let x = Math.random()* 255;
   let y = Math.random()* 255;
   let z = Math.random()* 255;
   um.style.backgroundColor = `rgb(${x}, ${z}, ${y})`;

   let dois = document.getElementById("dois");
   let x2 = Math.random()* 255;
   let y2 = Math.random()* 255;
   let z2 = Math.random()* 255;
   dois.style.backgroundColor = `rgb(${x2}, ${y2}, ${z2})`;

   let tres = document.getElementById("tres");
   let x3 = Math.random()* 255;
   let y3 = Math.random()* 255;
   let z3 = Math.random()* 255;
   tres.style.backgroundColor = `rgb(${x3}, ${y3}, ${z3})`;

   let quatro = document.getElementById("quatro");
   let x4 = Math.random()* 255;
   let y4 = Math.random()* 255;
   let z4 = Math.random()* 255;
   quatro.style.backgroundColor = `rgb(${x4}, ${y4}, ${z4})`;
}
getButtonNewColor.addEventListener('click', newColor)


// Requisito 8
function addColor(event){
   let getSelected = document.querySelector(".selected");
   let bgcSelected = getSelected.style.backgroundColor;
   event.target.style.backgroundColor = bgcSelected;
}

for(let index = 0; index < pixelList.length; index +=1){
   pixelList[index].addEventListener("click", addColor);
}
 
// Requisito 10
let getButton2 = document.getElementById("generate-board");
let getInput = document.getElementById("board-size");

function generateBoard(){
   let spanList = document.querySelectorAll(".pixel-line");
   let divPai = document.getElementById("pixel-board");
   let boardSize = getInput.value;
   let pixelList = document.querySelectorAll(".pixel");
   let getPixelline = document.querySelectorAll(".pixel-line");
 
   divPai.innerHTML = ""

   if(boardSize !== "" ){
      if(boardSize < 5){
         boardSize = 5;
      } else if (boardSize > 50){
         boardSize = 50;
      }
      for(let index2 = 0; index2 < boardSize; index2 +=1){
         let newSpan = document.createElement(("div"));
         newSpan.classList.add("pixel-line");
         newSpan.style.display = 'flex';
         divPai.appendChild(newSpan);
         }

      let spanList = document.querySelectorAll(".pixel-line");

      for(let index = 0; index < spanList.length; index +=1){
         for(let index3 = 0; index3 < boardSize ; index3 +=1){
            let newDiv = document.createElement("div");
            let pixelSize = Math.trunc((250/boardSize));
            newDiv.classList.add("pixel");
            newDiv.style.height = `${pixelSize}px`;
            newDiv.style.width = `${pixelSize}px`;
            spanList[index].appendChild(newDiv);
         }
      }
      
         
      // Requisito 7
      let colorList = document.querySelectorAll(".color");
      let pixelList = document.querySelectorAll(".pixel");
      function addSelected(event){  
         let getSelected = document.querySelector(".selected");
         getSelected.classList.remove("selected");
         event.target.classList.add("selected");
      }

      for(let index = 0; index < colorList.length; index +=1){
         colorList[index].addEventListener("click", addSelected);
      }

      // Requisito 8
      function addColor(event){
         let getSelected = document.querySelector(".selected");
         let bgcSelected = getSelected.style.backgroundColor;
         event.target.style.backgroundColor = bgcSelected;
      }

      for(let index = 0; index < pixelList.length; index +=1){
         pixelList[index].addEventListener("click", addColor);
      }
         
   } else {
      alert("Board inválido!");
   }
}
   getButton2.addEventListener("click",generateBoard);

   // Requisito 9
   function emptyPixels(){
      let pixelList = document.querySelectorAll(".pixel");
      let divPai = document.getElementById("pixel-board");
      for(let index = 0; index < pixelList.length; index +=1){
         pixelList[index].style.backgroundColor = "white";
      }
   }
   let getButton = document.getElementById("clear-board");
   getButton.addEventListener("click", emptyPixels);

