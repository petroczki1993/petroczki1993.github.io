/*
<tr>
<td>1</td>
<td>Kiss</td>
<td>János</td>
<td>55</td>
<!-- div class="btn-group" gombokat összeolvasztja -->
<td>
<!-- .btn-group + enter -->
<div class="btn-group">
    <!-- button.btn-info btn + enter -->
    <button class="btn-info btn">
    <!-- ikon hozzáadása -->
    <!-- <i class="fa-solid fa-user"></i> -->
    Módosítás
    </button>
    <button class="btn-danger btn">
    Törlés
    </button>
    </button>
</div>
</td>
</tr>
*/

//dokumentum (9.3.5/6)
let users = [
    {surname: "Petróczki-Varga", firstname: "Flóra", age: 18},
    {surname: "Petróczki", firstname: "Tamás", age: 22},
    {surname: "Petróczki", firstname: "Mónika", age: 24},
    {surname: "Petróczki", firstname: "Zoltán", age: 21},
    {surname: "Varga", firstname: "Aliz", age: 25},
    {surname: "Szatmári", firstname: "Norbert", age: 31},
    {surname: "Fehér", firstname: "Rebeka", age: 51}
];

let tableBody = document.querySelector("#userTable tbody");
let createTD = (html,parent) => {
    let td = document.createElement("td");
    td.innerHTML = html;
    parent.appendChild(td);
};

let createButtonGroup = parent => {
    /*
    <div class="btn-group">
        <button class="btn-info btn">
            <i class="fas fa-sync-alt"></i>
            Módosítás
        </button>
        <button class="btn-danger btn">
            Törlés
        </button>
        </button>
    </div>
    */
   let group = document.createElement("div");
   group.className = "btn-group";
   
   let btnInfo = document.createElement("button");
   btnInfo.className = "btn-info btn";
   btnInfo.innerHTML = '<i class="fas fa-sync-alt"></i>';  

    let btnDanger = document.createElement("button");
    btnDanger.className = "btn-danger btn";
    btnDanger.innerHTML = '<i class="fas fa-trash-alt"></i>';  

    group.appendChild(btnInfo);
    group.appendChild(btnDanger);

    let td = document.createElement("td");
    td.appendChild(group);
    parent.appendChild(td);
};


for(let k in users) {
 let tr = document.createElement("tr");
 createTD(parseInt(k)+1,tr);
 for(let value of Object.values(users[k])) {
     createTD(value,tr);
 }
createButtonGroup(tr);
 tableBody.appendChild(tr);
};