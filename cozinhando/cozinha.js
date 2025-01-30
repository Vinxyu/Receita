//Variaveis de id

let remove = document.getElementById("remover");
let ingredi = document.getElementById("ingredientes");
let prep = document.getElementById("modoprep");
let mode = document.getElementById("inputpreparo");
let butao = document.getElementById("admp");
//VARIAVEIS DE SELEÇÃO

let container = document.querySelector("#container").innerHTML;
let list ;
let adic = document.querySelector("h1");
let adic2 = document.querySelector("h2");
let adic3 = document.querySelector("h3");
let adic4 = document.querySelector("h4");
let manu = document.querySelector("#modode");

//FUNÇÃO ADICIONAR

function add()
{
    let nome = prompt("Coloque o nome da sua receita aqui");
    if(nome !== null && nome !== "")
{
adic.innerHTML = nome;
console.log(nome);
remove.removeAttribute("disabled");
ingredi.removeAttribute("disabled");
prep.removeAttribute("disabled");
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

//FUNÇÃO PARA INGREDIENTES

function ing()
{
    adic3.innerHTML = "Lista de Ingredientes";
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

//FUNÇÃO DE MODO DE PREPARO

function mod()
{
    adic2.innerHTML = "Modo de Preparo";
    mode.removeAttribute("disabled");
    prep.setAttribute("disabled", "");
    butao.removeAttribute("disabled");
}

//ADICIONAR TEXTO

function adm()
{
    manu.innerHTML = mode.value
    console.log(mode.value)
    mode.setAttribute("disabled", "");
    butao.setAttribute("disabled", "");
}

//FUNÇÃO REMOVER
function rem()
{   
    manu.innerHTML = "";
    container.innerHTML = "";
    adic.innerHTML = "";
    adic2.innerHTML = "";
    adic3.innerHTML = "";
    prep.setAttribute("disabled", "");
    remove.setAttribute("disabled", "");
    ingredi.setAttribute("disabled", "");
    mode.setAttribute("disabled", "");
    butao.setAttribute("disabled", "");
    console.log(remove);
}

