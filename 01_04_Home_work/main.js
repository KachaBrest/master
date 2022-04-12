let startNumber = 0;
let endNumber = startNumber + 10;

let alert = document.getElementById("alert");
alert.style.display = "none";

let data1 = new Array;

let input = document.getElementById("num");

fetch("https://api.instantwebtools.net/v1/airlines")
.then((response) => response.json())
.then((data) => {
  data1 = data;
  loadFetch(startNumber, endNumber);
})
.catch(() => {
  alert.style.display = "block";
  console.log("ошибка");
})
.finally(() => {
  spiner();
  console.log(data1)
});

// количество строк на странице
input.onchange = () => {
  let numberPage = document.getElementsByClassName('page-item active')[0].children[0].innerText;
  
  startNumber = parseInt(input.value)*(parseInt(numberPage)-1)*10;
  endNumber = parseInt(startNumber) + 10 * (parseInt(input.value));
    
  loadFetch(startNumber, endNumber);
};


// фунция поиска по таблице
function tableSearch() {
  let phrase = document.getElementById('search-text');
  let table = document.getElementById('table1');
  let regPhrase = new RegExp(phrase.value, 'i');
  let flag = false;
  for (let i = 1; i < table.rows.length; i++) {
    flag = false;
    for (let j = table.rows[i].cells.length - 1; j >= 0; j--) {
      flag = regPhrase.test(table.rows[i].cells[j].innerHTML);
      if (flag) break;
    }
    if (flag) {
      table.rows[i].style.display = "";
    } else {
      table.rows[i].style.display = "none";
    }
    
  }
};

// функция спинера
function spiner(style = "none") {
  let spiner = document.getElementById("spiner");
  spiner.style.display = style;
};

const search = document.getElementById('search-text');
search.onkeyup = () => tableSearch();
search.style.marginTop = '10px'

// функция создания таблицы
function infoTablo(inform, i) {
  const tr = document.createElement("tr");
  tr.className = "newTr";
  let tbody = document.querySelector("tbody");
  tbody.append(tr);

  let th = document.createElement("th");
  th.textContent = i+1;
  tr.append(th);

  let tdId = document.createElement("td");
  tdId.textContent = inform[i].id;
  tr.append(tdId);

  let tdLogo = document.createElement("td");
  let img = document.createElement("img");
  img.src = inform[i].logo;
  img.style.width = "100px";
  tdLogo.append(img);
  tr.append(tdLogo);

  let tdName = document.createElement("td");
  tdName.textContent = inform[i].name;
  tr.append(tdName);

  let tdCountry = document.createElement("td");
  tdCountry.textContent = inform[i].country;
  tr.append(tdCountry);

  let tdEstablished = document.createElement("td");
  tdEstablished.textContent = inform[i].established;
  tr.append(tdEstablished);

  let tdHQ = document.createElement("td");
  tdHQ.textContent = inform[i].head_quaters;
  tr.append(tdHQ);

  let tdSlogan = document.createElement("td");
  tdSlogan.textContent = inform[i].slogan;
  tr.append(tdSlogan);

  let tdWebsite = document.createElement("td");
  tdWebsite.textContent = inform[i].website;
  tr.append(tdWebsite);
}

// функция обнуления таблицы 
function loadFetch(startNumber, endNumber) {
  document.getElementById("tbody").innerHTML = "";
  console.log("GET");
  for (let i = startNumber; i < endNumber; i++) {
  infoTablo(data1, i);
}};


// функция сортировки по столбцам
table1.onclick = function(e){
  if(e.target.tagName != 'TH') return
  let th = e.target
  sortTable(th.cellIndex, th.dataset.type, 'table1')
}

function sortTable(colNum, type, id) {
let elem = document.getElementById(id);
let tbody = elem.querySelector("tbody");
let rowsArray = Array.from(tbody.rows);
let compare;
switch (type) {
  case 'number':
    compare = function (rowA, rowB) {
      return rowA.cells[colNum].innerHTML - rowB.cells[colNum].innerHTML;
    };
    break;
  case 'string':
    compare = function (rowA, rowB) {
      return rowA.cells[colNum].innerHTML > rowB.cells[colNum].innerHTML ? 1 : -1;
    };
    break;
}
rowsArray.sort(compare)
tbody.append(...rowsArray)
};

// Нажатие кнопки след страница
const page1 = document.getElementById("page1");
page1.onclick = (event) => {
  document.querySelectorAll("a").forEach((a) => {
    a.closest('li').className = "page-item";
  });
  page1.closest('li').className = "page-item active";
  event.preventDefault();
  endNumber = 10 * input.value;
  
  loadFetch(0, endNumber);
};

const page2 = document.getElementById("page2");
page2.onclick = (event) => {
  document.querySelectorAll("a").forEach((a) => {
    a.closest('li').className = "page-item";
  });
  page2.closest('li').className = "page-item active";
  event.preventDefault();
  startNumber = 10 * input.value*1;
  endNumber = startNumber + 10 * input.value;
  
  loadFetch(startNumber, endNumber);
};

const page3 = document.getElementById("page3");
page3.onclick = (event) => {
  document.querySelectorAll("a").forEach((a) => {
    a.closest('li').className = "page-item";
  });
  page3.closest('li').className = "page-item active";
  event.preventDefault();
  startNumber = 10 * input.value * 2;
  endNumber = startNumber + 10 * input.value;
  
  loadFetch(startNumber, endNumber);
};

const pageNext = document.getElementById("pageNext");
pageNext.onclick = (event) => {
  document.querySelectorAll("a").forEach((a) => {
    a.className = "page-link";
  });
  pageNext.className = "page-link active";
  event.preventDefault();

  //console.log(input.value);
  startNumber = endNumber;
  endNumber = parseInt(startNumber) + 10 * (parseInt(input.value));
  
  loadFetch(startNumber, endNumber);
};