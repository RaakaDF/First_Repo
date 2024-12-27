let data = [];

init();

async function init() {
  // Fetch once and save all to global variable
  let res = await fetch(
    "https://rawcdn.githack.com/akabab/superhero-api/0.2.0/api/all.json"
  );
  let jd = await res.json();

  // Rewite json as array for further convinience 
  for (k of jd) {
   /* let race = k.appearance.race;
    if (race == null) race = "";*/

    let hero = [
      k.images.xs,
      k.name,
      k.biography.fullName,
      k.powerstats.intelligence,
      k.powerstats.strength,
      k.powerstats.speed,
      k.powerstats.durability,
      k.powerstats.power,
      k.powerstats.combat,
      k.appearance.race,
      k.appearance.gender,
      k.appearance.height[1],
      k.appearance.weight[1],
      k.biography.placeOfBirth,
      k.biography.alignment,
    ];
    data.push(hero);
  }

  // Affichage des elements
  render(data);
}

function render(heroes, page= 1) {
  let pageCapacity = document.getElementsByName("capacity")[0].value;
  let searchText = document.getElementsByTagName("input")[0].value;
  let fieldKey = document.getElementsByName("column")[0].value;

  // clear previously added rows
  document.getElementsByTagName("tbody")[0].innerHTML = "";

  // Search
  let searchedData = [];
  for (let h of heroes) {
    if (h[fieldKey].toUpperCase().includes(searchText.toUpperCase()))
      searchedData.push(h);
  }

  // Pagination things
  let start = pageCapacity * page - pageCapacity;
  let end = pageCapacity * page;
  if (searchedData.length < end) end = searchedData.length;

  // How much data found
  document.getElementsByTagName("span")[0].innerHTML =
    "Found: " + searchedData.length;

  // Pagination buttons render
  let pages = Math.ceil(searchedData.length / pageCapacity);
  let cont = document.getElementById("pagination");
  cont.innerHTML = "";
  for (let x = 1; x <= pages; x++) {
    let b = document.createElement("button");
    b.value = x;
    b.innerHTML = x;
    if (x == page) {
      b.disabled = true;
    }

    b.addEventListener("click", function () {
      render(data, this.value);
    });

    if (pages != 1) {
      cont.appendChild(b);
    }
  }

  // Paginate found data
  for (let i = start; i < end; i++) {
    let k = searchedData[i];
    createRow(k, i);
  }
}


function createRow(arr, index) {
    let row = document.createElement("tr");
    let first = true;
    for (let d of arr) {
      let cell = document.createElement("td");
      let node;
      if (first) {
        node = document.createElement("img");
        node.src = d;
        first = false;
      } else {
        if (d == null || d == undefined) {
          d = "";
        }
        node = document.createTextNode(d);
      }
      cell.appendChild(node);
      row.appendChild(cell);
    }
    
    // Ajouter un gestionnaire d'événements de clic à la ligne
    row.addEventListener("click", function() {
      showDetails(index);
    });
  
    document.getElementsByTagName("tbody")[0].appendChild(row);
}

// Set event listeners for every table head
for (let h of document.getElementsByTagName("th")) {
  h.addEventListener("click", function () {
    // Set of change attribute of table head if clicked
    let sorting;
    if (this.getAttribute("asc") == "false") {
      this.setAttribute("asc", true);
      sorting = true;
    } else {
      this.setAttribute("asc", false);
      sorting = false;
    }

    // Get clicked table head index
    let i = this.cellIndex;

    // Get type of data
    let tip = this.getAttribute("tip");

    switch (tip) {
      case "str":
        sortStrings(i, data, sorting);
        break;
      case "no":
        break;
      case "numstr":
        sortNumStr(i, data, sorting);
        break;
      default:
        sortNum(i, data, sorting);
        break;
    }
  });
}

function sortStrings(key, table, flow) {
  table.sort(function (a, b) {
    // flow regulates 'asc' or 'dsc' order
    if (flow) {
      let temp = b;
      b = a;
      a = temp;
    }

    let s1 = a[key].toUpperCase();
    let s2 = b[key].toUpperCase();
    if (s1 < s2) {
      return -1;
    } else {
      return 1;
    }
    return 0;
  });
  render(table, 1);
}

function sortNumStr(key, table, flow) {
  table.sort(function (a, b) {
    // flow regulates 'asc' or 'dsc' order
    if (flow) {
      let temp = b;
      b = a;
      a = temp;
    }

    let n1 = a[key];
    let n2 = b[key];

    // In case of undefined make zero value
    if (n1 == undefined) n1 = "0 xx";
    if (n2 == undefined) n2 = "0 xx";

    // Get only digits
    let num1 = n1.match(/\d+/)[0];
    let num2 = n2.match(/\d+/)[0];

    // For right comparison take into account meters and tons
    if (n1.includes("meters")) num1 *= 100;
    if (n2.includes("meters")) num2 *= 100;
    if (n1.includes("tons")) num1 *= 1000;
    if (n2.includes("tons")) num2 *= 1000;
    return num1 - num2;
  });
  render(table, 1);
}

function sortNum(key, table, flow) {
  table.sort(function (a, b) {
    // flow regulates 'asc' or 'dsc' order
    if (flow) {
      let temp = b;
      b = a;
      a = temp;
    }

    return a[key] - b[key];
  });
  render(table, 1);
}

document
  .getElementsByTagName("input")[0]
  .addEventListener("keyup", function () {
    searchText = this.value;
    render(data);
  });

for (let sel of document.getElementsByTagName("select")) {
  sel.addEventListener("click", function () {
    render(data);
  });
}

function showDetails(index) {
    let hero = data[index];
  
    // Créer la boîte de dialogue modale
    let modal = document.createElement("div");
    modal.classList.add("modal");
  
    // Contenu de la boîte de dialogue modale
    let content = document.createElement("div");
    content.classList.add("modal-content");
  
    // Image du héros
    let image = document.createElement("img");
    image.src = hero[0];
    content.appendChild(image);
  
    // Détails du héros
    let details = document.createElement("div");
    details.classList.add("hero-details");
  
    let name = document.createElement("h2");
    name.textContent = "Name: " + hero[1];
    details.appendChild(name);
  
    let fullName = document.createElement("p");
    fullName.textContent = "Full Name: " + hero[2];
    details.appendChild(fullName);
  
    // Ajoutez ici les autres détails spécifiques du héros que vous souhaitez afficher
  
    content.appendChild(details);
    modal.appendChild(content);
  
    // Bouton de fermeture de la boîte de dialogue modale
    let closeButton = document.createElement("span");
    closeButton.classList.add("close");
    closeButton.innerHTML = "&times;";
    closeButton.addEventListener("click", function () {
      modal.style.display = "none";
    });
    modal.appendChild(closeButton);
  
    // Afficher la boîte de dialogue modale
    document.body.appendChild(modal);
    modal.style.display = "block";
  }
  