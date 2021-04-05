var myInput = document.getElementById("price"),
    myResulte = document.getElementById("result"),
    myDolar = document.getElementById("dolar"),
    mySpan = document.getElementById("spa"),
    dubl = 10;


myInput.onkeyup = function () {
  "use strict";
  var amount = myInput.value,
      resulte = amount * dubl,
      fine = amount > 99999;
   if (amount == "") {
     mySpan.className = "link";
     myResulte.value = "";
     myDolar.value = "";
     mySpan.innerHTML = "you need to write same number for calc !";
   }else if (fine) {
     myInput.value = "";
     mySpan.innerHTML = "you can't write more";
     myDolar.value = "";
     mySpan.className = "link";
     myResulte.value = "";
   }else if (amount === "0") {
     mySpan.innerHTML = "this field not accept number 0";
     mySpan.className = "link";
     myResulte.value = "";
   }else {
     myResulte.value = resulte + " Dh";
     mySpan.className = "linktwo";
     myDolar.value = "$";
   }
}
/*
Array.isArray(variable)
*/

var property,
    i,
    x,
    yourStart = document.getElementById("yourStart"),
    yourEnd = document.getElementById("yourEnd"),
    button = document.getElementById("button"),
    myPast = document.getElementById("past"),
    mySubmit = document.getElementById("sub"),
    myTd1 = document.getElementById("td1"),
    myTd2 = document.getElementById("td2"),
    myTd3 = document.getElementById("td3"),
    myTd4 = document.getElementById("td4"),
    myForm = document.getElementById("form"),
    myTable = document.getElementById("table"),
    myprop1 = document.getElementById("name"),
    myprop2 = document.getElementById("age"),
    myprop3 = document.getElementById("country"),
    myprop4 = document.getElementById("jobe");
  
  
  

   mySubmit.onclick = function () {
     "use strict";
      myForm.style.display = "none";
      myTable.style.display = "block";
      myTd1.innerHTML = myprop1.value;
      myTd2.innerHTML = myprop2.value + " years old";
      myTd3.innerHTML = myprop3.value;
      myTd4.innerHTML = myprop4.value;
   }


function selectYears(Start,End) {
  "use strict";
  var select = document.getElementById("select"),
      years,
      option = document.getElementById("option");
    
    for (years = Start; years <= End; years++) {
      if (years < 10) {
        continue;
      }
      select.innerHTML += `<option value='${years}'>${years}</option>`;
    }
}

/*

*/