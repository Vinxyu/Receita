let adic = document.querySelector("h1");
let remove = document.getElementById("remover");
let ingredi = document.getElementById("ingredientes");
let container = document.querySelector("#container");
let list ;
function add()
{
    let nome = prompt("Coloque o nome da sua receita aqui");
    if(nome !== null && nome !== "")
{
adic.innerHTML = nome;
console.log(nome);
remove.removeAttribute("disabled");
ingredi.removeAttribute("disabled");
container = document.querySelector("#container");
}
else if(nome == "")
{
    alert("O usuário não preencheu o campo")
}
else
{
    alert("O usuario clicou em cancelar")
}
}

function ing()
{
    let i = prompt("Coloque um ingrediente aqui");
if(i !== null && i !== ""){
    let list = document.createElement("li");
    container.append(list);
    list.textContent = i;
    console.log(i);}
else if(i == "")
{
    alert("O usuário não preencheu o campo")
}
else
{
    alert("O usuario clicou em cancelar")
}
}

function rem()
{   
    container.remove()
    adic.innerHTML = "";
    remove.setAttribute("disabled", "");
    ingredi.setAttribute("disabled", "");
    console.log(remove);
}

